const questions = document.querySelectorAll('.card-block')
let question = []
let answers = []

questions.forEach((item, index) => {
  const answersArr = Array.from(
    item.children[0].children[0].children[1].querySelectorAll('li')
  )

  question.push([
    index,
    item.children[0].children[0].children[0].innerText,
    [
      answersArr.map((answer) => {
        return answer.innerText
      }),
    ],
    item.children[0].children[1].children[1].innerText,
  ])
})

let coreJSON = JSON.stringify(question)

console.log(coreJSON)
