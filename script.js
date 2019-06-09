const defaultFontSize = "24vw";
const colorList = ["red", "lightblue", "lightgreen", "yellow", "white"];
const content = document.getElementById("content"); //root content

const _o = document.createElement("span");
_o.textContent = "お";
_o.style.fontSize = defaultFontSize;
_o.style.color =
    colorList[(Math.floor(Math.random() * 100) % colorList.length)];
const _ki = document.createElement("span");
_ki.textContent = "き";
_ki.style.fontSize = defaultFontSize;
_ki.style.color =
    colorList[(Math.floor(Math.random() * 100) % colorList.length)];
const _mo = document.createElement("span");
_mo.textContent = "も";
_mo.style.fontSize = defaultFontSize;
_mo.style.color =
    colorList[(Math.floor(Math.random() * 100) % colorList.length)];
const _chi = document.createElement("span");
_chi.textContent = "ち";
_chi.style.fontSize = defaultFontSize;
_chi.style.color =
    colorList[(Math.floor(Math.random() * 100) % colorList.length)];
const okmcElm = document.createElement("div"); //okmc text

/* 
| ==================================================
| ランダムする
*/
const neutral = () => neutralOKMC(_o, _ki, _mo, _chi, okmcElm);
const v = () => vOKMC(_o, _ki, _mo, _chi, okmcElm);
const vReverse = () => vReverseOKMC(_o, _ki, _mo, _chi, okmcElm)
const hReverse = () => hReverseOKMC(_o, _ki, _mo, _chi, okmcElm);
const okmcList = [neutral, v, vReverse, hReverse];

okmcList[(Math.floor(Math.random() * 100) % okmcList.length)].apply();

content.appendChild(okmcElm);
/*
| ==================================================
*/

//配置を中央にする
function centering() {
    if (_o.style.fontSize.match(/.*vw/)) {
        //まだ縦の中央揃えにできない
        // content.style.display = "flex";
        // content.style.alignItems = "center";
        console.log("まだです");
    } else if (_o.style.fontSize.match(/.*vh/)) {
        content.style.textAlign = "center";
        console.log("縦の中央");
    }
}

//縦並びの時に配置を斜めにする
function slant(first, second, third, square) {
    if (first.style.fontSize.match(/.*vh/)) {
        if (Math.floor(Math.random() * 100) % 2 == 0) {
            second.style.margin = "0% 0% 0% 25%";
            third.style.margin = "0% 0% 0% 50%";
            square.style.margin = "0% 0% 0% 75%";
        } else {
            third.style.margin = "0% 0% 0% 25%";
            second.style.margin = "0% 0% 0% 50%";
            first.style.margin = "0% 0% 0% 75%";
        }
    }
}

//普通のおきもち
function neutralOKMC(_o, _ki, _mo, _chi, okmcElm) {
    okmcElm.appendChild(_o);
    okmcElm.appendChild(_ki);
    okmcElm.appendChild(_mo);
    okmcElm.appendChild(_chi);
    switch (Math.floor(Math.random() * 100) % 2) {
        case 0:
            centering();
            break;
    }
    return okmcElm;
}

//横の逆おきもち
function hReverseOKMC(_o, _ki, _mo, _chi, okmcElm) {
    okmcElm.appendChild(_chi);
    okmcElm.appendChild(_mo);
    okmcElm.appendChild(_ki);
    okmcElm.appendChild(_o);
    switch (Math.floor(Math.random() * 100) % 2) {
        case 0:
            centering();
            break;
        default:
            break;
    }
    return okmcElm;
}

//縦のおきもち
function vOKMC(_o, _ki, _mo, _chi, okmcElm) {
    const br1 = document.createElement("div");
    const br2 = document.createElement("div");
    const br3 = document.createElement("div");
    const vVariable = "16vh";
    _o.style.fontSize = vVariable;
    _ki.style.fontSize = vVariable;
    _mo.style.fontSize = vVariable;
    _chi.style.fontSize = vVariable;
    okmcElm.appendChild(_o);
    okmcElm.appendChild(br1);
    okmcElm.appendChild(_ki);
    okmcElm.appendChild(br2);
    okmcElm.appendChild(_mo);
    okmcElm.appendChild(br3);
    okmcElm.appendChild(_chi);
    switch (Math.floor(Math.random() * 100) % 3) {
        case 0:
            centering();
            break;
        case 1:
            slant(_o, _ki, _mo, _chi);
            break;
        default:
            break;
    }
    return okmcElm;
}

//縦の逆おきもち
function vReverseOKMC(_o, _ki, _mo, _chi, okmcElm) {
    const br1 = document.createElement("div");
    const br2 = document.createElement("div");
    const br3 = document.createElement("div");
    const vVariable = "16vh";
    _o.style.fontSize = vVariable;
    _ki.style.fontSize = vVariable;
    _mo.style.fontSize = vVariable;
    _chi.style.fontSize = vVariable;
    okmcElm.appendChild(_chi);
    okmcElm.appendChild(br1);
    okmcElm.appendChild(_mo);
    okmcElm.appendChild(br2);
    okmcElm.appendChild(_ki);
    okmcElm.appendChild(br3);
    okmcElm.appendChild(_o);
    switch (Math.floor(Math.random() * 100) % 3) {
        case 0:
            centering();
            break;
        case 1:
            slant(_chi, _mo, _ki, _o);
            break;
        default:
            break;
    }
    return okmcElm;
}