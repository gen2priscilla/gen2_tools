function ff() {

    let res = document.getElementById("res")

    let now_level = parseInt(document.getElementById("now_level").value)
    let target_level = parseInt(document.getElementById("target_level").value)
    let next_exp = parseInt(document.getElementById("next_exp").value)
    let trans_num = parseInt(document.getElementById("trans_num").value)

    let max_level = 200
    if (trans_num == 8 || trans_num == 9) {
        max_level = 250
    }
    // console.log(target_level)
    if (next_exp > (now_level * (trans_num + 11) - 3)) {
        res.textContent = "next 経験値 が大きすぎるかも?"
    } else if (now_level >= target_level) {
        res.textContent = "現在レベルが目標レベル以上です"
    } else if (0 < now_level && now_level < max_level && 0 < target_level && target_level <= max_level) {
        res.textContent = calc_level(now_level, target_level, next_exp, trans_num)
    } else if (isNaN(now_level)) {
        res.textContent = "現在レベルを設定してください"
    } else if (isNaN(target_level)) {
        res.textContent = "目標レベルを設定してください"
    } else {
        res.textContent = `${trans_num} 転生目の 現在レベルと目標レベルの範囲は 1 ~ ${max_level} Lv です`
    }
}

//経験値計算のメイン部分
function calc_level(now_level, target_level, next_exp, num) {

    let sum_exp = 0

    // next_exp が入力されていて 0 以外なら next_exp を合計経験値に足す
    let i = 0
    if (0 < next_exp) {
        sum_exp = next_exp
        i = 1
    }
    console.log(num)

    // 目標レベルまでの合計経験値を計算
    // 計算式は wiki にあったものを使用
    for (i; i < target_level - now_level; i++) {
        sum_exp += (now_level + i) * (num + 11) - 3
    }

    return sum_exp
}

window.onload = function aa() {
    let d = document.querySelectorAll(".add_level_now")
    d.forEach(element => {
        element.onclick = aaa
    })
    d = document.querySelectorAll(".add_level_target")
    d.forEach(element => {
        element.onclick = aaa
    })

    d = this.document.querySelectorAll(".set_level")
    d.forEach(element => {
        element.onclick = bbb
    })
    c()
}

function aaa() {
    let buf = this.className.split("_")
    let htm = document.getElementById(`${buf[2]}_level`)
    let a = parseInt(this.value)
    let b = parseInt(htm.value)
    if (htm.value != "") {
        if (0 < (a + b)) {
            htm.value = a + b
        } else {
            htm.value = 1
        }
    } else if (0 < a) {
        htm.value = a
    } else {
        htm.value = 1
    }
}

function bbb() {
    let buf = document.getElementById("target_level")
    buf.value = this.value
}

function c() {
    let buf = document.getElementById("trans_num")
    set_color(buf)
    d()
}
function d() {
    for (let i = 0; i <= 9; i++) {
        let buf = document.getElementById(`tr${i}`)
        set_color(buf)
    }
}
function set_color(html_element) {
    if (html_element != null) {
        switch (html_element.value) {
            case "9":
                html_element.style.color = "white"
                html_element.style.backgroundColor = "BlueViolet"
                break;
            case "8":
                html_element.style.color = "white"
                html_element.style.backgroundColor = "deeppink"
                break;
            case "7":
                html_element.style.color = "white"
                html_element.style.backgroundColor = "crimson"
                break;
            case "6":
                html_element.style.color = "black"
                html_element.style.backgroundColor = "Coral"
                break;
            case "5":
                html_element.style.color = "black"
                html_element.style.backgroundColor = "orange"
                break;
            case "4":
                html_element.style.color = "black"
                html_element.style.backgroundColor = "yellow"
                break;
            case "3":
                html_element.style.color = "black"
                html_element.style.backgroundColor = "LawnGreen"
                break;
            case "2":
                html_element.style.color = "black"
                html_element.style.backgroundColor = "deepskyblue"
                break;
            case "1":
                html_element.style.color = "black"
                html_element.style.backgroundColor = "LightSkyBlue"
                break;
            case "0":
                html_element.style.color = "black"
                html_element.style.backgroundColor = "lightgrey"
                break;
            default:
                break;
        }
    }
}