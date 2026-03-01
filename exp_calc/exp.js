function ff() {

    let res_1_1 = document.getElementById("res_1_1")
    let res_2_1 = document.getElementById("res_2_1")
    let res_3_1 = document.getElementById("res_3_1")
    let res_1_2 = document.getElementById("res_1_2")
    let res_2_2 = document.getElementById("res_2_2")
    let res_3_2 = document.getElementById("res_3_2")
    res_1_1.textContent = ""
    res_2_1.textContent = ""
    res_3_1.textContent = ""
    res_1_2.textContent = ""
    res_2_2.textContent = ""
    res_3_2.textContent = ""

    let now_level = parseInt(document.getElementById("now_level").value)
    let target_level = parseInt(document.getElementById("target_level").value)
    let next_exp = parseInt(document.getElementById("next_exp").value)
    let trans_num = parseInt(document.getElementById("trans_num").value)

    let max_level = 200
    if (trans_num == 8 || trans_num == 9) {
        max_level = 250
    }
    if (isNaN(next_exp)) {
        next_exp = 0
    }
    // console.log(target_level)
    if (next_exp > (now_level * (trans_num + 11) - 3)) {
        res_1_1.textContent = "next 経験値 が大きすぎるかも?"
    } else if (now_level >= target_level) {
        res_1_1.textContent = "現在レベル が 目標レベル 以上です"
    } else if (0 < now_level && now_level < max_level && 0 < target_level && target_level <= max_level && 0 <= next_exp) {
        let f = document.getElementsByClassName("res_LV")
        Object.values(f).forEach(el => {
            el.textContent = "Lv"
        })
        // f.forEach(el => {
        //     el.textContent = "Lv"
        // })
        res_1_1.textContent = ` ${now_level} ~ ${target_level} : `
        res_1_2.textContent = ` ${calc_level(now_level, target_level, next_exp, trans_num)} exp`
        res_2_1.textContent = ` ${target_level} ~ ${target_level + 1} : `
        res_2_2.textContent = ` ${calc_level(target_level, target_level + 1, 0, trans_num)} exp`
        res_3_1.textContent = ` ${now_level} ~ ${target_level + 1} : `
        res_3_2.textContent = ` ${calc_level(now_level, target_level + 1, next_exp, trans_num)} exp`
    } else if (isNaN(now_level)) {
        res_1_1.textContent = "現在レベル を設定してください"
    } else if (isNaN(target_level)) {
        res_1_1.textContent = "目標レベル を設定してください"
    } else if (next_exp < 0) {
        res_1_1.textContent = "next exp が負の値です"
    }
    else {
        res_1_1.textContent = `${trans_num} 転目のレベルの範囲は 1 ~ ${max_level} です`
    }
}

//経験値計算のメイン部分
function calc_level(now_level, target_level, next_exp, trans_num) {

    let sum_exp = 0

    // 目標レベルまでの合計経験値を計算
    // 計算式は wiki にあったものを使用
    for (let i = 0; i < target_level - now_level; i++) {
        sum_exp += (now_level + i) * (trans_num + 11) - 3
        if (i == 0 && next_exp != 0) {
            sum_exp = next_exp
        }
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
    d = this.document.querySelectorAll(".set_now_level")
    d.forEach(element => {
        element.onclick = bbbaa
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
function bbbaa() {
    let buf = document.getElementById("now_level")
    buf.value = this.value
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
        html_element.style.color = "white"
        switch (html_element.value) {
            case "9":
                html_element.style.backgroundColor = "BlueViolet"
                break;
            case "8":
                html_element.style.backgroundColor = "deeppink"
                break;
            case "7":
                html_element.style.backgroundColor = "crimson"
                break;
            case "6":
                html_element.style.backgroundColor = "Coral"
                break;
            case "5":
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

function hum() {
    // let bu = document.createElement("a")
    // bu.href = "/gen2_tools/index.html"
    // bu.click()
}



function calc_2_exp() {
    let f = document.getElementById("exp_cal")
    let f_num = document.getElementById("exp_num")
    let rr = document.getElementById("exp_res")

    let abi_1_ex = document.getElementsByName("abi_1")
    let abi_1_ex_val = 0
    abi_1_ex.forEach(el => {
        if (el.checked) {
            abi_1_ex_val = parseInt(el.value)
        }
    })

    let abi_2_ex = document.getElementsByName("abi_2")
    let abi_2_ex_val = 0
    abi_2_ex.forEach(el => {
        if (el.checked) {
            abi_2_ex_val = parseInt(el.value)
        }
    })

    let boost = document.getElementsByName("boost")
    let boost_val = 1
    boost.forEach(el => {
        if (el.checked) {
            boost_val = parseInt(el.value)
        }
    })

    let mode = document.getElementsByName("ra")
    let mode_val = 1
    mode.forEach(el => {
        if (el.checked) {
            mode_val = parseInt(el.value)
        }
    })

    if (f.value == "") {

        rr.textContent = "Exp を 入力してください"
    } else if (f_num.value == "") {
        rr.textContent = "回数 を 入力してください"
    } else {
        let buf = (parseInt(f.value) * mode_val * boost_val * (abi_1_ex_val + abi_2_ex_val + 100)) / 100
        buf = Math.ceil(buf) * parseInt(f_num.value)
        rr.textContent = `${buf} Exp`
    }
}