const divForm = document.createElement("form"); 
divForm.classList.add("form_container")
divForm.setAttribute("active", "#")
divForm.style.display = "block"
divForm.name = "formName"
divForm.id = "form"


const headingForm = document.createElement("h1")
headingForm.classList.add("form__title")
headingForm.innerHTML = "Авторизация пользователя";


const firstNameUser = document.createElement("input")
firstNameUser.classList.add("input__nameUser")
firstNameUser.classList.add("fields")
firstNameUser.type = "text";
firstNameUser.placeholder = "имя"
firstNameUser.name = "firstUserName"
firstNameUser.pattern = "^[А-Яа-яЁё\s]+$"
firstNameUser.id = "first"

const textName = document.createElement("p");
textName.classList.add("textName")
textName.innerHTML = "Вам необходимо ввести Ваше имя на русском языке"
textName.style.display ="block"


const surnameUser = document.createElement("input")
surnameUser.classList.add("input_surnameUser")
surnameUser.classList.add("fields")
surnameUser.type = "text";
surnameUser.placeholder = "фамилия"
surnameUser.name = "surnameName"
surnameUser.pattern = "^[А-Яа-яЁё\s]+$"
surnameUser.id = "second"

const textSurname = document.createElement("p");
textSurname.classList.add("textSurname")
textSurname.innerHTML = "Вам необходимо ввести Вашe фамилию на русском языке"
textSurname.style.display = "block"


const ageUser = document.createElement("input")
ageUser.classList.add("input__age")
ageUser.classList.add("fields")
ageUser.type = "text";
ageUser.placeholder = "возраст"
ageUser.name = "ageName"
ageUser.pattern = "^[ 0-9]+$"
ageUser.id = "third"


const textAge = document.createElement("p");
textAge.classList.add("textAge")
textAge.innerHTML = "Вам необходимо ввести Ваш возраст в числовом формате"
textAge.style.display = "block"


const buttonNext = document.createElement("button")
buttonNext.classList.add("button")
buttonNext.innerHTML = "продолжить"
buttonNext.type = "submit";

document.body.prepend(divForm);
divForm.appendChild(headingForm);
divForm.appendChild(firstNameUser);
divForm.appendChild(textName);
divForm.appendChild(surnameUser);
divForm.appendChild(textSurname);
divForm.appendChild(ageUser);
divForm.appendChild(textAge);  
divForm.appendChild(buttonNext);



import {div} from "./module2.js"


divForm.addEventListener("submit", (event) =>{
    
    event.preventDefault()

    let isValidated = true;

    let nameValid = document.forms["formName"]["firstUserName"].value; 
        if(nameValid == "" || nameValid == null) {
            firstNameUser.classList.add("incorrect")
            isValidated = false
        }else{
            firstNameUser.classList.add("correct")
        }

    let surnameValid = document.forms["formName"]["surnameName"].value;
        if(surnameValid == "" || surnameValid == null){
            surnameUser.classList.add("incorrect")
            isValidated = false
        }else{
            surnameUser.classList.add("correct")
        }

    let ageValid = document.forms["formName"]["ageName"].value;
        if(ageValid == "" || ageValid == null){
            ageUser.classList.add("incorrect")
            isValidated = false
           
        }else{
            ageUser.classList.add("correct")
            
    }


    if(isValidated === true){
        divForm.style.display = "none"
        div.style.display = "block"
    }

    
})



window.onload = () => {
    firstNameUser.value = localStorage.getItem("first");
    surnameUser.value = localStorage.getItem("second")
    ageUser.value = localStorage.getItem("third")
}


buttonNext.addEventListener("click",() => {

    localStorage.setItem("first", firstNameUser.value); 
    localStorage.setItem("second", surnameUser.value); 
    localStorage.setItem("third", ageUser.value); 

})