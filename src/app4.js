import $ from "jquery"
import './app4.css'

const html = `
<div id="app4" class="app">
    <div class='yuan'></div>
</div>
`
const $element=$(html).appendTo($('.page'))
$('.yuan').on('mouseenter', () => {
    $('.yuan').addClass('changes')
})