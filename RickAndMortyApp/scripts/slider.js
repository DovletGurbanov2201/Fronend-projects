const  upBtn = document.querySelector('.up_button')
const  downBtn = document.querySelector('.down_button')
const  sidebar = document.querySelector('.sidebar')
const  mainSlide = document.querySelector('.main_slide')
const  introDesktop = document.querySelector('.intro-desktop')
// querySelector - метод обьекта document который возвращает первый найденый элемент 
// по указанному классу/id

// Получаем кол-во слайдов
const slidesCount = mainSlide.querySelectorAll('div').length
let activeSlideIndex = 0
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`
// addEventListener накидывает тип события и реакцию на него
// Принимает два аргумента, тип события и действие при этом событии
upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))

const changeSlide = direction => {
    if (direction === 'up') {
        activeSlideIndex++
        activeSlideIndex === slidesCount ? activeSlideIndex = 0 : null
    } else {
        activeSlideIndex--
        activeSlideIndex < 0 ? activeSlideIndex = slidesCount-1 : null
    }
    // clientHeight получаем высоту introDesktop у пользователя
    const height = introDesktop.clientHeight
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}


