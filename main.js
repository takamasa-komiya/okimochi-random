const content = document.getElementById("content"); //root content

class OkimochiCharacter {
    constructor(character){
        this.character = character;
        this.node = document.createElement("div");
        this.node.textContent = character;
        this.node.className = "okimochi-char";

        const colorList = ["red", "lightblue", "lightgreen", "yellow", "white"];
        this.node.style.color = colorList[(Math.floor(Math.random() * 100) % colorList.length)]
    }
}

class OkimochiContainer {
    constructor(...args){
        this.node = document.createElement("div");
        content.appendChild(this.node);

        for(let i = 0; i < args.length; i++){
            this.node.appendChild(args[i].node);
        }
    }

    choiceStyle(){
        const styleList = ["row","row-reverse","column","column-reverse"];
        const className = "okimochi " + styleList[Math.floor(Math.random() * styleList.length)];
        this.node.className = className;
        const rand = Math.random() * 3;
        if(rand < 1) this.node.style.alignItems = "center";
        else if(rand < 2) this.node.style.alignItems = "flex-end";
    }
}

const O = new OkimochiCharacter("お")
const KI = new OkimochiCharacter("き")
const MO = new OkimochiCharacter("も")
const CHI = new OkimochiCharacter("ち")
const allOKIMOCHI = new OkimochiContainer(O,KI,MO,CHI)
allOKIMOCHI.choiceStyle();

//"お"をクリックでリフレッシュ
O.node.addEventListener("click",allOKIMOCHI.choiceStyle.bind(allOKIMOCHI),false);