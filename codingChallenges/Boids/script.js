const flock = [];
buckets = [[]];
let birdImg;
let alignSlider, cohesionSlider, separationSlider;

function preload() {
    birdImg = loadImage('bird64x32.png');
}

function setup() {
    createCanvas(800, 600);

    alignSlider = createSlider(0, 5, 1, 0.1);
    cohesionSlider = createSlider(0, 5, 1, 0.1);
    separationSlider = createSlider(0, 5, 1, 0.1);

    let bucketSize = createVector(200, 200);
    buckets = new Array();

    for(let i = 0; i < width / bucketSize.x; i++) {
        buckets.push(new Array());
    }

    for(let i = 0; i < buckets.length; i++) {
        for(let j = 0; j < height / bucketSize.y; j++) {
            buckets[i].push(new Bucket(createVector(i * bucketSize.x, j * bucketSize.y), bucketSize.copy(), createVector(i, j)));
        }
    }

    for(let i = 0; i < 1; i++) {
        flock.push(new Boid(buckets[0][0]));
        buckets[0][0].boids.push(flock[i]);
    }

}

function draw() {
    background(149, 217, 240, 200);

    for(let boid of flock) {
        if(!boid.bucket.isInBucket(boid)){
            for(let bucketArray of buckets) {
                for(let bucket of bucketArray) {
                    if(bucket.isInBucket(boid)){
                        boid.bucket.removeItem(boid);
                        bucket.addItem(boid);
                        break;
                    }
                }
            }
        }
    }

    for (let boid of flock) {
        boid.flock(flock);
    }

    for (let bucketArray of buckets) {
        for (let bucket of bucketArray) {
            bucket.debugShow();
        }
    }

    for (let boid of flock) {
        boid.edges();
        boid.applyAcceleration();
        boid.update();
        boid.show();
        boid.debugShow();
    }
}