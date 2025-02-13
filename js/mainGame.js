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
        "image" : "smaller_images/terms.png",
        "choices": {
            "Agree to terms and conditions.":
                [2,["end_game", "TWINS", "old_friends", "gorls", "squadmates", "step_brothers", "opposites", "confused", "exes"]],
        }
    },
    "2": {
        "text": "1/20: How do you feel about Valentine's Day?",
        "image" : "smaller_images/vday1.png",
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
        "text": "2/20: What kind of timing are we thinking for this date?",
        "image" : "smaller_images/vday2.png",
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
        "text": "3/20: What kind of non-food activity would you most like to do?",
        "image" : "smaller_images/vday3.png",
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
        "text": "4/20: And, finally, for the food portion of the date, what are you thinking?",
        "image" : "smaller_images/vday4.png",
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
        "text": "5/20: A green flag of YOURS is...",
        "image" : "smaller_images/important1.png",
        "choices": {
            "World famous road-trip DJ.":
                [7,["twins", "twins", "twins", "old_friends", "gorls", "gorls", "squadmates", "exes", "exes", "exes"]],
            "Always knows what medicine to take when you're feeling sick.":
                [7,["old_friends", "old_friends", "gorls", "opposites"]],
            "Has a dad joke for any occasion.":
                [7,["step_brothers", "step_brothers", "end_game", "squadmates", "squadmates", "opposites", "opposites", "confused", "confused"]],
            "Can pull off a mustache.":
                [7,["end_game", "end_game", "step_brothers", "confused"]]
        }
    },
    "7": {
        "text": "6/20: A red flag of YOURS is...",
        "image" : "smaller_images/important2.png",
        "choices": {
            "Keeps things `in case they come in handy later.`":
                [8,["exes", "opposites", "opposites", "opposites", "squadmates", "gorls", "gorls", "old_friends"]],
            "Sends too many memes/tiktok videos.":
                [8,["confused", "confused", "step_brothers", "squadmates", "squadmates", "gorls", "old_friends", "old_friends"]],
            "Takes too long to order at a restaurant and always asks for the server's recommendation.":
                [8,["end_game", "end_game", "end_game"]],
            "Thinks 'CTRL-C' is hacking and has a lot of opinions about AI.":
                [8,["exes", "exes", "confused", "step_brothers", "step_brothers", "twins", "twins", "twins"]]
        }
    },
    "8": {
        "text": "7/20: A green flag of MINE (kristen) is...",
        "image" : "smaller_images/important3.png",
        "choices": {
            "Always makes her bed in the morning.":
                [9,["twins", "old_friends", "squadmates", "squadmates", "step_brothers", "confused", "confused", "exes"]],
            "`Very Good`--FICO Score.":
                [9,["end_game", "step_brothers", "step_brothers", "opposites", "opposites", "opposites", "confused", "exes", "exes"]],
            "Hasn't done very many things. Lots of opportunities to try new things.":
                [9,["end_game", "end_game", "old_friends"]],
            "Knows how to french braid. And fishtail braid. And dragon braid.":
                [9,["twins", "twins", "old_friends", "gorls", "gorls", "gorls", "squadmates"]]
        }
    },
    "9": {
        "text": "8/20: A red flag of MINE (kristen) is...",
        "image" : "smaller_images/important4.png",
        "choices": {
            "Thinks pepper is `spicy`.":
                [10,["exes", "confused", "confused", "step_brothers", "step_brothers", "squadmates", "old_friends", "end_game",]],
            "Doesn't water her houseplants because it gives the home a 'Tim Burton' vibe.":
                [10,["exes", "squadmates", "old_friends", "twins", "twins", "twins", "end_game"]],
            "Orders a drink/coffee/tea for the vibes, but only takes 3 sips.":
                [10,["confused", "opposites", "opposites", "step_brothers", "squadmates", "gorls", "gorls", "gorls"]],
            "Does not have a 5 year plan (or a 5 day plan).":
                [10,["exes", "opposites", "old_friends", "end_game"]]
        }
    },

    "10": {
        "text": "9/20: These are all on my 'art' Pinterest Board. Pick one.",
        "image" : "smaller_images/vimportant1.png",
        "choices": {
            "Tall Skinny House":
                [11,["twins", "squadmates", "squadmates", "exes", "exes"]],
            "Mirror Mirror Mirror":
                [11,["end_game", "end_game", "twins", "twins", "gorls", "gorls", "gorls"]],
            "JPG or PDF":
                [11,["old_friends", "squadmates", "step_brothers", "step_brothers", "opposites", "opposites", "confused", "confused", "confused", "exes"]],
            "Spilled Milk":
                [11,["end_game", "old_friends", "old_friends", "step_brothers", "opposites"]]
        }
    },
    "11": {
        "text": "10/20: Pick a topic on which YOU would deliver a TED talk",
        "image" : "smaller_images/vimportant2.png",
        "choices": {
            "Pop Culture (e.g. How Internet Memes Shape Our Understanding of Society)":
                [12,["opposites", "opposites", "squadmates", "gorls", "gorls", "gorls"]],
            "Relationship Advice (e.g. Setting Boundaries Without Sounding Like a Medieval Castle)":
                [12,["confused", "confused", "confused", "old_friends", "old_friends", "twins", "twins"]],
            "Science (e.g. The Life Cycle and Behavioral Patterns of a Really Specific Bird No One Has Ever Heard Of)":
                [12,["opposites", "step_brothers", "twins", "end_game", "end_game", "end_game"]],
            "Health & Fitness (e.g. Fitness Tracker or Expensive Bracelet? The Truth About Your Steps)":
                [12,["exes", "exes", "exes", "step_brothers", "step_brothers", "squadmates", "squadmates", "old_friends"]]
        }
    },
    "12": {
        "text": "11/20: Pick a favorite episode from The Office.",
        "image" : "smaller_images/vimportant3.png",
        "choices": {
            "The one where Meredith gets hit by Michael's car, and also rabies.":
                [13,["old_friends", "squadmates", "opposites", "confused", "confused", "confused", "exes"]],
            "The one where Michael hosts a dinner party and shows off his plasma screen TV.":
                [13,["end_game", "twins", "twins", "twins", "step_brothers", "step_brothers"]],
            "The Christmas party where Jim gives Pam a teapot.":
                [13,["end_game", "gorls", "gorls", "gorls", "opposites", "exes"]],
            "The Dundies, when Pam gets banned from Chili's.":
                [13,["end_game", "old_friends", "old_friends", "squadmates", "squadmates", "step_brothers", "opposites", "exes"]]
        }
    },
    "13": {
        "text": "12/20: Pick a state in which you would NEVER want to live.",
        "image" : "smaller_images/vimportant4.png",
        "choices": {
            "Massachusetts":
                [14,["end_game", "end_game", "end_game", "gorls", "exes", "exes"]],
            "North Carolina":
                [14,["gorls", "opposites", "exes"]],
            "Tennessee":
                [14,["old_friends", "gorls", "squadmates", "squadmates", "squadmates", "step_brothers", "opposites", "opposites", "confused", "confused", "confused"]],
            "California":
                [14,["twins", "twins", "twins", "old_friends", "old_friends", "step_brothers", "step_brothers"]]
        }
    },
    "14": {
        "text": "13/20: Chicago OR NYC?",
        "image": "smaller_images/tot1.png",
        "choices": {
            "Chicago":
                [15,[]],
            "NYC":
                [15,[]]
        }
    },
    "15": {
        "text": "14/20: Silver OR Gold?",
        "image": "smaller_images/tot2.png",
        "choices": {
            "Silver":
                [16,["exes", "confused", "end_game", "step_brothers", "squadmates", "opposites"]],
            "Gold":
                [16,["twins", "gorls", "old_friends"]]
        }
    },
    "16": {
        "text": "15/20: Calvin OR HOBBS?",
        "image": "smaller_images/tot3.png",
        "choices": {
            "Calvin":
                [17,["end_game", "twins", "exes"]],
            "Hobbs":
                [17,["step_brothers", "old_friends", "squadmates", "gorls", "confused", "opposites"]]
        }
    },
    "17": {
        "text": "16/20: Mountains OR Beach?",
        "image": "smaller_images/tot4.png",
        "choices": {
            "Mountains":
                [18,["twins", "confused", "step_brothers", "squadmates", "exes"]],
            "Beach":
                [18,["end_game", "gorls", "opposites", "old_friends", "opposites"]]
        }
    },
    "18": {
        "text": "17/20: Pick our aesthetic.",
        "image": "smaller_images/ytm1.png",
        "choices": {
            "coastal grandmother antique dollhouse":
                [19,["gorls", "gorls", "twins", "twins"]],
            "muted saturday morning cartoon nook":
                [19,["exes", "exes", "exes", "confused", "confused", "opposites", "step_brothers", "step_brothers", "squadmates", "squadmates", "old_friends", "old_friends", "old_friends", "end_game"]],
            "enchanted forest midnight library":
                [19,["confused", "opposites", "gorls", "twins"]],
            "retro board game jazz club":
                [19,["opposites", "step_brothers", "squadmates", "end_game", "end_game"]]
        }
    },
    "19": {
        "text": "18/20: Pick our home.",
        "image": "smaller_images/ytm2.png",
        "choices": {
            "The (Chuck) Bass NYC apartment":
                [20,["end_game", "gorls", "opposites", "opposites", "opposites", "confused", "exes", "exes", "exes"]],
            "The Gilmore House in Stars Hollow":
                [20,["twins", "gorls", "gorls"]],
            "The Loft from New Girl":
                [20,["end_game", "end_game", "twins", "squadmates", "squadmates", "step_brothers", "step_brothers"]],
            "The Magic Treehouse":
                [20,["twins", "old_friends", "old_friends", "old_friends", "squadmates", "step_brothers", "confused", "confused"]]

        }
    },
    "20": {
        "text": "19/20: Pick our Song.",
        "image": "smaller_images/ytm3.png",
        "choices": {
            "The Climb // Miley Cyrus":
                [21,["step_brothers", "twins", "squadmates", "gorls", "gorls", "gorls", "end_game"]],
            "Duo // Ben Rector":
                [21,["twins", "end_game", "end_game"]],
            "I Write Sins Not Tragedies // Panic! At The Disco":
                [21,["confused", "opposites", "opposites", "twins", "step_brothers", "squadmates", "old_friends", "old_friends"]],
            "Up Down // T-Pain":
                [21,["exes", "exes", "exes", "confused", "confused", "opposites", "step_brothers", "squadmates", "old_friends", ]]

        }
    },
    "21": {
        "text": "20/20: Pick a couples costume for us to wear on Halloween.",
        "image": "smaller_images/ytm4.png",
        "choices": {
            "Peanut Butter & Jelly":
                [0,["old_friends", "gorls", "gorls", "gorls", "opposites", "opposites", "confused", "exes", "exes", "exes"]],
            "Shaggy & Scooby":
                [0,["confused", "old_friends", "old_friends", "squadmates", "squadmates", "step_brothers", "step_brothers", "step_brothers", "opposites"]],
            "Napoleon Dynamite & Deb":
                [0,["end_game", "end_game"]],
            "Dinosaur & Sexy Jeff Goldblum":
                [0,["end_game", "twins", "twins", "twins", "squadmates", "confused"]]

        }
    }
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
    const veggieImagePath = `smaller_images/id_cards/${maxVeggie}.png`;
    // const veggieImagePath = 'smaller_images/id_cards/confused.png';
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

        text.textContent = "WhatAreWe?";
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
