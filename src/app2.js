import $ from "jquery"
import './app2.css'


$('.app2').on('click', '.tab', (e) => {
    let n = $(e.currentTarget).index()
    $('.app2').children().eq(n)
        .addClass('selected')
        .siblings().removeClass('selected')
    $('.content').children()
        .eq(n).addClass('active')
        .siblings().removeClass('active')
    
})
$('.app2').children().eq(0).trigger('click')