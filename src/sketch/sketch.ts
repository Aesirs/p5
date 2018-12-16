
let ax: number;
let ay: number;
let bx: number;
let by: number;
let cx: number;
let cy: number;

let x: number;
let y: number;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    ax = random(width);
    ay = random(height);
    bx = random(width);
    by = random(height);
    cx = random(width);
    cy = random(height);

    x = random(width);
    y = random(height);

    background(0);
    stroke(255);
    strokeWeight(2);
    point(ax, ay);
    point(bx, by);
    point(cx, cy);
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    for (let index = 0; index < 100; index++) {
        point(x, y);

        const r = floor(random(3));
        switch (r) {
            case 0:
                stroke(255, 0, 255);

                x = lerp(x, ax, 0.5);
                y = lerp(y, ay, 0.5);
                break;

            case 1:
                stroke(0, 255, 255);

                x = lerp(x, bx, 0.5);
                y = lerp(y, by, 0.5);
                break;

            case 2:
                stroke(255, 255, 0);

                x = lerp(x, cx, 0.5);
                y = lerp(y, cy, 0.5);
                break;
        }
    }

}
