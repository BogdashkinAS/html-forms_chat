const sideBar = document.querySelector('.chat-widget__side-text')
const chatWidget = document.querySelector('.chat-widget')
const messages = document.querySelector('.chat-widget__messages')
const inputMessages = document.getElementById('chat-widget__input')

function getTime() {
    let d = new Date()
    let h = d.getHours()
    let m = d.getMinutes()
    return (h + ':' + m)
}

function getText() {
    let dateNew = getTime()
    const arrayText = ['Добрый день, мы ещё не проснулись. Позвоните через 10 лет', 'Здравствуйте и пока!', 'Пока мы не хотим с вами разговаривать']
    let random = arrayText[Math.floor(Math.random() * arrayText.length)]
    let setText = `
    <div class="message">
        <div class="message__time">${dateNew}</div>
        <div class="message__text">
        ${random}
        </div>
    </div>`
    return setText
}

function setMessages() {
    inputMessages.addEventListener('keyup', (event) => {
        event.preventDefault()
        if (event.code == 'Enter' || event.code == 'NumpadEnter') {
            if (inputMessages.value != '') {
                let dateNew = getTime()
                let text = inputMessages.value
                inputMessages.value = ''
                messages.innerHTML += `
                <div class="message message_client">
                    <div class="message__time">${dateNew}</div>
                    <div class="message__text">${text}</div>
                </div>
                `
                let textNew = getText()
                messages.innerHTML += textNew
                messages.scrollIntoView(false)
            }
        }
    })
}

sideBar.addEventListener('click', (event) => {
    chatWidget.classList.add('chat-widget_active')
    event.preventDefault()
})

setMessages()