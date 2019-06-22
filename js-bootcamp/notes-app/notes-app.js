const notes = [{
    title: 'my next trip',
    body: 'I would like to go to spain'

}, {
    title: 'Habits to work on',
    body: 'Exercise, Eating better.'

}, {
    title: 'Office modification',
    body: 'Get a new seat'

}]

document.querySelector('#create-note').addEventListener('click', function (e) {

    e.target.textContent = 'Button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', function (e) {

    document.querySelectorAll('.note').forEach(function (note) {
        console.log('hello from remove all')
        note.remove()
    })
})

document.querySelector('#search-text').addEventListener('input', function (e) {
     console.log(e.target.value)
 })