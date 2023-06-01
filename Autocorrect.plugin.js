//META{"name":"AutocorrectPlugin","website":"https://github.com/k3noxofficial","source":"https://github.com/K3NOXOFFICIAL/BD-Auto-Correct/new/main"}*//

class AutocorrectPlugin {
    getName() {
        return "Autocorrect Plugin";
    }

    getDescription() {
        return "Autocorrects spelling mistakes in Discord chat while typing.";
    }

    getVersion() {
        return "1.12.3";
    }

    getAuthor() {
        return "K3NOX";
    }

    start() {
        this.initializeAutocorrect();
    }

    initializeAutocorrect() {
        const textarea = document.querySelector(".chat textarea");
        if (textarea) {
            textarea.addEventListener("input", (event) => {
                const input = event.target.value;
                const words = input.split(" ");

                for (let i = 0; i < words.length; i++) {
                    const correctedWord = this.autocorrectWord(words[i]);
                    if (correctedWord) {
                        words[i] = correctedWord;
                    }
                }

                event.target.value = words.join(" ");
            });
        }
    }

autocorrectWord(word) {
    const corrections = {
        "recieve": "receive",
        "acommodate": "accommodate",
        "adress": "address",
        "definately": "definitely",
        "seperate": "separate",
        "neccessary": "necessary",
        "occurence": "occurrence",
        "wierd": "weird",
        "rythm": "rhythm",
        "accidentaly": "accidentally",
        "experiance": "experience",
        "ocasion": "occasion",
        "pursuade": "persuade",
        "dissapoint": "disappoint",
        "athiest": "atheist",
        "occured": "occurred",
        "untill": "until",
        "posession": "possession",
        "suprise": "surprise",
        "seperately": "separately",
        "neccessarily": "necessarily",
        "ocassion": "occasion",
        "definitly": "definitely",
        "thier": "their",
        "rythym": "rhythm",
        "beleive": "believe",
        "ocured": "occurred",
        "wether": "whether",
        "recieveing": "receiving",
        "occuring": "occurring",
        "experince": "experience",
        "disapoint": "disappoint",
        "athiests": "atheists",
        "misspell": "misspell",
        "opportunity": "opportunity",
        "recieving": "receiving",
        "beleiving": "believing",
        "enviromental": "environmental",
        "ocassionally": "occasionally",
        "occurs": "occurs",
        "suprises": "surprises",
        "adres": "address",
        "accidentaly": "accidentally",
        "deceive": "deceive",
        "speach": "speech",
        "committe": "committee",
        "occassionaly": "occasionally",
        "occurance": "occurrence",
        "ocur": "occur",
        "conciousness": "consciousness",
        "occured": "occurred",
        "speachless": "speechless",
        "suprising": "surprising",
        "enviromentally": "environmentally",
        "misspeled": "misspelled",
        "comit": "commit",
        "commitee": "committee",
        "ocasionally": "occasionally",
        "ocurs": "occurs",
        "conciously": "consciously",
        "ocurance": "occurrence",
        "beleivability": "believability",
        "speachwriter": "speechwriter",
        "commitees": "committees",
        "ocassions": "occasions",
        "ocuring": "occurring",
        "occurances": "occurrences",
        "conciousness": "consciousness",
        "beleivable": "believable",
        "speachwriters": "speechwriters",
        "ocassions": "occasions",
        "ocurance": "occurrence",
        "ocuring": "occurring",
        "conciousness": "consciousness",
        "beleivability": "believability",
         // Add more autocorrections as needed
        };

        const lowercasedWord = word.toLowerCase();
        if (corrections.hasOwnProperty(lowercasedWord)) {
            return corrections[lowercasedWord];
        }

        return null;
    }

    stop() {}
    load() {}
    unload() {}
    onMessage() {}
    onSwitch() {}
}
