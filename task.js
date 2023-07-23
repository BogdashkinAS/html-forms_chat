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
    const arrayText = [`
    <div class="message">
        <div class="message__time">09:21</div>
        <div class="message__text">
        Добрый день, мы ещё не проснулись. Позвоните через 10 лет
        </div>
    </div>`, `
    <div class="message">
        <div class="message__time">09:21</div>
        <div class="message__text">
        Здравствуйте и пока!
        </div>
    </div>`, `
    <div class="message">
        <div class="message__time">09:21</div>
        <div class="message__text">
        Пока мы не хотим с вами разговаривать
        </div>
    </div>`]
    let random = Math.floor(Math.random() * 3)
    return arrayText[random]
}

function setMessages() {
    count = 0
    countText = 0
    inputMessages.addEventListener('keyup', (event) => {
        event.preventDefault()
        if (event.code == 'Enter' || event.code == 'NumpadEnter') {
            if (inputMessages.value != '') {
                getTime()
                let dateNew = getTime()
                let text = inputMessages.value
                inputMessages.value = ''
                messages.innerHTML += `
                <div class="message message_client">
                    <div class="message__time">21:10</div>
                    <div class="message__text">Добрый день! Хочу купить розы для любимой!</div>
                </div>
                `
                let messageTime = document.querySelectorAll('.message__time')
                let messageText = document.querySelectorAll('.message__text')
                messageTime[count].textContent = dateNew
                count++
                messageText[countText].textContent = text
                countText++

                getText()
                let textNew = getText()
                messages.innerHTML += textNew
                messageTime = document.querySelectorAll('.message__time')
                messageTime[count].textContent = dateNew
                count++
                countText++
            }
        }
    })
}

sideBar.addEventListener('click', (event) => {
    chatWidget.classList.add('chat-widget_active')
    event.preventDefault()
})

setMessages()