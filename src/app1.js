import $ from "jquery"

let number = parseInt($('#number').text())

$('#add1').on('click', () => {
    number += 1
    $('#number').text(number)
})
$('#subtract1').on('click', () => {
    number -= 1
    $('#number').text(number)
})
$('#multiply2').on('click', () => {
    number = number*2
    $('#number').text(number)
})
$('#divide2').on('click', () => {
    number = number/2
    $('#number').text(number)
})