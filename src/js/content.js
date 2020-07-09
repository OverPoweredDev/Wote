const companyNames = {
    blackList: ['A-Mart', 'A-Parts', 'A1', 'AB SALES', 'AB WORLD CLASS', 'ABIRIA', 'Acecharming', 'Acer', 'Action Pro', 'Active People', 'Adaraxx', 'Addict Poker Tables', 'ADTALA', 'ADVENTURE STORE', 'AEAOA', 'Aenllosi', 'Affordable', 'AGM', 'Agnolia', 'AHYUAN', 'Air Chargers', 'AIRFORMZ', 'AK', 'AK ANOLIHK', 'Aketek', 'All For Color', 'All Naturals', 'Alled', 'ALTER', 'Alytimes', 'AM', 'Amaping', 'Amardeep cycles', 'AmazHub', 'AmazonBasics', 'American Documents', 'American Educational Products', 'AMERICAN GREETINGS', 'American Kids', 'amiciKart', 'AmishToyBox.com', 'Amozo', 'Anatex', 'Ancaixin', 'ANCHEER', 'Ancient Living', 'anezus', 'ANG', 'Another Dream', 'Aokbean', 'APEX', 'APINATA4U', 'Aqua Splash', 'Aquabeads', 'AQUARIUS', 'Archana', 'Aron Alpha Industrial Krazy Glue', 'ARRMA', 'Art 101 USA', 'Art of War', 'Art Street', 'Artana', 'As Seen On TV', 'ASC', 'ASHLEY PRODUCTIONS', 'ASIAN', 'Asint', 'ASSEMBLE', 'Associated', 'ASUS', 'ATOM', 'Atomic Market', 'ATOMIK', 'AUF', 'Auldey', 'AUTOart', 'Avon', 'Awpeye', 'Axe Sickle', 'AZ','Vivo', 'Mi', 'RedMi', 'Senyoo', 'Fengshui', 'Fashionury', 'PAKME', 'Hello', 'Lenovo', 'Huawei', 'Haier', 'Gree', 'Robam', 'UBTECH', 'Meizu', 'Aigu', 'ERKE', 'Eno', 'Meizu', 'Tencent', 'TP link', 'Midea', 'DJI', 'ZTE', 'Xiaomi', 'Dabao'],
    whiteList: ['boAt', 'SanDisk', 'Oye', 'JGD']
};

function markElements() {
    badElements.forEach(changeColorRed)
    goodElements.forEach(changeColorGreen)
}

function changeColorRed(val) {
    shopItems[val].style.backgroundColor = '#FFadad';
}

function changeColorGreen(val) {
    shopItems[val].style.backgroundColor = '#adffb1';
}

function markCompany(badElements, goodElements, companies, i) {
    let companyName = (companies[i].textContent).split(' ')[0]
    console.log(companyName)
    if (companyNames.blackList.indexOf(companyName) > -1) {
        badElements.push(i)
    } else if (companyNames.whiteList.indexOf(companyName) > -1) {
        goodElements.push(i)
    }
}

let href = window.location.href
let shopItems
let itemNames
let badElements
let goodElements
let regex = RegExp("https?:\/\/(?=(?:....)?amazon|smile)(www|smile)\S+in(((?:\/(?:dp|gp)\/([A-Z0-9]+))?\S*[?&]?(?:tag=))?\S*?)(?:#)?(\w*?-\w{2})?(\S*)(#?\S*)+");
m = href.match(regex)

if (href.includes('https://www.amazon.in/s?bbn')) {
    badElements = [];
    goodElements = [];
    shopItems = document.getElementsByClassName('sg-col-20-of-24 s-result-item s-asin sg-col-0-of-12 sg-col-28-of-32 sg-col-16-of-20 sg-col sg-col-32-of-36 sg-col-12-of-16 sg-col-24-of-28');
    itemNames = document.getElementsByClassName('a-size-medium a-color-base a-text-normal')
    for (let i = 0; i < itemNames.length; i++) {
        markCompany(badElements, goodElements, itemNames, i)
    }
    markElements()
} else if (href.includes('https://www.amazon.in/s?k')) {
    badElements = [];
    goodElements = [];
    shopItems = document.getElementsByClassName('sg-col-4-of-24 sg-col-4-of-12 sg-col-4-of-36 s-result-item s-asin sg-col-4-of-28 sg-col-4-of-16 sg-col sg-col-4-of-20 sg-col-4-of-32');
    itemNames = document.getElementsByClassName('a-size-base-plus a-color-base a-text-normal');
    for (let i = 0; i < itemNames.length; i++) {
        markCompany(badElements, goodElements, itemNames, i);
    }
    markElements()
} else if (m){
    window.alert("product")
}
