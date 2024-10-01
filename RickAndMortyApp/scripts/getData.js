const getData = async (createCards, url='https://rickandmortyapi.com/api/character/?page=1') => {
    const request = await fetch(url)
    const response = await request.json()
    await toHTML(response)
}
const toHTML = async (characters) => {
    const {info, results} = characters
    const cardWrap = document.querySelector('.all_characters')
    console.log(results)
    createSliders(results)
    results.forEach(character => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.style = 'width: 100%'
        card.innerHTML = 
        `
            <img src=${character.image} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${character.name}</h5>
                <div data-all-info='${character.name}*${character.image}*${character.species}*${character.gender}*${character.status}' class="svg-div">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" onClick="buttonCheck(this)" fill="currentColor" class="bi bi-emoji-frown hated-char" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
                </svg>
                
                <svg onClick="buttonCheck(this)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart favourite-char" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                </svg>
                </div>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${character.species}</li>
                <li class="list-group-item">${character.gender}</li>
                <li class="list-group-item d-flex align-items-center">${character.status} <span class="alive_status" style="background: ${ character.status === 'Alive' ? "#C4E74A" : "#EB4C42"}"></span></li>
            </ul>
        `
        cardWrap.append(card)
    })

}
const createSliders = async characters1 =>{
    const intro = document.querySelector('.intro')
    const num1 = []
    const car_item = document.querySelectorAll('.carousel-item')
    const car_desk_item = document.querySelector('.sidebar').children
    const chars_images = document.querySelector('.main_slide').children
    console.log(chars_images);
    car_item.forEach((element, index, array) =>{
        const n = Math.floor(Math.random() * characters1.length)
        element.children[0].src = characters1[n].image
        car_desk_item[index].children[0].textContent = characters1[n].name
        car_desk_item[index].children[1].textContent = characters1[n].species
        chars_images[array.length -1 - index].style = `background-image: url(${characters1[n].image});"`
    })
}
getData(toHTML)
let pageCount = 1
const newCharsBtn = document.getElementById('more-characters')
newCharsBtn.addEventListener('click', () =>{
    pageCount++
    getData(toHTML, url=`https://rickandmortyapi.com/api/character/?page=${pageCount}`)
})
const heartBtn = document.querySelectorAll('.bi')
