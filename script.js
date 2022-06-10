const textarea = document.querySelector('textarea')
const choices = document.querySelector('#choices')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTexts(e.target.value)

    if(e.key === 'Enter' ) {
        e.target.value = ''
        const times = 20

        const interval = setInterval(() => {
            const random = randomSelect()
            highlightchoice(random)

            setTimeout(() => {
                unhighlightchoice(random)
            }, 200)
        }, 200)

        setTimeout(() => {
            clearInterval(interval)

            setTimeout(() => {
                const random = randomSelect()
                highlightchoice(random)
            }, 200)
        }, times * 200)        
    }
})

const createTexts = (input) => {
    const Eachchoice = input.split(',').filter(value => value.trim() !== '')
    choices.innerHTML = ''
    
    for (let i = 0; i < Eachchoice.length; i++) {
        const tags = choices.innerHTML += `<span class='choice'>${Eachchoice[i]}</span>`
    }
} 

function randomSelect() {
    const choice = document.querySelectorAll('.choice')
    return choice[Math.floor(Math.random() * choice.length)]
}


function highlightchoice(randomChoice) {
    randomChoice.classList.add('highlight')
}

function unhighlightchoice(randomChoice) {
    randomChoice.classList.remove('highlight')
}