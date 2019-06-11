const content = document.getElementById("content"); //root content

class OkimochiCharacter {
    constructor(character) {
        this.character = character;
        this.node = document.createElement("div");
        this.node.textContent = character;
        this.node.className = "okimochi-char";
    }

    choiceColor() {
        const colorList = ["red", "lightblue", "lightgreen", "yellow", "white"];
        this.node.style.color = colorList[(Math.floor(Math.random() * 100) % colorList.length)]
    }
}

class OkimochiContainer {
    constructor(...args) {
        this.args = args;
        this.node = document.createElement("div");
        content.appendChild(this.node);
        args.forEach(e => this.node.appendChild(e.node))

        this.setIntervalHandle = false;
    }

    choiceStyle() {
        const styleList = ["row", "row-reverse", "column", "column-reverse"];
        const alignList = ["flex-start", "center", "flex-end"];
        const className = ["okimochi", styleList[Math.floor(Math.random() * styleList.length)], alignList[Math.floor(Math.random() * alignList.length)]].join(" ");
        this.node.className = className;
        this.args.forEach(e => e.choiceColor());
    }

    okimochiAutoReflesh() {
        const setIntervalHandle = this.setIntervalHandle;
        const refleshTime = 5000;
        clearInterval(setIntervalHandle);
        if (!setIntervalHandle) this.setIntervalHandle = setInterval(this.choiceStyle.bind(this), refleshTime);
        else this.setIntervalHandle = false;
    }
}

const O = new OkimochiCharacter("お")
const KI = new OkimochiCharacter("き")
const MO = new OkimochiCharacter("も")
const CHI = new OkimochiCharacter("ち")
const allOKIMOCHI = new OkimochiContainer(O, KI, MO, CHI)
allOKIMOCHI.choiceStyle();

O.node.addEventListener("click", allOKIMOCHI.choiceStyle.bind(allOKIMOCHI), false);
CHI.node.addEventListener("click", allOKIMOCHI.okimochiAutoReflesh.bind(allOKIMOCHI), false);