let tabAboutMe = null
let tabEducation = null
let tabExperience = null
let infoTable = null
let db = null
let currentView = undefined
const VIEW_TOKEN_TTL = 10800000

function chooseLanguageVietnam() {
    window.sessionStorage.setItem('language', 'vi')
    closeLanguagePopup();
    setTextVietnamese();
    displayContent()
}

function closePopupContact() {
    document.getElementById('popup-contact').style.transform = "scale(0)"
    setTimeout(() => {
        document.getElementById('popup-wrapper').style.display = "none"
    }, 300)
}

function chooseLanguageEnglish() {
    window.sessionStorage.setItem('language', 'en')
    closeLanguagePopup();
    setTextEnglish();
    displayContent()
}

function displayContent() {
    displayLineCard()
    displaySocialInfo()
}

function contact() {
    document.getElementById('popup-wrapper').style.display = "block"

    setTimeout(() => {
        document.getElementById('popup-contact').style.transform = "scale(1)"
    }, 10)
}

function closeLanguagePopup() {
    document.getElementById('popup-language').style.transform = "scale(0)";
    setTimeout(() => {
        document.getElementById('popup-background').style.display = "none";
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
        'YEARS EXP',
        'Contact',
        'Contact with me',
        'Email',
        'Name',
        'Message',
        'SUBMIT'
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
        'NĂM KN',
        'Liên hệ',
        'Liên hệ với tôi',
        'Email',
        'Tên',
        'Lời nhắn',
        'GỬI'

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
    document.getElementById('contact-button').innerText = textArray[15]
    document.getElementById('label-contact').innerText = textArray[16]
    document.getElementById('email-contact').innerText = textArray[17]
    document.getElementById('name-contact').innerText = textArray[18]
    document.getElementById('message-contact').innerText = textArray[19]
    document.getElementById('submit-contact-button').innerText = textArray[20]
}

function displayLineCard() {
    let lineCard = document.getElementById('line-card')
    lineCard.style.display = "flex"
    setTimeout(() => {
        lineCard.style.transform = "scale(1)"
    }, 300)
}

function displaySocialInfo() {
    let socialInfo = document.getElementById('social-info')
    socialInfo.style.display = "flex"
    setTimeout(() => {
        socialInfo.style.transform = "scale(1)"
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
    toggleTab(tabAboutMe, tabEducation, tabExperience)
}

function toggleTabEducation() {
    toggleTab(tabEducation, tabAboutMe, tabExperience)
}

function toggleTabExperience() {
    toggleTab(tabExperience, tabEducation, tabAboutMe)
}

function toggleTab(tabActive, tabNone1, tabNone2) {
    if (tabActive.classList.contains('active')) {
        tabActive.style.transform = 'scale(1) translateX(0px)'
        tabActive.classList.remove('active')
        offInfoTable()
    } else {
        let offset = getOffset(tabActive);
        let translateX = offset.left - 50
        tabActive.style.transform = `scale(1) translateX(-${translateX}px) `
        tabNone1.style.transform = 'translateX(0px)'
        tabNone2.style.transform = 'translateX(0px)'
        tabActive.classList.add('active')
        displayInfoTable();
    }
}

function displayInfoTable() {
    if (window.screen.width <= 768) {
        infoTable.style.display = "flex"
        setTimeout(() => {
            infoTable.style.transform = `scale(1)`;
        }, 0)
    } else {
        let translateX = getOffset(tabAboutMe).left + 500 + tabAboutMe.offsetWidth / 2;
        let translateY = getOffset(tabAboutMe).top / 2;
        infoTable.style.display = "flex";
        setTimeout(() => {
            infoTable.style.transform = `scale(1) translateX(${translateX}px) translateY(${translateY}px)`;
        }, 0)
    }

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
    initFirebase()
    setTimeout(() => {
        increaseView()
    }, 5000)
    let language = window.sessionStorage.getItem('language')
    if (!language) {
        document.getElementById('popup-background').style.display = "block"
        return;
    }
    displayLanguage(language);
    displayLineCard();
    displaySocialInfo();
});

function initFirebase() {
    var config = {
        apiKey: "AAAAIKxbihc:APA91bG1CgVUUgZYxJH21AyuiHd_zE4MZXlgMZXAFrBuBIZavLBARMzi1b_AwjqlagNTM_QRSHlBIumXJQXPwzrtw0yMmNY98RaEQBbuQX8WVBCUdSHuuuQV_7dgfT70WCILawvM4UC4",
        authDomain: "porfolio-b45a2.firebaseapp.com",
        projectId: 'porfolio-b45a2'
    };
    firebase.initializeApp(config);
    let firestore = firebase.firestore();
    db = firestore.collection("actions").doc("4bGJCR8MHouZYqHiRuOB")

    //get views
    db.get().then((doc) => {
        currentView = doc.data().views
        document.getElementById('views-number').innerText = currentView
    })

    //listen database change
    db.onSnapshot((doc) => {
        let source = doc.metadata.hasPendingWrites ? "Local" : "Server";
        currentView = doc.data().views
        document.getElementById('views-number').innerText = currentView
    });
}

function increaseView() {
    let expiredToKenView = window.localStorage.getItem('expired_token_view')
    if (expiredToKenView && (new Date().getTime() - Number.parseInt(expiredToKenView)) < VIEW_TOKEN_TTL) {
        return;
    }
    if (currentView) {
        db.update({
            views: currentView + 1
        }).then(() => {
            window.localStorage.setItem('expired_token_view', new Date().getTime().toString())
        })
    }
}

function initItemDOM() {
    tabAboutMe = document.getElementById('tab-about-me')
    tabEducation = document.getElementById('tab-education')
    tabExperience = document.getElementById('tab-experience')
    infoTable = document.getElementById('information-table')
}


function initEventListener() {
    document.getElementById('vietnam-language').addEventListener('click', chooseLanguageVietnam, false)
    document.getElementById('british-language').addEventListener('click', chooseLanguageEnglish, false)
    document.getElementById('vietnam-language-background').addEventListener('click', chooseLanguageVietnam, false)
    document.getElementById('british-language-background').addEventListener('click', chooseLanguageEnglish, false)
    document.getElementById('contact-block').addEventListener('click', contact, false)
    document.getElementById('popup-wrapper').addEventListener('click', closePopupContact, false)
    document.getElementById('popup-contact').addEventListener('click', (e) => {
        e.stopPropagation()
    }, false)
    tabAboutMe.addEventListener('click', toggleTabAboutMe, false)
    tabEducation.addEventListener('click', toggleTabEducation, false)
    tabExperience.addEventListener('click', toggleTabExperience, false)
}

function displayLanguage(language) {
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
