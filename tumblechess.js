Matter.use('matter-wrap');

let characterTouchingASurface = false
let stat = false;
let grav = .35;

let board;
let ground;
let ceiling;
let lwall;
let rwall;

let blackrook1;
let blackknight1;
let blackbishop1;
let blackqueen;
let blackking;
let blackbishop2;
let blackknight2;
let blackrook2;
let blackpawn1;
let blackpawn2;
let blackpawn3;
let blackpawn4;
let blackpawn5;
let blackpawn6;
let blackpawn7;
let blackpawn8;

let whiterook1;
let whiteknight1;
let whitebishop1;
let whitequeen;
let whiteking;
let whitebishop2;
let whiteknight2;
let whiterook2;
let whitepawn1;
let whitepawn2;
let whitepawn3;
let whitepawn4;
let whitepawn5;
let whitepawn6;
let whitekpawn7;
let whitepawn8;

let blackrookSprite;
let blackknightSprite;
let blackbishopSprite;
let blackqueenSprite;
let blackkingSprite;
let blackpawnSprite;

let whiterookSprite;
let whiteknightSprite;
let whitebishopSprite;
let whitequeenSprite;
let whitekingSprite;
let whitepawnSprite;


const namebutton = document.getElementById("nname");
const tvbutton = document.getElementById("ttv");

const sketchHolder = document.getElementById("sketch-holder");


namebutton.onclick = () => homepage();
tvbutton.onclick = () => tvpage();

function homepage () {
  document.getElementById("sketch-holder").style.display = 'block';
  document.getElementById("main").classList.remove("showtv");

}
function tvpage () {
  document.getElementById("sketch-holder").style.display = 'none';
  document.getElementById("main").classList.add("showtv");
}





function setup() {
  const canvas = createCanvas(500, 500);
  canvas.parent('sketch-holder');

  // create an engine
  const engine = Matter.Engine.create();
  const world = engine.world;

  // config wrap area
  const wrap = {
    min: { x: 0, y: 0 },
    max: { x: width, y: height }
  };

  board = loadImage('./pieces/board.png');

  blackrookSprite = loadImage('./pieces/blackrook.png');
  blackknightSprite = loadImage('./pieces/blackknight.png');
  blackbishopSprite = loadImage('./pieces/blackbishop.png');
  blackqueenSprite = loadImage('./pieces/blackqueen.png');
  blackkingSprite = loadImage('./pieces/blackking.png');
  blackpawnSprite = loadImage('./pieces/blackpawn.png');


  whiterookSprite = loadImage('./pieces/whiterook.png');
  whiteknightSprite = loadImage('./pieces/whiteknight.png');
  whitebishopSprite = loadImage('./pieces/whitebishop.png');
  whitequeenSprite = loadImage('./pieces/whitequeen.png');
  whitekingSprite = loadImage('./pieces/whiteking.png');
  whitepawnSprite = loadImage('./pieces/whitepawn.png');
  
  // create room

  ground = new Block(world, { x: 400, y: height+2, w: 810, h: 2, color: 'black' }, {isStatic: true });
  ceiling = new Block(world, { x: 400, y: -25, w: 810, h: 25, color: 'black' }, {isStatic: true });
  lwall = new Block(world, { x: -25, y: 400, w: 25, h: 810, color: 'black' }, {isStatic: true });
  rwall = new Block(world, { x: width+2, y: 400, w: 2, h: 810, color: 'black' }, {isStatic: true });


  // create pieces

  blackrook1 = new Ball(world,
    { x: 29, y: 30, r: 23, image: blackrookSprite },
    { isStatic: stat, restitution: .8, plugin: { wrap: wrap }, label: 'character'}
  );
  blackknight1 = new Ball(world,
    { x: 92, y: 30, r: 23, image: blackknightSprite },
    { isStatic: stat, restitution: 0, plugin: { wrap: wrap }, label: 'character'}
  );
  blackbishop1 = new Ball(world,
    { x: 156.5, y: 30, r: 23, image: blackbishopSprite },
    { isStatic: stat, restitution: 0, plugin: { wrap: wrap }, label: 'character'}
  );
  blackqueen = new Ball(world,
    { x: 219.5, y: 30, r: 23, image: blackqueenSprite },
    { isStatic: stat, restitution: 0, plugin: { wrap: wrap }, label: 'character'}
  );
  blackking = new Ball(world,
    { x: 281, y: 30, r: 23, image: blackkingSprite },
    { isStatic: stat, restitution: 0, plugin: { wrap: wrap }, label: 'character'}
  );
  blackbishop2 = new Ball(world,
    { x: 344, y: 30, r: 23, image: blackbishopSprite },
    { isStatic: stat, restitution: 0, plugin: { wrap: wrap }, label: 'character'}
  );
  blackknight2 = new Ball(world,
    { x: 405, y: 30, r: 23, image: blackknightSprite },
    { isStatic: stat, restitution: 0, plugin: { wrap: wrap }, label: 'character'}
  );
  blackrook2 = new Ball(world,
    { x: 468, y: 30, r: 23, image: blackrookSprite },
    { isStatic: stat, restitution: 0, plugin: { wrap: wrap }, label: 'character'}
  );

  blackpawn1 = new Ball(world,
    { x: 29.1, y: 95, r: 23, image: blackpawnSprite },
    { isStatic: stat, restitution: 0.8, plugin: { wrap: wrap }, label: 'character'}
  );
  blackpawn2 = new Ball(world,
    { x: 92, y: 95, r: 23, image: blackpawnSprite },
    { isStatic: stat, restitution: 0, plugin: { wrap: wrap }, label: 'character'}
  );
  blackpawn3 = new Ball(world,
    { x: 156.6, y: 95, r: 23, image: blackpawnSprite },
    { isStatic: stat, restitution: 0, plugin: { wrap: wrap }, label: 'character'}
  );
  blackpawn4 = new Ball(world,
    { x: 219.5, y: 95, r: 23, image: blackpawnSprite },
    { isStatic: stat, restitution: 0, plugin: { wrap: wrap }, label: 'character'}
  );
  blackpawn5 = new Ball(world,
    { x: 281, y: 95, r: 23, image: blackpawnSprite },
    { isStatic: stat, restitution: 0, plugin: { wrap: wrap }, label: 'character'}
  );
  blackpawn6 = new Ball(world,
    { x: 344, y: 95, r: 23, image: blackpawnSprite },
    { isStatic: stat, restitution: 0, plugin: { wrap: wrap }, label: 'character'}
  );
  blackpawn7 = new Ball(world,
    { x: 405, y: 95, r: 23, image: blackpawnSprite },
    { isStatic: stat, restitution: 0, plugin: { wrap: wrap }, label: 'character'}
  );
  blackpawn8 = new Ball(world,
    { x: 468, y: 95, r: 23, image: blackpawnSprite },
    { isStatic: stat, restitution: 0, plugin: { wrap: wrap }, label: 'character'}
  );
  



  whiterook1 = new Ball(world,
    { x: 29, y: 406, r: 23, image: whiterookSprite },
    { isStatic: stat, restitution: .8, plugin: { wrap: wrap }, label: 'character'}
  );
  whiteknight1 = new Ball(world,
    { x: 92, y: 406, r: 23, image: whiteknightSprite },
    { isStatic: stat, restitution: 0, plugin: { wrap: wrap }, label: 'character'}
  );
  whitebishop1 = new Ball(world,
    { x: 156.5, y: 406, r: 23, image: whitebishopSprite },
    { isStatic: stat, restitution: 0, plugin: { wrap: wrap }, label: 'character'}
  );
  whitequeen = new Ball(world,
    { x: 219.5, y: 406, r: 23, image: whitequeenSprite },
    { isStatic: stat, restitution: 0, plugin: { wrap: wrap }, label: 'character'}
  );
  whiteking = new Ball(world,
    { x: 281, y: 406, r: 23, image: whitekingSprite },
    { isStatic: stat, restitution: 0, plugin: { wrap: wrap }, label: 'character'}
  );
  whitebishop2 = new Ball(world,
    { x: 344, y: 406, r: 23, image: whitebishopSprite },
    { isStatic: stat, restitution: 0, plugin: { wrap: wrap }, label: 'character'}
  );
  whiteknight2 = new Ball(world,
    { x: 405, y: 406, r: 23, image: whiteknightSprite },
    { isStatic: stat, restitution: 0, plugin: { wrap: wrap }, label: 'character'}
  );
  whiterook2 = new Ball(world,
    { x: 468, y: 406, r: 23, image: whiterookSprite },
    { isStatic: stat, restitution: 0, plugin: { wrap: wrap }, label: 'character'}
  );

  whitepawn1 = new Ball(world,
    { x: 29, y: 469, r: 23, image: whitepawnSprite },
    { isStatic: stat, restitution: 0, plugin: { wrap: wrap }, label: 'character'}
  );
  whitepawn2 = new Ball(world,
    { x: 92, y: 469, r: 23, image: whitepawnSprite },
    { isStatic: stat, restitution: 0, plugin: { wrap: wrap }, label: 'character'}
  );
  whitepawn3 = new Ball(world,
    { x: 156.5, y: 469, r: 23, image: whitepawnSprite },
    { isStatic: stat, restitution: 0, plugin: { wrap: wrap }, label: 'character'}
  );
  whitepawn4 = new Ball(world,
    { x: 219.4, y: 469, r: 23, image: whitepawnSprite },
    { isStatic: stat, restitution: 0, plugin: { wrap: wrap }, label: 'character'}
  );
  whitepawn5 = new Ball(world,
    { x: 281, y: 469, r: 23, image: whitepawnSprite },
    { isStatic: stat, restitution: 0, plugin: { wrap: wrap }, label: 'character'}
  );
  whitepawn6 = new Ball(world,
    { x: 344, y: 469, r: 23, image: whitepawnSprite },
    { isStatic: stat, restitution: 0, plugin: { wrap: wrap }, label: 'character'}
  );
  whitepawn7 = new Ball(world,
    { x: 405, y: 469, r: 23, image: whitepawnSprite },
    { isStatic: stat, restitution: 0, plugin: { wrap: wrap }, label: 'character'}
  );
  whitepawn8 = new Ball(world,
    { x: 468.1, y: 469, r: 23, image: whitepawnSprite },
    { isStatic: stat, restitution: 0, plugin: { wrap: wrap }, label: 'character'}
  );
 

  // setup mouse
  mouse = new Mouse(engine, canvas);

  // gravity
  engine.world.gravity.y = grav;

  // run the engine
  setTimeout(() => { Matter.Runner.run(engine); }, 1000);
 
}

function draw() {
  background(board);

  mouse.draw();

  ground.draw();
  ceiling.draw();
  lwall.draw();
  rwall.draw();

  blackrook1.draw();
  blackknight1.draw();
  blackbishop1.draw();
  blackqueen.draw();
  blackking.draw();
  blackbishop2.draw();
  blackknight2.draw();
  blackrook2.draw();
  blackpawn1.draw();
  blackpawn2.draw();
  blackpawn3.draw();
  blackpawn4.draw();
  blackpawn5.draw();
  blackpawn6.draw();
  blackpawn7.draw();
  blackpawn8.draw();


  whiterook1.draw();
  whiteknight1.draw();
  whitebishop1.draw();
  whitequeen.draw();
  whiteking.draw();
  whitebishop2.draw();
  whiteknight2.draw();
  whiterook2.draw();

  whitepawn1.draw();
  whitepawn2.draw();
  whitepawn3.draw();
  whitepawn4.draw();
  whitepawn5.draw();
  whitepawn6.draw();
  whitepawn7.draw();
  whitepawn8.draw();

}