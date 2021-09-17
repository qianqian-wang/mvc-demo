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
        Object.assign(m.data, data)
        eventBus.trigger('m-updated')
    },
    get() { }
}
const v = {
    el: null,
    html: (index) => {
        return `
        <div class="app">
            <div class='app2'>
                <div class="tab ${parseInt(index) === 0 ? 'selected' : ''}" data-index="0">这个</div>
                <div class="tab ${parseInt(index) === 1 ? 'selected' : ''}" data-index="1">那个</div>
            </div>
            <div class='content'>
                <div class="content1 ${parseInt(index) === 0 ? 'active' : ''}">这个显示啦</div>
                <div class="content1 ${parseInt(index) === 1 ? 'active' : ''}">那个显示啦</div>
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
        })
    },
    events: {
        'click .tab': 'x'
    },
    x(e) {
        const index = e.currentTarget.dataset.index
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
