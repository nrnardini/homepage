const fric = 0.6;
const rest = 0.7;

const {
  Engine,
  Runner,
  World,
  Bodies,
  Body,
  Common,
  Composite,
  Mouse,
  MouseConstraint,
  Vertices
} = Matter;

const pblob = 'M 805 912 L 747 970 L 756 1034 L 959 1038 L 954 972 L 916 913 L 915 796 L 965 711 L 944 638 L 859 607 L 794 638 L 787 719 L 838 768 L 805 912 Z'
const blob = Vertices.fromPath(pblob);

// from http://paulbourke.net/geometry/polygonmesh/
function computeArea(vertices) {
  let area = 0;
  for (let i = 0; i < vertices.length - 1; i++) {
    let v = vertices[i];
    let vn = vertices[i + 1];
    area += (v.x * vn.y - vn.x * v.y) / 2;
  }

  return area;
}



function computeCenter(vertices) {
  let area = computeArea(vertices);
  let cx = 0,
    cy = 0;
  for (let i = 0; i < vertices.length - 1; i++) {
    let v = vertices[i];
    let vn = vertices[i + 1];
    cx += (v.x + vn.x) * (v.x * vn.y - vn.x * v.y) / (6 * area);
    cy += (v.y + vn.y) * (v.x * vn.y - vn.x * v.y) / (6 * area);
  }

  return {
    x: cx,
    y: cy
  };
}

const center = computeCenter(blob);

let engine;
let world;
let blobs = [];

let ground;
let ceiling;
let wallLeft;
let wallRight;

let mConstraint;

//blob creation function
function Blob(x, y) {
  let options = {
    friction: fric,
    restitution: rest
  }

  this.body = Bodies.fromVertices(x, y, blob, options);
  World.add(world, this.body);
  
  // Scales the body around the center
  Body.scale(this.body, 0.5, 0.5);

  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    scale(0.5, 0.5);
    translate(-center.x, -center.y);
    strokeWeight(0);
    fill('#546B2E')
    beginShape();
    for (const {
        x,
        y
      } of blob) {
      curveVertex(x, y);
    }
    endShape(CLOSE);
    pop();

    // Alternately, when drawing your blobs you could use 
    // the bodies vertices, but it looks like these are
    // converted into a convex polygon.
    push();
    stroke('red');
    strokeWeight(1);
    noFill();
    beginShape();
    for (const {
        x,
        y
      } of this.body.vertices) {
      curveVertex(x, y);
    }
    endShape(CLOSE);
    pop();
  }
}

//start sim after x time
function setup() {
  const cnv = createCanvas(windowWidth, Math.max(windowHeight, 300));

  engine = Engine.create();
  world = engine.world;

  const runner = Runner.create();
  Runner.run(runner, engine);
  //add ground
  ground = Bodies.rectangle(width / 2, height, width, 50, {
    isStatic: true
  });
  World.add(world, ground);
  //add ceiling
  ceiling = Bodies.rectangle(width / 2, 0, width, 50, {
    isStatic: true
  });
  World.add(world, ceiling);
  //add left wall
  wallLeft = Bodies.rectangle(0, height / 2, 50, height, {
    isStatic: true
  });
  World.add(world, wallLeft);
  //add right wall
  wallRight = Bodies.rectangle(width, height / 2, 50, height, {
    isStatic: true
  });
  World.add(world, wallRight);
  //create x bodies
  for (let i = 0; i < 4; i++) {
    blobs.push(new Blob(random(50, width - 100), random(50, height - 100)));
  }
}

function draw() {
  background('#EEF2FD');
  //show all bodies
  for (var i = 0; i < blobs.length; i++) {
    blobs[i].show();
  }
}

function mouseClicked() {
  blobs.push(new Blob(mouseX, mouseY));
}