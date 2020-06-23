let noiseMax = 1;
let slider;
let phase = 0;
let zoff = 0;

function setup() {
    var canvas = createCanvas(400, 400);
    slider = createSlider(0, 10, 0, 0.1);

    canvas.parent('sketch');
    slider.parent('sketch');
}

function draw() {
    background(13, 18, 23);
    noiseSeed(99);
    translate(width / 2, height / 2);
    stroke(255);
    noFill();

    beginShape();
    noiseMax = slider.value();
    for (let a = 0; a < TWO_PI; a += 0.001) {
        let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
        let yoff = map(sin(a), -1, 1, 0, noiseMax);

        let r = map(noise(xoff, yoff, zoff), 0, 1, 100, 200);
        let x = r * cos(a);
        let y = r * sin(a);
        vertex(x, y);
    }
    endShape(CLOSE);

    zoff += 0.005;

    phase += 0.01;
}