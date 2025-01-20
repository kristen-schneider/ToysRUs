const gameData = {
    "1": {
        "text": "<3",
        "image" : "smaller_images/homepage.png",
        "choices": {
            "Let's get started.":
                [2,[]],
            "Cancel.":
                [0,[]]
        }
    },
    "2": {
        "text": "Let's start with something simple. How do you feel about Valentine's Day?",
        "image" : "smaller_images/homepage.png",
        "choices": {
            "Hate, hate, hate. Double hate. Loathe entirely.":
                [3,[]],
            "Indifferent. The idea is nice, but it can get a little over the top.":
                [3,[]],
            "Awwww. I think it's nice. The world could use more love.":
                [3,[]],
            "I think it might be my favorite holiday. It's just so cute and romantic.":
                [3,[]]
        }
    },
    "3": {
        "text": "Cool cool cool cool. Next, what kind of timing are we thinking for this date?",
        "image" : "smaller_images/homepage.png",
        "choices": {
            "6AM-12PM! I love an early morning. I was thinking a sunrise activity could be nice.":
                [4,[]],
            "10AM-4PM. A classic lunch date with a little bit of exploring.":
                [4,[]],
            "2PM-8PM. Something later on, but not too late, ya know?":
                [4,[]],
            "6PM-MIDNIGHT. I heard your favorite painting is called 'Nighthawks'.":
                [4,[]]
        }
    },
    "4": {
        "text": "Roger. And what kind of non-food activity would you most like to do?",
        "image" : "smaller_images/homepage.png",
        "choices": {
            "An active activity. A run, some pickle ball, a hike, etc.":
                [5,[]],
            "Let's get artsy. A museum, a gallery, a painting class, etc.":
                [5,[]],
            "A show! Live music, a play, a movie, etc.":
                [5,[]],
            "Something outside for sure. Maybe a walk, a visit to the park, etc.":
                [5,[]]
        }
    },
    "5": {
        "text": "Right on. And for the food portion of the date, what are you thinking?",
        "image" : "smaller_images/homepage.png",
        "choices": {
            "Let's pack something for our day. I like the idea of a picnic or some snacks on-the-go.":
                [6,[]],
            "Something very casual--maybe we stop in a cute cafe for a bite and a coffee?":
                [6,[]],
            "I'm thinking just drinks might be fun. Gives us more time to yap.":
                [6,[]],
            "A proper Valentine's Day dinner. I'm thinking a nice restaurant with a reservation.":
                [6,[]]
        }
    },
    "6": {
        "text": "SOLID CHOICE. Let's do 3 rapid fire (seemingly unimportant) questions.\n1: Pick a color scheme",
        "image" : "smaller_images/homepage.png",
        "choices": {
            "":
                [7,[]],
            "":
                [7,[]],
            "":
                [7,[]],
            "":
                [7,[]]
        }
    },
    "7": {
        "text": "2: Pick a favorite episode from The Office.",
        "image" : "smaller_images/office.png",
        "choices": {
            "The one where Meredith gets hit by Michael's car, and also rabies.":
                [8,["Confused", "(step) brothers", "(step) brothers"]],
            "The one where Michael hosts a dinner party and shows off his plasma screen TV.":
                [8,["End Game", "Twins", "(step) brothers"]],
            "The Christmas party where Jim gives Pam a teapot.":
                [8,["Gorls", "Adorable", "Adorable", "Adorable"]],
            "The Dundies, when Pam gets banned from Chili's.":
                [8,["Gorls", "End Game", "Confused", "Confused", "Teammates", "Teammates", "Teammates"]]
        }
    },
    "8": {
        "text": "3: Pick a state in which you would NEVER want to live.",
        "image" : "smaller_images/state.png",
        "choices": {
            "California":
                [9,["", "Opposites", "Mentor/Mentee", "Mentor/Mentee", "Confused"]],
            "Florida":
                [9,["", "End Game", "End Game", "Twins", "Twins", "(step) brothers"]],
            "Iowa":
                [9,["Gorls", "Gorls", "(step) brothers", "(step) brothers"]],
            "New Jersey":
                [9,["Gorls", "Opposites", "Opposites", "End Game", "Mentor/Mentee", "Confused", "Confused", "Teammates", "Teammates", "Adorable", "Adorable"]]
        }
    },
    "9": {
        "text": "Very interesting.Now let's switch to more important things.\nA green flag of YOURS is...",
        "image" : "smaller_images/green.png",
        "choices": {
            "You have actually read the terms and conditions.":
                [10,["Opposites", "Mentor/Mentee", "Mentor/Mentee", "Confused", "Teammates"]],
            "You have a (bad) joke or pun ready for almost any occasion.":
                [10,["Opposites", "Opposites", "End Game", "End Game", "(step) brothers", "(step) brothers", "(step) brothers", "Teammates", "Teammates"]],
            "You relocate spiders instead of killing them.":
                [10,["Gorls", "Mentor/Mentee", "Confused", "Adorable", "Adorable", "Adorable"]],
            "You know how to fold a fitted sheet.":
                [10,["Gorls", "Gorls", "End Game", "Confused", "Twins"]]
        }
    },
    "10": {
        "text": "A red flag of YOURS is...",
        "image" : "smaller_images/red.png",
        "choices": {
            "You are allergic to dogs.":
                [11,["Opposites", "Opposites", "Confused", "(step) brothers"]],
            "You send too many memes/tiktok videos.":
                [11,["Gorls", "Opposites", "Confused", "Confused", "(step) brothers", "Teammates", "Teammates", "Adorable", "Adorable"]],
            "You take too long to order at a restaurant and always ask for a recommendation.":
                [11,["End Game", "End Game", "End Game", "Mentor/Mentee", "(step) brothers"]],
            "You have a caffeine addiction.":
                [11,["Gorls", "Gorls", "Mentor/Mentee", "Mentor/Mentee", "Twins", "Teammates", "Adorable"]]
        }
    },
    "11": {
        "text": "A green flag of MINE (kristen) is...",
        "image" : "smaller_images/greenk.ong",
        "choices": {
            "I always make my bed in the morning.":
                [12,["End Game", "Mentor/Mentee", "Confused", "(step) brothers"]],
            "My Notes App.":
                [12,["Gorls", "End Game", "End Game", "Twins", "Twins", "(step) brothers"]],
            "I know how to skip and do a somersault.":
                [12,["Gorls", "(step) brothers", "Teammates"]],
            "I am good at sharing my crayons and colored pencils.":
                [12,["Gorls", "Mentor/Mentee", "Confused", "Confused", "Teammates", "Teammates", "Adorable", "Adorable", "Adorable"]]
        }
    },
    "12": {
        "text": "A red flag of MINE (kristen) is...",
        "image" : "smaller_images/redk.png",
        "choices": {
            "My sense of direction is terrible.":
                [13,["Opposites", "Mentor/Mentee", "Mentor/Mentee", "Confused", "Twins", "Teammates", "Adorable"]],
            "I go to bed too early.":
                [13,["Gorls", "Opposites", "End Game", "Mentor/Mentee", "(step) brothers", "Adorable"]],
            "I gave you a first impression that I didn't like you.":
                [13,["End Game", "End Game", "Confused", "Confused", "Twins"]],
            "I am a Steelers Fan.":
                [13,["Gorls", "(step) brothers", "(step) brothers", "Teammates", "Teammates", "Adorable"]]
        }
    },
    "13": {
        "text": "If you were given a free ticket to outer space, would you take it?",
        "image" : "smaller_images/space.png",
        "choices": {
            "Yes.":
                [14,["Opposites", "Opposites", "Mentor/Mentee", "Confused", "Confused", "(step) brothers", "(step) brothers", "Teammates"]],
            "No.":
                [14,["Gorls", "End Game", "Twins", "Twins", "Adorable"]],
        }
    },
    "14": {
        "text": "Do you believe in ghosts?",
        "image" : "smaller_images/homepage.png",
        "choices": {
            "Yes.":
                [15,["Opposites", "Opposites", "Mentor/Mentee", "Confused", "Confused", "(step) brothers", "(step) brothers", "Teammates"]],
            "No.":
                [15,["Gorls", "End Game", "Twins", "Twins", "Adorable"]],
        }
    },
    "15": {
        "text": "FINALLY. What is the best way to end a date?",
        "image" : "smaller_images/homepage.png",
        "choices": {
            "A bubble bath.\nNot together...OBVIOUSLY...\nbut I am going to take one in my bathtub,\nand you can take one in yours.":
                [0,[]],
            "A secret handshake.":
                [0,[]],
            "Hanging out with friends and debriefing.":
                [0,[]],
            "With plans for another!":
                [0,[]]
        }
    }
};

const personalities = {
    "Opposites": 0,
    "End Game": 0,
    "Mentor/Mentee": 0,
    "Confused": 0,
    "Twins": 0,
    "Gorls": 0,
    "(step) brothers": 0,
    "Teammates": 0,
    "Adorable": 0
};

let currentState = 1;

// function renderState(state) {
//     const storyText = document.getElementById('story-text');
//     const storyImage = document.getElementById('story-image');
//     const choicesContainer = document.getElementById('choices');
//
//     const img = new Image();
//     img.src = gameData[state].image;
//
//     img.onload = () => {
//         storyImage.src = img.src;
//         storyText.textContent = gameData[state].text;
//         choicesContainer.innerHTML = '';
//
//         for (const [choice, info] of Object.entries(gameData[state].choices)) {
//             const button = document.createElement('button');
//             button.textContent = choice;
//             button.className = 'choice-button';
//             let nextState = info[0];
//             button.onclick = () => changeState(nextState, info[1]); //each time you change state you update the personalities dictionary
//             choicesContainer.appendChild(button);
//         }
//     };
// }
//
//
// function changeState(newState, selectedPersonalities) {
//     // console.log(personalities);
//     selectedPersonalities.forEach(personality => {
//         personalities[personality]++;
//     });
//
//     currentState = newState;
//
//     if (currentState === 0) {
//         revealMostSelectedVegetable();
//     } else {
//         renderState(currentState);
//     }
// }
// function revealMostSelectedVegetable() {
//     let maxCount = 0;
//     let maxVeggie = '';
//
//     for (const [vegetable, count] of Object.entries(personalities)) {
//         if (count > maxCount) {
//             maxCount = count;
//             maxVeggie = vegetable;
//         }
//     }
//
//     const storyImage = document.getElementById('story-image');
//     const text = document.getElementById('story-text');
//     const choicesContainer = document.getElementById('choices');
//     const veggieImagePath = `smaller_images/id_cards/${maxVeggie}.png`;
//     // const veggieImagePath = `smaller_images/id_cards/placeholder.png`;
//
//
//     // Preload the image
//     const img = new Image();
//     img.src = veggieImagePath;
//     img.className = 'responsive-image';
//
//     // Create the share button
//     const shareButton = document.createElement('button');
//     shareButton.textContent = 'Share the game with Friends';
//     shareButton.className = 'choice-button';
//
//     // Once the image is loaded, update the DOM
//     img.onload = () => {
//         storyImage.style.display = 'none';
//         choicesContainer.style.display = 'none';
//
//         text.textContent = "We are...";
//         text.appendChild(img);
//
//         // Share button functionality
//         shareButton.onclick = () => {
//             const shareMessage = `Check out my Veggie ID! You can create yours at https://sophie006liu.github.io/vegetal/`;
//             navigator.clipboard.writeText(shareMessage).then(() => {
//                 alert('Link copied to clipboard!');
//             }).catch(err => {
//                 alert('Failed to copy link. Please try again.');
//             });
//         };
//
//         text.appendChild(shareButton);
//     };
// }
//
//
// function startGame() {
//     document.querySelector('.title').style.display = 'none';
//     document.getElementById('homescreen').style.display = 'none';
//     document.querySelector('.start-button').style.display = 'none';
//     document.getElementById('game-container').style.display = 'block';
//     renderState(currentState);
// }
//
// window.onload = () => {
//     renderState(currentState);
// }

function renderState(state) {
    console.log("b");
    const storyImage = document.getElementById('story-image');
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
    let maxLabel = '';

    for (const [vegetable, count] of Object.entries(personalities)){
        if (count > maxCount) {
            maxCount = count;
            maxLabel = vegetable;
        }
    }
    console.log(maxLabel);
    const storyText = document.getElementById('story-text');
    storyText.textContent = `We are ${maxLabel}`;
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
