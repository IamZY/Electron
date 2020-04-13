var fs = require('fs')

window.onload = function () {
    console.log("a")
    var btn = this.document.querySelector('#btn')
    var mybaby = this.document.querySelector('#mybaby')
    btn.onclick = function () { 
        fs.readFile('xiaojiejie.txt', (err, data) => { 
            mybaby.innerHTML = data
        })
    }
}