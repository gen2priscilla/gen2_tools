function hum() {
    // let bu = document.createElement("a")
    // bu.href = "/gen2_tools/index.html"
    // bu.click()

    let a = document.getElementById("fff")
    a.classList.toggle("as")

    let g = document.getElementById("fff")
    g.onclick = () => {
        g.classList.toggle("as")
    }
}

window.onload = () => {
    let s = document.getElementById("fff")
    let ff = document.getElementById("qwer")

    console.log(s.parentNode)
}