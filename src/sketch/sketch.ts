
let points: p5.Vector[];
let current: p5.Vector;

let percent = 0.55;
let n = 5;
let previous: p5.Vector;

function setup() {
    createCanvas(windowWidth, windowHeight);
    reset();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    if (frameCount % 200 === 0) reset();

    for (let index = 0; index < 1000; index++) {
        strokeWeight(1);
        stroke(255, 0, 255, 100);

        const next = points[floor(random(points.length))];
        if (next !== previous) {
            current.x = lerp(current.x, next.x, percent);
            current.y = lerp(current.y, next.y, percent);
            previous = next;
        }

        point(current.x, current.y);
    }
}

function reset() {
    points = [];
    for (let index = 0; index < n; index++) {
        const vec = p5.Vector.fromAngle(index * TWO_PI / n);
        vec.mult(height / 2);
        vec.add(width / 2, height / 2);
        points.push(vec);
    }

    current = createVector(random(width), random(height));

    background(0);
    stroke(255);
    strokeWeight(8);

    points.forEach(vector => {
        point(vector.x, vector.y);
    });
}
