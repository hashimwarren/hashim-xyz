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

document.querySelector('button').addEventListener('click', function (e) {

    e.target.textContent = 'Button was clicked'
})