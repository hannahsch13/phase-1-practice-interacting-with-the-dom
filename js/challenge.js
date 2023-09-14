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
