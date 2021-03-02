let tabAboutMe = null
let tabEducation = null
let tabExperience = null
let infoTable = null

function chooseLanguageVietnam() {
    window.sessionStorage.setItem('language', 'vi')
    closeLanguagePopup();
    setTextVietnamese();
    displayLineCard();
}

function chooseLanguageEnglish() {
    window.sessionStorage.setItem('language', 'en')
    closeLanguagePopup();
    setTextEnglish();
    displayLineCard();
}

function closeLanguagePopup() {
    document.getElementById('popup-language').style.transform = "scale(0)";
    setTimeout(() => {
        document.getElementById('popup-background_v2').style.display = "none";
    }, 300)
}

function getYearsOld() {
    let date = new Date();
    return date.getFullYear() - 1997;
}

function setTextEnglish() {
    let textArray = [
        'ABOUT ME', 'EDUCATION', 'EXPERIENCE',
        "Except handsome, rich and well-studying are something i don't have, i'm also had so much else negative. Click this tab to explorer more about me and be my part of life.",
        "I'm a Information Technology student of Ho Chi Minh University of Science - Vietnam National University. I can install windows for you but idk how to repair household appliances",
        "In my childhood, i spend to much time to PC game, my mom always admonish because that, so that why i wanna to become a member of some game online company. And now, i'm a software engineer of VNG Corp",
        getYearsOld().toString(),
        'YEARS OLD',
        'HEIGHT(cm)',
        '1', 'TRAVEL',
        'GRADUATED',
        'COMPANY',
        'PRODUCT',
        'YEARS EXP'
    ]
    setText(textArray)
}

function setTextVietnamese() {
    let textArray = [
        'BẢN THÂN', 'HỌC VẤN', 'KINH NGHIỆM',
        "Ngoại trừ đẹp trai, nhà giàu, học giỏi là những thứ tui chưa có ra thì tui cũng còn rất nhiều thứ khác chưa tốt. Nhấn vào thẻ này để tìm hiểu thêm dề tui và tui cũng muốn bạn trở thành một phần trong hành trình cuộc sống.",
        "Là sinh viên khoa Công nghệ thông tin trường Đại học Khoa học Tự nhiên - Đại học quốc gia TP.HCM. Tui biết cài win nhưng không biết sửa đồ điện gia dụng",
        "Hồi nhỏ tui ghiền chơi điện tử lắm, nhưng mà bị má chửi hoài nên mong muốn được vào công ty game để được chơi game một cách hợp pháp. Hiện tại tui đang là dev tại công ty VNG",
        getYearsOld().toString(),
        'TUỔI',
        'CAO(cm)',
        '1', 'NƯỚC ĐI QUA',
        'TỐT NGHIỆP',
        'CÔNG TY',
        'SẢN PHẨM',
        'NĂM KN'

    ]
    setText(textArray)
}

function setText(textArray) {
    document.getElementById('about-me').innerText = textArray[0]
    document.getElementById('education').innerText = textArray[1]
    document.getElementById('experience').innerText = textArray[2]

    document.getElementById('about-me-des').innerText = textArray[3]
    document.getElementById('education-des').innerText = textArray[4]
    document.getElementById('experience-des').innerText = textArray[5]

    document.getElementById('years-old-numb').innerText = textArray[6]
    document.getElementById('years-old').innerText = textArray[7]
    document.getElementById('height').innerText = textArray[8]
    document.getElementById('nation-numb').innerText = textArray[9]
    document.getElementById('nation').innerText = textArray[10]
    document.getElementById('graduated').innerText = textArray[11]
    document.getElementById('company').innerText = textArray[12]
    document.getElementById('product').innerText = textArray[13]
    document.getElementById('experience-doing').innerText = textArray[14]
}

function displayLineCard() {
    let lineCard = document.getElementById('line-card')
    lineCard.style.display = "flex"
    setTimeout(() => {
        lineCard.style.transform = "scale(1)"
    }, 300)
}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}

function toggleTabAboutMe() {
    if (tabAboutMe.classList.contains('active')) {
        tabAboutMe.style.transform = 'translateX(0px)'
        tabAboutMe.classList.remove('active')
        offInfoTable()
    } else {
        displayInfoTable();
        tabAboutMe.style.transform = 'translateX(-200px)'
        tabEducation.style.transform = 'translateX(0px)'
        tabExperience.style.transform = 'translateX(0px)'
        tabAboutMe.classList.add('active')
    }
}

function toggleTabEducation() {
    if (tabEducation.classList.contains('active')) {
        tabEducation.style.transform = 'translateX(0px)'
        tabAboutMe.style.transform = 'translateX(0px)'
        tabEducation.classList.remove('active')
        offInfoTable()
    } else {
        displayInfoTable();
        tabEducation.style.transform = 'translateX(-495px)'
        tabExperience.style.transform = 'translateX(0px)'
        tabAboutMe.style.transform = 'translateX(400px)'
        tabEducation.classList.add('active')
    }
}

function toggleTabExperience() {
    if (tabExperience.classList.contains('active')) {
        tabExperience.style.transform = 'translateX(0px)'
        tabAboutMe.style.transform = 'translateX(0px)'
        tabExperience.classList.remove('active')
        offInfoTable()
    } else {
        displayInfoTable();
        tabExperience.style.transform = 'translateX(-790px)'
        tabAboutMe.style.transform = 'translateX(700px)'
        tabEducation.style.transform = 'translateX(0px)'
        tabExperience.classList.add('active')
    }
}

function displayInfoTable() {
    let translateX = getOffset(tabAboutMe).left + 500 + tabAboutMe.offsetWidth / 2;
    let translateY = getOffset(tabAboutMe).top / 2;
    console.log(translateY)
    infoTable.style.display = "flex";
    setTimeout(() => {
        infoTable.style.transform = `scale(1) translateX(${translateX}px) translateY(${translateY}px)`;
    }, 0)
}

function offInfoTable() {
    infoTable.style.transform = `scale(0) translate(0px, 0px)`
    setTimeout(() => {
        infoTable.style.display = "none"
    }, 300)
}

document.addEventListener("DOMContentLoaded", function (event) {
    initItemDOM();
    initEventListener();
    let language = window.sessionStorage.getItem('language')
    if (!language) {
        document.getElementById('popup-background_v2').style.display = "block"
        return;
    }
    displayLanguage(language);
    displayLineCard();
});

function initItemDOM() {
    tabAboutMe = document.getElementById('tab-about-me')
    tabEducation = document.getElementById('tab-education')
    tabExperience = document.getElementById('tab-experience')
    infoTable = document.getElementById('information-table')
}

function initEventListener() {
    document.getElementById('vietnam-language').addEventListener('click', chooseLanguageVietnam, false)
    document.getElementById('british-language').addEventListener('click', chooseLanguageEnglish, false)
    document.getElementById('vietnam-language-background_v2').addEventListener('click', chooseLanguageVietnam, false)
    document.getElementById('british-language-background_v2').addEventListener('click', chooseLanguageEnglish, false)
    tabAboutMe.addEventListener('click', toggleTabAboutMe, false)
    tabEducation.addEventListener('click', toggleTabEducation, false)
    tabExperience.addEventListener('click', toggleTabExperience, false)
}

function displayLanguage(language) {
    console.log(language)
    switch (language) {
        case 'vi': {
            setTextVietnamese()
            break;
        }
        case 'en': {
            setTextEnglish()
            break;
        }
        default:
            break;
    }
}
