class Bucket {
    constructor(position, size, index) {
        this.position = position;
        this.size = size;
        this.index = index;
        this.boids = [];

    }

    addItem(boid) {
        if(this.boids.includes(boid))
            return;
        
        this.boids.push(boid);
        boid.bucket = this;
    }

    removeItem(item) {
        if(this.boids.includes(item)) {
            this.boids.splice(this.boids.indexOf(item), 1);
        }
    }

    getNeighbours() {
        let neighbours = new Array();
        for(let i = -1; i <= 1; i++){
            for(let j = -1; j <= 1; j++){
                
                if(this.index.x + i < 0 || this.index.x + i > buckets.length || this.index.y + j <  0 || this.index.y + j > buckets[this.index.x + i].length)
                    continue;

                neighbours.push(buckets[this.index.x + i][this.index.y + j]);
            }
        }

        return neighbours;
    }

    isInBucket(boid) {
        return boid.position.x < this.size.x + this.position.x &&
               boid.position.x > this.position.x &&
               boid.position.y < this.size.y + this.position.y &&
               boid.position.y > this.position.y;
    }

    debugShow() {
        push();
        stroke(255, 0, 0);
        strokeWeight(1);
        fill(0, 0, 0, 0);
        rect(this.position.x, this.position.y, this.size.x, this.size.y);

        stroke(255, 0, 255);
        for(let boid of this.boids) {
            if(this.isInBucket(boid))
                line(this.position.x, this.position.y, boid.position.x, boid.position.y);
        }
        pop();
    }
}