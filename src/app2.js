import $ from "jquery"
import './app2.css'

const eventBus = $({})
const m = {
    data: {
        index:0
    },
    create() { },
    delete() { },
    update(data) {
        console.log("zheli4"+data.index)
        Object.assign(m.data, data)
        console.log("zheli5"+m.data.index)
        eventBus.trigger('m-updated')
    },
    get() { }
}
const v = {
    el: null,
    html: (index) => {
        console.log("zheli7"+index)
        return `<div class="app">
            <div class='app2'>
                <div class="tab ${index === 0 ? 'selected' : ''}" data-index="0">这个</div>
                <div class="tab ${index === 1 ? 'selected' : ''}" data-index="1">那个</div>
            </div>
            <div class='content'>
                <div class="content1 ${index === 0 ? 'active' : ''}">这个显示啦</div>
                <div class="content1 ${index === 1 ? 'active' : ''}">那个显示啦</div>
            </div>

    </div> 
`},
    init(container) {
        v.el = $(container)  
    },
    render(index) {  
        if (v.el.children.length !== 0) {
            v.el.empty()
        }
        console.log("zheli6"+index)
        $(v.html(index)).appendTo(v.el)
    }
}
const c = {
    init(container) {
        
        v.init(container)
        v.render(m.data.index)
        c.autoBindEvents()
        eventBus.on('m-updated', () => {
            v.render((m.data.index))
            console.log("zheli1"+m.data.index)
        })
    },
    events: {
        'click .tab': 'x'
    },
    x(e) {
        const index = e.currentTarget.dataset.index
        console.log("zheli2" + m.data.index)
        console.log("zheli3"+e.currentTarget.dataset.index)
        m.update({index:index})
    },
    autoBindEvents() {
        for (let key in c.events) {
            const value = c.events[key]
            const index=key.indexOf(' ')
            const a = key.slice(0, index)
            const b = key.slice(index + 1)
            v.el.on(a, b, c[value])
        }
    }
   
}

export default c

// $('.app2').on('click', '', (e) => {
//     let n = $(e.currentTarget).index()
//     $('.app2').children().eq(n)
//         .addClass('selected')
//         .siblings().removeClass('selected')
//     $('.content').children()
//         .eq(n).addClass('active')
//         .siblings().removeClass('active')
    
// })
// $('.app2').children().eq(0).trigger('click')