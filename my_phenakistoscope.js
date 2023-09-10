const SLICE_COUNT = 10;

function setup_pScope(pScope){
 // pScope.output_mode(STATIC_FRAME);
  //pScope.output_mode( ANIMATED_FRAME);
  pScope.output_mode(ANIMATED_DISK);
  //pScope.output_mode(STATIC_DISK);
  //pScope.output_mode(OUTPUT_GIF(1000));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("spark", "png");
  pScope.load_image("sunmoon", "png");
  pScope.load_image_sequence("magic_wand", "png", 10);
  pScope.load_image_sequence("sunmoon_spin2", "png", 10);
}

function setup_layers(pScope){

  new PLayer(null, 48, 42, 66);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(spark);
  layer1.mode( SWIRL(2.5) );
  layer1.set_boundary( 100, 1000 );

  var magic_wandSequence = new PLayer(magic_wand);
  magic_wandSequence.mode(RING);
  magic_wandSequence.set_boundary(0, 1000);

  var sunmoon_spin2Sequence = new PLayer(sunmoon_spin2);
  sunmoon_spin2Sequence.mode(RING);
  sunmoon_spin2Sequence.set_boundary(0, 1000);

  var sprinkle = new PLayer(squares);
 sprinkle.mode( RING );
 sprinkle.set_boundary( 0, 300 );

 

//  var centre = new PLayer(centre);
//  centre.mode( RING );
//  centre.set_boundary( 0, 300 );
}

function spark(x, y, animation, pScope){
  scale (0.8*animation. frame);
  rotate (360*animation. frame);
pScope.draw_image("spark",x,y);
//scale (0.2);

}

function magic_wand(x, y, animation, pScope){
  translate (x,y-450);
  scale (2);
pScope.draw_image_from_sequence("magic_wand",0,0, animation.frame);
}

function sprinkle(x, y, animation, pScope){

  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(18, 8, 41)
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd);

  fill(226, 206, 240);
  ellipse(-10,-300-animation.wave()*50,20,20);

}


// function faces(x, y, animation, pScope){
  
//   scale(animation.frame*2);

//   ellipse(0,0,50,50); // draw head
//   fill(30);
//   ellipse(-10,-10,10,10); //draw eye
//   ellipse(10,-10,10,10); // draw eye
//   arc(0,10,20,10,0,180); // draw mouth

// }


function sunmoon_spin2(x, y, animation, pScope){
  scale (2);
  rotate (animation. frame);
  pScope.draw_image_from_sequence("sunmoon_spin2",0,0, animation.frame);

//scale (0.2);

}


function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  scale (2)
  rotate (animation. frame);
pScope.draw_image("sunmoon",x,y);

  // fill(198, 147, 19)
  // rotate (0*animation. frame);
  // arc(x,y,600,600,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background
  

  fill(255)
  ellipse(-20,-400-animation.wave(0.4)*400,30,30) // .wave is a cosine wave btw

}

// function centre (x, y, animation, pScope){
//   fill(198, 147, 19)
//   ellipse (0,0,100,100, animation.frame)

// }
