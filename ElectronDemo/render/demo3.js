var { shell } = require('electron')

var aHref = document.querySelector('#aHref')

aHref.onclick = function (e) {
    e.preventDefault()
    var href = this.getAttribute('href')
    shell.openExternal(href)
}

var myBtn = document.querySelector('#mybtn')
myBtn.onclick = function () { 
    window.open('./popup_page.html')
}

window.addEventListener('message', (msg) => { 
    let mytext = document.querySelector('#mytext')

    mytext.innerHTML = JSON.stringify(msg)

})