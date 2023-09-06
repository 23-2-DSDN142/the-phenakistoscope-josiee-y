const SLICE_COUNT = 10;

function setup_pScope(pScope){
 // pScope.output_mode(STATIC_FRAME);
    //pScope.output_mode( ANIMATED_FRAME);
  //pScope.output_mode(ANIMATED_DISK);
  pScope.output_mode(STATIC_DISK);
  //pScope.output_mode(OUTPUT_GIF(1000));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("spark", "png");
  pScope.load_image_sequence("magic_wand", "png", 10);
}

function setup_layers(pScope){

  new PLayer(null, 48, 42, 66);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(spark);
  layer1.mode( SWIRL(2) );
  layer1.set_boundary( 100, 1000 );

  var magic_wandSequence = new PLayer(magic_wand);
  magic_wandSequence.mode(RING);
  magic_wandSequence.set_boundary(0, 1000);

  // var layer2 = new PLayer(squares);
  // layer2.mode( RING );
  // layer2.set_boundary( 0, 400 );
}

function spark(x, y, animation, pScope){
  scale (0.8*animation. frame);
  rotate (360*animation. frame);
pScope.draw_image("spark",x,y);
//scale (0.2);

//rotate (360*animation. frame);
//scale (2*animation. frame);
}

function magic_wand(x, y, animation, pScope){
  translate (x,y-350);
  scale (2);
pScope.draw_image_from_sequence("magic_wand",0,0, animation.frame);
}

function sprinkle(x, y, animation, pScope){
  ellipse(0,0,50,50);
}


// function faces(x, y, animation, pScope){
  
//   scale(animation.frame*2);

//   ellipse(0,0,50,50); // draw head
//   fill(30);
//   ellipse(-10,-10,10,10); //draw eye
//   ellipse(10,-10,10,10); // draw eye
//   arc(0,10,20,10,0,180); // draw mouth

// }

function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(66, 135, 245)
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(255)
  rect(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw

}
