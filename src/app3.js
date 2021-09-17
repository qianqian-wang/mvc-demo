import $ from "jquery"
import './app3.css'

const html = `
    <div id="app3" class="app">
         <div class='square'></div>
    </div>
`
const $element = $(html).appendTo($('.page'))

$('.square').on('click', () => {
    $('.square').toggleClass('move')
})