generateQuestion()
function generateQuestion () {
    document.getElementById("answer").style.display = "none";
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status ==200) {
        let jsonData = JSON.parse(this.responseText) 
        displayCategory(jsonData)
        displayQuestion(jsonData) 
        showDate(jsonData)
        console.log(jsonData[0].question)
        console.log(jsonData)
    }
    
    }
    xhttp.open("GET","https://jservice.io/api/random",true )
    xhttp.send()
    console.log(xhttp)   
}
function displayCategory(input) {
    document.getElementById("category").innerHTML = `For $${input[0].value} in the category <i>${input[0].category.title}</i>, the question is...`
}

function displayQuestion(input){
    document.getElementById("question").innerHTML = input[0].question 
    document.getElementById("answer").innerHTML = input[0].answer 
}

function showAnswer() {
    document.getElementById("answer").style.display = "block";
}
function showDate(input){
    document.getElementById("questiondate").innerHTML = `This question aired on: ${formatDate(input[0].airdate)}`

}

function formatDate (date){
 let dateArray = date.slice(0,10).split("-")
 let orderDate=[]
 orderDate.unshift(dateArray[0])
 orderDate.unshift(dateArray[2])
 orderDate.unshift(dateArray[1])
 let finalDate = orderDate.join("/")
 return finalDate
}

//document.getElementById("question").innerHTML
//let question = document.getElementById("question")
  //let answer = document.getElementById("answer")  
   // document.getElementById("question").innerHTML = jsonData[0].question