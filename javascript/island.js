/*
* ***BEACH STUFF.***
*/

function startBeachFrame() {
    if (frame == 2) {
        stopPremisesFrame();
    } else if (frame == 1) {
        stopTrainFrame();
    }
    //Creating shapes and image components

    beach = new component(512, 256, "/keiths-site/image_dir/IGBeach.png", 0, 0, "image", beachFrame);

    if (frame != 3) {
        beachFrame.start();
        frame = 3;
    } else {
        stopBeachFrame();
    }
}

function stopBeachFrame() {
    beachFrame.stop();
    beachFrame.clear();
}

var beachFrame = {
    //Creating canvas
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 512;
        this.canvas.height = 256;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateBeachFrame, 20);
        text = 0;
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
        this.canvas.width = 0;
        this.canvas.height = 0;
    }
}

function updateBeachFrame() {
    beachFrame.clear();
    beach.update();
}