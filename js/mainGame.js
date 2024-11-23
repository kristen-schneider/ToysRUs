// const personalities = {
//     "Onion": 0, // The Innovator
//     "Broccoli": 0, // The Strategist
//     "Corn": 0, // The Empath
//     "Garlic": 0, // The Leader
//     "Jalapeno": 0, // The Adventurer
//     "Kale": 0, // The Analyst
//     "Green Beans": 0, // The Connector
//     "Sweet Potato": 0, // The Caregiver
//     "Carrot": 0, // The Visionary
//     "Lotus Root": 0, // The Organizer
//     "Bitter melon": 0, // The Maverick
//     "Potato": 0, // The Realist
//     "Pumpkin": 0, // The Sage
//     "Napa Cabbage": 0, // The Harmonizer
//     "Bok Choy": 0, // The Performer
//     "Okra": 0 // The Investigator
// };

const personalities = {
    "Tracksuit": 0, // The Initiator
    "Designer Bags": 0, // The Strategist
    "Colorful Patterns": 0, // The Empath
    "Rolex": 0, // The Leader
    "Band Tee": 0, // The Rebel
    "Cape": 0, // The Antagonist
    "Classic Denim Jeans": 0, // The Connector/Includer
    "Cargo Pants": 0, // The Caregiver
    "Overalls": 0, // The Chaos
    "Flannel": 0, // The Resourceful One
    "Chucks": 0, // The One Everyone Wants to Be
    "Turtlenecks": 0, // The Realist
    "Animal Print": 0, // The Wildcard
    "Puka Shells": 0, // The Type B, go with the flow
    "Boat Shoes": 0, // The Performer
    "Baseball Cap": 0 // The Reliable One
};
const gameData = {
    "1": {
        "text": "Welcome aboard, ye scurvy dog! I be Captain Lizard Neck. I thank ye for joinin' the crew; though" +
            " I reckon it weren’t by yer own will. If ye keep yer lips sealed from the rest o’ the crew," +
            " I’ll let ye choose yer fate—what be yer job, eh?!",
        "choices": {
            "The one with the compass, please. I have ideas about places to be.":
                [2,["Tracksuit", "Boat Shoes", "Rolex", "Cargo Pants", "Chucks", "Designer Bags", "Flannel", "Baseball Cap", "Turtlenecks"]],
            "Head Chef! I make a mean bone-broth stew. Any bones will do.":
                [3,["Colorful Patterns", "Classic Denim Jeans", "Flannel", "Baseball Cap", "Boat Shoes"]],
            "Anywhere will do...(I'm planning on leading an mutiny anyway)":
                [5,["Cape", "Animal Print", "Overalls", "Band Tee"]],
            "Is there an opening for Ship Monkey? Or Parrot on Shoulder?":
                [, ["Puka Shells", "Animal Print", "Overalls", "Boat Shoes"]]
        }
    },
    "2": {
        "text": "Aye, that seems like my job, matey..." +
            "but I won’t be makin’ ye walk the plank just yet. Where’d ye have in mind?",
        "choices": {
            "Treasure Island', DUH!":
                [5,["Rolex", "Designer Bags", "Tracksuit", "Band Tee", "Cargo Pants", "Overalls", "Chucks", "Animal Print"]],
            "Somewhere with lots of palm trees and sandy beaches...and rum.":
                [5, ["Designer Bags", "Boat Shoes"]],
            "I didn't have that many ideas actually. Hoped the compass was one of those that pointed to what I desired most.":
                [5, ["Baseball Cap", "Flannel", "Classic Denim Jeans", "Overalls", "Turtlenecks", "Animal Print", "Puka Shells"]],
            "BACK TO LAND!!!":
                [5, ["Colorful Patterns", "Cape"]]
        }
    },
    "3": {
        "text": "Ay ay, matey! Head below deck t' meet the rest o' the crew. " +
            "Out o' curiosity, what kind o' grub can ye whip up... 'sides stew?",
        "choices": {
            "Anything you like, captain!":
                [5,["Tracksuit", "Colorful Patterns", "Classic Denim Jeans", "Flannel", "Baseball Cap", "Cargo Pants", "Turtlenecks"]],
            "I'm actually a Pastry Chef, by training; so I've been thinking a lot about nautical-pies.":
                [5, ["Boat Shoes", "Cargo Pants", "Cape", "Flannel", "Chucks", "Animal Print"]],
            "Sushi, anyone?":
                [5, ["Boat Shoes", "Tracksuit", "Designer Bags", "Rolex", "Animal Print"]],
            "Nah, just stew.":
                [5, ["Cape", "Baseball Cap", "Overalls", "Colorful Patterns", "Band Tee", "Puka Shells"]]
        }
    },
    "4": {
        "text": "Ye be a strange one. I won’t be makin’ ye walk the plank just yet," +
            " but I’ve got me eye on ye. Did ye bring anythin' aboard I should know about?.",
        "choices": {
            "Nothing but the clothes on my back, captain.":
                [5,["Puka Shells", "Tracksuit", "Colorful Patterns", "Classic Denim Jeans", "Flannel", "Baseball Cap", "Cargo Pants", "Turtlenecks", "Rolex", "Overalls", "Chucks"]],
            "Just a couple of bananas and seeds, in case I get hungry.":
                [5, ["Boat Shoes", "Cargo Pants", "Puka Shells", "Baseball Cap", "Overalls", "Flannel", "Chucks", "Turtlenecks"]],
            "I've got a whole treasure chest of gold and jewels! Wanna see?":
                [5, ["Puka Shells", "Animal Print", "Boat Shoes", "Cape", "Colorful Patterns"]],
            "That depends on what you think you should know about...":
                [5, ["Cape", "Band Tee", "Boat Shoes", "Animal Print", "Rolex"]]
        }
    },
    "5": {
        "text": "Arrrright then! Time t' set sail. I'll be checkin' in with ye later. Good luck, matey!" +
            "An' remember our bargain...keep yer lips sealed.",
        "choices": {
            "Ay ay, Captain Lizard Neck!":
            [0,["Boat Shoes", "Tracksuit", "Designer Bags", "Rolex", "Cargo Pants", "Chucks", "Flannel", "Baseball Cap", "Turtlenecks", "Classic Denim Jeans"]],
            "*Finger Guns*...Wait, no! HAHAHAH sorry...I didn't mean to point those at you. I'll put them away now.":
            [0,["Puka Shells", "Overalls", "Baseball Cap", "Chucks"]],
            "Sure! Before you go...which way is the deck?":
            [0,["Colorful Patterns", "Animal Print", "Puka Shells", "Overalls"]],
            "Later. (I've got a mutiny to plan)":
            [0,["Band Tee", "Cape", "Animal Print", "Rolex", "Turtlenecks"]]
        }
    },
    // "X": {
    //     "text": "",
    //     "choices": {
    //         "":
    //         [0,[]],
    //         "":
    //         [0,[]],
    //         "":
    //         [0,[]],
    //         "":
    //         [0,[]]
    //     }
    // },
    "0" : {

    }
};

let currentState = 1;

function renderState(state) {
    console.log("b");
    const storyText = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices');

    storyText.textContent = gameData[state].text;
    choicesContainer.innerHTML = '';

    for (const [choice, info] of Object.entries(gameData[state].choices)) {
        const button = document.createElement('button');
        button.textContent = choice;
        button.className = 'choice-button';
        let nextState = info[0];
        button.onclick = () => changeState(nextState, info[1]); //each time you change state you update the personalities dictionary
        choicesContainer.appendChild(button);
    }
}

function changeState(newState, selectedPersonalities) {
    console.log("changing states");
    console.log(personalities); 
    selectedPersonalities.forEach(personality => {
        personalities[personality]++;
    });

    currentState = newState;

    if (currentState === 0) {
        revealMostSelectedVegetable();
    } else {
        renderState(currentState);
    }
}

function revealMostSelectedVegetable() {
    console.log("calculating fate");
    let maxCount = 0;
    let maxVeggie = '';

    for (const [vegetable, count] of Object.entries(personalities)){
        if (count > maxCount) {
            maxCount = count;
            maxVeggie = vegetable;
        }
    }
    console.log(maxVeggie);
    const storyText = document.getElementById('story-text');
    storyText.textContent = `You are a ${maxVeggie}`;
    document.getElementById('choices').style.display = 'none';
}

function startGame() {
    document.querySelector('.title').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    renderState(currentState);
}

window.onload = () => {
    console.log("e");
    renderState(currentState);
};
