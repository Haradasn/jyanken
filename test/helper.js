import Nightmare from 'nightmare'

Nightmare.action('getTexts', function(selector, done){
    this.evaluate_now((selector) =>{
        return [].slice.call(document.querySelectorAll(selector)).map((e) => e.innerText)
    }, done, selector)
})

Nightmare.action('touchTap',function(selector, done)  {
    this.evaluate_now((selector) =>{
    return (nightmare) => {
        nightmare = new Nightmare({show:false})
        nightmare
        .mousedown(selector)
        .mouseup(selector)
    }}, done,selector)
})