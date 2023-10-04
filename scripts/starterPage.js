function setTextContent(type, name, content) {

    function fillElementById(name, content) {
        let el = document.getElementById(name);
        el.textContent = content;
    }
    function fillElementByClass(name, content) {
        let el = document.getElementByClassName(name);
        el.textContent = content;
    }

    switch (type) {
        case 'id': {
            fillElementById(name, content);
            break;
        }
        case 'class': {
            fillElementByClass(name, content);
            break;
        }
        default: {
            alert("ERROR: Unknown 1st parameter in setTextContent()\n You have: " + type + "\n Should be: id || class");
        }
    }

    
}

setTextContent("id", "title", "Добро пожаловать. Путин ждет вас!");
setTextContent("id", "about", "О чем же игра? Ну давайте уже наконец узнаем, нажимайте кнопку ИГРАТЬ↓");




// function gettingStarted() {
//     function setLanguage() {

//         let isEng = confirm("Enlish/Английский?");s
//         let lang;
//         if (isEng) {
//             alert("Language is set");
//             lang = "en";
//         }
//         else {
//             alert("Language is not set/Сейчас поменяем на русский");
//             lang = "ru";
//         }


//         // if (lang === "en") {

//         // }
//         // else if (lang === "ru") {

//         // }
//         // else {
//         //     alert("Something went wrong in setLanguage()");
//         // }
//     }
//     setLanguage();
// }

// function getCurrentDate(option) {
//     let today = new Date();   
//     let date;
//     let error = "invalid variable in getCurrentDate()";

//     switch(option) {
//         case "date":
//             date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
//             break;
//         case "day":
//             date = today.getDate();
//             break;
//         case "month":
//             date = today.getMonth()+1;
//             break;
//         case "year":
//             date = today.getFullYear();
//             break;
//         default: 
//             date = error; break;
//     }
//     return date;
// }

// gettingStarted();
// // const dateHeader = document.getElementById("dateHeader");
// // dateHeader.textContent = getCurrentDate("date");

// const dateDisplay = document.getElementById("dateDisplay");
// dateDisplay.textContent = getCurrentDate("date");

