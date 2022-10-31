// let heading2 = document.querySelector('h2')
// let btn = document.querySelector('.check')
// let number= document.querySelector('.number')


// function nameChanger(){
// let randomNumber = Math.ceil(Math.random()* 10)
// number.textContent = randomNumber
// let sth = heading2.innerText === 'Guess My Number'
// if(sth){
//    heading2.innerText = 'Jasper'
// }else{
//     heading2.innerText = 'Guess My Number'
// }
// }
// btn.addEventListener('click',nameChanger)
// handling input fields
// To get the data from an input field , u need to pass a .value 
// let inputField = document.querySelector('.guess')

// inputField.value = 20



let btn = document.querySelector('.check')



function logic () {
    let guessedNumber = Math.ceil(Math.random() * 6)
    let message = document.querySelector('.message')
    let score = document.querySelector('.score')
    let body = document.body.style
    let number = document.querySelector('.number')
    let heading = document.querySelector('h2')
    number.textContent = guessedNumber
    
   
    
    let guess = document.querySelector('.guess').value
    if (!guess) {
        message.textContent = 'no Number'

    } else if (Number(guess) === guessedNumber) {
        message.textContent = 'Winner 🏆'
        body.backgroundColor = 'green'

    } else if (guess !== guessedNumber) {

        message.textContent = 'Wrong guess 😭'
        body.backgroundColor = ' rgb(69, 69, 34'
        if (score.textContent == 0) {
             score.textContent = 0
             number.textContent = ''
             guess.value = ''

        } else {
            score.textContent--
        }
        if (score.textContent == 0) {
            heading.textContent = 'Trails exceeded. click on play Again'
        }
      
     
    }


}

btn.addEventListener('click', logic)

let refresh = document.querySelector('.again')
function reload(){
    location.reload()
}
refresh.addEventListener('click',reload)