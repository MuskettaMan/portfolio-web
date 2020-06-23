class Boid {

    constructor(bucket) {
        this.position = createVector(random(width), random(height));
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(5, 6));
        this.acceleration = createVector();
        this.maxForce = 1;
        this.maxSpeed = 4;
        this.perceptionRadius = 150;

        this.bucket = bucket;

        this.rotation = Math.atan2(this.velocity.y, this.velocity.x) - HALF_PI;

        this.newAcceleration = createVector();
    }

    edges() {
        if(this.position.x > width) {
            this.position.x = 0;
        } else if(this.position.x < 0) {
            this.position.x = width;
        }
        if(this.position.y > height) {
            this.position.y = 0;
        } else if(this.position.y < 0) {
            this.position.y = height;
        }
    }

    flock(boids) {
        this.newAcceleration.mult(0);

        let alignment = createVector();
        let cohesion = createVector();
        let separation = createVector();

        let total = 0;

        let bucketNeighbours = this.bucket.getNeighbours();
        for(let i = 0; i < bucketNeighbours.length; i++) {
            for (let other of bucketNeighbours[i].boids) {
                let d = dist(
                    this.position.x, 
                    this.position.y, 
                    other.position.x, 
                    other.position.y
                );
    
                if(d < this.perceptionRadius && other != this) {
                    // Alignment
                    alignment.add(other.velocity);
                    
                    // Cohesion
                    cohesion.add(other.position);
                    
                    // Separation
                    let diff = p5.Vector.sub(this.position, other.position);
                    diff.div(d);
                    separation.add(diff);
    
    
                    total++;
                }
            }
        }
        

        if(total > 0){
            // Alignment
            alignment.div(total);
            alignment.setMag(this.maxSpeed);
            alignment.sub(this.velocity);
            alignment.limit(this.maxForce);
                
            // Cohesion
            cohesion.div(total);
            cohesion.sub(this.position);
            cohesion.setMag(this.maxSpeed);
            cohesion.sub(this.velocity);
            cohesion.limit(this.maxForce);
                
            // Separation
            separation.div(total);
            separation.setMag(this.maxSpeed);
            separation.sub(this.velocity);
            separation.limit(this.maxForce);
        }

        separation.mult(separationSlider.value());
        cohesion.mult(cohesionSlider.value());
        alignment.mult(alignSlider.value());

        this.newAcceleration.add(alignment);
        this.newAcceleration.add(cohesion);
        this.newAcceleration.add(separation);
    }

    applyAcceleration(acceleration) {
        this.acceleration = this.newAcceleration;
    }

    update(boids) {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
    }
    
    show() {
        let r = 6;

        let point1 = createVector(-r, -r);
        let point2 = createVector(0, r * 1.8);
        let point3 = createVector(r, -r);

        let newRotation = Math.atan2(this.velocity.y, this.velocity.x) + HALF_PI;
        this.rotation = lerp(this.rotation, newRotation, 0.05);

        push();
        strokeWeight(3);
        stroke(178, 222, 75);
        fill(178, 222, 75);

        translate(this.position.x, this.position.y);
        rotate(this.rotation);
        image(birdImg, -(birdImg.width / 2), -(birdImg.height / 2));
        pop();

    }

    debugShow() {
        push();
        stroke(0, 255, 0);
        strokeWeight(3);
        fill(0, 0, 0, 0);
        circle(this.position.x, this.position.y, this.perceptionRadius);
        pop();
    }
}