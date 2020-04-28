import Slide from './slide.js'

const slide = new Slide('.slide','.slide-wrapper').init()
slide.changeSlide(0)
console.log(slide)