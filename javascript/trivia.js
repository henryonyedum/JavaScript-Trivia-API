let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status ==200) {
    let jsonData = JSON.parse(this.responseText) 
    console.log(jsonData)
    let question = document.getElementById("question")
    let answer = document.getElementById("answer")  
}
}
xhttp.open("GET","https://jservice.io/api/random",true )
xhttp.send()

function  