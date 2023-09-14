const SLICE_COUNT = 10;

function setup_pScope(pScope){
  //pScope.output_mode(STATIC_FRAME);
  //pScope.output_mode( ANIMATED_FRAME);
pScope.output_mode(ANIMATED_DISK);
//pScope.output_mode(STATIC_DISK);
  //pScope.output_mode(OUTPUT_PRINT(A3));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("spark", "png");
  pScope.load_image("sunmoon", "png");
  pScope.load_image("spiral4", "png");
  pScope.load_image_sequence("magic_wand3", "png", 10);
  pScope.load_image_sequence("sunmoon_spin2", "png", 10);
  pScope.load_image_sequence("moon1", "png", 11);
}

function setup_layers(pScope){

  new PLayer(null, 48, 42, 66);  //lets us draw the whole circle background, ignoring the boundaries

  var spiralSpin = new PLayer(spiral4);
  spiralSpin.mode(RING);
  spiralSpin.set_boundary(0, 1000); 


  var layer1 = new PLayer(spark);
  layer1.mode( SWIRL(4) );
  layer1.set_boundary( 100, 1000 );

  var layer1 = new PLayer(spark1);
  layer1.mode( SWIRL(6) );
  layer1.set_boundary( 100, 1000 );



  var magic_wand2Sequence = new PLayer(magic_wand3);
  magic_wand2Sequence.mode(RING);
  magic_wand2Sequence.set_boundary(0, 1000);

  var sunmoon_spin2Sequence = new PLayer(sunmoon_spin2);
  sunmoon_spin2Sequence.mode(RING);
  sunmoon_spin2Sequence.set_boundary(0, 1000);

  var eyeball = new PLayer(squares);
 eyeball.mode( RING );
 eyeball.set_boundary( 0, 300 );



 var moonSequence = new PLayer(moon1);
 moonSequence.mode(RING);
 moonSequence.set_boundary(0, 1000);



}

function spark(x, y, animation, pScope){
  scale (0.6*animation. frame);
  rotate (360*animation. frame);
pScope.draw_image("spark",x,y);

}

function spark1(x, y, animation, pScope){
  
  scale (0.4*animation. frame);
  rotate (360*animation. frame);
  translate (x,y-400)
pScope.draw_image("spark",x,y);

}



function magic_wand3(x, y, animation, pScope){
  translate (x,y-800);
  scale (1.8);
pScope.draw_image_from_sequence("magic_wand3",0,0, animation.frame);
}




function sunmoon_spin2(x, y, animation, pScope){
  scale (2.5);
  rotate (animation. frame);
  pScope.draw_image_from_sequence("sunmoon_spin2",0,0, animation.frame);


}


function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;
push()
  scale (2.5)
pScope.draw_image("sunmoon",x,y);
pop()
  
  

  fill(125, 134, 173)
  scale (1*animation. wave(1.5));
  ellipse(100,-500,50,50)
  
 

}


function moon1(x, y, animation, pScope){
  translate (x,y-500);
  scale (0.5);
  pScope.draw_image_from_sequence("moon1",0,0, animation.frame);

}


function spiral4(x, y, animation, pScope){
  scale (1.5);
  rotate (animation. frame);
  pScope.draw_image("spiral4",x,y);

}

