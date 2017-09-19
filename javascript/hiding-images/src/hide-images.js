;(function() {
  document.querySelectorAll('img').forEach(img => {
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='

    if (img.srcset) img.srcset = ''
  })

  document.querySelectorAll('*').forEach(elem => {
    let newStyle = elem.style

    newStyle += `;background-image: "" !important; background-color: transparent; color: black !important;
    border-color: transparent !important; box-shadow: none;`

    const boxShadowStyle = window.getComputedStyle(elem)['box-shadow']

    if (boxShadowStyle) {
      newStyle += `;box-shadow: ${boxShadowStyle.replace(
        /rgb\(.*?\)/,
        'rgb(255, 255, 255)',
      )} !important`
    }

    elem.style = newStyle
  })
})()
