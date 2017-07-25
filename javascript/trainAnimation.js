var train;
var building;

var text = 0;
setTimeout(textUpdater, 3000);

function startAnimation() {
    //Creating shapes and image components
    train = new component(300, 300, "/keiths-site/images/train2.gif", 0, 0, "image");
    trash = new component(80, 80, "/keiths-site/images/trash.gif", 20, 220, "image");

    buildingback1 = new component(100, 200, "#4f519a", 120, 60, "shape");
    buildingback2 = new component(30, 80, "#4f519a", 100, 20, "shape");
    buildingback3 = new component(60, 100, "#4f519a", 200, 30, "shape");
    buildingback4 = new component(50, 80, "#4f519a", 270, 40, "shape");
    buildingback5 = new component(40, 90, "#4f519a", 370, 10, "shape");

    building1 = new component(100, 100, "#45545a", 0, 0, "shape");
    building1side = new component(20, 100, "#2c363a", 100, 0, "shape");

    building2 = new component(100, 150, "#45545a", 150, 50, "shape");
    building2side = new component(20, 150, "#2c363a", 250, 50, "shape");

    building3 = new component(80, 200, "#45545a", 315, 0, "shape");
    building3side = new component(20, 200, "#2c363a", 375, 0, "shape");

    animFrame.start();
}

var animFrame = {
    //Creating canvas
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 300;
        this.canvas.height = 300;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateAnimFrame, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type) {
    //Used to create new components
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    } else if (type == "shape"){
        //nothing special
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;
    //Enables components to change images / colors
    this.update = function() {
        ctx = animFrame.context;
        if (type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        } else if (type == "shape") {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}

function textUpdater() {
    //Continues text
    if (text != 5){
        text += 1;
    } else{
        text = 0;
    }
    if (text == 0){
        setTimeout(textUpdater, 1000);
    } else if (text == 1){
        setTimeout(textUpdater, 2000);
    } else if (text == 2){
        setTimeout(textUpdater, 2000);
    } else if (text == 3){
        setTimeout(textUpdater, 2000);
    } else if (text == 4){
        setTimeout(textUpdater, 2000);
    } else if (text == 5){
        setTimeout(textUpdater, 5000);
    }
}

function updateAnimFrame() {

    animFrame.clear();
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
    animFrame.context.textAlign = "center"
    if (text == 1) {
        animFrame.context.font = "16px Arial";
        animFrame.context.strokeStyle="aqua";
        animFrame.context.strokeText("*Bzzt*",150,20);
    } else if (text == 2) {
        animFrame.context.strokeText("Please remember to take all",150,20);
    } else if (text == 3) {
        animFrame.context.strokeText("personal belongings. Thank you, and",150,20);
    } else if (text == 4) {
        animFrame.context.strokeText("keep it running,",150,20);
    } else if (text == 5) {
        animFrame.context.font = "25px Arial";
        animFrame.context.strokeStyle="orange";
        animFrame.context.strokeText("Full Throttle.",155,30);
    }
}
