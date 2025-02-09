const personalities = {
    "end_game": 0,
    "twins": 0,
    "old_friends": 0,
    "gorls": 0,
    "squadmates": 0,
    "step_brothers": 0,
    "opposites": 0,
    "confused": 0,
    "exes": 0,
};

const gameData = {
    "1": {
        "text": "<3",
        "image" : "smaller_images/homepage.png",
        "choices": {
            "Let's get started.":
                [2,["end_game", "TWINS", "old_friends", "gorls", "squadmates", "step_brothers", "opposites", "confused", "exes"]],
        }
    },
    "2": {
        "text": "1/20. VALENTINE'S DAY DATE\nHow do you feel about Valentine's Day?",
        "image" : "smaller_images/homepage.png",
        "choices": {
            "Hate, hate, hate. Double hate. Loathe entirely.":
                [3,["exes", "exes", "exes", "confused", "confused", "confused", "old_friends", "squadmates", "step_brothers", "opposites"]],
            "Indifferent. The idea is nice, but it can get a little over the top.":
                [3,["end_game", "twins", "twins", "twins", "old_friends", "squadmates", "squadmates", "step_brothers", "step_brothers"]],
            "I think it's nice! I'm a bit of a romantic.":
                [3,["end_game", "end_game"]],
            "It might be my favorite holiday--it's just so cute!":
                [3,["old_friends", "gorls", "gorls", "gorls", "opposites", "opposites"]]
        }
    },
    "3": {
        "text": "2/20. VALENTINE'S DAY DATE\nWhat kind of timing are we thinking for this date?",
        "image" : "smaller_images/homepage.png",
        "choices": {
            "6AM-12PM! I love an early morning. I was thinking a sunrise activity could be nice.":
                [4,["twins", "twins", "twins", "old_friends", "squadmates", "step_brothers", "step_brothers", "confused", "exes", "exes"]],
            "10AM-4PM. A classic lunch date with a little bit of exploring.":
                [4,["old_friends", "squadmates", "squadmates", "step_brothers", "opposites", "confused", "confused", "exes"]],
            "2PM-8PM. Something later on, but not too late, ya know?":
                [4,["end_game", "old_friends", "gorls", "opposites"]],
            "6PM-12AM. I heard your favorite painting is called 'Nighthawks'?":
                [4,["end_game", "end_game", "gorls", "gorls", "opposites"]]
        }
    },
    "4": {
        "text": "3/20. VALENTINE'S DAY DATE\nWhat kind of non-food activity would you most like to do?",
        "image" : "smaller_images/homepage.png",
        "choices": {
            "An active activity! A run, some pickle ball, a hike, etc.":
                [5,["twins", "twins", "twins", "old_friends", "squadmates", "squadmates", "squadmates", "step_brothers", "step_brothers", "step_brothers", "confused", "confused", "confused", "exes"]],
            "Let's get artsy. A museum, a gallery, a painting class, etc.":
                [5,["end_game", "gorls", "gorls", "opposites", "opposites", "exes", "exes"]],
            "A show! Live music, a play, a movie, etc.":
                [5,["end_game", "old_friends", "opposites"]],
            "Something outside for sure. Maybe a walk, a visit to the park, etc.":
                [5,["end_game", "old_friends", "gorls"]]
        }
    },
    "5": {
        "text": "4/20. VALENTINE'S DAY DATE\nAnd, finally, for the food portion of the date, what are you thinking?",
        "image" : "smaller_images/homepage.png",
        "choices": {
            "Let's pack something for our day. I like the idea of a picnic or some snacks on-the-go.":
                [6,["exes", "confused", "confused", "step_brothers", "step_brothers", "squadmates", "twins", "twins", "twins"]],
            "Something very casual--maybe we stop in a cute cafe for a bite and a coffee?":
                [6,["exes", "exes", "confused", "opposites", "step_brothers", "squadmates", "squadmates", "old_friends", "old_friends", "old_friends"]],
            "I'm thinking just drinks might be fun. Gives us more time to yap.":
                [6,["gorls", "gorls", "gorls", "end_game"]],
            "A proper Valentine's Day dinner. I'm thinking a nice restaurant with a reservation.":
                [6,["opposites", "opposites", "end_game", "end_game"]]
        }
    },
    "6": {
        "text": "5/20. VERY VERY PERSONAL\nA green flag of YOURS is...",
        "image" : "smaller_images/homepage.png",
        "choices": {
            "World famous road-trip DJ.":
                [7,["exes", "exes", "exes", "confused", "opposites", "step_brothers", "squadmates", "squadmates", "squadmates", "gorls", "TWINS", "TWINS"]],
            "Knows what medicine to take when you're feeling sick.":
                [7,["gorls", "gorls", "old_friends", "old_friends", "old_friends"]],
            "Has a quote from The Office for any occasion":
                [7,["opposites", "opposites", "step_brothers", "step_brothers", "twins"]],
            "Really good at doing taxes. (Will do your wife's (my) taxes.)":
                [7,["confused", "confused", "end_game", "end_game", "end_game"]]
        }
    },
    "7": {
        "text": "6/20. VERY VERY PERSONAL\nA red flag of YOURS is...",
        "image" : "smaller_images/homepage.png",
        "choices": {
            "Has a hard time getting rid of things that absolutely need to be donated/thrown away.":
                [8,["old_friends", "opposites", "opposites"]],
            "Sends too many memes/tiktok videos.":
                [8,["twins", "old_friends", "old_friends", "gorls", "gorls", "gorls", "opposites", "confused", "confused"]],
            "Takes too long to order at a restaurant and always asks for the server's recommendation.":
                [8,["end_game", "end_game", "end_game", "step_brothers", "opposites"]],
            "Thinks 'CTRL-C' is hacking and has a lot of opinions about AI.":
                [8,["twins", "twins", "squadmates", "squadmates", "squadmates", "step_brothers", "step_brothers", "confused", "exes", "exes", "exes"]]
        }
    },
    "8": {
        "text": "7/20. VERY VERY PERSONAL\nA green flag of MINE (kristen) is...",
        "image" : "smaller_images/homepage.png",
        "choices": {
            "Always makes her bed in the morning.":
                [9,["confused", "confused", "squadmates", "twins", "twins", "twins", "end_game"]],
            "Likes grocery shopping. Will leave your party to go pick up some more things at the grocery store.":
                [9,["exes", "confused", "step_brothers", "step_brothers", "squadmates", "old_friends"]],
            "Has a notes app for every occasion.":
                [9,["step_brothers", "old_friends", "old_friends", "old_friends", "end_game", "end_game"]],
            "Good at finding out information about your crush.":
                [9,["exes", "exes", "opposites", "opposites", "opposites", "squadmates", "gorls", "gorls", "gorls"]]
        }
    },
    "9": {
        "text": "8/20. VERY VERY PERSONAL\nA red flag of MINE (kristen) is...",
        "image" : "smaller_images/homepage.png",
        "choices": {
            "Thinks salt and pepper is `spicy`.":
                [10,["end_game", "gorls", "gorls", "squadmates", "step_brothers", "step_brothers", "step_brothers", "exes"]],
            "No sense of direction--can get lost in her own house.":
                [10,["twins", "twins", "twins", "gorls", "confused", "confused", "confused", "exes", "exes"]],
            "Can take care of a kid or a pet for weeks; but will kill a plant overnight.":
                [10,["old_friends", "old_friends", "squadmates", "opposites", "opposites", "opposites"]],
            "Starts a TV show/movie and never finishes it.":
                [10,["end_game", "end_game", "old_friends", "squadmates"]]
        }
    },
    "10": {
        "text": "...",
        "image" : "smaller_images/homepage.png",
        "choices": {
            "Thinks salt and pepper is `spicy`.":
                [11,["end_game", "gorls", "gorls", "squadmates", "step_brothers", "step_brothers", "step_brothers", "exes"]],
            "No sense of direction--can get lost in her own house.":
                [11,["twins", "twins", "twins", "gorls", "confused", "confused", "confused", "exes", "exes"]],
            "Can take care of a kid or a pet for weeks; but will kill a plant overnight.":
                [11,["old_friends", "old_friends", "squadmates", "opposites", "opposites", "opposites"]],
            "Starts a TV show/movie and never finishes it.":
                [11,["end_game", "end_game", "old_friends", "squadmates"]]
        }
    },
    "11": {
        "text": "17/20. Before I tell you what we are...you first. What do YOU think we are??? HM?\n",
        "image" : "smaller_images/homepage.png",
        "choices": {
            "Always makes her bed in the morning.":
                [0,["confused", "confused", "squadmates", "twins", "twins", "twins", "end_game"]],
            "Likes grocery shopping. Will leave your party to go pick up some more things at the grocery store.":
                [0,["exes", "confused", "step_brothers", "step_brothers", "squadmates", "old_friends"]],
            "Has a notes app for every occasion.":
                [0,["step_brothers", "old_friends", "old_friends", "old_friends", "end_game", "end_game"]],
            "Good at finding out information about your crush.":
                [0,["exes", "exes", "opposites", "opposites", "opposites", "squadmates", "gorls", "gorls", "gorls"]]
        }
    },
    // "": {
    //     "text": "SOLID CHOICE. Let's do 3 rapid fire (seemingly unimportant) questions.\n1: Pick a color scheme",
    //     "image" : "smaller_images/homepage.png",
    //     "choices": {
    //         "":
    //             [7,["end_game", "end_game", "end_game", "gorls", "gorls", "gorls", "twins", "twins", "twins", "old_friends", "old_friends", "old_friends", "opposites", "opposites", "opposites", "exes", "exes", "exes"]],
    //         "":
    //             [7,["end_game", "end_game", "end_game", "gorls", "gorls", "gorls", "twins", "twins", "twins", "old_friends", "old_friends", "old_friends", "opposites", "opposites", "opposites", "exes", "exes", "exes"]],
    //         "":
    //             [7,["end_game", "end_game", "end_game", "gorls", "gorls", "gorls", "twins", "twins", "twins", "old_friends", "old_friends", "old_friends", "opposites", "opposites", "opposites", "exes", "exes", "exes"]],
    //         "":
    //             [7,["end_game", "end_game", "end_game", "gorls", "gorls", "gorls", "twins", "twins", "twins", "old_friends", "old_friends", "old_friends", "opposites", "opposites", "opposites", "exes", "exes", "exes"]]
    //     }
    // },
    // "7": {
    //     "text": "2: Pick a favorite episode from The Office.",
    //     "image" : "smaller_images/homepage.png",
    //     "choices": {
    //         "The one where Meredith gets hit by Michael's car, and also rabies.":
    //             [8,["old_friends", "squadmates", "opposites", "confused", "confused", "confused", "exes"]],
    //         "The one where Michael hosts a dinner party and shows off his plasma screen TV.":
    //             [8,["end_game", "twins", "twins", "twins", "step_brothers", "step_brothers"]],
    //         "The Christmas party where Jim gives Pam a teapot.":
    //             [8,["end_game", "gorls", "gorls", "gorls", "opposites", "exes"]],
    //         "The Dundies, when Pam gets banned from Chili's.":
    //             [8,["end_game", "old_friends", "old_friends", "squadmates", "squadmates", "step_brothers", "opposites", "exes"]]
    //     }
    // },
    // "8": {
    //     "text": "3: Pick a state in which you would NEVER want to live.",
    //     "image" : "smaller_images/homepage.png",
    //     "choices": {
    //         "California":
    //             [9,["opposites", "opposites", "step_brothers", "step_brothers", "old_friends", "old_friends"]],
    //         "Florida":
    //             [9,["step_brothers", "squadmates", "squadmates", "twins", "twins", "twins", "end_game", "end_game", "end_game"]],
    //         "Iowa":
    //             [9,["exes", "exes", "exes", "confused", "confused", "confused", "gorls", "gorls"]],
    //         "New Jersey":
    //             [9,["opposites", "squadmates", "gorls", "old_friends"]]
    //     }
    // },
    // "13": {
    //     "text": "If you were given a free ticket to outer space, would you take it?",
    //     "image" : "smaller_images/homepage.png",
    //     "choices": {
    //         "Yes.":
    //             [14,["exes", "confused", "opposites", "step_brothers", "squadmates"]],
    //         "No.":
    //             [14,["gorls", "old_friends", "twins", "end_game"]],
    //     }
    // },
    // "14": {
    //     "text": "Do you believe in ghosts?",
    //     "image" : "smaller_images/homepage.png",
    //     "choices": {
    //         "Yes.":
    //             [15,["confused", "step_brothers", "squadmates", "gorls", "twins"]],
    //         "No.":
    //             [15,["exes", "opposites", "old_friends", "end_game"]],
    //     }
    // },
    // "15": {
    //     "text": "LAST ONE. What is the best way to end a date?",
    //     "image" : "smaller_images/homepage.png",
    //     "choices": {
    //         "A bubble bath.\nNot together...OBVIOUSLY...\nbut I am going to take one in my bathtub,\nand you can take one in yours (if you want).":
    //             [0,["end_game", "end_game", "twins"]],
    //         "A secret handshake.":
    //             [0,["twins", "squadmates", "squadmates", "step_brothers", "step_brothers", "step_brothers", "opposites", "confused", "confused", "confused", "exes"]],
    //         "Hanging out with friends and debriefing.":
    //             [0,["twins", "old_friends", "gorls", "gorls", "gorls", "squadmates", "opposites", "exes"]],
    //         "With plans for another!":
    //             [0,["end_game", "old_friends", "old_friends", "opposites", "exes"]]
    //     }
    // },
};

let currentState = 1;

function renderState(state) {
    // console.log("b");
    const storyText = document.getElementById('story-text');
    const storyImage = document.getElementById('story-image');
    const choicesContainer = document.getElementById('choices');

    const img = new Image();
    img.src = gameData[state].image;

    img.onload = () => {
        storyImage.src = img.src;
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
    };
}


function changeState(newState, selectedPersonalities) {
    // console.log(personalities);
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
    let maxCount = 0;
    let maxVeggie = '';

    for (const [vegetable, count] of Object.entries(personalities)) {
        if (count > maxCount) {
            maxCount = count;
            maxVeggie = vegetable;
        }
    }

    const storyImage = document.getElementById('story-image');
    const text = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices');
    const veggieImagePath = 'smaller_images/id_cards/${maxVeggie}.png';
    // const veggieImagePath = 'smaller_images/id_cards/homepage.png';
    //

    // Preload the image
    const img = new Image();
    img.src = veggieImagePath;
    img.className = 'responsive-image';

    // Create the share button
    const shareButton = document.createElement('button');
    shareButton.textContent = 'Share the game with Friends';
    shareButton.className = 'choice-button';

    // Once the image is loaded, update the DOM
    img.onload = () => {
        storyImage.style.display = 'none';
        choicesContainer.style.display = 'none';

        text.textContent = "We are...";
        text.appendChild(img);

        // Share button functionality
        shareButton.onclick = () => {
            const shareMessage = `Check out my Veggie ID! You can create yours at https://sophie006liu.github.io/vegetal/`;
            navigator.clipboard.writeText(shareMessage).then(() => {
                alert('Link copied to clipboard!');
            }).catch(err => {
                alert('Failed to copy link. Please try again.');
            });
        };

        text.appendChild(shareButton);
    };
}

function startGame() {
    document.querySelector('.title').style.display = 'none';
    document.getElementById('homescreen').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    renderState(currentState);
}

window.onload = () => {
    renderState(currentState);
}
//
// function renderState(state) {
//     console.log("b");
//     const storyImage = document.getElementById('story-image');
//     const storyText = document.getElementById('story-text');
//     const choicesContainer = document.getElementById('choices');
//
//     storyText.textContent = gameData[state].text;
//     choicesContainer.innerHTML = '';
//
//     for (const [choice, info] of Object.entries(gameData[state].choices)) {
//         const button = document.createElement('button');
//         button.textContent = choice;
//         button.className = 'choice-button';
//         let nextState = info[0];
//         button.onclick = () => changeState(nextState, info[1]); //each time you change state you update the personalities dictionary
//         choicesContainer.appendChild(button);
//     }
// }
//
// function changeState(newState, selectedPersonalities) {
//     console.log("changing states");
//     console.log(personalities);
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
//
// function revealMostSelectedVegetable() {
//     console.log("calculating fate");
//     let maxCount = 0;
//     let maxLabel = '';
//
//     for (const [vegetable, count] of Object.entries(personalities)){
//         if (count > maxCount) {
//             maxCount = count;
//             maxLabel = vegetable;
//         }
//     }
//     console.log(maxLabel);
//     const storyText = document.getElementById('story-text');
//     storyText.textContent = `We are ${maxLabel}`;
//     document.getElementById('choices').style.display = 'none';
// }
//
// function startGame() {
//     document.querySelector('.title').style.display = 'none';
//     document.querySelector('.start-button').style.display = 'none';
//     document.getElementById('game-container').style.display = 'block';
//     renderState(currentState);
// }
//
// window.onload = () => {
//     console.log("e");
//     renderState(currentState);
// };
