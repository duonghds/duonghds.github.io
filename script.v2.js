let tabAboutMe = null
let tabEducation = null
let tabExperience = null
let infoTable = null
let db = null
let contactDB = null
let currentView = undefined
const VIEW_TOKEN_TTL = 10800000
let tabIndex = 1

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
    displayDirection()
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
        "Except handsome, rich and well-studying are something I don't have, I'm also had so much else negative. Click this tab to explorer more about me and be my part of life.",
        "I'm a Information Technology student of Ho Chi Minh University of Science - Vietnam National University. I can install windows for you but idk how to repair household appliances",
        "In my childhood, i spend to much time to PC game, my mom always admonish because that, so that why i wanna to become a member of some game online company. Finally, I was a software engineer of VNG Corp",
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
        'SUBMIT',
        "Hoang Dinh Son Duong is my name. You don't know how to start a conversation with me? Just ask me to play some game with you, or go to play football, it easy way to our to be friend.",
        "HOBBIES",
        "INFORMATION",
        "Phone Number:(+84) 332165795",
        "Birthday: 24/11/1997",
        "Live in: 45 Phung Hung, An Thoi 2, Phu Quoc, Kien Giang",
        "Tap for more",
        "My student life is so weired. In 9 years of school, i'm a stupid student never thinking about knowledge, job, just think will be a fisherman. Luckily, i realized the world out of that is so much interest than i known",
        "2012-2015 - An Thoi high school",
        "In first day of high school i wanna be a writer, i'm writing so much, but in the university entrance exam, the software engineer is my selected for future",
        "2015-2018 - University of Science",
        "I throught university life is just learn and learn more(i saw in film), but beside that i also learn so much another such as: about people, about friend, about family, about life",
        "Download for view detail my working experience",
        "DOWNLOAD RESUME"
    ]
    setText(textArray)
}

function setTextVietnamese() {
    let textArray = [
        'BẢN THÂN', 'HỌC VẤN', 'KINH NGHIỆM',
        "Ngoại trừ đẹp trai, nhà giàu, học giỏi là những thứ mình chưa có ra thì mình cũng còn rất nhiều thứ khác chưa tốt. Nhấn vào thẻ này để tìm hiểu thêm dề mình và mình cũng muốn bạn trở thành một phần trong hành trình cuộc sống.",
        "Là sinh viên khoa Công nghệ thông tin trường Đại học Khoa học Tự nhiên - Đại học quốc gia TP.HCM. mình biết cài win nhưng không biết sửa đồ điện gia dụng",
        "Hồi nhỏ mình ghiền chơi điện tử lắm, nhưng mà bị má chửi hoài nên mong muốn được vào công ty game để được chơi game một cách hợp pháp. Cuối cùng, mình đã từng trở thành 1 LTV của VNG",
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
        'GỬI',
        "Tên mình là Hoàng Đình Sơn Dương. Nếu bạn k biết bắt chuyện với mình như nào thì thôi cứ rủ mình chơi game hay đá bóng đi, như vậy nhanh thành bạn hơn đó.",
        "SỞ THÍCH",
        "THÔNG TIN",
        "Điện thoại:(+84) 332165795",
        "Ngày sinh: 24/11/1997",
        "Địa chỉ: 45 Phùng Hưng, An Thới 2, Phú Quốc, Kiên Giang",
        "Xem thêm",
        "Thời học sinh của mình khá lạ. Trong 9 năm đầu, mình chưa từng hứng thú gì về kiến thức hay công việc sau này cả, cứ nghĩ rồi sẽ đi biển thôi. May mắn là những năm sau mình đã nhận ra được ngoài kia còn nhiều điều thú vị hơn nhiều",
        "2012-2015 - THPT An Thới",
        "Năm lớp 10 của cấp 3, mình luôn nghĩ mình sẽ thành nhà văn nên bản thân đã viết khá nhiều, nhưng tới đợt thi đại học thì mình nhận ra trở thành một kỹ sư lập trình mới là con đường đúng của mình",
        "2015-2018 - Đại học Khoa học Tự nhiên",
        "Hồi đó mình nghĩ là lên đại học là chỉ có học và học(coi phim thấy vậy), rồi lên đại học nhận ra là ngoài những kiến thức chuyên ngành thì đại học còn dạy mình rất nhiều thứ như: về con ngừoi, bạn bè, gia đình hay là cuộc sống",
        "Tải về để xem chi tiết quá trình làm việc của mình nhé",
        "TẢI RESUME"
    ]
    setText(textArray)
}

function submitContact() {
    document.getElementById('popup-contact').style.transform = 'scale(0)'
    document.getElementById('shipping-car').style.transform = 'scale(1) translateX(2000px)'
    setTimeout(() => {
        document.getElementById('popup-wrapper').style.display = 'none'
        document.getElementById('shipping-car').style.transform = 'scale(1) translateX(0px)'
    }, 300)
    let emailItem = document.getElementById('email-contact-input')
    let nameItem = document.getElementById('name-contact-input')
    let messageItem = document.getElementById('message-contact-input')
    let email = emailItem.value
    let name = nameItem.value.trim().replace(' ', '')
    let message = messageItem.value
    if(!email || !name || !message) {
        alert('Please fill full info')
    }
    contactDB.set({
        [name]: JSON.stringify({email, name, message})
    }, {merge: true})
    emailItem.value = ""
    nameItem.value = ""
    messageItem.value = ""
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
    document.getElementById('header-information').innerText = textArray[21]
    document.getElementById('hobbies-label').innerText = textArray[22]
    document.getElementById('information-label').innerText = textArray[23]
    document.getElementById('phone-number-info').innerText = textArray[24]
    document.getElementById('birthday-info').innerText = textArray[25]
    document.getElementById('address-info').innerText = textArray[26]
    document.getElementById('next-btn').innerText = textArray[27]
    document.getElementById('header-education').innerText = textArray[28]
    document.getElementById('high-school-event').innerText = textArray[29]
    document.getElementById('high-school-desc').innerText = textArray[30]
    document.getElementById('university-event').innerText = textArray[31]
    document.getElementById('university-desc').innerText = textArray[32]
    document.getElementById('download-desc').innerText = textArray[33]
    document.getElementById('download-label').innerText = textArray[34]
}

function nextTab() {
    tabIndex++;
    if(tabIndex >= 4) {
        tabIndex = 1;
    }
    handleNextTabByIndex(tabIndex)
}

function handleNextTabByIndex(tabIndex) {
    let directBtn = document.getElementById('direct-button')
    switch (tabIndex) {
        case 1: {
            tabAboutMe.style.transform = 'rotate(10deg) translateX(800px) translateY(-500px)';
            setTimeout(() => {
                tabAboutMe.style.zIndex = 3;
                directBtn.style.backgroundColor = '#d4635e';
                tabAboutMe.style.transform = 'none'
                tabEducation.style.zIndex = 'unset';
                tabExperience.style.zIndex = 2;
            }, 300)

            break;
        }

        case 2: {
            tabEducation.style.transform = 'rotate(10deg) translateX(800px) translateY(-500px)';
            setTimeout(() => {
                tabEducation.style.zIndex = 3;
                directBtn.style.backgroundColor = '#d2d740'
                tabEducation.style.transform = 'none';
                tabAboutMe.style.zIndex = 2;
                tabExperience.style.zIndex = 'unset';
            }, 300)
            break;
        }

        case 3: {
            tabExperience.style.transform = 'rotate(10deg) translateX(800px) translateY(-500px)';
            setTimeout(() => {
                tabExperience.style.zIndex = 3;
                directBtn.style.backgroundColor = '#3485a3';
                tabExperience.style.transform = 'none';
                tabEducation.style.zIndex = 2;
                tabAboutMe.style.zIndex = 'unset';
            }, 300)

            break;
        }
    }
}

function closeInformationTable() {
    let informationTable = document.getElementById('information-table')
    informationTable.style.transform = 'scale(0) translate(0px, 0px)';
    setTimeout(() => {
        informationTable.style.display = 'none'
    }, 300)
    let cards = document.querySelectorAll('.card')
    cards.forEach((card) => {
        card.classList.remove('active')
        card.style.transform = 'scale(1) translateX(0px)'
    })

    hideAllInfomationWrapper()
}

function hideAllInfomationWrapper() {
    let informationWrapper = document.querySelectorAll('.information-table-wrapper')
    informationWrapper.forEach((inf) => {
        inf.style.display = 'none'
    })
}

function displayLineCard() {
    let lineCard = document.getElementById('line-card')
    lineCard.style.display = "flex"
    setTimeout(() => {
        lineCard.style.transform = "scale(1)"
    }, 300)
}

function displayDirection() {
    let direction = document.getElementById('direct-button')
    direction.style.display = 'flex'
    setTimeout(() => {
        direction.style.transform = "scale(1)"
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
    hideAllInfomationWrapper()
    document.getElementById('about-me-information-table').style.display = 'block'
}

function toggleTabEducation() {
    toggleTab(tabEducation, tabAboutMe, tabExperience)
    hideAllInfomationWrapper()
    document.getElementById('education-information-table').style.display = 'block'
}

function toggleTabExperience() {
    toggleTab(tabExperience, tabEducation, tabAboutMe)
    hideAllInfomationWrapper()
    document.getElementById('experience-information-table').style.display = 'block'
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

function initFirebase() {
    var config = {
        apiKey: "AAAAIKxbihc:APA91bG1CgVUUgZYxJH21AyuiHd_zE4MZXlgMZXAFrBuBIZavLBARMzi1b_AwjqlagNTM_QRSHlBIumXJQXPwzrtw0yMmNY98RaEQBbuQX8WVBCUdSHuuuQV_7dgfT70WCILawvM4UC4",
        authDomain: "porfolio-b45a2.firebaseapp.com",
        projectId: 'porfolio-b45a2'
    };
    firebase.initializeApp(config);
    let firestore = firebase.firestore();
    db = firestore.collection("actions").doc("4bGJCR8MHouZYqHiRuOB")
    contactDB = firestore.collection("actions").doc("csDYQxrCeMCLlCyfCFmF")

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
    document.getElementById('submit-contact-button').addEventListener('click', submitContact, false)
    document.getElementById('direct-button').addEventListener('click', nextTab, false)
    document.getElementById('cancel-btn').addEventListener('click', closeInformationTable, false)
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
    displayDirection()
});
