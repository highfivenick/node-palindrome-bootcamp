document.querySelector("button").addEventListener('click', checkWord)

function checkWord(){
    let str = document.querySelector('input').value

    fetch(`/api?pali=${str}`)
    .then(response => response.json())
    // .then((data) => response.json())
    .then((data) => {
        document.querySelector('#result').innerText = `${data.result}`
    })
}