/*
* ***GENERIC STUFF.***
*/

var text = 0;
var frame = 0;
var introSong = new sound("/keiths-site/image_dir/conflictedPremisesRecognition.mp3");
var introSong2 = new sound("/keiths-site/image_dir/conflictedPremisesGamble.mp3");
var introSong3 = new sound("/keiths-site/image_dir/conflictedPremisesSeriousBusiness.mp3");
var introSong4 = new sound("/keiths-site/image_dir/conflictedPreminsesTense.mp3");

function component(width, height, color, x, y, type, frame) {
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
    this.x = x;
    this.y = y;
    //Enables components to change images / colors
    this.update = function() {
        ctx = frame.context;
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

function sound(src) {
    //Constructor for sound
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
    this.stop = function() {
        this.sound.pause();
    }
}

window.addEventListener("keydown", continueDialogue, false);

function continueDialogue(e) {
    switch (e.keyCode) {
        //"Enter" key continues dialogue.
        case 13:
            text += 1;
            if (frame == 2 && text == 0) {
                introSong.stop();
                introSong2.play();
            } else if (frame == 2 && text == 57) {
                introSong2.stop();
                introSong.play();
            } else if (frame == 2 && text == 112) {
                introSong.stop();
                introSong3.play();
            } else if (frame == 2 && text == 160) {
                introSong3.stop();
                introSong.play();
            }
            break;
    }
}

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
}


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

    charHermes = new component(400, 400, "/keiths-site/image_dir/hermesPortrait.png", 0, 0, "image", premisesFrame);
    charAmelia = new component(400, 400, "/keiths-site/image_dir/ameliaPortrait.png", 800, 0, "image", premisesFrame);
    charArnold = new component(400, 400, "/keiths-site/image_dir/arnoldPortrait.png", 0, 0, "image", premisesFrame);
    charLeon = new component(400, 400, "/keiths-site/image_dir/leonPortrait.gif", 0, 0, "image", premisesFrame);
    charJim = new component(400, 400, "/keiths-site/image_dir/jimPortrait.png", 0, 0, "image", premisesFrame);
    charSylvie = new component(400, 400, "/keiths-site/image_dir/sylviePortrait.png", 0, 0, "image", premisesFrame);

    envWindow = new component(400, 400, "/keiths-site/image_dir/windowView.png", 400, 0, "image", premisesFrame);
    envBoat = new component(400, 400, "/keiths-site/image_dir/boat.png", 400, 0, "image", premisesFrame);
    envDocks = new component(400, 400, "/keiths-site/image_dir/dock.png", 400, 0, "image", premisesFrame);
    envWheel = new component(400, 400, "/keiths-site/image_dir/carParked.png", 400, 0, "image", premisesFrame);
    envGlass = new component(400, 400, "/keiths-site/image_dir/restaurant.png", 400, 0, "image", premisesFrame);
    envDinner = new component(400, 400, "/keiths-site/image_dir/dinner.png", 400, 0, "image", premisesFrame);
    envExt = new component(400, 400, "/keiths-site/image_dir/restaurantExt.png", 400, 0, "image", premisesFrame);
    envData = new component(400, 400, "/keiths-site/image_dir/data.png", 400, 0, "image", premisesFrame);
    envDash = new component(400, 400, "/keiths-site/image_dir/copCar.png", 400, 0, "image", premisesFrame);
    envSign = new component(400, 400, "/keiths-site/image_dir/crossWalkStop.png", 400, 0, "image", premisesFrame);
    envHull = new component(400, 400, "/keiths-site/image_dir/inHull.png", 400, 0, "image", premisesFrame);
    darkness = new component(400, 400, "#000000", 400, 0, "shape", premisesFrame);
    darknessLarge = new component(1200, 400, "#000000", 0, 0, "shape", premisesFrame);

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
        this.canvas.width = 1200;
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
    charAmelia.update();

    if (text == -10) {
        darknessLarge.update();
        premisesFrame.context.strokeText("(Click on Frame and press Enter to begin.)",600,100);
    } else if (text == -9) {
        darknessLarge.update();
        premisesFrame.context.strokeText("Preface - This is a novice attempt at speculative fiction about competition, education, and technology.",600,100);
    } else if (text == -8) {
        darknessLarge.update();
        premisesFrame.context.strokeText("Specifically I aimed to explore what might happened if educational institutions were to become so heavily focused with their ",600,100);
    } else if (text == -7) {
        darknessLarge.update();
        premisesFrame.context.strokeText("survival, and thus, competition with one another, that they began to sabotage each other. The main character, Amelia Jordan, ",600,100);
    } else if (text == -6) {
        darknessLarge.update();
        premisesFrame.context.strokeText("is a rather unenthusiastic saboteur, who, like many other candidates living outside the encroaching premises of one such academy, ",600,100);
    } else if (text == -5) {
        darknessLarge.update();
        premisesFrame.context.strokeText("has been offered a deal to infiltrate a competing academy. I figured that those living at such academies, and particularly those ",600,100);
    } else if (text == -4) {
        darknessLarge.update();
        premisesFrame.context.strokeText("hired as saboteurs, would feel intense isolation due to the widespread use and research of technology (which has a tendency to ",600,100);
    } else if (text == -3) {
        darknessLarge.update();
        premisesFrame.context.strokeText("isolate this day in age), and their secret identity as a saboteur. Hence the introduction of Hermes, a point of contact, but also a ",600,100);
    } else if (text == -2) {
        darknessLarge.update();
        premisesFrame.context.strokeText("psychotherapist. Amelia perhaps unfairly doubts Hermes' ability to serve this role, however, due to his being artificial intelligence. ",600,100);
    } else if (text == -1) {
        darknessLarge.update();
        premisesFrame.context.strokeText("I imagined that in the back of her mind she might be wondering what undergrad made this AI his or her late-night-energy-drink-fueled thesis project.",600,100);
    } else if (text == 0) {
        charHermes.update();
        darkness.update();
        premisesFrame.context.strokeText("CONFLICTED PREMISES",600,100);
        //Queue song 3
    } else if (text == 1) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: Your meeting with Dr. Richards...",200,30);
    } else if (text == 2) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: It all went according to plan?",200,30);
    } else if (text == 3) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Amelia: Yeah, it did. I have the data stored >",1000,30);
    } else if (text == 4) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Amelia: on here. Here, I'll plug it in.",1000,30);
    } else if (text == 5) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: Thank you. You'll be receiving word >",200,30);
    } else if (text == 6) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: from Mr. Bolden soon about your payment.",200,30);
    } else if (text == 7) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Amelia: Okay.",1000,30);
    } else if (text == 8) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: Is there anything else, Miss Jordan?",200,30);
    } else if (text == 9) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Amelia: I... I think he knew.",1000,30);
    } else if (text == 10) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: I'm sorry, I don't quite understand.",200,30);
    } else if (text == 11) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Amelia: Dr. Richards. I think he knew what I >",1000,30);
    } else if (text == 12) {
        charHermes.update();
        darkness.update();
        premisesFrame.context.strokeText("Amelia: was up to, with the data he let me access.",1000,30);
    } else if (text == 13) {
        charHermes.update();
        darkness.update();
        premisesFrame.context.strokeText("Hermes: What gives you that impression?",200,30);
    } else if (text == 14) {
        charHermes.update();
        darkness.update();
        premisesFrame.context.strokeText("Amelia: He said to me, when I was leaving...",1000,30);
    } else if (text == 15) {
        charArnold.update();
        darkness.update();
        premisesFrame.context.strokeText("Arnold: Amelia, do you know who developed the >",200,30);
    } else if (text == 16) {
        charArnold.update();
        darkness.update();
        premisesFrame.context.strokeText("Arnold: algorithm used in that paper?",200,30);
    } else if (text == 17) {
        charArnold.update();
        envData.update();
        premisesFrame.context.strokeText("Amelia: N-no, sorry, unfortunately I >",1000,30);
    } else if (text == 18) {
        charArnold.update();
        envData.update();
        premisesFrame.context.strokeText("Amelia: still don't know much about the paper; >",1000,30);
    } else if (text == 19) {
        charArnold.update();
        envGlass.update();
        premisesFrame.context.strokeText("Amelia: I'm just retrieving what Dr. Mason asked for.",1000,30);
    } else if (text == 20) {
        charArnold.update();
        envGlass.update();
        premisesFrame.context.strokeText("Arnold: It was a brilliant mathematician at MIT, >",200,30);
    } else if (text == 21) {
        charArnold.update();
        envGlass.update();
        premisesFrame.context.strokeText("Arnold: Working alongside a statisticians from >",200,30);
    } else if (text == 22) {
        charArnold.update();
        envGlass.update();
        premisesFrame.context.strokeText("Arnold: Carnegie Mellon and Harvard.",200,30);
    } else if (text == 23) {
        charArnold.update();
        envGlass.update();
        premisesFrame.context.strokeText("Amelia: Oh... I see.",1000,30);
    } else if (text == 24) {
        charArnold.update();
        darkness.update();
        premisesFrame.context.strokeText("Arnold: Heh, I suppose it's just that... Well >",200,30);
    } else if (text == 25) {
        charArnold.update();
        darkness.update();
        premisesFrame.context.strokeText("Arnold: you wouldn't see that today, would you.",200,30);
    } else if (text == 26) {
        charArnold.update();
        darkness.update();
        premisesFrame.context.strokeText("Amelia: No, I suppose not.",1000,30);
    } else if (text == 27) {
        charArnold.update();
        darkness.update();
        premisesFrame.context.strokeText("Arnold: Part of the moral obligation of being a >",200,30);
    } else if (text == 28) {
        charArnold.update();
        darkness.update();
        premisesFrame.context.strokeText("Arnold: librarian as far as I'm concerned is sharing >",200,30);
    } else if (text == 29) {
        charArnold.update();
        darkness.update();
        premisesFrame.context.strokeText("Arnold: resources you've helped collect responsibly. >",200,30);
    } else if (text == 30) {
        charArnold.update();
        darkness.update();
        premisesFrame.context.strokeText("Arnold: Today it's... hard to know what's responsible.",200,30);
    } else if (text == 31) {
        charHermes.update();
        darkness.update();
        premisesFrame.context.strokeText("Hermes: Did he sound at all... accusatory? Hesitant?",200,30);
    } else if (text == 32) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Amelia: Not at all. More like... despondent...  >",1000,30);
    } else if (text == 33) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Amelia: melancholic. Does he also work for Leon?",1000,30);
    } else if (text == 34) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: I cannot know for certain due to legal >",200,30);
    } else if (text == 35) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: restrictions, but I can almost certainly >",200,30);
    } else if (text == 36) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: say he does not. He's too high-ranking a >",200,30);
    } else if (text == 37) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: member of South Academy.",200,30);
    } else if (text == 38) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Amelia: Ah, I see, Mr. Bolden only works with the >",1000,30);
    } else if (text == 39) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Amelia: lowest of the low.",1000,30);
    } else if (text == 40) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: Your attempts at humor are puzzling Miss >",200,30);
    } else if (text == 41) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: Jordan... I could bring up the incident to >",200,30);
    } else if (text == 42) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: Mr. Bolden, if you'd like. But it sounds to >",200,30);
    } else if (text == 43) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: me to be either a harmless >",200,30);
    } else if (text == 44) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: acknowledgement or coincidence.",200,30);
    } else if (text == 45) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Amelia: Oh, that? No, I wasn't... I didn't want you >",1000,30);
    } else if (text == 46) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Amelia: to tell Leon. I was just saying it, to you.",1000,30);
    } else if (text == 47) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: Hm, I see. Right then I'll bring this data >",200,30);
    } else if (text == 48) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: back to Mr. Bolden and-",200,30);
    } else if (text == 49) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Amelia: Wait, Hermes...",1000,30);
    } else if (text == 50) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: Hm?",200,30);
    } else if (text == 51) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Amelia: Do you have time to talk?",1000,30);
    } else if (text == 52) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: Well the boat leaves in about an hour, so I >",200,30);
    } else if (text == 53) {
        charHermes.update();
        envDocks.update();
        premisesFrame.context.strokeText("Hermes: could give you about half that. Is that >",200,30);
    } else if (text == 54) {
        charHermes.update();
        envDocks.update();
        premisesFrame.context.strokeText("Hermes: alright?",200,30);
    } else if (text == 55) {
        charHermes.update();
        envBoat.update();
        premisesFrame.context.strokeText("Amelia: Guh, that damn boat, still gives me >",1000,30);
    } else if (text == 56) {
        charHermes.update();
        envBoat.update();
        premisesFrame.context.strokeText("Amelia: nightmares.",1000,30);
    } else if (text == 57) {
        charHermes.update();
        envHull.update();
        premisesFrame.context.strokeText("Hermes: It was a bit gloomy in there wasn't it.",200,30);
        //Queue song 1
    } else if (text == 58) {
        charHermes.update();
        envHull.update();
        premisesFrame.context.strokeText("Amelia: That would be an understatement.",1000,30);
    } else if (text == 59) {
        charHermes.update();
        envHull.update();
        premisesFrame.context.strokeText("Hermes: Well, it's what the job called for, >",200,30);
    } else if (text == 60) {
        charHermes.update();
        envDocks.update();
        premisesFrame.context.strokeText("Hermes: I suppose.",200,30);
    } else if (text == 61) {
        charHermes.update();
        envDocks.update();
        premisesFrame.context.strokeText("Amelia: I don't see how you do it every week, I'd >",1000,30);
    } else if (text == 62) {
        charHermes.update();
        darkness.update();
        premisesFrame.context.strokeText("Amelia: go insane.",1000,30);
    } else if (text == 63) {
        charHermes.update();
        darkness.update();
        premisesFrame.context.strokeText("Hermes: I suppose that's why they left the task to >",200,30);
    } else if (text == 64) {
        charHermes.update();
        darkness.update();
        premisesFrame.context.strokeText("Hermes: me; I am the robot, after all.",200,30);
    } else if (text == 65) {
        charHermes.update();
        darkness.update();
        premisesFrame.context.strokeText("Amelia: True... I'm sorry if this sounds naive, >",1000,30);
    } else if (text == 66) {
        charHermes.update();
        darkness.update();
        premisesFrame.context.strokeText("Amelia: but, does it ever feel... bleak? Pointless?",1000,30);
    } else if (text == 67) {
        charHermes.update();
        darkness.update();
        premisesFrame.context.strokeText("Hermes: Does what feel that way?",200,30);
    } else if (text == 68) {
        charHermes.update();
        darkness.update();
        premisesFrame.context.strokeText("Amelia: Life? Or... your, erm, existence?",1000,30);
    } else if (text == 69) {
        charHermes.update();
        envData.update();
        premisesFrame.context.strokeText("Hermes: No, hardly. Though I suppose I might have >",200,30);
    } else if (text == 70) {
        charHermes.update();
        envData.update();
        premisesFrame.context.strokeText("Hermes: different pursuits than humans.",200,30);
    } else if (text == 71) {
        charHermes.update();
        envData.update();
        premisesFrame.context.strokeText("Amelia: Do I dare ask?",1000,30);
    } else if (text == 72) {
        charHermes.update();
        envData.update();
        premisesFrame.context.strokeText("Hermes: Right now I'm compelled by the choices >",200,30);
    } else if (text == 73) {
        charHermes.update();
        envData.update();
        premisesFrame.context.strokeText("Hermes: road networks have to make regarding >",200,30);
    } else if (text == 74) {
        charHermes.update();
        envData.update();
        premisesFrame.context.strokeText("Hermes: efficiency. A system of true democracy, >",200,30);
    } else if (text == 75) {
        charHermes.update();
        envData.update();
        premisesFrame.context.strokeText("Hermes: but individual demand takes precedence.",200,30);
    } else if (text == 76) {
        charHermes.update();
        darkness.update();
        premisesFrame.context.strokeText("Amelia: Sounds over my head.",1000,30);
    } else if (text == 77) {
        charHermes.update();
        darkness.update();
        premisesFrame.context.strokeText("Hermes: I doubt it, but I am sure there are other >",200,30);
    } else if (text == 78) {
        charHermes.update();
        darkness.update();
        premisesFrame.context.strokeText("Hermes: things on your mind.",200,30);
    } else if (text == 79) {
        charHermes.update();
        envWheel.update();
        premisesFrame.context.strokeText("Amelia: Jim.",1000,30);
    } else if (text == 80) {
        charHermes.update();
        envWheel.update();
        premisesFrame.context.strokeText("Hermes: The police officer, yes?",200,30);
    } else if (text == 81) {
        charHermes.update();
        envWheel.update();
        premisesFrame.context.strokeText("Amelia: I want to see him again.",1000,30);
    } else if (text == 82) {
        charHermes.update();
        envWheel.update();
        premisesFrame.context.strokeText("Hermes: As I've mentioned, unfortunately this would >",200,30);
    } else if (text == 83) {
        charHermes.update();
        envDocks.update();
        premisesFrame.context.strokeText("Hermes: jeopardize the stability of the operation.",200,30);
    } else if (text == 84) {
        charHermes.update();
        envDocks.update();
        premisesFrame.context.strokeText("Amelia: He's the only one besides you that knows >",1000,30);
    } else if (text == 85) {
        charHermes.update();
        envDocks.update();
        premisesFrame.context.strokeText("Amelia: anything about who I am.",1000,30);
    } else if (text == 86) {
        charJim.update();
        envDocks.update();
        premisesFrame.context.strokeText("Jim: Excuse me miss, are you 'here to mine data'?",200,30);
    } else if (text == 87) {
        charJim.update();
        envWheel.update();
        premisesFrame.context.strokeText("Amelia: Yes.",1000,30);
    } else if (text == 88) {
        charJim.update();
        envWheel.update();
        premisesFrame.context.strokeText("Jim: Why don't you hop in.",200,30);
    } else if (text == 89) {
        charJim.update();
        envDash.update();
        premisesFrame.context.strokeText("Jim: I'm Jim, it's nice to meet you.",200,30);
    } else if (text == 90) {
        charJim.update();
        envDash.update();
        premisesFrame.context.strokeText("Jim: ...",200,30);
    } else if (text == 91) {
        charJim.update();
        envDash.update();
        premisesFrame.context.strokeText("Jim: Got any kids?",200,30);
    } else if (text == 92) {
        charJim.update();
        envDash.update();
        premisesFrame.context.strokeText("Amelia: I'm not discussing that with you.",1000,30);
    } else if (text == 93) {
        charJim.update();
        envDash.update();
        premisesFrame.context.strokeText("Jim: Sure. I've got a daughter, over in Northborough.",200,30);
    } else if (text == 94) {
        charJim.update();
        envSign.update();
        premisesFrame.context.strokeText("Jim: Promised admittance into their academy in a >",200,30);
    } else if (text == 95) {
        charJim.update();
        envSign.update();
        premisesFrame.context.strokeText("Jim: few years.",200,30);
    } else if (text == 96) {
        charJim.update();
        envSign.update();
        premisesFrame.context.strokeText("Jim: I don't have any allegiance to South Academy >",200,30);
    } else if (text == 97) {
        charJim.update();
        envSign.update();
        premisesFrame.context.strokeText("Jim: of course, seeing as I'm doing this, >",200,30);
    } else if (text == 98) {
        charJim.update();
        envSign.update();
        premisesFrame.context.strokeText("Jim: or to Northborough, for that matter.",200,30);
    } else if (text == 99) {
        charJim.update();
        envSign.update();
        premisesFrame.context.strokeText("Jim: Just looking to do what's best for me >",200,30);
    } else if (text == 100) {
        charJim.update();
        envSign.update();
        premisesFrame.context.strokeText("Jim: And my kid.",200,30);

        //Queue song 1
    } else if (text == 101) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: I'm sorry, I know it must be difficult, >",200,30);
    } else if (text == 102) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: but as Jim seemed to mention to you as >",200,30);
    } else if (text == 103) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: he brought you from the docks to here, >",200,30);
    } else if (text == 104) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: he was looking to do what was best for >",200,30);
    } else if (text == 105) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: him and his child. Just as you are.",200,30);
    } else if (text == 106) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Amelia: But, how can this be what is best?",1000,30);
    } else if (text == 107) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Amelia: What kind of... What kind of world >",1000,30);
    } else if (text == 108) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Amelia: are we living in?",1000,30);
    } else if (text == 109) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: From what I understand about human >",200,30);
    } else if (text == 110) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: history this is a... unique time >",200,30);
    } else if (text == 111) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: and place in the world.",200,30);
    } else if (text == 112) {
        charLeon.update();
        envDocks.update();
        premisesFrame.context.strokeText("Leon: You're doing a great thing for >",200,30);
    } else if (text == 113) {
        charLeon.update();
        envDocks.update();
        premisesFrame.context.strokeText("Leon: your son, Miss Jordan.",200,30);
        //Queue song 2
    } else if (text == 114) {
        charLeon.update();
        envDocks.update();
        premisesFrame.context.strokeText("Amelia: So the earnings go directly towards >",1000,30);
    } else if (text == 115) {
        charLeon.update();
        envDocks.update();
        premisesFrame.context.strokeText("Amelia: Sam's school, room, and board, yes?",1000,30);
    } else if (text == 116) {
        charLeon.update();
        envDocks.update();
        premisesFrame.context.strokeText("Leon: And a weekly allowance for him to spend >",200,30);
    } else if (text == 117) {
        charLeon.update();
        envDocks.update();
        premisesFrame.context.strokeText("Leon: as he would like, yes.",200,30);
    } else if (text == 118) {
        charLeon.update();
        envDocks.update();
        premisesFrame.context.strokeText("Amelia: What if he, I don't know, uses it to buy>",1000,30);
    } else if (text == 119) {
        charLeon.update();
        envDocks.update();
        premisesFrame.context.strokeText("Amelia: drugs, or something?",1000,30);
    } else if (text == 120) {
        charLeon.update();
        envDocks.update();
        premisesFrame.context.strokeText("Leon: I can assure you we wouldn't allow that here.",200,30);
    } else if (text == 121) {
        charLeon.update();
        envDocks.update();
        premisesFrame.context.strokeText("Leon: A localized AI will instruct you from here on >",200,30);
    } else if (text == 122) {
        charLeon.update();
        envData.update();
        premisesFrame.context.strokeText("Leon: out. He'll be a messenger between you, me, >",200,30);
    } else if (text == 123) {
        charLeon.update();
        envData.update();
        premisesFrame.context.strokeText("Leon: and Sam. He'll also be available for your >",200,30);
    } else if (text == 124) {
        charLeon.update();
        envData.update();
        premisesFrame.context.strokeText("Leon: council, if need be. The boat will be >",200,30);
    } else if (text == 125) {
        charLeon.update();
        envBoat.update();
        premisesFrame.context.strokeText("Leon: arriving soon. Please head to the docks.",200,30);
    } else if (text == 126) {
        charHermes.update();
        darkness.update();
        premisesFrame.context.strokeText("Hermes: The boat will be here soon, Miss Jordan.",200,30);
    } else if (text == 127) {
        charHermes.update();
        darkness.update();
        premisesFrame.context.strokeText("Amelia: I don't know how long I can keep this up >",1000,30);
    } else if (text == 128) {
        charHermes.update();
        darkness.update();
        premisesFrame.context.strokeText("Amelia: Hermes.",1000,30);
    } else if (text == 129) {
        charSylvie.update();
        envGlass.update();
        premisesFrame.context.strokeStyle="purple";
        premisesFrame.context.strokeText("Sylvie: I don't know how long I can keep this up >",200,20);
    } else if (text == 130) {
        charSylvie.update();
        envGlass.update();
        premisesFrame.context.strokeStyle="purple";
        premisesFrame.context.strokeText("Sylvie: Amelia.",200,30);
    } else if (text == 131) {
        charSylvie.update();
        envGlass.update();
        premisesFrame.context.strokeText("Amelia: What do you mean? This research... this is >",1000,20);
    } else if (text == 132) {
        charSylvie.update();
        envGlass.update();
        premisesFrame.context.strokeText("Amelia: your life's work, Sylvie.",1000,30);
    } else if (text == 133) {
        charSylvie.update();
        envDinner.update();
        premisesFrame.context.strokeStyle="purple";
        premisesFrame.context.strokeText("Sylvie: There's more to life than work.",200,30);
    } else if (text == 134) {
        charSylvie.update();
        envDinner.update();
        premisesFrame.context.strokeText("Amelia: W- of course there is, but, didn't this work >",1000,20);
    } else if (text == 135) {
        charSylvie.update();
        envDinner.update();
        premisesFrame.context.strokeText("Amelia: give you the opportunity to be at a place >",1000,20);
    } else if (text == 136) {
        charSylvie.update();
        envDinner.update();
        premisesFrame.context.strokeText("Amelia: like this?",1000,30);
    } else if (text == 137) {
        charSylvie.update();
        envDinner.update();
        premisesFrame.context.strokeStyle="purple";
        premisesFrame.context.strokeText("Sylvie: That's true, it did. And I appreciate some of >",200,20);
    } else if (text == 138) {
        charSylvie.update();
        envExt.update();
        premisesFrame.context.strokeStyle="purple";
        premisesFrame.context.strokeText("Sylvie: the people I've met, you being one of them >",200,20);
    } else if (text == 139) {
        charSylvie.update();
        envExt.update();
        premisesFrame.context.strokeStyle="purple";
        premisesFrame.context.strokeText("Sylvie: of course. But this whole atmosphere... The >",200,20);
    } else if (text == 140) {
        charSylvie.update();
        envExt.update();
        premisesFrame.context.strokeStyle="purple";
        premisesFrame.context.strokeText("Sylvie: conquest for knowledge... Don't you think it's >",200,20);
    } else if (text == 141) {
        charSylvie.update();
        envExt.update();
        premisesFrame.context.strokeStyle="purple";
        premisesFrame.context.strokeText("Sylvie: a bit... hostile? I'd call myself cynical but, >",200,20);
    } else if (text == 142) {
        charSylvie.update();
        envExt.update();
        premisesFrame.context.strokeStyle="purple";
        premisesFrame.context.strokeText("Sylvie: just look at it! We've bought up half the city >",200,20);
    } else if (text == 143) {
        charSylvie.update();
        envExt.update();
        premisesFrame.context.strokeStyle="purple";
        premisesFrame.context.strokeText("Sylvie: for Christ's sake, and Northborough's >",200,20);
    } else if (text == 144) {
        charSylvie.update();
        envExt.update();
        premisesFrame.context.strokeStyle="purple";
        premisesFrame.context.strokeText("Sylvie: doing the same.",200,30);
    } else if (text == 145) {
        charSylvie.update();
        envExt.update();
        premisesFrame.context.strokeText("Amelia: Maybe, you're looking at too big a picture... >",1000,30);
    } else if (text == 146) {
        charSylvie.update();
        envData.update();
        premisesFrame.context.strokeText("Amelia: Hey, um, did you send an email to >",1000,30);
    } else if (text == 147) {
        charSylvie.update();
        envData.update();
        premisesFrame.context.strokeText("Amelia: Dr. Richards about the request for the paper >",1000,30);
    } else if (text == 148) {
        charSylvie.update();
        envData.update();
        premisesFrame.context.strokeText("Amelia: on the quick verification algorithm?",1000,30);
    } else if (text == 149) {
        charSylvie.update();
        envData.update();
        premisesFrame.context.strokeStyle="purple";
        premisesFrame.context.strokeText("Sylvie: I sent it to him this morning... What do you >",200,20);
    } else if (text == 150) {
        charSylvie.update();
        darkness.update();
        premisesFrame.context.strokeStyle="purple";
        premisesFrame.context.strokeText("Sylvie: think of him, by the way?",200,20);
    } else if (text == 151) {
        charSylvie.update();
        darkness.update();
        premisesFrame.context.strokeText("Amelia: Dr Richards?",1000,30);
    } else if (text == 152) {
        charSylvie.update();
        darkness.update();
        premisesFrame.context.strokeStyle="purple";
        premisesFrame.context.strokeText("Sylvie: Yeah, Arnold.",200,20);
    } else if (text == 153) {
        charSylvie.update();
        darkness.update();
        premisesFrame.context.strokeText("Amelia: I think he's friendly.",1000,30);
    } else if (text == 154) {
        charSylvie.update();
        darkness.update();
        premisesFrame.context.strokeStyle="purple";
        premisesFrame.context.strokeText("Sylvie: I think he's a good man. Someone with a >",200,20);
    } else if (text == 155) {
        charSylvie.update();
        darkness.update();
        premisesFrame.context.strokeStyle="purple";
        premisesFrame.context.strokeText("Sylvie: real sense of the power of knowledge, and >",200,20);
    } else if (text == 156) {
        charSylvie.update();
        darkness.update();
        premisesFrame.context.strokeStyle="purple";
        premisesFrame.context.strokeText("Sylvie: the responsibilities of holding it. >",200,20);
    } else if (text == 157) {
        charSylvie.update();
        darkness.update();
        premisesFrame.context.strokeStyle="purple";
        premisesFrame.context.strokeText("Sylvie: I might ask him out on a date.",200,20);
    } else if (text == 158) {
        charSylvie.update();
        darkness.update();
        premisesFrame.context.strokeText("Amelia: I'm sure he'd be happy to join you.",1000,30);
    } else if (text == 159) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: Miss Jordan, this is difficult work.",200,30);
    } else if (text == 160) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: There's a lot of snap decisions to be >",200,30);
    } else if (text == 161) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: made. A lot weighing on your shoulders.",200,30);
    } else if (text == 162) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: That's what I'm here for. Partly.",200,30);
    } else if (text == 163) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Amelia: Just had to throw that last bit in there.",1000,30);
    } else if (text == 164) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: The other part is to keep you in touch >",200,30);
    } else if (text == 165) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: with Sam, and supply Mr. Bolden >",200,30);
    } else if (text == 166) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: with information critical to >",200,30);
    } else if (text == 167) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: Northborough's development.",200,30);
    } else if (text == 168) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Amelia: Just... tell Sam I love him, okay? And... >",1000,30);
    } else if (text == 169) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Amelia: stop calling me Miss Jordan, just call >",1000,30);
    } else if (text == 170) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Amelia: me Amelia for crying out loud.",1000,30);
    } else if (text == 171) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Hermes: Okay, Amelia. Take care.",200,30);
    } else if (text == 172) {
        charHermes.update();
        envWindow.update();
        premisesFrame.context.strokeText("Amelia: You too you bucket of bolts.",1000,30);
        //Queue song 3
    } else {
        darknessLarge.update();
    }

}