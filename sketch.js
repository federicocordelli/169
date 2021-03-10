var imagesOk = [];
var j = 1;
var imagesVert = [];

let slider;

let myFont;

function preload(){

  for (var i=1; i<21; i++) {
    imagesOk[i] = loadImage("addons/"+i+".jpg");
  }

  for (var k=1; k<21; k++) {
    imagesVert[k] = loadImage("addons/vertical/f"+k+".jpg");
  }

  myFont = loadFont('addons/SuisseIntl-Medium.otf');
}
/*
let imagesTotal = [];

for (var i = 0; i < 4; i++) {
  imagesTotal[i] = loadImage('addons/'+i+'.jpg');
}
*/
/*
imagesTotal[0] = loadImage('addons/1.jpg');
imagesTotal[1] = loadImage('addons/2.jpg');
imagesTotal[2] = loadImage('addons/3.jpg');
imagesTotal[3] = loadImage('addons/4.jpg');
*/
/* da qui in poi
  img = loadImage('addons/1.jpg');
  img1 = loadImage('addons/2.jpg');
  img2 = loadImage('addons/3.jpg');
  img3 = loadImage('addons/4.jpg');
  // put preload code here

}

var images = ["img","img1", "img2", "img3"];
fino a qui */

function setup() {
  createCanvas(windowWidth,windowHeight);
  background("#ffffff");

  frameRate(15);


//BUTTON DAJETE
  button = createButton('//RESET');
  button.position(width/2, height-80);
  button.mousePressed(resizety);
  button.addClass('button');

  button = createButton('//SCREEN');
  button.position(width/2-7, 82);
  button.mousePressed(savability);
  button.addClass('button1');


  strokeWeight(0);
/*
  rectMode(CENTER);
  fill('red');
  rect(windowWidth/2,windowHeight/2,400,600);
*/
  fill('red');
  textFont(myFont);
  textSize(22);
  //textStyle(BOLD);
  textLeading(25);
  text("\n \n \n.20 photos in 16:9 [resizables] \n.20 photos in 2:3 \n.an interactive way to visualize them \n.my contacts \n \n.if you screen and use the pick \nplease tag me (@fristy_ on instagram) \n \n*JUST CLICK* ",windowWidth/2 - 193,windowHeight/2 - 100);
  textSize(26);
  text("'INSTRUCTIONS FOR USE'",windowWidth/2 - 193,windowHeight/2 - 100);
  textSize(15);
  text("*Things you can find here & rules:*",windowWidth/2 - 193,windowHeight/2 - 80);

    slider = createSlider(128, 512, 256);
    slider.position(width-180, 143);
    slider.style('width', '150px');
    slider.addClass('slider');





  fill('black');
  strokeWeight(0);
  textFont(myFont);
  textSize(15);
  //textStyle(NORMAL);
  //text("Spacebar/resize to reset",10,height-28);
  text("Click to skip",10,height-46);
  text("Drag to recreate",10,height-64);
  text("My twenty best shots in 16:9 & 2:3",10,height-82);
  // text("Photography mini-game",10,height-125);
  text("More info on: ",10,height-10);
  // text("behance", 125, height-10);
  text("Photo n°: ",width-84,height-82);
  text("This one-page site is designed by me",width-280,height-10);
  // text(j,10,height-160);


  link = createA("https://www.behance.net/Federico_cordelli?isa0=1",
                      "behance", "_blank");

   // Posotion the anchor objects
   link.position(108, height-24);
   link.addClass('a');

/*
//new title
   textSize(100);
   textStyle(BOLD);
   text("FEDERICO CORDELLI",10,100);
   text("PHOTO APPETIZER",10,200);
   text("THE BEST OF/16:9",10,300);
   strokeWeight(8);
   line(0,320,windowWidth,320);
*/
//new new title
push();
//textSize(30);
textSize(48);
noFill();
stroke('black');
strokeWeight(0.7);
//textStyle(BOLD);
//textLeading(30);
textLeading(60);
//text("FEDERICO CORDELLI \nPHOTO APPETIZER \nTHE BEST OF/16:9 & 2:3",10,30);
text("\nNOT A SLIDESHOW",70,60);
fill('black');
text("FEDERICO CORDELLI",70,73);
strokeWeight(1);
line(0,130,windowWidth,130);
line(0,height-100,windowWidth,height-100);
pop();

push();
textSize(10);
text("Class 1998", 10, 15);
textAlign(CENTER);
text("Horror Vacui", width/2, 15);
textAlign(RIGHT);
text("From Italy", width-10, 15);
pop();


//graduated

push();
textSize(15);
//textStyle(BOLD);
textLeading(15);
fill('black');
text("Communication Design",10,150);
text("16:9 photos resizer:",width-330,150);
text("Graduated from Politecnico di Milano",10,height-108);
text("To contact me: cordelli.federico@gmail.com",width-330,height-108);
pop();

  // put setup code here
}

function draw() {

 //let valslider = slider.value();
  // clear();
/*
  textSize(100);
  textStyle(BOLD);
  text("FEDERICO CORDELLI",10,100);
  text("PHOTO PORTFOLIO",10,200);
  text("THE BEST OF/16:9",10,300);
  strokeWeight(8);
  line(0,320,windowWidth,320);
*/
/*
  imageMode(CENTER);
  image(imagesOk[j], mouseX, mouseY, 256, 148);
*/
  /*
  strokeWeight(0);
  textFont("Barlow");
  textSize(40);
  textStyle(NORMAL);
  text("Spacebar to reset",10,height-10);
  */




  // put drawing code here
}


/*
function mouseDragged() {
  image(imagesOk[3], mouseX, mouseY,256,148);

  for (var i=0; i<4; i++) {
    image(imagesOk[i], mouseX, mouseY, 256, 148);
  }


  imageMode(CENTER);
  image(img2,mouseX,mouseY,256,148);

}
*/
// MOUSE CLICKED
/*
function mouseClicked() {
  if(j===20) {
    j=1;
  } else if(j<20) {
  j++;
    }
    textSize(20);
    textStyle(NORMAL);
    text(j-1,(width-10)-20*j,height-35);

//try
    textSize(100);
    textStyle(BOLD);
    text("FEDERICO CORDELLI",10,100);
    text("PHOTO PORTFOLIO",10,200);
    text("THE BEST OF/16:9",10,300);
    strokeWeight(8);
    line(0,320,windowWidth,320);
}
*/

function resizety() {document.location.reload();}

function savability() {saveCanvas('FC169_screen_thank_you', 'png');}

/*
function keyPressed(SPACEBAR) {
  document.location.reload();
}
*/
// MOUSE DRAGGED
/*
function mouseDragged() {
  imageMode(CENTER);
   image(imagesOk[j], mouseX, mouseY, 256, 148);
  // image(imagesOk[j], mouseX, mouseY, width(imagesOk[j])/10, height(imagesOk[j])/10);
}
*/

/*
function mousePressed(){
  if (mouseY >= height-10 && mouseX >= 125 && mouseX <= 145){
    //range accounting for text length
    window.open("https://federicocordelli.github.io/", "_self");
}
}
*/
// codice telefono
function touchEnded() {
  if(j===20) {
    j=1;
  } else if(j<20) {
  j++;
    }
    push();
    //center(CENTER);
    rect(width-65, height-70, 40, 30, 10, 10, 10, 10);
    pop();
    push();
    fill('white');
    textSize(20);
    textStyle(NORMAL);
    //text(j-1,(width-10)-20*j,height-50);
    text(j-1,width-50,height-48);
    pop();


/*
//try
    textSize(100);
    textStyle(BOLD);
    text("FEDERICO CORDELLI",10,100);
    text("PHOTO APPETIZER",10,200);
    text("THE BEST OF/16:9",10,300);
    strokeWeight(8);
    line(0,320,windowWidth,320);
    */
//second trial
/*
    textSize(30);
    //textStyle(BOLD);
    textLeading(30);
    text("FEDERICO CORDELLI \nPHOTO APPETIZER \nTHE BEST OF/16:9 & 2:3",10,30);
    strokeWeight(2);
*/
    push();
    //textSize(30);
    textSize(48);
    noFill();
    stroke('black');
    strokeWeight(0.7);
    //textStyle(BOLD);
    //textLeading(30);
    textLeading(60);
    //text("FEDERICO CORDELLI \nPHOTO APPETIZER \nTHE BEST OF/16:9 & 2:3",10,30);
    text("\nNOT A SLIDESHOW",70,60);
    fill('black');
    text("FEDERICO CORDELLI",70,73);
    strokeWeight(1);
    line(0,130,windowWidth,130);
    line(0,height-100,windowWidth,height-100);
    pop();

    push();
    textSize(10);
    text("Class 1998", 10, 15);
    textAlign(CENTER);
    text("Horror Vacui", width/2, 15);
    textAlign(RIGHT);
    text("From Italy", width-10, 15);
    pop();
    /*
    line(0,100,windowWidth,100);
    line(0,height-100,windowWidth,height-100);
    */
    //vertical try
    imageMode(CENTER);
     image(imagesVert[j], windowWidth/2, windowHeight/2, 400, 600);
     return false;

}

function touchMoved() {

  let valslider = slider.value();
  // frameRate(15);
  imageMode(CENTER);
   //image(imagesOk[j], mouseX, mouseY, 256, 148);
   image(imagesOk[j], mouseX, mouseY, valslider, (valslider/16)*9);
   return false;
}

/*
function touchMoved() {
  return false;
}
*/
function windowResized() {
  resizeCanvas(windowWidth,windowHeight);

//prova resize

  background("#ffffff");

  frameRate(15);


  strokeWeight(0);
  textFont(myFont);
  textSize(15);
  //textStyle(NORMAL);
  //text("Spacebar/resize to reset",10,height-28);
  text("Click to skip",10,height-46);
  text("Drag to recreate",10,height-64);
  text("My twenty best shots in 16:9 & 2:3",10,height-82);
  // text("Photography mini-game",10,height-125);
  text("More info on: ",10,height-10);
  // text("behance", 125, height-10);
  text("Photo n°: ",width-84,height-82);
  text("This one-page site is designed by me",width-280,height-10);
  // text(j,10,height-160);

  push();
  textSize(15);
  //textStyle(BOLD);
  textLeading(15);
  fill('black');
  text("Communication Design",10,150);
  text("16:9 photos resizer:",width-330,150);
  text("Graduated from Politecnico di Milano",10,height-108);
  text("To contact me: cordelli.federico@gmail.com",width-330,height-108);
  pop();

/*
  link = createA("https://www.behance.net/Federico_cordelli?isa0=1",
                      "behance", "_blank");

   // Posotion the anchor objects
   link.position(125, height-25);
*/
/*
//new title
   textSize(100);
   textStyle(BOLD);
   text("FEDERICO CORDELLI",10,100);
   text("PHOTO APPETIZER",10,200);
   text("THE BEST OF/16:9",10,300);
   strokeWeight(8);
   line(0,320,windowWidth,320);
   */

   push();
   //textSize(30);
   textSize(48);
   noFill();
   stroke('black');
   strokeWeight(0.7);
   //textStyle(BOLD);
   //textLeading(30);
   textLeading(60);
   //text("FEDERICO CORDELLI \nPHOTO APPETIZER \nTHE BEST OF/16:9 & 2:3",10,30);
   text("\nNOT A SLIDESHOW",70,60);
   fill('black');
   text("FEDERICO CORDELLI",70,73);
   strokeWeight(1);
   line(0,130,windowWidth,130);
   line(0,height-100,windowWidth,height-100);
   pop();

   push();
   textSize(10);
   text("Class 1998", 10, 15);
   textAlign(CENTER);
   text("Horror Vacui", width/2, 15);
   textAlign(RIGHT);
   text("From Italy", width-10, 15);
   pop();
   /*
   // new new title
   textSize(30);
   //textStyle(BOLD);
   textLeading(30);
   text("FEDERICO CORDELLI \nPHOTO APPETIZER \nTHE BEST OF/16:9 & 2:3",10,30);
   strokeWeight(2);

   line(0,100,windowWidth,100);
   line(0,height-100,windowWidth,height-100);
   */
}
