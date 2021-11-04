//PERSONAL FEDERICO CORDELLI WEB SITE "NOT A SLIDESHOW"

//The Base Of All The Site
var imagesOk = [];
var j = 0;
var imagesVert = [];

//Slider
let slider;
/*
//Radio
let radio;
*/
//Font
let myFont;

//Values Of The Black & White (For the Dark Mode)
let value1 = 0;
let value2 = 255;

//Clickable LUX
myButton = new Clickable();

//Clickable LUX Attributes
myButton.color = "#000000";
myButton.cornerRadius = 20;
myButton.strokeWeight = 1;
myButton.stroke = "#ff0000";
myButton.text = "//LUX";
myButton.textColor = "#ff0000";
myButton.textSize = 25;
myButton.textFont = "SuisseIntl-Medium";
myButton.textScaled = false;
myButton.width = 200;
myButton.height = 80;
myButton.locate(10, 300);

//Clickable screen
screenButton = new Clickable();

//Clickable screen Attributes
screenButton.color = "#ffffff";
screenButton.cornerRadius = 20;
screenButton.strokeWeight = 1;
screenButton.stroke = "#000000";
screenButton.text = "//SCREEN";
screenButton.textColor = "#000000";
screenButton.textSize = 25;
screenButton.textFont = "SuisseIntl-Medium";
screenButton.textScaled = false;
screenButton.width = 200;
screenButton.height = 80;
screenButton.locate(10, 400);

//Clickable wash
washButton = new Clickable();

//Clickable wash Attributes
washButton.color = "#ffffff";
washButton.cornerRadius = 20;
washButton.strokeWeight = 1;
washButton.stroke = "#ff0000";
washButton.text = "//WASH";
washButton.textColor = "#ff0000";
washButton.textSize = 25;
washButton.textFont = "SuisseIntl-Medium";
washButton.textScaled = false;
washButton.width = 200;
washButton.height = 80;
washButton.locate(10, 500);

//Clickable RESET
resetButton = new Clickable();

//Clickable RESET Attributes
resetButton.color = "#ff0000";
resetButton.cornerRadius = 20;
resetButton.strokeWeight = 1;
resetButton.stroke = "#ffffff";
resetButton.text = "//RESET";
resetButton.textColor = "#ffffff";
resetButton.textSize = 25;
resetButton.textFont = "SuisseIntl-Medium";
resetButton.textScaled = false;
resetButton.width = 200;
resetButton.height = 80;
resetButton.locate(10, 600);

//Clickable BACK
backButton = new Clickable();

//Clickable BACK Attributes
backButton.color = "#000000";
backButton.cornerRadius = 10;
backButton.strokeWeight = 1;
backButton.stroke = "#ffffff";
backButton.text = "//←";
backButton.textColor = "#ffffff";
backButton.textSize = 25;
backButton.textFont = "SuisseIntl-Medium";
backButton.textScaled = false;
backButton.width = 100;
backButton.height = 40;
// backButton.locate(10, 700);


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

/*
  //Radio Button for Resizing Imges
push();
  radio = createRadio();
  radio.option('min',0.5);
  radio.option('med',1);
  radio.option('max',2);
  radio.style('width', '73.4px');
  radio.position(width-100, 300);
  radio.addClass('container1');
  textAlign(CENTER);
  fill(255, 0, 0);
  pop();
*/
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

/*
    //Slider Images Resizer
    slider = createSlider(128, 512, 256);
    // slider.position(width-80, 393);
    slider.style('width', '450px');
    slider.addClass('slider');
    slider.style("transform","rotate(-90deg)");
*/


  //Scripts Down The Second Line
  push();
  fill(value1, value1, value1);
  strokeWeight(0);
  textFont(myFont);
  textSize(20);
  text("More info on:",40,height-74);
  pop();

  //link To Behance
  link = createA("https://www.behance.net/Federico_cordelli?isa0=1","behance", "_blank");
   link.position(170, height-96);
   link.addClass('a');

//Title
push();
textSize(85);
noFill();
stroke(value1, value1, value1);
strokeWeight(0.9);
textLeading(93);
text("\nNOT A SLIDESHOW",40,100);
fill(value1, value1, value1);
text("FEDERICO CORDELLI",40,113);
strokeWeight(1);
line(0,210,windowWidth,210);
line(0,height-100,windowWidth,height-100);
pop();

//Upside Type Frame
push();
fill(value1, value1, value1);
textSize(15);
text("Class 1998", 10, 15);
textAlign(CENTER);
text("Horror Vacui", width/2, 15);
textAlign(RIGHT);
text("From Italy", width-10, 15);
pop();

//Downside Type Frame
push();
fill(value1, value1, value1);
textSize(15);
text("16:9", 10, height-10);
textAlign(CENTER);
text("This one-page site is designed & developed by me", width/2, height-10);
textAlign(RIGHT);
text("2:3", width-10, height-10);
pop();

//Internal Type Frame
push();
fill(value1, value1, value1);
textSize(20);
textLeading(15);
text("Communication",10,240);
textAlign(RIGHT);
text("Design",width-10,240);
textAlign(LEFT);
text("Graduated from Politecnico di Milano",10,height-108);
textAlign(RIGHT);
text("To contact me: cordelli.federico@gmail.com",width-10,height-108);
pop();

}


function draw() {

//Clickable LUX
myButton.draw();

//Clickable Screen
screenButton.draw();

//Clickable wash
washButton.draw();

//Clickable wash
resetButton.draw();

//Clickable back
backButton.locate((width/2)-100, height-200);
backButton.draw();

/*
// slider position
slider.position((width/20)*14, 393);
*/
//Photo Number
push();
strokeWeight(1);
stroke(255,255,255);
fill(0, 0, 0);
rect((width/2)+10, height-200, 100, 40, 10, 10, 10, 10);
pop();
push();
fill(255, 255, 255);
textAlign(CENTER,CENTER);
textSize(25);
textStyle(NORMAL);
text(j,(width/2)+60, height-183);
pop();

}

//clickable back function
backButton.onPress = function(){
  j=j-3;
  if(j<0){
    j=1;
  }else if(j===0){
    j=1;
  }
  //Images 2:3 When You Go Back To One Click
  imageMode(CENTER);
   image(imagesVert[j], windowWidth/2, windowHeight/2, 400, 600);
   return false;
}


//Click Function
function touchEnded() {
  //Change Images
  if(j<0){
    j=1;
  }
  if(j<20) {
  j++;
}else if(j===20) {
      j=1;
    }

    //Title
    push();
    textSize(85);
    noFill();
    stroke(value1, value1, value1);
    strokeWeight(0.9);
    textLeading(93);
    text("\nNOT A SLIDESHOW",40,100);
    fill(value1, value1, value1);
    text("FEDERICO CORDELLI",40,113);
    strokeWeight(1);
    line(0,210,windowWidth,210);
    line(0,height-100,windowWidth,height-100);
    pop();

    //Upside Type Frame
    push();
    fill(value1, value1, value1);
    textSize(15);
    text("Class 1998", 10, 15);
    textAlign(CENTER);
    text("Horror Vacui", width/2, 15);
    textAlign(RIGHT);
    text("From Italy", width-10, 15);
    pop();

    //Downside Type Frame
    push();
    fill(value1, value1, value1);
    textSize(15);
    text("16:9", 10, height-10);
    textAlign(CENTER);
    text("This one-page site is designed & developed by me", width/2, height-10);
    textAlign(RIGHT);
    text("2:3", width-10, height-10);
    pop();

    //Images 2:3
    imageMode(CENTER);
     image(imagesVert[j], windowWidth/2, windowHeight/2, 400, 600);
     return false;

}

//Drag Function
function touchMoved() {
/*
  //Slider Value
  let valslider = slider.value();

  //Images 16:9
  imageMode(CENTER);
   image(imagesOk[j+1], mouseX, mouseY, valslider, (valslider/16)*9);
   return false;

     //Radio Value
     let val1 = radio.value();

      imageMode(CENTER);
       image(imagesOk[j+1], mouseX, mouseY, 256*val1,144*val1);
       return false;
       */

       //Images 16:9
       imageMode(CENTER);
        image(imagesOk[j+1], mouseX, mouseY, 256*2, 144*2);
        return false;
}

function windowResized() {

  //Layout Resized
  resizeCanvas(windowWidth,windowHeight);
  background(value2, value2, value2);
  link.position(170, height-96);
  // radio.position(width-100, 300);

  frameRate(15);

  //scripts down the second line
  push();
  fill(value1, value1, value1);
  strokeWeight(0);
  textFont(myFont);
  textSize(20);
  text("More info on:",40,height-74);
  pop();

  //Internal Type Frame
  push();
  fill(value1, value1, value1);
  textSize(20);
  textLeading(15);
  text("Communication",10,240);
  textAlign(RIGHT);
  text("Design",width-10,240);
  textAlign(LEFT);
  text("Graduated from Politecnico di Milano",10,height-108);
  textAlign(RIGHT);
  text("To contact me: cordelli.federico@gmail.com",width-10,height-108);
  pop();

  //Title
  push();
  textSize(85);
  noFill();
  stroke(value1, value1, value1);
  strokeWeight(0.9);
  textLeading(93);
  text("\nNOT A SLIDESHOW",40,100);
  fill(value1, value1, value1);
  text("FEDERICO CORDELLI",40,113);
  strokeWeight(1);
  line(0,210,windowWidth,210);
  line(0,height-100,windowWidth,height-100);
  pop();

   //Upside Type Frame
   push();
   fill(value1, value1, value1);
   textSize(15);
   text("Class 1998", 10, 15);
   textAlign(CENTER);
   text("Horror Vacui", width/2, 15);
   textAlign(RIGHT);
   text("From Italy", width-10, 15);
   pop();

   //Downside Type Frame
   push();
   fill(value1, value1, value1);
   textSize(15);
   text("16:9", 10, height-10);
   textAlign(CENTER);
   text("This one-page site is designed & developed by me", width/2, height-10);
   textAlign(RIGHT);
   text("2:3", width-10, height-10);
   pop();

}

//Clickable LUX function
myButton.onPress = function(){
  if (value1 === 0) {
    value1 = 255;
  } else {
    value1 = 0;
  }

  if (value2 === 255) {
    value2 = 0;
    //Change Background Color
    background(value2, value2, value2);

    //Scripts Down The Second Line Negative
    push();
    fill(value1, value1, value1);
    strokeWeight(0);
    textFont(myFont);
    textSize(20);
    text("More info on:",40,height-74);
    pop();

    //Internal Type Frame
    push();
    fill(value1, value1, value1);
    textSize(20);
    textLeading(15);
    text("Communication",10,240);
    textAlign(RIGHT);
    text("Design",width-10,240);
    textAlign(LEFT);
    text("Graduated from Politecnico di Milano",10,height-108);
    textAlign(RIGHT);
    text("To contact me: cordelli.federico@gmail.com",width-10,height-108);
    pop();

    //Title Negative
    push();
    textSize(85);
    noFill();
    stroke(value1, value1, value1);
    strokeWeight(0.9);
    textLeading(93);
    text("\nNOT A SLIDESHOW",40,100);
    fill(value1, value1, value1);
    text("FEDERICO CORDELLI",40,113);
    strokeWeight(1);
    line(0,210,windowWidth,210);
    line(0,height-100,windowWidth,height-100);
    pop();

     //Upside Type Frame Negative
     push();
     fill(value1, value1, value1);
     textSize(15);
     text("Class 1998", 10, 15);
     textAlign(CENTER);
     text("Horror Vacui", width/2, 15);
     textAlign(RIGHT);
     text("From Italy", width-10, 15);
     pop();

     //Downside Type Frame
     push();
     fill(value1, value1, value1);
     textSize(15);
     text("16:9", 10, height-10);
     textAlign(CENTER);
     text("This one-page site is designed & developed by me", width/2, height-10);
     textAlign(RIGHT);
     text("2:3", width-10, height-10);
     pop();
  } else {
    value2 = 255;
    //Change the Background Color
    background(value2, value2, value2);
    //Scripts Down The Second Line Positive
    push();
    push();
    fill(value1, value1, value1);
    strokeWeight(0);
    textFont(myFont);
    textSize(20);
    text("More info on:",40,height-74);
    pop();

    //Internal Type Frame Positive
    push();
    fill(value1, value1, value1);
    textSize(20);
    textLeading(15);
    text("Communication",10,240);
    textAlign(RIGHT);
    text("Design",width-10,240);
    textAlign(LEFT);
    text("Graduated from Politecnico di Milano",10,height-108);
    textAlign(RIGHT);
    text("To contact me: cordelli.federico@gmail.com",width-10,height-108);
    pop();

    //Title Positive
    push();
    textSize(85);
    noFill();
    stroke(value1, value1, value1);
    strokeWeight(0.9);
    textLeading(93);
    text("\nNOT A SLIDESHOW",40,100);
    fill(value1, value1, value1);
    text("FEDERICO CORDELLI",40,113);
    strokeWeight(1);
    line(0,210,windowWidth,210);
    line(0,height-100,windowWidth,height-100);
    pop();

     //Upside Type Frame Positive
     push();
     fill(value1, value1, value1);
     textSize(15);
     text("Class 1998", 10, 15);
     textAlign(CENTER);
     text("Horror Vacui", width/2, 15);
     textAlign(RIGHT);
     text("From Italy", width-10, 15);
     pop();

     //Downside Type Frame
     push();
     fill(value1, value1, value1);
     textSize(15);
     text("16:9", 10, height-10);
     textAlign(CENTER);
     text("This one-page site is designed & developed by me", width/2, height-10);
     textAlign(RIGHT);
     text("2:3", width-10, height-10);
     pop();
  }
}

//clickable screen function
screenButton.onPress = function(){
  saveCanvas('FC169_screen_thank_you', 'png');
  return false;
}

//clickable wash function
washButton.onPress = function(){
  background(value2, value2, value2);

  //Scripts Down The Second Line Negative
  push();
  fill(value1, value1, value1);
  strokeWeight(0);
  textFont(myFont);
  textSize(20);
  text("More info on:",40,height-74);
  pop();

  //Internal Type Frame Negative
  push();
  fill(value1, value1, value1);
  textSize(20);
  textLeading(15);
  text("Communication",10,240);
  textAlign(RIGHT);
  text("Design",width-10,240);
  textAlign(LEFT);
  text("Graduated from Politecnico di Milano",10,height-108);
  textAlign(RIGHT);
  text("To contact me: cordelli.federico@gmail.com",width-10,height-108);
  pop();

  //Title Negative
  push();
  textSize(85);
  noFill();
  stroke(value1, value1, value1);
  strokeWeight(0.9);
  textLeading(93);
  text("\nNOT A SLIDESHOW",40,100);
  fill(value1, value1, value1);
  text("FEDERICO CORDELLI",40,113);
  strokeWeight(1);
  line(0,210,windowWidth,210);
  line(0,height-100,windowWidth,height-100);
  pop();

   //Upside Type Frame Negative
   push();
   fill(value1, value1, value1);
   textSize(15);
   text("Class 1998", 10, 15);
   textAlign(CENTER);
   text("Horror Vacui", width/2, 15);
   textAlign(RIGHT);
   text("From Italy", width-10, 15);
   pop();

   //Downside Type Frame
   push();
   fill(value1, value1, value1);
   textSize(15);
   text("16:9", 10, height-10);
   textAlign(CENTER);
   text("This one-page site is designed & developed by me", width/2, height-10);
   textAlign(RIGHT);
   text("2:3", width-10, height-10);
   pop();
}

//clickable reset function
resetButton.onPress = function(){
  document.location.reload();
  return false;
}
