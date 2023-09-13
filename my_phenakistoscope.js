const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(STATIC_FRAME);
  //pScope.output_mode( ANIMATED_FRAME);
  //pScope.output_mode(ANIMATED_DISK);
  //pScope.output_mode(STATIC_DISK);
  //pScope.output_mode(OUTPUT_GIF(1000));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("spark", "png");
  pScope.load_image("sunmoon", "png");
  pScope.load_image("eyebg2", "png");
  pScope.load_image("spiral4", "png");
  pScope.load_image_sequence("magic_wand2", "png", 10);
  pScope.load_image_sequence("sunmoon_spin2", "png", 10);
  pScope.load_image_sequence("eye_move", "png", 9);
  pScope.load_image_sequence("moon", "png", 12);
}

function setup_layers(pScope){

  new PLayer(null, 48, 42, 66);  //lets us draw the whole circle background, ignoring the boundaries

  var spiralSpin = new PLayer(spiral4);
  spiralSpin.mode(RING);
  spiralSpin.set_boundary(0, 1000); 

  var layer1 = new PLayer(spark);
  layer1.mode( SWIRL(4) );
  layer1.set_boundary( 100, 1000 );

  // var spinline = new PLayer(rectangle);
  // spinline.mode( SWIRL(2) );
  // spinline.set_boundary( 100, 1000 );



  // var moonSequence = new PLayer(moon);
  // moonSequence.mode(RING);
  // moonSequence.set_boundary(0, 1000);

  var magic_wand2Sequence = new PLayer(magic_wand2);
  magic_wand2Sequence.mode(RING);
  magic_wand2Sequence.set_boundary(0, 1000);

  var sunmoon_spin2Sequence = new PLayer(sunmoon_spin2);
  sunmoon_spin2Sequence.mode(RING);
  sunmoon_spin2Sequence.set_boundary(0, 1000);

  var sprinkle = new PLayer(squares);
 sprinkle.mode( RING );
 sprinkle.set_boundary( 0, 300 );

//  var center_eyebg = new PLayer(eyebg2);
//  center_eyebg.mode( RING );
//  center_eyebg.set_boundary( 0, 300 );



 

//  var centre = new PLayer(centre);
//  centre.mode( RING );
//  centre.set_boundary( 0, 300 );
}

function spark(x, y, animation, pScope){
  scale (0.6*animation. frame);
  rotate (360*animation. frame);
pScope.draw_image("spark",x,y);
//scale (0.2);

}

function magic_wand2(x, y, animation, pScope){
  translate (x,y-520);
  scale (1.6);
pScope.draw_image_from_sequence("magic_wand2",0,0, animation.frame);
}

// function sprinkle(x, y, animation, pScope){

//   let angleOffset = (360 / SLICE_COUNT) / 2
//   let backgroundArcStart = 270 - angleOffset;
//   let backgroundArcEnd = 270 + angleOffset;

//   fill(18, 8, 41)
//   arc(x,y,800,800,backgroundArcStart,backgroundArcEnd);

//   fill(226, 206, 240);
//   ellipse(-10,-300-animation.wave()*50,20,20);

// }


// function faces(x, y, animation, pScope){
  
//   scale(animation.frame*2);

//   ellipse(0,0,50,50); // draw head
//   fill(30);
//   ellipse(-10,-10,10,10); //draw eye
//   ellipse(10,-10,10,10); // draw eye
//   arc(0,10,20,10,0,180); // draw mouth

// }


function sunmoon_spin2(x, y, animation, pScope){
  scale (2.5);
  rotate (animation. frame);
  pScope.draw_image_from_sequence("sunmoon_spin2",0,0, animation.frame);

//scale (0.2);

}


function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;
push()
  scale (2.5)
  //rotate (animation.frame);
pScope.draw_image("sunmoon",x,y);
pop()
  // fill(198, 147, 19)
  // rotate (0*animation. frame);
  //  arc(x,y,350,350,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background
  

  fill(255)
  ellipse(-25,-400-animation.wave(0.4)*400,25,25) // .wave is a cosine wave btw

}

function eyebg2(x, y, animation, pScope){
  //let angleOffset = (360 / SLICE_COUNT) / 2
  //let backgroundArcStart = 270 - angleOffset;
  //let backgroundArcEnd = 270 + angleOffset;

  scale(0.7)
  pScope.draw_image("eyebg2",x,y);

}

function moon(x, y, animation, pScope){
  translate (x,y-840);
  scale (0.6);
  pScope.draw_image_from_sequence("moon",0,0, animation.frame);

}


function spiral4(x, y, animation, pScope){
  //translate (x,y-840);
  scale (1.5);
  rotate (animation. frame);
  pScope.draw_image("spiral4",x,y);

}

// function rectangle (x, y, animation, pScope){
//   fill (198, 147, 19)
  
// beginShape();
//  vertex (-167,40)
//  vertex (-156,75)
//  vertex(155, 75)
//  vertex(155, 20)
//  endShape();
// }

// function centre (x, y, animation, pScope){
//   fill(198, 147, 19)
//   ellipse (0,0,100,100, animation.frame)

// }
