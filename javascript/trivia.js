generateQuestion()



function generateQuestion () {
    document.getElementById("answer").style.display = "none";
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status ==200) {
        let jsonData = JSON.parse(this.responseText) 
        displayQuestion(jsonData) 
        console.log(jsonData[0].question)
        console.log(jsonData)
    }
    
    }
    xhttp.open("GET","https://jservice.io/api/random",true )
    xhttp.send()
    console.log(xhttp)   
}

function displayQuestion(input){
    document.getElementById("question").innerHTML = input[0].question 
    document.getElementById("answer").innerHTML = input[0].answer 
}

function showAnswer() {
    document.getElementById("answer").style.display = "block";
}


//document.getElementById("question").innerHTML

//let question = document.getElementById("question")
  //let answer = document.getElementById("answer")  
   // document.getElementById("question").innerHTML = jsonData[0].question