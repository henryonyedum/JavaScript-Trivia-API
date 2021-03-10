generateQuestion()

//AJAX request for random question data
//made as a function so it can be called repeatedly with the new question button
function generateQuestion () {
    //answer is set to display none for when new data is requested the answer doesn't stay on the screen
    document.getElementById("answer").style.display = "none";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status ==200) {
        //parses data and displays it on the webpage
        let jsonData = JSON.parse(this.responseText) 
        displayCategory(jsonData)
        displayQuestion(jsonData) 
        showDate(jsonData)
        // console.log(jsonData[0].question)
        // console.log(jsonData)
    }};
    xhttp.open("GET","https://jservice.io/api/random",true )
    xhttp.send()
}

///displays value of the question an category using a template literal
function displayCategory(input) {
    document.getElementById("category").innerHTML = `For $${input[0].value} in the category <i>${input[0].category.title}</i>, the question is...`
}

//displays the question and the answer which is hidden by default with CSS
function displayQuestion(input){
    document.getElementById("question").innerHTML = input[0].question 
    document.getElementById("answer").innerHTML = input[0].answer 
}

//tied to the answer button, displays the answer on the screen
function showAnswer() {
    document.getElementById("answer").style.display = "block";
}

//shows the date the question was aired on TV
function showDate(input){
    document.getElementById("questiondate").innerHTML = `This question aired on: ${formatDate(input[0].airdate)}`

}

//changes the format of the date from "year-month-day" to the more familiar "month/day/year"
function formatDate (date){
    let dateArray = date.slice(0,10).split("-")
    let orderDate=[]
    orderDate.unshift(dateArray[0])
    orderDate.unshift(dateArray[2])
    orderDate.unshift(dateArray[1])
    let finalDate = orderDate.join("/")
    return finalDate
}