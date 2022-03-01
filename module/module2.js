export const div = document.createElement("div")
div.style.display = "none"
div.classList = "main_content"
document.body.prepend(div)


function createDivInput(classList){
    const divInput = document.createElement('div')
    divInput.classList = classList;
    return divInput
}

let divInput1 = div.appendChild(createDivInput("input"))
let divInput2 = div.appendChild(createDivInput("inputRadio"))
let divInput3 = div.appendChild(createDivInput("divInputType"))
let divInput4 = div.appendChild(createDivInput("inputSelect"))

/***************/

function createH2(innerHTML){
    const title = document.createElement('h2')
    title.innerHTML = innerHTML;
    return title
}

let title1 = divInput1.appendChild(createH2("First question"))
let title2 = divInput2.appendChild(createH2("Second question"))
let title3 = divInput3.appendChild(createH2("Third question"))
let title4 = divInput4.appendChild(createH2("Fourth question"))


/***************/


function createText(innerHTML){
    const text = document.createElement('p')
    text.innerHTML = innerHTML;
    return text
}

let text1 = divInput1.appendChild(createText("Выберите наиболее подходящий ответ! “What does your husband do?"))
let text2 = divInput2.appendChild(createText("Yesterday I ................. a bird."))
let text3 = divInput3.appendChild(createText("Переведите слово `близнецы` на английский"))
let text4 = divInput4.appendChild(createText("................ that weird man sitting over there?"))

/***************/

function createForm(classList,id, name){
    const form = document.createElement('form')
    form.classList = classList;
    form.id = id
    form.name = name
    return form
}

let form1 = divInput1.appendChild(createForm("divContainer", "divContainer","divContainer"))
let form2 = divInput2.appendChild(createForm("divRadioContainer","radioCont","radioCont"))
let form3 = divInput3.appendChild(createForm("divInputTypeContainer", "divInputTypeContainer", "divInputTypeCont"))

let form4 =document.createElement("select")
form4.classList = "divOptions"
form4.id = "select"
divInput4.appendChild(form4)


// ******************************************
// ******************************************
// ******************************************
// ******************************************

function createInputCheckbox(id){
    const inputCheckbox = document.createElement('input')
    inputCheckbox.type = "checkbox"
    inputCheckbox.classList = "inputCheck"
    inputCheckbox.name = "checkbox"
    inputCheckbox.id = id
    return inputCheckbox
}

function createLabel(textContent){
    const label = document.createElement('label')
    label.classList = "label";
    label.textContent = textContent;
    return label
}

let label1 = form1.appendChild(createLabel("He is feeding the dog."))
let label2 = form1.appendChild(createLabel("He is a doctor."))
let label3 = form1.appendChild(createLabel("Yes, he does."))
let label4 = form1.appendChild(createLabel("Yes, he is."))


let inputCheckbox1 = label1.prepend(createInputCheckbox("input1"))
let inputCheckbox2 = label2.prepend(createInputCheckbox("input2"))
let inputCheckbox3 = label3.prepend(createInputCheckbox("input3"))
let inputCheckbox4 = label4.prepend(createInputCheckbox("input4"))



// ******************************************

function createInputRadio(id){
    const inputRadio = document.createElement('input')
    inputRadio.type = "radio"
    inputRadio.classList = "radioCheck"
    inputRadio.id = id
    return inputRadio
}
let label1_2 = form2.appendChild(createLabel("saw"))
let label2_2 = form2.appendChild(createLabel("sawed"))
let label3_2 = form2.appendChild(createLabel("see"))
let label4_2 = form2.appendChild(createLabel("seed"))


let inputRadio1 = label1_2.prepend(createInputRadio("radio1"))
let inputRadio2 = label2_2.prepend(createInputRadio("radio2"))
let inputRadio3 = label3_2.prepend(createInputRadio("radio3"))
let inputRadio4 = label4_2.prepend(createInputRadio("radio4"))

// ******************************************

const inputItem = document.createElement("input")
inputItem.classList = "inputItem"
inputItem.name = "inputItem"
inputItem.id = "inputItem"
inputItem.placeholder = "translate word"

form3.appendChild(inputItem)

// ******************************************
function createOptions(value, innerHTML){
    const option = document.createElement("option")
    option.classList = "option"
    option.value = value
    option.innerHTML = innerHTML
    return option
}


let option1 = form4.appendChild(createOptions("option1","Which"))
let option2 = form4.appendChild(createOptions("option2","Whose"))
let option3 = form4.appendChild(createOptions("option3","Who's"))
let option4 = form4.appendChild(createOptions("option4","Who"))

// ******************************************

const button = document.createElement("button")
button.innerHTML = "THE END"
button.classList = "button"

div.append(button)

// *****************************************************




    
const modalWindow = document.createElement("div")
modalWindow.classList = "modal"
div.after(modalWindow)


const modalContainer = document.createElement("div")
modalContainer.classList = "modalContainer"
modalWindow.appendChild(modalContainer)

const textRes = document.createElement("h2")
textRes.innerHTML = "RESULTS"
textRes.classList = "textRes"
modalContainer.appendChild(textRes)



let result = modalContainer.appendChild(createText(""))
result.id= "result"
let result1 = result.appendChild(createText(""))
result1.id= "result1"
let result2 = result.appendChild(createText(""))
result2.id= "result1"
let result3 = result.appendChild(createText(""))
result3.id= "result1"
let result4 = result.appendChild(createText(""))
result4.id= "result1"


// *****************************************************
// *****************************************************
// *****************************************************


button.addEventListener("click" , (event) => {
    event.preventDefault()


    div.style.display = "none"
    modalWindow.style.display = "block"

    
    // *****************************


    let valueCheckbox = document.getElementById("input2").checked;
    let res1;

    let valueRadio = document.getElementById("radioCont").value;
    let res2; 

    let valueInput = document.forms["divInputTypeCont"]["inputItem"].value
    let res3;

    let valueSelection = document.getElementById("select").value
    let res4;

    let sum;

    // *****************************
    

    if(valueCheckbox){
        res1 = 2
        let result1 = document.createElement("p")
        result1.id= "result1"
        result1.innerHTML = "First Question : Your answer to question 2 is correct."
        modalContainer.append(result1)

    }else {
        res1 = 0

        let result1 = document.createElement("p")
        result1.id= "result1"
        result1.innerHTML = "First Question : The correct answer to question 2"
        modalContainer.append(result1)
    
    }
    
    // *****************************

    if(valueRadio == "radio1"){
        res2 = 0
        let result2 = document.createElement("p")
        result2.id= "result2"
        result2.innerHTML = "Second Question : Your answer to question 1 is correct."
        modalContainer.append(result2)
    }else{
        res2 = 0;
        let result2 = document.createElement("p")
        result2.id= "result2"
        result2.innerHTML = "Second Question : The correct answer to question 1"
        modalContainer.append(result2)
    }

    // *****************************

    if(valueInput == "twins"){
        res3 = 3
        let result3 = document.createElement("p")
        result3.id= "result3"
        result3.innerHTML = "Third Question : Your answer is correct."
        modalContainer.append(result3)
    }else{
        res3 = 0 
        let result3 = document.createElement("p")
        result3.id= "result3"
        result3.innerHTML = "Third Question : Your answer is incorrect. Right answer is twins"
        modalContainer.append(result3)
    }

    // *****************************

    if(valueSelection == "option3"){
        res4 = 3
        let result4 = document.createElement("p")
        result4.id= "result3"
        result4.innerHTML = "Fourth Question : Your answer is correct. "
        modalContainer.append(result4)
    }else{
        res4 = 0 
        let result4 = document.createElement("p")
        result4.id= "result3"
        result4.innerHTML = "Fourth Question : Your answer is incorrect. Right answer is WHO'S"
        modalContainer.append(result4)
    }
   
    sum = res1 + res2 + res3 + res4


    let allResult = document.getElementById("result")
    allResult.innerHTML = ("Your result is " + sum + " out of 10")
    allResult.classList = "allResult"
    modalContainer.appendChild(allResult)
    
  
})



