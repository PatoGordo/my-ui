const colors = ["white", "black", "blue", "green", "red", "orange", "pink", "purple", ]

let css = ''

Promise.all([
  colors.forEach((color) => {
    // GENERATE THE LESSCSS COLORS CODE 
    /*
    css += `\n\n.c-${color} {color: @${color} !important;}`
    css += `\n.bg-${color} {background-color: @${color} !important;}`
    css += `\n.border-${color} {border-color: @${color} !important;} button.outlined.border-${color} {&:hover {background-color: @${color} !important; color: @white !important; filter: none;} color: @${color} !important;}`
    
    if (color !== "black" && color !== "white") {
      css += `\n.c-deep-${color} {color: @deep-${color} !important;}`
      css += `\n.bg-deep-${color} {background-color: @deep-${color} !important;}`
      css += `\n.border-deep-${color} {border-color: @deep-${color} !important;} button.outlined.border-deep-${color} {&:hover {background-color: @deep-${color} !important; color: @white !important; filter: none;} color: @deep-${color} !important;}`
    }
    */

    const el = document.createElement("span")

    el.classList.add(`bg-${color}`)
    el.classList.add('pad-block')
    el.textContent = `${color}`

    if (color === "black") {
      el.classList.add('c-white')
    }

    window.colors.appendChild(el)

    if (color !== "black" && color !== "white") {
      const el2 = document.createElement("span")
      el2.classList.add('pad-block')
      el2.classList.add(`bg-deep-${color}`)
      el2.textContent = 'deep ' + color

      window.colors.appendChild(el2)
    }
  })
]).then(() => {
  // console.log(css)
  // window.message.textContent = css.trim()
  // window.message.textContent = localStorage.getItem('http://localhost:7700/src/styles/style.less')
})
