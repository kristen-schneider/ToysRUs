const personalities = {
    "ENEMIES": 0,
    "END GAME": 0,
    "Partners in Crime": 0,
    "Confused": 0,
    "Twins": 0,
    "GORLS": 0,
    "(step) brothers": 0,
    "Teammates": 0,
    "Improv Partners": 0
};

const gameData = {
    "1": {
        "text": "",
        "choices": {
            "":
                [2,[""]],
            "":
                [3,[""]],
            "":
                [3,[""]],
            "":
                [4,[""]]
        }
    },
    "2": {
        "text": "Pick a meal.",
        "choices": {
            "":
                [2,[""]],
            "Steak and potatoes.":
                [3,[""]],
            "PB&J, apples, string cheese, and a granola bar.":
                [3,[""]],
            "A hearty salad.":
                [4,[""]]
        }
    },
    "3": {
        "text": "Pick a show to watch with me.",
        "choices": {
            "The Office-it still makes me laugh.":
                [2,[""]],
            "A documentary-I need a new thing to learn about.":
                [3,[""]],
            "Love Island-reality TV is the best, innit?!":
                [3,[""]],
            "Something new, or something that neither of us have seen before.":
                [4,[""]]
        }
    },
    "4": {
        "text": "Pick a state in which you would never want to live.",
        "choices": {
            "California":
                [2,[""]],
            "Florida":
                [3,[""]],
            "Iowa":
                [3,[""]],
            "New Jersey":
                [4,[""]]
        }
    },
    "5": {
        "text": "A green flag of YOURS is...",
        "choices": {
            "":
                [2,[""]],
            "":
                [3,[""]],
            "":
                [3,[""]],
            "":
                [4,[""]]
        }
    },
    "6": {
        "text": "A red flag of YOURS is...",
        "choices": {
            "":
                [2,[""]],
            "":
                [3,[""]],
            "":
                [3,[""]],
            "":
                [4,[""]]
        }
    },
    "7": {
        "text": "A green flag in ME is...",
        "choices": {
            "":
                [2,[""]],
            "":
                [3,[""]],
            "":
                [3,[""]],
            "":
                [4,[""]]
        }
    },
    "8": {
        "text": "A red flag in ME is....",
        "choices": {
            "":
                [2,[""]],
            "Your avoidant attachment style.":
                [3,[""]],
            "":
                [3,[""]],
            "":
                [4,[""]]
        }
    },
    "9": {
        "text": "If you were given a free ticket to space, would you take it?",
        "choices": {
            "Yes.":
                [2,[""]],
            "No.":
                [3,[""]]
        }
    },
    "10": {
        "text": "",
        "choices": {
            "":
                [2,[""]],
            "":
                [3,[""]],
            "":
                [3,[""]],
            "":
                [4,[""]]
        }
    },
    "": {
        "text": "",
        "choices": {
            "":
                [2,[""]],
            "":
                [3,[""]],
            "":
                [3,[""]],
            "":
                [4,[""]]
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
