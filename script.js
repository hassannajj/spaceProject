const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');
const img7 = document.getElementById('img7');

const button1 = document.getElementById('gammaButton');
const button2 = document.getElementById('xrayButton');
const button3 = document.getElementById('visibleButton');
const button4 = document.getElementById('infraredButton');
const button5 = document.getElementById('microwaveButton');
const button6 = document.getElementById('radioButton');
const button7 = document.getElementById('combinedButton');

const source = document.getElementById('source');

function turnOffAllImg() {
    const imgList = [img1, img2, img3, img4, img5, img6, img7];
    for (i of imgList) {
        if (i.classList['value'] == 'show') {
            i.classList.toggle('show');
        }
    }
}

function turnOffAllButton() {
    const buttonList = [button1, button2, button3, button4, button5, button6, button7];
    for (i of buttonList) {
        if (i.classList['value'] == 'on') {
            i.classList.toggle('on');
        }
    }
}


function gammaRay() {
    turnOffAllImg();
    turnOffAllButton();

    img1.classList.toggle('show');
    button1.classList.toggle('on');

    source.innerText = 'Fermi';
    source.href = 'http://fermi.gsfc.nasa.gov/';
}

function xRay() {
    turnOffAllImg();
    turnOffAllButton();

    img2.classList.toggle('show');
    button2.classList.toggle('on');

    source.innerText = 'ROSAT';
    source.href = 'http://www.mpe.mpg.de/xray/wave/rosat/index.php';
}

function visibleLight() {
    turnOffAllImg();
    turnOffAllButton();

    img3.classList.toggle('show');
    button3.classList.toggle('on');

    source.innerText = 'skysurvey.org';
    source.href = 'http://skysurvey.org/';

}

function infrared() {
    turnOffAllImg();
    turnOffAllButton();

    img4.classList.toggle('show');
    button4.classList.toggle('on');

    source.innerText = 'IRAS';
    source.href = 'http://irsa.ipac.caltech.edu/IRASdocs/iras.html';
}

function microwave() {
    turnOffAllImg();
    turnOffAllButton();

    img5.classList.toggle('show');
    button5.classList.toggle('on');
    console.log("microwave");

    source.innerText = 'ESA Planck';
    source.href = 'http://www.esa.int/esaCP/SEMF2FRZ5BG_index_0.html';
}

function radioWave() {
    turnOffAllImg();
    turnOffAllButton();

    img6.classList.toggle('show');
    button6.classList.toggle('on');

    source.innerText = 'Haslam et al.';
    source.href = 'http://lambda.gsfc.nasa.gov/product/foreground/haslam_408.cfm';
}

function combined() {
    turnOffAllImg();
    turnOffAllButton();

    img7.classList.toggle('show');
    button7.classList.toggle('on');

    source.innerText = '';
    source.href = '';
}

visibleLight();