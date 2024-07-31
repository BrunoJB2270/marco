

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 640, 480);
    fill(255, 0, 0);
     stroke(255, 0, 0);
     triangle(50, 50, 80);
     square(50, 430, 80);
     triangle(590, 50, 80);
     square(590, 430, 80);
     fill(0, 128, 0);
     stroke(0, 128, 0);
     rect(90, 40, 460, 20);
     rect(90, 420, 460, 20);
     rect(40, 90, 20, 300);
     rect(580, 90, 20, 300);
  }
  
  function take_snapshot(){    
    save('student_name.png');
  }