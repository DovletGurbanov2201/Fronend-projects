function createCards() {
    const EventsContainer = document.querySelector('.events_container')
    for (let i = 0; i < localStorage.length; i++) {
        const event_params_arr = localStorage[i].split(";")
        let timeStr = event_params_arr[1]
        const card = document.createElement('div')
        card.classList.add('card')
        card.style = 'width: 100%'
        console.log(event_params_arr[4])
        const importance = event_params_arr[4] ? "This event is important" : "This event is not important"
        card.innerHTML = 
        `
            <div style="width: 18rem;" class="card>
            <div class="card-header" style = "background-color: red;">Name of the event:&nbsp &nbsp ${event_params_arr[0]}</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Date and time: ${upgradeTime(timeStr)}</li>
                    <li class="list-group-item">Description: ${event_params_arr[2]}</li>
                    <li class="list-group-item">Address: ${event_params_arr[3]}</li>
                    <li class="list-group-item">${importance}</li>
                </ul>
            </div>  
        `
        EventsContainer.append(card)
        
    }
}
createCards()
function upgradeTime(param){
    let newStr = ""
    for (let i = 0; i < param.length; i++) {
        switch (param[i]) {
            case '-':
                newStr += '.'
                break;
            case 'T':
                newStr += ' '
                break;
        
            default:
                newStr += param[i]
                break;
        }
    }
    return newStr
}

