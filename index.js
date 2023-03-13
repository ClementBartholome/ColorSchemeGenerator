const btn = document.getElementById('get-color-btn')
const selectedColor = document.getElementById('color-input')
const selectedMode = document.getElementById('select')
const colorSection = document.getElementById('color-section')

render()

btn.addEventListener('click', function() {
    colorSection.innerHTML = ''
    render()
})

function render() {
    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor.value.replace('#', '')}&mode=${selectedMode.value}`)
    .then(response => response.json())
    .then(data => {
        /* console.log(data) */ 
        data.colors.forEach((color, index) => {
        
            let html = ''
            html += `
            <div class="color" id="color" style="background:${color.hex.value}"><h3>${color.hex.value}</h3></div>`
            colorSection.innerHTML += html
        })
    })
}