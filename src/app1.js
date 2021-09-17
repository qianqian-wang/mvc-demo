import $ from "jquery"

const eventBus = $({})
//数据相关的，都放到m
const m = {
    data: {
        number :  parseInt(localStorage.getItem('number'))||100
    },
    create() { },
    delete() { },
    update(data) {
        Object.assign(m.data, data)
        eventBus.trigger('m-updated')
        localStorage.setItem('number',m.data.number)
    },
    get() { }
}
//视图相关的都放到v
const v = {
    el: null,
    html: `                        
    <div class="app">
        <div id="number">{{n}}</div>
        <button id="add1">加</button>
        <button id="subtract1">减</button>
        <button id="multiply2">乘2</button>
        <button id="divide2">除2</button>
    </div>
`,
    init(container) {
        v.el = $(container)  
    },
    render(n) {
        if (v.el.children.length !== 0) {
            v.el.empty()
        } 
        $(v.html.replace("{{n}}", n))
        .prependTo(v.el)

    }
}
//其他都c
const c = {
    init(container) {
        v.init(container)
        v.render(m.data.number)
        c.autoBindEvents()
        eventBus.on('m-updated', () => {
            v.render(m.data.number)
        })
    },
    events: {
        'click #add1': 'add',
        'click #subtract1': 'sub',
        'click #multiply2': 'mul',
        'click #divide2': 'div'
    },
    add() {
        m.update({number:m.data.number +1})
    },
    sub() {
        m.update({number:m.data.number -1})
    },
    mul() {
        m.update({number:m.data.number *2})
    },
    div() {
        m.update({number:m.data.number /2})
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