let start = {
    text: "House on the Hill - An Interactive Story",
    choiceA: "",
    choiceB: "",
    choice: function() {
        currentScene = outside;
    }
};

let outside = {
    index: 1,
    text: "One day, while walking home from school, you see a creepy old house at the top of a hill. Strange... you've never noticed it before.",
    choiceA: "1. go knock",
    choiceB: "2. keep walking",
    choice: function() {
        if (key === "1") {
            currentScene = door;
        } else if (key === "2") {
            currentScene = walk;
        }
    }
};

let door = {
    text: "You knock on the door and it swings open with an ominous creak.",
    choiceA: "1. go in",
    choiceB: "2. get outta there",
    choice: function() {
        if (key === "1") {
            currentScene = entrance;
        } else if (key === "2") {
            currentScene = walk;
        }
    }
};

let entrance = {
    text: "You enter into a dark and dusty entryway. Out of the corner of your eye you see a cat scurry up the stairs.",
    choiceA: "1. go upstairs",
    choiceB: "2. explore downstairs",
    choice: function() {
        if (key === "1") {
            currentScene = upstairs;
        } else if (key === "2") {
            currentScene = downstairs;
        }
    }
};


let downstairs = {
    text: "You walk into a dark kitchen. It smells like garlic and herbs and you see freshly cut vegetables on the cutting board. On the stove a pot is simmering.",
    choiceA: "1. see what's cooking",
    choiceB: "2. go back",
    choice: function() {
        if (key === "1") {
            currentScene = stove;
        } else if (key === "2") {
            currentScene = entrance;
        }
    }
};

let stove = {
    text: "You approach the stove. Suddenly, you hear a movement behind you! Before you can turn around you feel a knife pierce your heart. As you lose consiousness you think 'that food smells delicious.'",
    choiceA: "",
    choiceB: "",
    choice: function() {
        currentScene = start;
    }
};

let upstairs = {
    text: "You find yourself in a long, dark hallway. At the end of the hallway is an open door and what appears to be a flickering candle.",
    choiceA: "1. walk down the hallway",
    choiceB: "2. go back downstairs",
    choice: function() {
        if (key === "1") {
            currentScene = hallway;
        } else if (key === "2") {
            currentScene = entrance;
        }
    }
};

let hallway = {
    text: "You walk down the hallway towards the candlelight. To your right is an open window and you hear a soft humming noise coming from outside.",
    choiceA: "1. poke your head out the window",
    choiceB: "2. keep walking towards the open room",
    choice: function() {
        if (key === "1") {
            currentScene = openWindow;
        } else if (key === "2") {
            currentScene = room;
        }
    }
};

let openWindow = {
    text: "You stick your head out the open window to see where the noise is coming from. As you do, the window falls shut suddenly, decapitating you in a bloody mess.",
    choiceA: "",
    choiceB: "",
    choice: function() {
        currentScene = start;
    }
};

let room = {
    text: "You walk into the room. On a desk, next to the candle, someone has written a note.",
    choiceA: "1.read the note",
    choiceB: "2. leave the room",
    choice: function() {
        if (key === "1") {
            currentScene = note;
        } else if (key === "2") {
            currentScene = upstairs;
        }
    }
};

let note = {
    text: "You pick up the note and read: 'Where does a mummy go for vacation? The Dead Sea. Ha ha ha ha ha ha ha ha ha! Now get out of my house before I make a mummy out of you!!!'",
    choiceA: "1. run",
    choiceB: "2. run faster",
    choice: function() {
        if (key === "1") {
            currentScene = run;
        } else if (key === "2") {
            currentScene = run;
        }
    }
};


let run = {
    text: "You run out of the room, down the hallway, down the stairs, out the front door, and back onto the sidewalk. You run the rest of the way home. You never walk home that way again.",
    choiceA: "",
    choiceB: "",
    choice: function() {
        currentScene = start;
    }
};

let walk = {
    text: "You continue your walk and nothing interesting or extraordinary happens to you for the rest of the day or the rest of your life.",
    choiceA: "",
    choiceB: "",
    choice: function() {
        currentScene = start;
    }
};