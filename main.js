const content = document.getElementById("content"); //root content

class okimochiCharacter {
    constructor(character){
        this.character = character;
        this.node = document.createElement("div");
        this.node.textContent = character;
        this.node.className = "okimochi-char";

        const colorList = ["red", "lightblue", "lightgreen", "yellow", "white"];
        this.node.style.color = colorList[(Math.floor(Math.random() * 100) % colorList.length)]
    }
}

class okimochiContainer {
    constructor(...args){
        this.node = document.createElement("div");
        content.appendChild(this.node);

        for(let i = 0; i < args.length; i++){
            this.node.appendChild(args[i].node);
        }

        this.styleList = ["row","row-reverse","column","column-reverse"];
        this.choiceStyle();
    }

    choiceStyle(){
        const className = "okimochi " + this.styleList[Math.floor(Math.random() * this.styleList.length)];
        this.node.className = className;
        const rand = Math.random() * 3;
        if(rand < 1) this.node.style.alignItems = "center";
        else if(rand < 2) this.node.style.alignItems = "flex-end";
    }
}

const O = new okimochiCharacter("お")
const KI = new okimochiCharacter("き")
const MO = new okimochiCharacter("も")
const CHI = new okimochiCharacter("ち")
const allOKIMOCHI = new okimochiContainer(O,KI,MO,CHI)