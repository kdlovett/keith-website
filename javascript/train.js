/*
* ***TRAIN STUFF.***
*/

function startTrainFrame() {
    if (frame == 2) {
        stopPremisesFrame();
    } else if (frame == 3) {
        stopBeachFrame();
    }
    //Creating shapes and image components

    train = new component(300, 300, "/keiths-site/image_dir/train2.gif", 0, 0, "image", trainFrame);
    trash = new component(80, 80, "/keiths-site/image_dir/trash.gif", 20, 220, "image", trainFrame);
    buildingback1 = new component(100, 200, "#4f519a", 120, 60, "shape", trainFrame);
    buildingback2 = new component(30, 80, "#4f519a", 100, 20, "shape", trainFrame);
    buildingback3 = new component(60, 100, "#4f519a", 200, 30, "shape", trainFrame);
    buildingback4 = new component(50, 80, "#4f519a", 270, 40, "shape", trainFrame);
    buildingback5 = new component(40, 90, "#4f519a", 370, 10, "shape", trainFrame);
    building1 = new component(100, 100, "#45545a", 0, 0, "shape", trainFrame);
    building1side = new component(20, 100, "#2c363a", 100, 0, "shape", trainFrame);
    building2 = new component(100, 150, "#45545a", 150, 50, "shape", trainFrame);
    building2side = new component(20, 150, "#2c363a", 250, 50, "shape", trainFrame);
    building3 = new component(80, 200, "#45545a", 315, 0, "shape", trainFrame);
    building3side = new component(20, 200, "#2c363a", 375, 0, "shape", trainFrame);

    if (frame != 1) {
        trainFrame.start();
        frame = 1;
    } else {
        stopTrainFrame();
    }
}

function stopTrainFrame() {
    trainFrame.stop();
    trainFrame.clear();
}

var trainFrame = {
    //Creating canvas
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 300;
        this.canvas.height = 300;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateTrainFrame, 20);
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

function updateTrainFrame() {

    trainFrame.clear();
    //Resetting building positions
    if (buildingback1.x < -100) {
        buildingback1.x = 350;
    }
    if (buildingback2.x < -100) {
        buildingback2.x = 350;
    }
    if (buildingback3.x < -100) {
        buildingback3.x = 350;
    }
    if (buildingback4.x < -100) {
        buildingback4.x = 350;
    }
    if (buildingback5.x < -100) {
        buildingback5.x = 350;
    }

    //Resetting more building positions
    if (building1.x < -100) {
        building1.x = 350;
    }
    if (building2.x < -100) {
        building2.x = 350;
    }
    if (building3.x < -100) {
        building3.x = 350;
    }
    if (building1side.x < -100) {
        building1side.x = 350;
    }
    if (building2side.x < -100) {
        building2side.x = 350;
    }
    if (building3side.x < -100) {
        building3side.x = 350;
    }

    //Moving buildings
    buildingback1.x -= 2;
    buildingback2.x -= 2;
    buildingback3.x -= 2;
    buildingback4.x -= 2;
    buildingback5.x -= 2;
    buildingback1.update();
    buildingback2.update();
    buildingback3.update();
    buildingback4.update();
    buildingback5.update();
    building1.x -= 3;
    building1.update();
    building2.x -= 3;
    building2.update();
    building3.x -= 3;
    building3.update();
    building1side.x -= 3;
    building1side.update();
    building2side.x -= 3;
    building2side.update();
    building3side.x -= 3;
    building3side.update();
    train.update();
    trash.update();

    //Creating text.
    trainFrame.context.textAlign = "center"
    trainFrame.context.font = "16px Arial";
    trainFrame.context.strokeStyle="aqua";

    if (text == 0) {
        trainFrame.context.strokeText("(Click on Frame and press Enter to begin.)",150,20);
    } else if (text == 1) {
        trainFrame.context.strokeText("*Bzzt*",150,20);
    } else if (text == 2) {
        trainFrame.context.strokeText("Next stop... Data-Strato-Theater.",150,20);
    } else if (text == 3) {
        trainFrame.context.strokeText("Doors will open on both sides.",150,20);
    } else if (text == 4) {
        trainFrame.context.strokeText("Thank you for riding the T.",150,20);
    } else {
        text = 1;
    }
}