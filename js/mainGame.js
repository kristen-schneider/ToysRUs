const personalities = {
    "END GAME": 0,
    "TWINS": 0,
    "OLD FRIENDS": 0,
    "GORLS": 0,
    "SQUADMATES": 0,
    "(step) BROTHERS": 0,
    "OPPOSITES": 0,
    "CONFUSED": 0,
    "EXES": 0,
};

const gameData = {
    "1": {
        "text": "<3",
        "image" : "smaller_images/homepage.png",
        "choices": {
            "Let's get started.":
                [2,["END GAME", "TWINS", "OLD FRIENDS", "GORLS", "SQUADMATES", "(step) BROTHERS", "OPPOSITES", "CONFUSED", "EXES"]],
            "Cancel.":
                [0,["END GAME", "TWINS", "OLD FRIENDS", "GORLS", "SQUADMATES", "(step) BROTHERS", "OPPOSITES", "CONFUSED", "EXES"]]
        }
    },
    "2": {
        "text": "Let's start with something simple. How do you feel about Valentine's Day?",
        "image" : "smaller_images/homepage.png",
        "choices": {
            "Hate, hate, hate. Double hate. Loathe entirely.":
                [3,["EXES", "EXES", "EXES", "CONFUSED", "CONFUSED", "CONFUSED", "OLD FRIENDS", "SQUADMATES", "(step) BROTHERS", "OPPOSITES"]],
            "Indifferent. The idea is nice, but it can get a little over the top.":
                [3,["END GAME", "TWINS", "TWINS", "TWINS", "OLD FRIENDS", "SQUADMATES", "SQUADMATES", "(step) BROTHERS", "(step) BROTHERS"]],
            "I think it's nice! I'm a bit of a romantic.":
                [3,["END GAME", "END GAME"]],
            "It might be my favorite holiday--it's just so cute!":
                [3,["OLD FRIENDS", "GORLS", "GORLS", "GORLS", "OPPOSITES", "OPPOSITES"]]
        }
    },
    "3": {
        "text": "Cool cool cool cool. Next, what kind of timing are we thinking for this date?",
        "image" : "smaller_images/homepage.png",
        "choices": {
            "6AM-12PM! I love an early morning. I was thinking a sunrise activity could be nice.":
                [4,["TWINS", "TWINS", "TWINS", "OLD FRIENDS", "SQUADMATES", "(step) BROTHERS", "(step) BROTHERS", "CONFUSED", "EXES", "EXES"]],
            "10AM-4PM. A classic lunch date with a little bit of exploring.":
                [4,["OLD FRIENDS", "SQUADMATES", "SQUADMATES", "(step) BROTHERS", "OPPOSITES", "CONFUSED", "CONFUSED", "EXES"]],
            "2PM-8PM. Something later on, but not too late, ya know?":
                [4,["END GAME", "OLD FRIENDS", "GORLS", "OPPOSITES"]],
            "6PM-12AM. I heard your favorite painting is called 'Nighthawks'?":
                [4,["END GAME", "END GAME", "GORLS", "GORLS", "OPPOSITES"]]
        }
    },
    "4": {
        "text": "Roger. And what kind of non-food activity would you most like to do?",
        "image" : "smaller_images/homepage.png",
        "choices": {
            "An active activity! A run, some pickle ball, a hike, etc.":
                [5,["TWINS", "TWINS", "TWINS", "OLD FRIENDS", "SQUADMATES", "SQUADMATES", "SQUADMATES", "(step) BROTHERS", "(step) BROTHERS", "(step) BROTHERS", "CONFUSED", "CONFUSED", "CONFUSED", "EXES"]],
            "Let's get artsy. A museum, a gallery, a painting class, etc.":
                [5,["END GAME", "GORLS", "GORLS", "OPPOSITES", "OPPOSITES", "EXES", "EXES"]],
            "A show! Live music, a play, a movie, etc.":
                [5,["END GAME", "OLD FRIENDS", "OPPOSITES"]],
            "Something outside for sure. Maybe a walk, a visit to the park, etc.":
                [5,["END GAME", "OLD FRIENDS", "GORLS"]]
        }
    },
    "5": {
        "text": "Right on. And for the food portion of the date, what are you thinking?",
        "image" : "smaller_images/homepage.png",
        "choices": {
            "Let's pack something for our day. I like the idea of a picnic or some snacks on-the-go.":
                [6,["EXES", "CONFUSED", "CONFUSED", "(step) BROTHERS", "(step) BROTHERS", "SQUADMATES", "TWINS", "TWINS", "TWINS"]],
            "Something very casual--maybe we stop in a cute cafe for a bite and a coffee?":
                [6,["EXES", "EXES", "CONFUSED", "OPPOSITES", "(step) BROTHERS", "SQUADMATES", "SQUADMATES", "OLD FRIENDS", "OLD FRIENDS", "OLD FRIENDS"]],
            "I'm thinking just drinks might be fun. Gives us more time to yap.":
                [6,["GORLS", "GORLS", "GORLS", "END GAME"]],
            "A proper Valentine's Day dinner. I'm thinking a nice restaurant with a reservation.":
                [6,["OPPOSITES", "OPPOSITES", "END GAME", "END GAME"]]
        }
    },
    "6": {
        "text": "Great--now let's get personal.\nA green flag of YOURS is...",
        "image" : "smaller_images/homepage.png",
        "choices": {
            "World famous road-trip DJ.":
                [7,["EXES", "EXES", "EXES", "CONFUSED", "OPPOSITES", "(step) BROTHERS", "SQUADMATES", "SQUADMATES", "SQUADMATES", "GORLS", "TWINS", "TWINS"]],
            "Knows what medicine to take when you're feeling sick.":
                [7,["GORLS", "GORLS", "OLD FRIENDS", "OLD FRIENDS", "OLD FRIENDS"]],
            "Has a quote from The Office for any occasion":
                [7,["OPPOSITES", "OPPOSITES", "(step) BROTHERS", "(step) BROTHERS", "TWINS"]],
            "Really good at doing taxes. (Will do your wife's (my) taxes.)":
                [7,["CONFUSED", "CONFUSED", "END GAME", "END GAME", "END GAME"]]
        }
    },
    "7": {
        "text": "A red flag of YOURS is...",
        "image" : "smaller_images/homepage.png",
        "choices": {
            "Has a hard time getting rid of things that absolutely need to be donated/thrown away.":
                [8,["OLD FRIENDS", "OPPOSITES", "OPPOSITES"]],
            "Sends too many memes/tiktok videos.":
                [8,["TWINS", "OLD FRIENDS", "OLD FRIENDS", "GORLS", "GORLS", "GORLS", "OPPOSITES", "CONFUSED", "CONFUSED"]],
            "Takes too long to order at a restaurant and always asks for the server's recommendation.":
                [8,["END GAME", "END GAME", "END GAME", "(step) BROTHERS", "OPPOSITES"]],
            "Thinks 'CTRL-C' is hacking and has a lot of opinions about AI.":
                [8,["TWINS", "TWINS", "SQUADMATES", "SQUADMATES", "SQUADMATES", "(step) BROTHERS", "(step) BROTHERS", "CONFUSED", "EXES", "EXES", "EXES"]]
        }
    },
    "8": {
        "text": "A green flag of MINE (kristen) is...",
        "image" : "smaller_images/homepage.png",
        "choices": {
            "Always makes her bed in the morning.":
                [9,["CONFUSED", "CONFUSED", "SQUADMATES", "TWINS", "TWINS", "TWINS", "END GAME"]],
            "Likes grocery shopping. Will leave your party to go pick up some more things at the grocery store.":
                [9,["EXES", "CONFUSED", "(step) BROTHERS", "(step) BROTHERS", "SQUADMATES", "OLD FRIENDS"]],
            "Has a notes app for every occasion.":
                [9,["(step) BROTHERS", "OLD FRIENDS", "OLD FRIENDS", "OLD FRIENDS", "END GAME", "END GAME"]],
            "Good at finding out information about your crush.":
                [9,["EXES", "EXES", "OPPOSITES", "OPPOSITES", "OPPOSITES", "SQUADMATES", "GORLS", "GORLS", "GORLS"]]
        }
    },
    "9": {
        "text": "A red flag of MINE (kristen) is...",
        "image" : "smaller_images/homepage.png",
        "choices": {
            "Thinks salt and pepper is `spicy`.":
                [10,["END GAME", "GORLS", "GORLS", "SQUADMATES", "(step) BROTHERS", "(step) BROTHERS", "(step) BROTHERS", "EXES"]],
            "No sense of direction--can get lost in her own house.":
                [10,["TWINS", "TWINS", "TWINS", "GORLS", "CONFUSED", "CONFUSED", "CONFUSED", "EXES", "EXES"]],
            "Can take care of a kid or a pet for weeks; but will kill a plant overnight.":
                [10,["OLD FRIENDS", "OLD FRIENDS", "SQUADMATES", "OPPOSITES", "OPPOSITES", "OPPOSITES"]],
            "Starts a TV show/movie and never finishes it.":
                [10,["END GAME", "END GAME", "OLD FRIENDS", "SQUADMATES"]]
        }
    },
    "10": {
        "text": "A red flag of MINE (kristen) is...",
        "image" : "smaller_images/homepage.png",
        "choices": {
            "Thinks salt and pepper is `spicy`.":
                [11,["END GAME", "GORLS", "GORLS", "SQUADMATES", "(step) BROTHERS", "(step) BROTHERS", "(step) BROTHERS", "EXES"]],
            "No sense of direction--can get lost in her own house.":
                [11,["TWINS", "TWINS", "TWINS", "GORLS", "CONFUSED", "CONFUSED", "CONFUSED", "EXES", "EXES"]],
            "Can take care of a kid or a pet for weeks; but will kill a plant overnight.":
                [11,["OLD FRIENDS", "OLD FRIENDS", "SQUADMATES", "OPPOSITES", "OPPOSITES", "OPPOSITES"]],
            "Starts a TV show/movie and never finishes it.":
                [11,["END GAME", "END GAME", "OLD FRIENDS", "SQUADMATES"]]
        }
    },
    "11": {
        "text": "LAST QUESTION",
        "image" : "smaller_images/homepage.png",
        "choices": {
            "Always makes her bed in the morning.":
                [0,["CONFUSED", "CONFUSED", "SQUADMATES", "TWINS", "TWINS", "TWINS", "END GAME"]],
            "Likes grocery shopping. Will leave your party to go pick up some more things at the grocery store.":
                [0,["EXES", "CONFUSED", "(step) BROTHERS", "(step) BROTHERS", "SQUADMATES", "OLD FRIENDS"]],
            "Has a notes app for every occasion.":
                [0,["(step) BROTHERS", "OLD FRIENDS", "OLD FRIENDS", "OLD FRIENDS", "END GAME", "END GAME"]],
            "Good at finding out information about your crush.":
                [0,["EXES", "EXES", "OPPOSITES", "OPPOSITES", "OPPOSITES", "SQUADMATES", "GORLS", "GORLS", "GORLS"]]
        }
    },
    // "": {
    //     "text": "SOLID CHOICE. Let's do 3 rapid fire (seemingly unimportant) questions.\n1: Pick a color scheme",
    //     "image" : "smaller_images/homepage.png",
    //     "choices": {
    //         "":
    //             [7,["END GAME", "END GAME", "END GAME", "GORLS", "GORLS", "GORLS", "TWINS", "TWINS", "TWINS", "OLD FRIENDS", "OLD FRIENDS", "OLD FRIENDS", "OPPOSITES", "OPPOSITES", "OPPOSITES", "EXES", "EXES", "EXES"]],
    //         "":
    //             [7,["END GAME", "END GAME", "END GAME", "GORLS", "GORLS", "GORLS", "TWINS", "TWINS", "TWINS", "OLD FRIENDS", "OLD FRIENDS", "OLD FRIENDS", "OPPOSITES", "OPPOSITES", "OPPOSITES", "EXES", "EXES", "EXES"]],
    //         "":
    //             [7,["END GAME", "END GAME", "END GAME", "GORLS", "GORLS", "GORLS", "TWINS", "TWINS", "TWINS", "OLD FRIENDS", "OLD FRIENDS", "OLD FRIENDS", "OPPOSITES", "OPPOSITES", "OPPOSITES", "EXES", "EXES", "EXES"]],
    //         "":
    //             [7,["END GAME", "END GAME", "END GAME", "GORLS", "GORLS", "GORLS", "TWINS", "TWINS", "TWINS", "OLD FRIENDS", "OLD FRIENDS", "OLD FRIENDS", "OPPOSITES", "OPPOSITES", "OPPOSITES", "EXES", "EXES", "EXES"]]
    //     }
    // },
    // "7": {
    //     "text": "2: Pick a favorite episode from The Office.",
    //     "image" : "smaller_images/homepage.png",
    //     "choices": {
    //         "The one where Meredith gets hit by Michael's car, and also rabies.":
    //             [8,["OLD FRIENDS", "SQUADMATES", "OPPOSITES", "CONFUSED", "CONFUSED", "CONFUSED", "EXES"]],
    //         "The one where Michael hosts a dinner party and shows off his plasma screen TV.":
    //             [8,["END GAME", "TWINS", "TWINS", "TWINS", "(step) BROTHERS", "(step) BROTHERS"]],
    //         "The Christmas party where Jim gives Pam a teapot.":
    //             [8,["END GAME", "GORLS", "GORLS", "GORLS", "OPPOSITES", "EXES"]],
    //         "The Dundies, when Pam gets banned from Chili's.":
    //             [8,["END GAME", "OLD FRIENDS", "OLD FRIENDS", "SQUADMATES", "SQUADMATES", "(step) BROTHERS", "OPPOSITES", "EXES"]]
    //     }
    // },
    // "8": {
    //     "text": "3: Pick a state in which you would NEVER want to live.",
    //     "image" : "smaller_images/homepage.png",
    //     "choices": {
    //         "California":
    //             [9,["OPPOSITES", "OPPOSITES", "(step) BROTHERS", "(step) BROTHERS", "OLD FRIENDS", "OLD FRIENDS"]],
    //         "Florida":
    //             [9,["(step) BROTHERS", "SQUADMATES", "SQUADMATES", "TWINS", "TWINS", "TWINS", "END GAME", "END GAME", "END GAME"]],
    //         "Iowa":
    //             [9,["EXES", "EXES", "EXES", "CONFUSED", "CONFUSED", "CONFUSED", "GORLS", "GORLS"]],
    //         "New Jersey":
    //             [9,["OPPOSITES", "SQUADMATES", "GORLS", "OLD FRIENDS"]]
    //     }
    // },
    // "13": {
    //     "text": "If you were given a free ticket to outer space, would you take it?",
    //     "image" : "smaller_images/homepage.png",
    //     "choices": {
    //         "Yes.":
    //             [14,["EXES", "CONFUSED", "OPPOSITES", "(step) BROTHERS", "SQUADMATES"]],
    //         "No.":
    //             [14,["GORLS", "OLD FRIENDS", "TWINS", "END GAME"]],
    //     }
    // },
    // "14": {
    //     "text": "Do you believe in ghosts?",
    //     "image" : "smaller_images/homepage.png",
    //     "choices": {
    //         "Yes.":
    //             [15,["CONFUSED", "(step) BROTHERS", "SQUADMATES", "GORLS", "TWINS"]],
    //         "No.":
    //             [15,["EXES", "OPPOSITES", "OLD FRIENDS", "END GAME"]],
    //     }
    // },
    // "15": {
    //     "text": "LAST ONE. What is the best way to end a date?",
    //     "image" : "smaller_images/homepage.png",
    //     "choices": {
    //         "A bubble bath.\nNot together...OBVIOUSLY...\nbut I am going to take one in my bathtub,\nand you can take one in yours (if you want).":
    //             [0,["END GAME", "END GAME", "TWINS"]],
    //         "A secret handshake.":
    //             [0,["TWINS", "SQUADMATES", "SQUADMATES", "(step) BROTHERS", "(step) BROTHERS", "(step) BROTHERS", "OPPOSITES", "CONFUSED", "CONFUSED", "CONFUSED", "EXES"]],
    //         "Hanging out with friends and debriefing.":
    //             [0,["TWINS", "OLD FRIENDS", "GORLS", "GORLS", "GORLS", "SQUADMATES", "OPPOSITES", "EXES"]],
    //         "With plans for another!":
    //             [0,["END GAME", "OLD FRIENDS", "OLD FRIENDS", "OPPOSITES", "EXES"]]
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
    // const veggieImagePath = `smaller_images/id_cards/${maxVeggie}.png`;
    const veggieImagePath = `smaller_images/id_cards/homepage.png`;
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
