/*
* ***GENERIC STUFF.***
*/

var text = 0;
var frame = 0;
var introSong = new sound("/keiths-site/image_dir/theaterBackground.mp3");
var introSong2 = new sound("/keiths-site/image_dir/theaterBackground2.mp3");
var introSong3 = new sound("/keiths-site/image_dir/theaterBackground3.mp3");
var introSong4 = new sound("/keiths-site/image_dir/theaterBackground4.mp3");

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
            break;
    }
}

/*
* ***TRAIN STUFF.***
*/

function startTrainFrame() {
    if (frame == 2) {
        stopPremisesFrame();
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
    }
    //Creating shapes and image components

    guy = new component(400, 400, "/keiths-site/image_dir/hermesPortrait.png", 0, 0, "image", premisesFrame);
    apartment = new component(400, 400, "/keiths-site/image_dir/windowView.png", 400, 0, "image", premisesFrame);
    woman = new component(400, 400, "/keiths-site/image_dir/ameliaPortrait.png", 800, 0, "image", premisesFrame);

    if (frame != 2) {
        premisesFrame.start();
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

    premisesFrame.clear();
    guy.update();
    apartment.update();
    woman.update();


    //Creating text.
    premisesFrame.context.textAlign = "center"
    premisesFrame.context.font = "16px Arial";
    premisesFrame.context.strokeStyle="aqua";

    if (text == 0) {
        premisesFrame.context.strokeText("(Click on Frame and press Enter to begin.)",600,100);
        //Queue song 3
    } else if (text == 1) {
        premisesFrame.context.strokeText("Hermes: Your meeting with Dr. Richards...",200,30);
    } else if (text == 2) {
        premisesFrame.context.strokeText("Hermes: It all went according to plan?",200,30);
    } else if (text == 3) {
        premisesFrame.context.strokeText("Amelia: Yeah, it did. I have the data stored _",1000,30);
    } else if (text == 4) {
        premisesFrame.context.strokeText("Amelia: on here. Here, I'll plug it in.",1000,30);
    } else if (text == 5) {
        premisesFrame.context.strokeText("Hermes: Thank you. You'll be receiving word _",200,30);
    } else if (text == 6) {
        premisesFrame.context.strokeText("Hermes: from Mr. Bolden soon about your payment.",200,30);
    } else if (text == 7) {
        premisesFrame.context.strokeText("Amelia: Okay.",1000,30);
    } else if (text == 8) {
        premisesFrame.context.strokeText("Hermes: Is there anything else, Miss Jordan?",200,30);
    } else if (text == 9) {
        premisesFrame.context.strokeText("Amelia: I... I think he knew.",1000,30);
    } else if (text == 10) {
        premisesFrame.context.strokeText("Hermes: I'm sorry, I don't quite understand.",200,30);
    } else if (text == 11) {
        premisesFrame.context.strokeText("Amelia: Dr. Richards. I think he knew what I _",1000,30);
    } else if (text == 12) {
        premisesFrame.context.strokeText("Amelia: was up to, with the data he let me access.",1000,30);
    } else if (text == 13) {
        premisesFrame.context.strokeText("Hermes: What gives you that impression?",200,30);
    } else if (text == 14) {
        premisesFrame.context.strokeText("Amelia: He said to me, when I was leaving...",1000,30);
    } else if (text == 15) {
        premisesFrame.context.strokeText("Arnold: Amelia, do you know who developed the _",200,30);
    } else if (text == 16) {
        premisesFrame.context.strokeText("Arnold: algorithm used in that paper?",200,30);
    } else if (text == 17) {
        premisesFrame.context.strokeText("Amelia: N-no, sorry, unfortunately I _",1000,30);
    } else if (text == 18) {
        premisesFrame.context.strokeText("Amelia: still don't know much about the paper; _",1000,30);
    } else if (text == 19) {
        premisesFrame.context.strokeText("Amelia: I'm just retrieving what Dr. Mason asked for.",1000,30);
    } else if (text == 20) {
        premisesFrame.context.strokeText("Arnold: It was a brilliant mathematician at MIT, _",150,20);
    } else if (text == 21) {
        premisesFrame.context.strokeText("Arnold: Working alongside a statisticians from _",150,20);
    } else if (text == 22) {
        premisesFrame.context.strokeText("Arnold: Carnegie Mellon and Harvard.",150,20);
    } else if (text == 23) {
        premisesFrame.context.strokeText("Amelia: Oh... I see.",150,20);
    } else if (text == 24) {
        premisesFrame.context.strokeText("Arnold: Heh, I suppose it's just that... Well _",150,20);
    } else if (text == 25) {
        premisesFrame.context.strokeText("Arnold: you wouldn't see that today, would you.",150,20);
    } else if (text == 26) {
        premisesFrame.context.strokeText("Amelia: No, I suppose not.",150,20);
    } else if (text == 27) {
        premisesFrame.context.strokeText("Arnold: Part of the moral obligation of being a _",150,20);
    } else if (text == 28) {
        premisesFrame.context.strokeText("Arnold: librarian as far as I'm concerned is sharing _",150,20);
    } else if (text == 29) {
        premisesFrame.context.strokeText("Arnold: resources you've helped collect responsibly. _",150,20);
    } else if (text == 30) {
        premisesFrame.context.strokeText("Arnold: Today it's... hard to know what's responsible.",150,20);
    } else if (text == 31) {
        premisesFrame.context.strokeText("Hermes: Did he sound at all... accusatory? Hesitant?",150,20);
    } else if (text == 19) {
        premisesFrame.context.strokeText("Amelia: Not at all. More like... despondent... melancholic. Does he work for Mr. Bolden as well?",150,20);
    } else if (text == 20) {
        premisesFrame.context.strokeText("Hermes: I cannot know for certain due to legal restrictions, but I can almost certainly say he does not. He's too high-ranking a member of South Institute.",150,20);
    } else if (text == 21) {
        premisesFrame.context.strokeText("Amelia: Ah, I see, you only work with the lowest of the low.",150,20);
    } else if (text == 22) {
        premisesFrame.context.strokeText("Hermes: Your attempts at humor are puzzling Miss Jordan... I could bring up the incident to Mr. Bolden, if you'd like. But it sounds to me to be either a harmless acknowledgement or coincidence.",150,20);
    } else if (text == 23) {
        premisesFrame.context.strokeText("Amelia: Oh, that? No, I wasn't... I didn't want you to tell Leon. I was just saying it, to you.",150,20);
    } else if (text == 24) {
        premisesFrame.context.strokeText("Hermes: Hm, I see. Right then I'll bring this data back to Mr. Bolden and-",150,20);
    } else if (text == 25) {
        premisesFrame.context.strokeText("Amelia: Wait, Hermes...",150,20);
    } else if (text == 26) {
        premisesFrame.context.strokeText("Hermes: Hm?",150,20);
    } else if (text == 27) {
        premisesFrame.context.strokeText("Amelia: Do you have time to talk?",150,20);
    } else if (text == 28) {
        premisesFrame.context.strokeText("Hermes: Well the boat leaves in about an hour, so I could give you about half that. Is that alright?",150,20);
    } else if (text == 29) {
        premisesFrame.context.strokeText("Amelia: Guh, that damn boat, still gives me nightmares.",150,20);
    } else if (text == 30) {
        premisesFrame.context.strokeText("Hermes: It was a bit gloomy in there wasn't it.",150,20);
        //Queue song 1
    } else if (text == 31) {
        premisesFrame.context.strokeText("Amelia: That would be an understatement.",150,20);
    } else if (text == 32) {
        premisesFrame.context.strokeText("Hermes: Well, it's what the job calls for, I suppose.",150,20);
    } else if (text == 33) {
        premisesFrame.context.strokeText("Amelia: I don't see how you do it every week, I'd go insane.",150,20);
    } else if (text == 34) {
        premisesFrame.context.strokeText("Hermes: I suppose that's why they left the task to me; I am the robot, after all.",150,20);
    } else if (text == 35) {
        premisesFrame.context.strokeText("Amelia: True... I'm sorry if this sounds crass, but, does it ever feel... bleak? Pointless?",150,20);
    } else if (text == 36) {
        premisesFrame.context.strokeText("Hermes: Does what feel that way?",150,20);
    } else if (text == 37) {
        premisesFrame.context.strokeText("Amelia: Life? Or... your, erm, existence?",150,20);
    } else if (text == 38) {
        premisesFrame.context.strokeText("Hermes: No, hardly. Though I suppose I might have different pursuits than humans.",150,20);
    } else if (text == 39) {
        premisesFrame.context.strokeText("Amelia: Do I dare ask?",150,20);
    } else if (text == 40) {
        premisesFrame.context.strokeText("Hermes: Right now I'm compelled by the choices road networks have to make regarding efficiency... A system capable of true democracy, but individual demand takes precedence...",150,20);
    } else if (text == 41) {
        premisesFrame.context.strokeText("Amelia: Sounds over my head.",150,20);
    } else if (text == 42) {
        premisesFrame.context.strokeText("Hermes: I doubt it, but I am sure there are other things on your mind.",150,20);
    } else if (text == 43) {
        premisesFrame.context.strokeText("Amelia: Jim.",150,20);
    } else if (text == 44) {
        premisesFrame.context.strokeText("Hermes: The police officer, yes?",150,20);
    } else if (text == 45) {
        premisesFrame.context.strokeText("Amelia: I want to see him again.",150,20);
    } else if (text == 46) {
        premisesFrame.context.strokeText("Jim: I want to see you again.",150,20);
    } else if (text == 47) {
        premisesFrame.context.strokeText("Amelia: I don't think it's a good idea.",150,20);
    } else if (text == 48) {
        premisesFrame.context.strokeText("Jim: Why?",150,20);
    } else if (text == 49) {
        premisesFrame.context.strokeText("Amelia: I'm too... busy.",150,20);
    } else if (text == 50) {
        premisesFrame.context.strokeText("Jim: I'm sorry but that is complete bullshit and you know it. Actually I'm not sorry.",150,20);
    } else if (text == 51) {
        premisesFrame.context.strokeText("Amelia: Well, I am sorry, because this was a mistake and-",150,20);
    } else if (text == 52) {
        premisesFrame.context.strokeText("Jim: A mistake! I must be missing something here. I've been happy and you've been happy, yeah?",150,20);
    } else if (text == 53) {
        premisesFrame.context.strokeText("Amelia: Yes, but-",150,20);
    } else if (text == 54) {
        premisesFrame.context.strokeText("Jim: Then what else is there? Because clearly there's something. What, somebody else?",150,20);
        //Queue song 1
    } else if (text == 55) {
        premisesFrame.context.strokeText("Amelia: Yes.",150,20);
    } else if (text == 56) {
        premisesFrame.context.strokeText("Jim: ... Okay then.",150,20);
    } else if (text == 57) {
        premisesFrame.context.strokeText("Amelia: Jim, I'm sorry, I have to go now.",150,20);
    } else if (text == 58) {
        premisesFrame.context.strokeText("Jim: Okay.",150,20);
    } else if (text == 59) {
        premisesFrame.context.strokeText("Amelia: It was the easiest way of cutting the whole thing in half. Lying like that.",150,20);
    } else if (text == 60) {
        premisesFrame.context.strokeText("Hermes: I agree that it was probably by far the easiest resolution, but painful, nonetheless, I'm sure.",150,20);
    } else if (text == 61) {
        premisesFrame.context.strokeText("Amelia: I get so lonely all! I feel like the only person... only thing, that knows anything about my life is you, a machine!",150,20);
    } else if (text == 62) {
        premisesFrame.context.strokeText("Hermes: I understand.",150,20);
    } else if (text == 63) {
        premisesFrame.context.strokeText("Amelia: I'm sorry, I didn't mean that.",150,20);
    } else if (text == 64) {
        premisesFrame.context.strokeText("Hermes: That's alright. But, as tough as this ordeal was, you can know that you did the right thing for your own safety and for Sam's wellbeing.",150,20);
    } else if (text == 65) {
        premisesFrame.context.strokeText("Amelia: Why should it come down to that though? Why is my son being deprived of his only available parent just to guarantee he has a place to stay and food to eat? I mean, what kind of world has this become?",150,20);
    } else if (text == 66) {
        premisesFrame.context.strokeText("Hermes: Unfortunately the world is all too full of these sorts of stories, Miss Jordan.",150,20);
    } else if (text == 67) {
        premisesFrame.context.strokeText("Amelia: Really? A single mother supporting her child by smuggling data from one institution to the next?",150,20);
    } else if (text == 68) {
        premisesFrame.context.strokeText("Hermes: Yes, and ones just like it.",150,20);
    } else if (text == 69) {
        premisesFrame.context.strokeText("Leon: You're doing a great thing for your son Miss Jordan.",150,20);
        //Queue song 2
    } else if (text == 70) {
        premisesFrame.context.strokeText("Amelia: So the earnings go directly towards Sam's school, room, and board, yes?",150,20);
    } else if (text == 71) {
        premisesFrame.context.strokeText("Leon: And a weekly allowance for him to spend as he would like, yes.",150,20);
    } else if (text == 72) {
        premisesFrame.context.strokeText("Amelia: What if he, I don't know, uses it to buy drugs, or something?",150,20);
    } else if (text == 73) {
        premisesFrame.context.strokeText("Leon: I can assure you we wouldn't allow that here.",150,20);
    } else if (text == 74) {
        premisesFrame.context.strokeText("Leon: A localized AI-RC will instruct you from here on out. He'll be a messenger between you, me, and Sam. And he'll also be available for counseling, if need be. The boat will be arriving within a half hour. Please head down to the docks.",150,20);
    } else if (text == 75) {
        premisesFrame.context.strokeText("Hermes: The boat will be here soon, Miss Jordan.",150,20);
    } else if (text == 76) {
        premisesFrame.context.strokeText("Amelia: I don't know how long I can keep this up Hermes.",150,20);
    } else if (text == 77) {
        premisesFrame.context.strokeText("Sylvie: I don't know how long I can keep this up Amelia.",150,20);
    } else if (text == 78) {
        premisesFrame.context.strokeText("Amelia: What do you mean? This research... this is your life's work, Sylvie.",150,20);
    } else if (text == 79) {
        premisesFrame.context.strokeText("Sylvie: There's more to life than work.",150,20);
    } else if (text == 80) {
        premisesFrame.context.strokeText("Amelia: W- of course there is, but, didn't this work give you the opportunity to be at a place like this?",150,20);
    } else if (text == 81) {
        premisesFrame.context.strokeText("Sylvie: That's true, it did. And I appreciate some of the people I've met, you being one of them of course. But this whole atmosphere. This... conquest for knowledge... Don't you think it's a bit... hostile? I'd call myself cynical but, just look at it! We've bought up half the city for Christ's sake, and Northborough's doing the same.",150,20);
    } else if (text == 82) {
        premisesFrame.context.strokeText("Amelia: Maybe, you're looking at too big a picture... Hey, um, did you send an email to Dr. Richards about the request for the paper on the quick verification algorithm?",150,20);
    } else if (text == 83) {
        premisesFrame.context.strokeText("Sylvie: I sent it to him this morning... What do you think of him, by the way?",150,20);
    } else if (text == 84) {
        premisesFrame.context.strokeText("Amelia: Dr Richards?",150,20);
    } else if (text == 85) {
        premisesFrame.context.strokeText("Sylvie: Yeah, Arnold.",150,20);
    } else if (text == 86) {
        premisesFrame.context.strokeText("Amelia: I think he's very friendly.",150,20);
    } else if (text == 87) {
        premisesFrame.context.strokeText("Sylvie: I think he's a good man. Someone with a real sense of the power of knowledge, and the responsibilities of holding it. I think I might have him take me on a date.",150,20);
    } else if (text == 88) {
        premisesFrame.context.strokeText("Amelia: I'm sure he'd be happy to.",150,20);
    } else if (text == 89) {
        premisesFrame.context.strokeText("Hermes: There's a lot weighing on your shoulders Miss Jordan. That's what I'm here for. Partly.",150,20);
    } else if (text == 90) {
        premisesFrame.context.strokeText("Amelia: Just had to throw that last bit in there.",150,20);
    } else if (text == 91) {
        premisesFrame.context.strokeText("Hermes: The other part is to keep you in touch with Sam, and supply Mr. Bolden with information critical to Northborough's development.",150,20);
    } else if (text == 92) {
        premisesFrame.context.strokeText("Amelia: Just... tell Sam I love him, okay? And... stop calling me Miss Jordan, just call me Amelia for crying out loud.",150,20);
    } else if (text == 93) {
        premisesFrame.context.strokeText("Hermes: Okay, Amelia. Take care.",150,20);
    } else if (text == 94) {
        premisesFrame.context.strokeText("Amelia: You too you bucket of bolts.",150,20);
        //Queue song 3
    } else {
        text = 1;
    }

}