import $ from "jquery"
import './app3.css'

$('.square').on('click', () => {
    $('.square').toggleClass('move')
})