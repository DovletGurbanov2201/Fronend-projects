const saveBtn = document.getElementById('save_btn')
const eventName = document.getElementById('event_name')
const dateAndTime = document.getElementById('date_and_time')
const description = document.getElementById('description')
const adress = document.getElementById('assign_address')
const importance = document.getElementById('vip_event')
saveBtn.addEventListener('click', () =>{
    if(eventName.value =='' ||dateAndTime.value=='' ){
        window.alert("You haven't filled in 1 or more fields")
    }else{
        localStorage.setItem(localStorage.length, `${eventName.value};${dateAndTime.value};${description.value};${adress.value};${importance.checked}`)
        eventName.value=''
        description.value=''
        adress.value=''
        importance.checked = false
    }
    
}
)