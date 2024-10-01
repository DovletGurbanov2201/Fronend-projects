const buttonCheck = e => {
    e.classList.contains('favourite-char') ? addStatus(e, 'favourite', 'likebtn') : addStatus(e, 'hated', 'hatedbtn')
}
const addCharacter = char =>{
    localStorage.setItem( char[0], JSON.stringify(char))
}
const deleteCharacter = (char, btn) => {
    const status = JSON.parse(localStorage.getItem(char[0]))[-1] 
    (status === 'hated' && btn === 'hatedbtn') || (status === 'favourite' && btn === 'likebtn')  ? localStorage.removeItem(char[0]) : changeStatus(char)
}
const changeStatus = char =>{
    localStorage.removeItem(char[0])
    addCharacter(char)
}
const addStatus = (char, status, btn) => { 
    console.log(status);
    const addedInfo = (char.parentNode.getAttribute('data-all-info') + `*${status}`).split('*')
    localStorage.getItem(addedInfo[0]) ? deleteCharacter(addedInfo, btn) : addCharacter(addedInfo)
}