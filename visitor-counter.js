function visitorCounter(){
  fetch("https://p43leus2l7.execute-api.us-east-2.amazonaws.com/visitorCounter")
    .then(response => response.text())
    .then((body) => {
      document.getElementById("visitor-counter").innerHTML=body
     })
}