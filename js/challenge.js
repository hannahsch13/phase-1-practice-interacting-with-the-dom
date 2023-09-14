const theFormPlan = document.querySelector('form') 

function formPlan(eventObject){
eventObject.preventDefault()
const userInput = eventObject.target.comment.value
const commentDiv = document.createElement('div')
commentDiv.innerText = userInput
const commentsContainer = document.querySelector('.comments')
commentsContainer.append(commentDiv)
eventObject.target.reset()
}
theFormPlan.addEventListener('submit', formPlan)

const plusButton = document.getElementById(`plus`)
plusButton.addEventListener(`click`, (eventObject) => {
    console.log(eventObject.target)
const counterElement = document.getElementById(`counter`)
counterElement.innerText++
} )
const minusButton = document.getElementById(`minus`)
minusButton.addEventListener(`click`, (eventObject) => {
    console.log(eventObject.target)
const counterElement = document.getElementById(`counter`)
counterElement.innerText--
} )