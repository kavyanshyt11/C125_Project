mostageX = 0;  
mostageY = 0;
function preload(){
    mostage = loadImage('https://i.postimg.cc/SQGcWYV1/png-transparent-planet-eclipse-ego-glasses-lens-white-graphy-thug-life-angle-text-rectangle-thumbnai.png');
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}



function modelLoaded() {
    console.log("poseNet is Intialized");
}
 
function take_snapshot(){
    save('myFilterImage.png');

}

function gotPoses(results) {
    if(results.length > 0){
      console.log(results);
      mostageX = results[0].pose.nose.x - 15;
      mostageY = results[0].pose.nose.y -15;
      console.log("mostage x = " + mostageX);
      console.log("mostage y = " + mostageY);
    }

}

function draw(){
    image(video, 0, 0, 400, 420);
    //fill(255, 0, 0);
    //stroke(255, 0, 0);
    //circle(noseX, noseY, 20)
    image(mostage, mostageX, mostageY, 200, 200);
}
