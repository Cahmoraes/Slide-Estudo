import { SlideNav, Slide } from './slide.js'

const slide = new SlideNav('.slide','.slide-wrapper').init()
slide.changeSlide(0)
slide.addArrow('.prev','.next')
slide.addControl()