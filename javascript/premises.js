/*
* ***PREMISES STUFF.***
*/

function startPremisesFrame() {
    if (frame == 1) {
        stopTrainFrame();
    } else if (frame == 3) {
        stopBeachFrame();
    }
    //Creating shapes and image components

    charAmelia = new component(80, 80, "/keiths-site/image_dir/ameliaPortrait.png", 0, 0, "image", premisesFrame);
    charHermes = new component(80, 80, "/keiths-site/image_dir/hermesPortrait.png", 80, 0, "image", premisesFrame);
    charArnold = new component(80, 80, "/keiths-site/image_dir/arnoldPortrait.png", 160, 0, "image", premisesFrame);
    charLeon = new component(80, 80, "/keiths-site/image_dir/leonPortrait.gif", 240, 0, "image", premisesFrame);
    charJim = new component(80, 80, "/keiths-site/image_dir/jimPortrait.png", 320, 0, "image", premisesFrame);
    charSylvie = new component(80, 80, "/keiths-site/image_dir/sylviePortrait.png", 0, 80, "image", premisesFrame);
    envWindow = new component(80, 80, "/keiths-site/image_dir/windowView.png", 80, 80, "image", premisesFrame);
    envBoat = new component(80, 80, "/keiths-site/image_dir/boat.png", 160, 80, "image", premisesFrame);
    envDocks = new component(80, 80, "/keiths-site/image_dir/dock.png", 240, 80, "image", premisesFrame);
    envWheel = new component(80, 80, "/keiths-site/image_dir/carParked.png", 320, 80, "image", premisesFrame);
    envGlass = new component(80, 80, "/keiths-site/image_dir/restaurant.png", 0, 160, "image", premisesFrame);
    envDinner = new component(80, 80, "/keiths-site/image_dir/dinner.png", 80, 160, "image", premisesFrame);
    envExt = new component(80, 80, "/keiths-site/image_dir/restaurantExt.png", 160, 160, "image", premisesFrame);
    envData = new component(80, 80, "/keiths-site/image_dir/data.png", 240, 160, "image", premisesFrame);
    envDash = new component(80, 80, "/keiths-site/image_dir/copCar.png", 320, 160, "image", premisesFrame);
    envSign = new component(80, 80, "/keiths-site/image_dir/crossWalkStop.png", 0, 240, "image", premisesFrame);
    envHull = new component(80, 80, "/keiths-site/image_dir/inHull.png", 80, 240, "image", premisesFrame);
    darkness = new component(800, 400, "#000000", 0, 0, "shape", premisesFrame);
    selector = new component(80, 80, "aqua", 0, 0, "outline", premisesFrame);

    if (frame != 2) {
        premisesFrame.start();
        text = -10;
        introSong.play();
        frame = 2;
    } else {
        stopPremisesFrame();
    }
}

function stopPremisesFrame() {
    introSong.stop();
    premisesFrame.stop();
    premisesFrame.clear();
}

var premisesFrame = {
    //Creating canvas
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 800;
        this.canvas.height = 400;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updatePremisesFrame, 20);
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

function updatePremisesFrame() {

    //Creating text.
    premisesFrame.context.textAlign = "center"
    premisesFrame.context.font = "16px Arial";
    premisesFrame.context.strokeStyle="aqua";

    premisesFrame.clear();

    darkness.update()
    charAmelia.update()
    charHermes.update()
    charArnold.update()
    charLeon.update()
    charJim.update()
    charSylvie.update()
    envWindow.update()
    envHull.update()
    envSign.update()
    envDash.update()
    envData.update()
    envExt.update()
    envDinner.update()
    envGlass.update()
    envBoat.update()
    envDocks.update()
    envWheel.update()

    if (zDown == 1 && xDown != 1) {
        if (selector.x > 0) {
            selector.x -= 80;
        } else {
            selector.x = 320;
            selector.y -= 80;
        }
        if (selector.y < 0) {
            selector.x = 80;
            selector.y = 240;
        }
        zDown = 0;
    }
    if (xDown == 1 && zDown != 1) {
        if (selector.x < 320) {
            selector.x += 80;
        } else {
            selector.x = 0;
            selector.y += 80;
        }
        if (selector.x == 160 && selector.y == 240) {
            selector.x = 0;
            selector.y = 0;
        }
        xDown = 0;
    }

    /*
    if (selector.x == 0 && selector.y == 0) {

    } else if (selector.x == 80 && selector.y == 0) {

    } else if (selector.x == 160 && selector.y == 0) {
        
    } else if (selector.x == 240 && selector.y == 0) {
        
    } else if (selector.x == 320 && selector.y == 0) {
        
    } else if (selector.x == 0 && selector.y == 80) {
        
    } else if (selector.x == 80 && selector.y == 80) {
        
    } else if (selector.x == 160 && selector.y == 80) {
        
    } else if (selector.x == 240 && selector.y == 80) {
        
    } else if (selector.x == 320 && selector.y == 80) {
        
    } else if (selector.x == 0 && selector.y == 160) {
        
    } else if (selector.x == 80 && selector.y == 160) {
        
    } else if (selector.x == 160 && selector.y == 160) {
        
    } else if (selector.x == 240 && selector.y == 160) {
        
    } else if (selector.x == 320 && selector.y == 160) {
        
    } else if (selector.x == 0 && selector.y == 240) {
        
    } else if (selector.x == 80 && selector.y == 240) {
        
    }*/

    selector.update()
}