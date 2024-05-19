function selectProd() {
    let selectedBrand = document.getElementById('brands').value;
    document.getElementById('wacom').classList.add('hidden');
    document.getElementById('huion').classList.add('hidden');
    document.getElementById('xppen').classList.add('hidden');
    document.getElementById('choose').style.display = "block";
    if (selectedBrand === "huion") {
        document.getElementById('huion').classList.remove('hidden');
        document.getElementById('choose').style.display = "none";
        document.getElementById('menuselect').style.display = 'none';
    } else if (selectedBrand === "wacom") {
        document.getElementById('wacom').classList.remove('hidden');
        document.getElementById('choose').style.display = "none";
        document.getElementById('menuselect').style.display = 'none';
    } else if (selectedBrand === "xppen") {
        document.getElementById('xppen').classList.remove('hidden');
        document.getElementById('choose').style.display = "none";
        document.getElementById('menuselect').style.display = 'none';
    } 
}

function selectHuion(brand) {
    document.getElementById('menuselect').style.display = 'none';
    let huion = 'shop' + brand;
    document.getElementById('huion').classList.remove('hidden');
}

function selectXPPEN(brand) {
    document.getElementById('menuselect').style.display = 'none';
    let xppen = 'shop' + brand;
    document.getElementById('xppen').classList.remove('hidden');
}

function selectWacom(brand) {
    document.getElementById('menuselect').style.display = 'none';
    let wacom = 'shop' + brand;
    document.getElementById('wacom').classList.remove('hidden');
}

function buyButton(Store) {
    document.getElementById('buy-2').style.display = 'block';
    let purchase = 'buy' + Store;
    document.getElementById('buy-2').classList.remove('hidden');
    blurBackground();
}

function blurBackground() {
    let backgroundElement = document.getElementById('shop');
    backgroundElement.style.filter = 'blur(5px)';
}

function backToShop() {
    document.getElementById('buy-2').style.display = 'none';
    let purchase = 'buy' + Store;
    document.getElementById('buy-2').classList.remove('hidden');
}

function unblurBackground() {
    let backgroundElement = document.getElementById('shop');
    backgroundElement.style.filter = 'none';
}

function otherButtonClicked() {
    unblurBackground();
}
