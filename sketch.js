//PERSONAL FEDERICO CORDELLI WEB SITE "NOT A SLIDESHOW"

//The Base Of All The Site
var imagesOk = [];
var j = 1;
var imagesVert = [];

//Slider
let slider;

//Font
let myFont;

//Values Of The Black & White (For the Dark Mode)
let value1 = 0;
let value2 = 255;

function preload(){

  //Loading 16:9 Images
  for (var i=1; i<21; i++) {
    imagesOk[i] = loadImage("addons/"+i+".jpg");
  }

  //Loading 2:3 Images
  for (var k=1; k<21; k++) {
    imagesVert[k] = loadImage("addons/vertical/f"+k+".jpg");
  }

  //Loading Font
  myFont = loadFont('addons/SuisseIntl-Medium.otf');
}

function setup() {
  //Canvas
  createCanvas(windowWidth,windowHeight);
  background(value2, value2, value2);

  frameRate(15);


  //Button To Reset
  button = createButton('//RESET');
  button.position(width/2, height-80);
  button.mouseClicked(resizety);
  button.addClass('button');

  //Button To Screen The Canvas (Without HTML Eelements)
  button = createButton('//SCREEN');
  button.position(width/2-7, 140);
  button.mouseClicked(savability);
  button.addClass('button1');

  //Button To The Dark Mode
  button = createButton('//LUX');
  button.position(width-100, 85);
  button.mousePressed(darkmodety);
  button.addClass('button2');

  //Instructions Of Use For The User
  fill('red');
  textFont(myFont);
  textSize(22);
  textLeading(25);
  text("\n \n \n.20 photos in 16:9 [resizables] \n.20 photos in 2:3 \n.an interactive way to visualize them \n.my contacts \n \n.if you screen and use the pick \nplease tag me (@fristy_ on instagram) \n \n*JUST CLICK* ",windowWidth/2 - 193,windowHeight/2 - 100);
  textSize(26);
  text("'INSTRUCTIONS FOR USE'",windowWidth/2 - 193,windowHeight/2 - 100);
  textSize(15);
  text("*Things you can find here & rules:*",windowWidth/2 - 193,windowHeight/2 - 80);


    //Slider Images Resizer
    slider = createSlider(128, 512, 256);
    slider.position(width-180, 143);
    slider.style('width', '150px');
    slider.addClass('slider');



  //Scripts Down The Second Line
  push();
  fill(value1, value1, value1);
  strokeWeight(0);
  textFont(myFont);
  textSize(15);
  text("Click to skip",10,height-46);
  text("Drag to recreate",10,height-64);
  text("My twenty best shots in 16:9 & 2:3",10,height-82);
  text("More info on: ",10,height-10);
  text("Photo n°: ",width-84,height-82);
  text("This one-page site is designed & developed by me",width-380,height-10);
  pop();

  //link To Behance
  link = createA("https://www.behance.net/Federico_cordelli?isa0=1","behance", "_blank");
   link.position(108, height-24);
   link.addClass('a');

//Title
push();
textSize(48);
noFill();
stroke(value1, value1, value1);
strokeWeight(0.7);
textLeading(60);
text("\nNOT A SLIDESHOW",70,60);
fill(value1, value1, value1);
text("FEDERICO CORDELLI",70,73);
strokeWeight(1);
line(0,130,windowWidth,130);
line(0,height-100,windowWidth,height-100);
pop();

//Upside Type Frame
push();
fill(value1, value1, value1);
textSize(10);
text("Class 1998", 10, 15);
textAlign(CENTER);
text("Horror Vacui", width/2, 15);
textAlign(RIGHT);
text("From Italy", width-10, 15);
pop();

//Internal Type Frame
push();
fill(value1, value1, value1);
textSize(15);
textLeading(15);
text("Communication Design",10,150);
text("16:9 photos resizer:",width-330,150);
text("Graduated from Politecnico di Milano",10,height-108);
text("To contact me: cordelli.federico@gmail.com",width-330,height-108);
pop();

}


function draw() {
//Nothing Here
}

//Resize Button Function
function resizety() {
  document.location.reload();
  return false;
}

//Save Screen
function savability() {
  saveCanvas('FC169_screen_thank_you', 'png');
  return false;
}

//Dark Mode
function darkmodety() {
  if (value1 === 0) {
    value1 = 255;
  } else {
    value1 = 0;
  }

  if (value2 === 255) {
    value2 = 0;
    //Change Background Colot
    background(value2, value2, value2);

    //Scripts Down The Second Line Negative
    push();
    fill(value1, value1, value1);
    strokeWeight(0);
    textFont(myFont);
    textSize(15);
    text("Click to skip",10,height-46);
    text("Drag to recreate",10,height-64);
    text("My twenty best shots in 16:9 & 2:3",10,height-82);
    text("More info on: ",10,height-10);
    text("Photo n°: ",width-84,height-82);
    text("This one-page site is designed & developed by me",width-380,height-10);
    pop();

    //Internal Type Frame
    push();
    textSize(15);
    textLeading(15);
    fill(value1, value1, value1);
    text("Communication Design",10,150);
    text("16:9 photos resizer:",width-330,150);
    text("Graduated from Politecnico di Milano",10,height-108);
    text("To contact me: cordelli.federico@gmail.com",width-330,height-108);
    pop();

     //Title Negative
     push();
     textSize(48);
     noFill();
     stroke(value1, value1, value1);
     strokeWeight(0.7);
     textLeading(60);
     text("\nNOT A SLIDESHOW",70,60);
     fill(value1, value1, value1);
     text("FEDERICO CORDELLI",70,73);
     strokeWeight(1);
     line(0,130,windowWidth,130);
     line(0,height-100,windowWidth,height-100);
     pop();

     //Upside Type Frame Negative
     push();
     fill(value1, value1, value1);
     textSize(10);
     text("Class 1998", 10, 15);
     textAlign(CENTER);
     text("Horror Vacui", width/2, 15);
     textAlign(RIGHT);
     text("From Italy", width-10, 15);
     pop();
  } else {
    value2 = 255;
    //Change the Background Color
    background(value2, value2, value2);
    //Scripts Down The Second Line Positive
    push();
    fill(value1, value1, value1);
    strokeWeight(0);
    textFont(myFont);
    textSize(15);
    text("Click to skip",10,height-46);
    text("Drag to recreate",10,height-64);
    text("My twenty best shots in 16:9 & 2:3",10,height-82);
    text("More info on: ",10,height-10);
    text("Photo n°: ",width-84,height-82);
    text("This one-page site is designed & developed by me",width-380,height-10);
    pop();

    //Internal Type Frame Positive
    push();
    textSize(15);
    textLeading(15);
    fill(value1, value1, value1);
    text("Communication Design",10,150);
    text("16:9 photos resizer:",width-330,150);
    text("Graduated from Politecnico di Milano",10,height-108);
    text("To contact me: cordelli.federico@gmail.com",width-330,height-108);
    pop();

     //Title Positive
     push();
     textSize(48);
     noFill();
     stroke(value1, value1, value1);
     strokeWeight(0.7);
     textLeading(60);
     text("\nNOT A SLIDESHOW",70,60);
     fill(value1, value1, value1);
     text("FEDERICO CORDELLI",70,73);
     strokeWeight(1);
     line(0,130,windowWidth,130);
     line(0,height-100,windowWidth,height-100);
     pop();

     //Upside Type Frame Positive
     push();
     fill(value1, value1, value1);
     textSize(10);
     text("Class 1998", 10, 15);
     textAlign(CENTER);
     text("Horror Vacui", width/2, 15);
     textAlign(RIGHT);
     text("From Italy", width-10, 15);
     pop();
  }
}

//Click Function
function touchEnded() {
  //Change Images
  if(j===20) {
    j=1;
  } else if(j<20) {
  j++;
    }

    //Photo Number
    push();
    fill(value1, value1, value1);
    rect(width-65, height-70, 40, 30, 10, 10, 10, 10);
    pop();
    push();
    fill(value2, value2, value2);
    textSize(20);
    textStyle(NORMAL);
    text(j-1,width-50,height-48);
    pop();

    //Title
    push();
    textSize(48);
    noFill();
    stroke(value1, value1, value1);
    strokeWeight(0.7);
    textLeading(60);
    text("\nNOT A SLIDESHOW",70,60);
    fill(value1, value1, value1);
    text("FEDERICO CORDELLI",70,73);
    strokeWeight(1);
    line(0,130,windowWidth,130);
    line(0,height-100,windowWidth,height-100);
    pop();

    //Upside Type Frame
    push();
    fill(value1, value1, value1);
    textSize(10);
    text("Class 1998", 10, 15);
    textAlign(CENTER);
    text("Horror Vacui", width/2, 15);
    textAlign(RIGHT);
    text("From Italy", width-10, 15);
    pop();

    //Images 2:3
    imageMode(CENTER);
     image(imagesVert[j], windowWidth/2, windowHeight/2, 400, 600);
     return false;

}

//Drag Function
function touchMoved() {

  //Slider Value
  let valslider = slider.value();

  //Images 16:9
  imageMode(CENTER);
   image(imagesOk[j], mouseX, mouseY, valslider, (valslider/16)*9);
   return false;
}

function windowResized() {

  //Layout Resized
  resizeCanvas(windowWidth,windowHeight);
  background(value2, value2, value2);

  frameRate(15);

  //scripts down the second line
  push();
  fill(value1, value1, value1);
  strokeWeight(0);
  textFont(myFont);
  textSize(15);
  text("Click to skip",10,height-46);
  text("Drag to recreate",10,height-64);
  text("My twenty best shots in 16:9 & 2:3",10,height-82);
  text("More info on: ",10,height-10);
  text("Photo n°: ",width-84,height-82);
  text("This one-page site is designed & developed by me",width-380,height-10);
  pop();

  //Internal Type Frame
  push();
  textSize(15);
  textLeading(15);
  fill(value1, value1, value1);
  text("Communication Design",10,150);
  text("16:9 photos resizer:",width-330,150);
  text("Graduated from Politecnico di Milano",10,height-108);
  text("To contact me: cordelli.federico@gmail.com",width-330,height-108);
  pop();

   //Title
   push();
   textSize(48);
   noFill();
   stroke(value1, value1, value1);
   strokeWeight(0.7);
   textLeading(60);
   text("\nNOT A SLIDESHOW",70,60);
   fill(value1, value1, value1);
   text("FEDERICO CORDELLI",70,73);
   strokeWeight(1);
   line(0,130,windowWidth,130);
   line(0,height-100,windowWidth,height-100);
   pop();

   //Upside Type Frame
   push();
   fill(value1, value1, value1);
   textSize(10);
   text("Class 1998", 10, 15);
   textAlign(CENTER);
   text("Horror Vacui", width/2, 15);
   textAlign(RIGHT);
   text("From Italy", width-10, 15);
   pop();

}
