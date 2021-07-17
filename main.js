
nosex = 0;
nosey = 0;
function preload(){
    clown_nose = loadImage('https://i.postimg.cc/c4NDwCwX/clown-nose.png');
}

function setup(){
    canvas = createCanvas(350 , 290);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nosex = results[0].pose.nose.x - 11;
        nosey = results[0].pose.nose.y - 17;
        console.log('nose X = '+ nosex);
        console.log('nose Y = '+ nosey);
    }
}

function modelLoaded() {
    console.log("Model Loaded");
}


function draw(){
    image(video, 10, 10, 330, 270);
   // circle(nosex, nosey, 20);
    //stroke(255, 0, 0);
    //fill(255, 0, 0);
    image(clown_nose, nosex, nosey, 30, 30);
}

function take_snapshot() {
    save("me_with_clown_nose.png");
}