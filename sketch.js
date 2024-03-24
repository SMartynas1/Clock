let video;
let handpose;
let landmarksX = [];
let landmarksY = [];
let circX = [
  -130,
  -280,
  -150,
  -300,
  -100,

  300,
  210,
  130,
  100,
  100,


  
  150,
  300,
  100,
  230,
  130,

  // 
  -200,
  -150,
  -300,
  -100,
  -170,
];
let circY = [
  -300,
  -220,
  -150,
  -100,
  -70,

  -110,
  -240,
  -290,
  -340,
  -140,

  80,
  130,
  180,
  200,
  280,

// 
  80,
  150,
  190,
  240,
  300,
];

function setup() {
  
  createCanvas(displayWidth, displayHeight);
  video = createCapture(VIDEO);
  video.hide();
  handpose = ml5.handpose(video, modelLoaded);
  handpose.on("hand", everyFrame);
  angleMode (DEGREES);
  textAlign(CENTER);
}

function modelLoaded() {
  console.log("Ready to go");
}

function everyFrame(handinformation) {
  console.log(handinformation);

  if (handinformation.length > 0) {
    for (let i = 0; i < 21; i++) {
      landmarksX[i] = handinformation[0].landmarks[i][0];
      landmarksY[i] = handinformation[0].landmarks[i][1];

      landmarksX[i] = map(landmarksX[i], 0, 640, 0, displayWidth);
      landmarksY[i] = map(landmarksY[i], 0, 480, 0, displayHeight);
    }
  }
}

function draw() {
  push();
  translate(width, 0);
  scale(-1.0, 1.0);
  background(220);
  strokeWeight(10);
  stroke(0); 
  fill(255);
  ellipse(width/2,440, 850, 850);


  
  fill(255);
  noStroke();
  push();
  fill(0);
  ellipse(landmarksX[4], landmarksY[4], 5);
  ellipse(landmarksX[8], landmarksY[8], 5);
  ellipse(landmarksX[12], landmarksY[12], 5);
  ellipse(landmarksX[16], landmarksY[16], 5);
  ellipse(landmarksX[20], landmarksY[20], 5);
  pop();
  strokeWeight(2);
  
  
  for (let i = 0; i < 4; i++) {
    stroke(100);
    line(landmarksX[i], landmarksY[i], landmarksX[i + 1], landmarksY[i + 1]);
  }

  for (let i = 5; i < 8; i++) {
    stroke(100);
    line(landmarksX[i], landmarksY[i], landmarksX[i + 1], landmarksY[i + 1]);
  }

  for (let i = 9; i < 12; i++) {
    stroke(100);
    line(landmarksX[i], landmarksY[i], landmarksX[i + 1], landmarksY[i + 1]);
  }

  for (let i = 13; i < 16; i++) {
    stroke(100);
    line(landmarksX[i], landmarksY[i], landmarksX[i + 1], landmarksY[i + 1]);
  }
  for (let i = 17; i < 21; i++) {
    stroke(100);
    line(landmarksX[i], landmarksY[i], landmarksX[i + 1], landmarksY[i + 1]);
  }
  

  
//thumb
  if (
    landmarksX[5] > 0 &&
    landmarksX[5] < width/2 &&
    landmarksY[5] > 0 &&
    landmarksY[5] < 440
  ) {
    stroke(200);
    line(landmarksX[4], landmarksY[4],width/2+ circX[0] , 440+circY[0]) ;
  } else if (
    landmarksX[5] > width/2 &&
    landmarksX[5] < width &&
    landmarksY[5] > 0 &&
    landmarksY[5] < 440
  )
  {
    stroke(200);
    line(landmarksX[4], landmarksY[4], width/2+circX[5] , 440+circY[5] );
  } else if (
    landmarksX[5] > 0 &&
    landmarksX[5] < width/2 &&
    landmarksY[5] > 440 &&
    landmarksY[5] < 1400
  )
  {
    stroke(200);
    line(landmarksX[4], landmarksY[4], width/2+circX[15] , 440+circY[15]);
  } else if (
    landmarksX[5] > width/2 &&
    landmarksX[5] < width &&
    landmarksY[5] > 440 &&
    landmarksY[5] < 1400
  )
  {
    stroke(200);
    line(landmarksX[4], landmarksY[4], width/2+circX[10] ,440+ circY[10] );
  } 



  //index
  
    if (
      landmarksX[8] > 0 &&
      landmarksX[8] < width/2 &&
      landmarksY[8] > 0 &&
      landmarksY[8] < 440
  ) {
    stroke(200);
    line(landmarksX[8], landmarksY[8], width/2+ circX[1], 440+circY[1] );
  } else if (
    landmarksX[8] > width/2 &&
    landmarksX[8] < width &&
    landmarksY[8] > 0 &&
    landmarksY[8] < 440
  )
  {
    stroke(200);
    line(landmarksX[8], landmarksY[8], width/2+circX[6] ,440+circY[6] );
  } else if (
    landmarksX[8] > 0 &&
    landmarksX[8] < width/2 &&
    landmarksY[8] > 440 &&
    landmarksY[8] < 1400
  )
  {
    stroke(200);
    line(landmarksX[8], landmarksY[8], width/2+circX[16], 440+circY[16] );
  } else if (
    landmarksX[8] > width/2 &&
    landmarksX[8] < width &&
    landmarksY[8] > 440 &&
    landmarksY[8] < 1400
  )
  {
    stroke(200);
    line(landmarksX[8], landmarksY[8], width/2+circX[11], 440+circY[11] );
  } 
  
  
  //middle
    if (
      landmarksX[12] > 0 &&
      landmarksX[12] < width/2 &&
      landmarksY[12] > 0 &&
      landmarksY[12] < 440
  ) {
    stroke(200);
    line(landmarksX[12], landmarksY[12],width/2+ circX[2],440+ circY[2] );
  } else if (
    landmarksX[12] > width/2 &&
    landmarksX[12] < width &&
    landmarksY[12] > 0 &&
    landmarksY[12] < 440
  )
  {
    stroke(200);
    line(landmarksX[12], landmarksY[12], width/2+circX[7], 440+circY[7] );
  } else if (
    landmarksX[12] > 0 &&
    landmarksX[12] < width/2 &&
    landmarksY[12] > 440 &&
    landmarksY[12] < 1400
  )
  {
    stroke(200);
    line(landmarksX[12], landmarksY[12], width/2+circX[17] , 440+circY[17] );
  } else if (
    landmarksX[12] > width/2 &&
    landmarksX[12] < width &&
    landmarksY[12] > 440 &&
    landmarksY[12] < 1400
  )
  {
    stroke(200);
    line(landmarksX[12], landmarksY[12],width/2+ circX[12] , 440+circY[12] );
  } 
  
  
  //ring 
  
      if (
        landmarksX[16] > 0 &&
        landmarksX[16] < width/2 &&
        landmarksY[16] > 0 &&
        landmarksY[16] < 440
  ) {
    stroke(200);
    line(landmarksX[16], landmarksY[16], width/2+circX[3], 440+circY[3]);
  } else if (
    landmarksX[16] > width/2 &&
    landmarksX[16] < width &&
    landmarksY[16] > 0 &&
    landmarksY[16] < 440
  )
  {
    stroke(200);
    line(landmarksX[16], landmarksY[16], width/2+circX[8], 440+circY[8]);
  } else if (
    landmarksX[16] > 0 &&
    landmarksX[16] < width/2 &&
    landmarksY[16] > 440 &&
    landmarksY[16] < 1400
  )
  {
    stroke(200);
    line(landmarksX[16], landmarksY[16], width/2+circX[18] ,440+ circY[18]);
  } else if (
    landmarksX[16] > width/2 &&
    landmarksX[16] < width &&
    landmarksY[16] > 440 &&
    landmarksY[16] < 1400
  )
  {
    stroke(200);
    line(landmarksX[16], landmarksY[16], width/2+circX[13] , 440+circY[13]);
  } 
  
  
    //pinky 
  
      if (
        landmarksX[20] > 0 &&
        landmarksX[20] < width/2 &&
        landmarksY[20] > 0 &&
        landmarksY[20] < 440
  ) {
    stroke(200);
    line(landmarksX[20], landmarksY[20],width/2+circX[4] , 440+circY[4] );
  } else if (
    landmarksX[20] > width/2 &&
    landmarksX[20] < width &&
    landmarksY[20] > 0 &&
    landmarksY[20] < 440
  )
  {
    stroke(200);
    line(landmarksX[20], landmarksY[20], width/2+circX[9] , 440+circY[9] );
  } else if (
    landmarksX[20] > 0 &&
    landmarksX[20] < width/2 &&
    landmarksY[20] > 440 &&
    landmarksY[20] < 1400
  )
  {
    stroke(200);
    line(landmarksX[20], landmarksY[20], width/2+circX[19] , 440+circY[19]);
  } else if (
    landmarksX[20] > width/2 &&
    landmarksX[20] < width &&
    landmarksY[20] > 440 &&
    landmarksY[20] < 1400
  )
  {
    stroke(200);
    line(landmarksX[20], landmarksY[20],width/2+ circX[14] , 440+circY[14]);
  } 
  
  
  
  
  
  
  
  drawCircles();
  pop();

  let h = hour();
  let m = minute ();
  let s = second ();
fill (0);
  if (s < 10){
    s = "0" + s;
  }

  if (m < 10){
    m = "0" + m;
  }

  if (h < 10){
    h = "0" + h;
  }
  push();
  fill(255);
  strokeWeight(2);
  rect(width/2-90,510, 180, 50);
  pop();
  textSize(40);
  text (h +":"+ m +":" + s, width/2, 550);

  noFill();
  push();
  translate(width/2, height/2);
  strokeWeight(5);
  let secondAngle = map(s, 0, 60, 0, 360);
  rotate(secondAngle);
  // line (0, 0, 0, -200); 
  pop();

  push();
  translate(width/2, 440);
  strokeWeight(12);
  stroke (0);
  let minuteAngle = map(m,0,60,0,360);
  rotate(minuteAngle);
  line (0,0, 0, -350 );
  pop();

  push();
  translate(width/2, 440);
  strokeWeight(18);
  stroke(0);
  let hourAngle = map(h, 0, 12, 0 ,360);
if (h>11){
  h=h-12;
}
  rotate (hourAngle);
  line(0,0,0,-250);
  pop();


  fill (0);
  ellipse (width/2, 440, 30,30);
  strokeWeight(13);

  line (width/2-423, 440, width/2-380,440);
  line (width/2+423, 440, width/2+380,440);
  line (width/2, 17,width/2, 60 )
  line (width/2, 817,width/2, 860 )

}

function drawCircles() {
  for (let i = 0; i < 20; i++) {
    fill(0);
    stroke(1);
    ellipse(width/2+circX[i], 440+circY[i], 3);
  }
}



