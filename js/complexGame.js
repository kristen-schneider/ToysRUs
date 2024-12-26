const personalities = {
    "ENEMIES": 0, // Mean, It's You
    "END GAME": 0, // Roses, Duo
    "Partners in Crime": 0, // Bud Like You, Teenagers
    "Confused": 0, // 1955, Convoy
    "Hermits": 0, //
    "College Friends": 0, // Up Down, All Night Longer
    "Chillin'": 0, // Comeback Kid, All The Small Things
    "GIRLS": 0, // Girls Just Wanna Have Fun, ...Baby One More Time
    "Bros": 0, // Summer of '69, A Bar Song
    "Cabin Mates": 0, // He's a Pirate, Dancing Under Red Skies
    "The Philosopher": 0, // The Sound of Silence, Anyone Can Cook
    "Improv Partners": 0 // Why Not?, Paul Revere
};

const gameData = {
    "1": {
        "text": "While the agreement here is that we will be spending the WHOLE day together," +
            " I never defined the hours. What time should I pick you up?",
        "choices": {
            "Let's watch the sunrise together!! We can do a hike, or a walk, or just sit on a bench. :) :) :)":
                [2,[""]],
            "I'll pick YOU up at 8. Early, but not too early-ya dig?":
                [3,[]],
            "Mmmm. Whenever you want, but not too early...":
                [3,[]],
            "How about brunch at 10am? Gives me time to have a coffee before my coffee.":
                [4,[]]
        }
    },
    "2": {
        "text": "Heck ya. I'm down for any kind of sunrise. What flavor of sunrise are you feeling?",
        "choices": {
            "Let's find a good park? I'll bring the coffee, you bring the pastries.":
                [0,[]],
            "A HIKE! Let's try and summit right as the sun is coming up. I'll bring some trail mix!":
                [3,[]],
            "Maybe just a walk around the neighborhood? We can try and plan the rest of the day.":
                [0,[]],
            "A quiet one. Maybe something by the water?":
                [0,[]]
        }
    },
    "3": {
        "text": "I am IN! What kind of weather will you be requesting from Madame Morrible for the day?",
        "choices": {
            "Warm and sunny!! DUH!!":
                [4,[]],
            "Cool and crisp. And the leaves should be crunchy and colorful.":
                [4,[]],
            "I want it to rain. I want to feel the drops on my face and hear the thunder in the distance.":
                [4,[]],
            "Who the heck is Madame Morrible?":
                [4,[]]
        }
    },
    "4": {
        "text": "Coming right up. And to where will we be time traveling today?",
        "choices": {
            "Europe! Any decade; we can just catch the next flight.":
                [5,[]],
            "I don't mess around with time travel. You never know the consequences. Here and now is good for me.":
                [5,[]],
            "The Jurassic period. I want to feel an element of danger.":
                [6,[]],
            "Somewhere tropical maybe!! Hawaii? The 90s?":
                [5,[]]
        }
    },
    "5": {
        "text": "Works for me!!! And what should we pack for our day?",
        "choices": {
            "Snacks. Plenty of water. And maybe a couple of extra pairs of socks. OH! And wear layers.":
                [7,[]],
            "I think I'm just going to throw a few things into a backpack; I can always buy stuff as I need it.":
                [7,[]],
            "I'm going to need at least 2 suitcases. I have a lot of outfits planned.":
                [7,[]],
        }
    },
    "6": {
        "text": "OH FUN. What are you most excited for?",
        "choices": {
            "THE DINOSAURS!!! I want to see a T-Rex!":
                [8,[]],
            "Ian Malcolm <3 <3 (a.k.a.Jeff Goldblum)...and hanging out with you, of course.":
                [8,[]],
            "I've just heard it's beautiful.":
                [8,[]],
        }
    },
    "7": {
        "text": "The hike sure is beautiful, but I think I just heard a roar. What do we do?",
        "choices": {
            "I have had enough nature for one day! Let's head back to the car.":
                [9,[]],
            "Stop being so dramatic. It's probably just your stomach. You should have eaten breakfast.":
                [10,[]],
            "MAYBE IT'S BIGFOOT? Let's see if we can get a closer look!!":
                [11,[]],
            "I think if we just stick to the trail, we'll be fine. Let's keep going!":
                [10,[]]
        }
    },
    "8": {
        "text": "Along our journey to find the *main attraction*, we hear a rustling in the bushes. What do we do?",
        "choices": {
            "T-Rex! T-Rex! Let's GOOO! Just stay calm and don't make any sudden movements.":
                [11,[]],
            "RUN! Back to the time machine!":
                [9,[]],
            "Uh...idk, maybe it's the wind. Let's keep going.":
                [10,[]],
        }
    },
    "9": {
        "text": "No ya, that makes sense. Let's maybe do something else. What do you feel like doing next?",
        "choices": {
            "Something inside please! Let's go get a bite to eat.":
                [14,[]],
            "I need to get some work done. Let's find a coffee shop with good wifi.":
                [18,[]],
            "How about a park? I still want some fresh air, just less danger.":
                [17,[]],
        }
    },
    "10": {
        "text": "Sure thing, boss. But I'm going to need a distraction. What can we talk about?",
        "choices": {
            "Dude same, actually. Let's talk about our favorite movies and tv shows and what kind of character we would want to play.":
                [12,[]],
            "Hahaha, okay, tell me about your biggest fear.":
                [12,[]],
            "Right, okay. Let's see...if you had to re-live one year of your life, which would it be?":
                [12,[]],
            "Okay yah, yah, makes sense. Let me tell you a story.":
                [12,[]]
        }
    },
    "11": {
        "text": "Whatever you say, boss. I'm going to let you lead the way on this one!!!",
        "choices": {
            "Okay, into the bushes we go!":
                [13,[]],
            "Oh, damn. I think it was just a squirrel. NVM. Let's keep moving.":
                [12,[]],
        }
    },
    "12": {
        "text": "At last we have reached the summit! SO WORTH IT. Thanks for pushing through. Once we get back down, what's next?",
        "choices": {
            "Woah, woah, woah. What's the rush? Let's stay, sit, chat for a while??":
                [15,[]],
            "I'm feeling a bit peckish. Let's go get a bite to eat!":
                [14,[]],
            "A nap. I need a nap. Let's go back to my place chill out for a bit.":
                [16,[]],
            "Maybe a park? I think I saw some folks playing frisbee earlier. Let's go check it out!":
                [17,[]]
        }
    },
    "13": {
        "text": "...I'll be there in a minute...just tell me what you see...",
        "choices": {
            "...oh yep. That's a big one alright. That's my b--.":
                [0,["Confused", "Confused", "Confused", "Confused", "Confused", "Confused", "Confused", "Confused", "Confused", "Confused"]],
            "...AHHHHkajgla....haha just kidding.":
                [12,["BROS", "BROS", "BROS", "BROS", "BROS"]],
            "Oh, it's just a squirrel. Let's keep moving.":
                [12,[]],
        }
    },
    "14": {
        "text": "Word. Did you have a place in mind?",
        "choices": {
            "A diner? I could go for some pancakes. Or maybe a burger? Definitely a milkshake. I just want options.":
                [0,[]],
            "Yes, there is this place I've been dying to try. It's a speak easy breakfast joint. It's behind a bookshelf, and an old wizard will ask you a riddle to get in. It's the best. Trust me.":
                [0,[]],
            "Just something light. Maybe a coffee shop?":
                [18,[]],
            "How about we head to my place? I can make us something.":
                [16,[]]
        }
    },
    "15": {
        "text": "Good call. What should we chat about?",
        "choices": {
            "Actually, I'd rather just sit.":
                [19,[]],
            "I need to finish telling you my story!":
                [19,[]],
            "Life, the universe, everything!":
                [19,[]],
            "Whatever you want!":
                [19,[]]
        }
    },
    "16": {
        "text": "No complaints from me. What vibe are you thinking?",
        "choices": {
            "A charcuterie board and yap.":
                [20,[]],
            "A movie marathon with popcorn and snacks. I have all the classics.":
                [20,[]],
            "Day drinking? I have some fun neighbors and we have a bunch of games we like to play.":
                [0,["College Friends", "College Friends", "College Friends", "College Friends", "College Friends", "College Friends", "College Friends", "College Friends", "College Friends", "College Friends"]],
            "How about something warm and creative? Painting? Soup? Writing? Casserole? Music making? A new recipe?":
                [21,[]]
        }
    },
    "17": {
        "text": "Park is great! Let's go! When we get there, tell me what catches your eye first.",
        "choices": {
            "Frisbee! No wait, I see dogs! No wait, there's group yoga! No wait, the ice cream truck! I love the park!":
                [22,[]],
            "OOOh...I take it back actually, there are far too many people here. Let's go back to my place.":
                [16,[]],
            "That shady spot under the tree. Let's go sit there for a while.":
                [28,[]],
            "There is a man standing in the corner wearing a trench coat and sunglasses. He's holding a briefcase. I think he's waiting for us.":
                [24,[]]
        }
    },
    "18": {
        "text": "Always a good choice. What are the vibes?",
        "choices": {
            "Work. I have to work.":
                [0,["ENEMIES", "ENEMIES", "ENEMIES", "ENEMIES", "ENEMIES", "ENEMIES", "ENEMIES", "ENEMIES", "ENEMIES", "ENEMIES"]],
            "I feel like we haven't caught up in a minute; let's chat.":
                [25,[]],
            "I'll probably bring a book? Maybe we can just chill and read for a while?":
                [28,[]],
            "The vibes are coffee...?":
                [28,[]]
        }
    },
    "19": {
        "text": "That was lovely. It looks like it's getting a bit crowded. Where to next?",
        "choices": {
            "Okay, now I'm famished. FOOD!":
                [14,[]],
            "Let's go back to my place chill out some more.":
                [16,[]],
            "Maybe a park? I want to keep the fresh air going.":
                [17,[]]
        }
    },
    "20": {
        "text": "I'm picking up what your putting down. Should I change into sweats or do we think we are going back out later?",
        "choices": {
            "Sweats!! I'm feeling cozy for the rest of the day.":
                [0,["Hermits", "Hermits", "Hermits", "Hermits", "Hermits", "Hermits", "Hermits", "Hermits", "Hermits", "Hermits"]],
            "You can just borrow some of mine. Not sure the vibes yet. Best to stay ready.":
                [23,[]],
            "No way! We are going back out. Just needed a mid-day break.":
                [25,[]],
        }
    },
    "21": {
        "text": "You know me, I'm always in the mood for creative. What are we making?",
        "choices": {
            "Let's start with a new recipe! I love cooking.":
                [26,[]],
            "Music! I am feeling the music in me and need to get it out.":
                [26,[]],
            "Painting! I have a few canvases. Let's get colorful.":
                [26,[]],
            "Writing! I have a few prompts. Let's get deep.":
                [26,[]]
        }
    },
    "22": {
        "text": "THAT WAS SO FUN! What's next? You're on a roll.",
        "choices": {
            "We simply must stay here for a while. There is so much to do.":
                [27, []],
            "Wasn't it?? Okay, now I am getting hungry. Let's go get a bite to eat.":
                [14, []],
            "PHEW! I need a break. Let's head back to my place for a bit.":
                [16, []],
        }
    },
    "23": {
        "text": "And ready I will stay. Let me know when you decide what's next.",
        "choices": {
            "Definitely, dude. Ay ay, cap'n. Will freaking do. When the vibes are right, I'll let you know.":
                [0,["Chillin'", "Chillin'", "Chillin'", "Chillin'", "Chillin'", "Chillin'", "Chillin'", "Chillin'", "Chillin'", "Chillin'"]],
            "You know what...I'm kind of exhausted. I think the rest of the day is best spent indoors. Is that cool with you?":
                [28,[]],
        }
    },
    "24": {
        "text": "I'm intrigued. What do you think we should do?",
        "choices": {
            "I think we should go talk to him. He's probably just lost?":
                [29, [],],
            "I think we should leave. I don't like the vibes here.":
                [30, [],],
            "Talk to him obviously! Sounds like a mystery. I love mysteries.":
                [29, [],],
        }
    },
    "25": {
        "text": "Cool! What do you want to talk about?",
        "choices": {
            "Who said anything about talking?":
                [31,[]],
            "I want to hear about your day. What's been going on in your life?":
                [32,[]],
            "Politics?":
                [0,["ENEMIES", "ENEMIES", "ENEMIES", "ENEMIES", "ENEMIES", "ENEMIES", "ENEMIES", "ENEMIES", "ENEMIES", "ENEMIES"]],
            "Let's ask Google for some good conversation starters.":
                [32,[]]
        }
    },
    "26": {
        "text": "Woah! We really got in the zone! It's getting late. What are you feeling for the rest of the day?",
        "choices": {
            "The night is young! Let's go back out on the town.":
                [0, ["College Friends", "College Friends", "College Friends", "College Friends", "College Friends"]],
            "I'm feeling pretty cozy. Are you good to just stay in for the rest of the night? Maybe watch a movie?":
                [33, []],
        }
    },
    "27": {
        "text": "The sun is starting to set. Can I get a vibe check?",
        "choices": {
            "I'm feeling cozy. Let's go back to my place and watch a movie.":
                [33, []],
            "The night is young! Let's go back out on the town.":
                [0, ["College Friends", "College Friends", "College Friends", "College Friends", "College Friends"]],
        }
    },
    "28": {
        "text": "For surrrrrre...but do you see that man standing in the corner with the briefcase? What do you think he's doing?",
        "choices": {
            "Yes I see him. He's probably just waiting for someone. I don't think we need to do anything.":
                [30, []],
            "Oh, yes. Do you think he needs help?.":
                [29, []],
            "Nah, I don't see him.":
                [30, []],
            "Okay sure, let's go talk to him. Why not?":
                [29, []],
        }
    },
    "29": {
        "text": "There is only one way to find out!",
        "choices": {
            "Excuse me, sir. Do you need help?":
                [34, []],
            "Hey, what's with the briefcase?":
                [35, []],
            "...sup":
                [36, []],
            "Hey, do you know the time?":
                [37, []],
        }
    },
    "30": {
        "text": "Fair enough. What next?",
        "choices": {
            "I need some fresh air. Let's go for a walk.":
                [0, []],
            "I'm feeling a bit exhausted. Let's go back to my place.":
                [0, []],
        }
    },

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
