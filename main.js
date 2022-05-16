// input
// button
// h2.result
let userInput = document.querySelector('.userInput').value
let button = document.querySelector('button')
button.addEventListener('click', function(){
    
    fetch(`/api?pali=${userInput}`)
    .then(response => response.json())     
    .then((data)=>{
        console.log(data)
        document.querySelector('.answer').innerText = data.result
        
    })
})