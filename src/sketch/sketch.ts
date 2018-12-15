function app(sketch: p5) {
    sketch.setup = () => {
        sketch.createCanvas(200, 200);
    };

    sketch.draw = () => {
        sketch.background(0);
        sketch.fill(255);
    };
}

const myp5 = new p5(app);
