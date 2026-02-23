
//ステータスの計算
function calc() {

    q1 = document.getElementById("stamina")
    q2 = document.getElementById("stamina_re")
    q3 = document.getElementById("attack")
    q4 = document.getElementById("attack_re")
    q5 = document.getElementById("defence")
    q6 = document.getElementById("defence_re")
    q7 = document.getElementById("luck")
    q8 = document.getElementById("luck_re")

    qq1 = document.getElementById("armor")
    qq2 = document.getElementById("abi_2")
    qq3 = document.getElementById("armor_plus")
    qq1 = armor_data.find(ele => ele["name"] == qq1.value)

    let ob = new Object()
    ob.stamina = parseInt(q1.value)
    ob.attack = parseInt(q3.value)
    ob.defence = parseInt(q5.value) * (1 + 0.01 * qq1.grade)
    ob.luck = parseInt(q7.value)

    let buff = abi(qq1.ability, ob, qq3.value)
    let res = abi(qq2.value, buff, qq3.value)

    //小数点以下切り捨て処理
    Object.keys(res).map(key =>
        res[key] = Math.floor(res[key])
    )

    q2.textContent = res.stamina
    q4.textContent = res.attack + aaa_()
    q6.textContent = res.defence + ddd()
    q8.textContent = res.luck

    abi_hatu_(res.luck)
}

function ddd() {

    let d = document.getElementById("armor").value
    d = armor_data.find(ele => ele["name"] == d)

    let r = document.getElementById("armor_plus").value

    let def = 0
    if (r > 10) {
        def = r * (30 + d.grade) / 100
    } else {
        def = r * (20 + d.grade) / 100
    }

    def = Math.ceil(d.base_DEF * def) + d.base_DEF

    return def
}
function aaa_() {
    let d = document.getElementById("weapon").value
    d = weapon_data.find(ele => ele["name"] == d)

    let r = document.getElementById("weapon_plus").value

    let def = 0
    if (r > 10) {
        def = r * (30 + d.grade) / 100
    } else {
        def = r * (20 + d.grade) / 100
    }

    def = Math.ceil(d.base_ATK * def) + d.base_ATK

    return def
}

function abi_hatu_(luck) {
    let hatu = {
        "高": ["高揚", "強打", "風返", "回復", "獣属", "魔属", "霊属", "龍属", "地属", "無属"],
        "中": ["盟旗", "猛突", "凍結", "五雨", "突風", "破茶", "砕返"],
        "低": ["疾風 ", "壮健", "不乱", "大撃", "紅舞", "粉砕",
            "一斉", "福音", "爽活", "癒唄", "和属"],
        "超低": ["天晴"],
    }
    let we_plus = document.getElementById("weapon_plus").value

    let abi_1 = document.getElementById("weapon").value
    let abi_2 = document.getElementById("abi_1").value
    abi_1 = weapon_data.find(ele => ele["name"] == abi_1)

    let buf = ["なし", "なし"]
    Object.entries(hatu).forEach(([key, abi_array]) => {
        abi_array.forEach(element => {
            if (abi_1.ability == element) {
                buf[0] = key
            }
            if (abi_2 == element) {
                buf[1] = key
            }
        })
    })

    let fin = 0
    if (500 <= luck) {
        fin = 25
    } else if (0 <= luck) {
        fin = luck * 0.05
    }

    let g = buf.map(element => {
        let sss = abi_1.grade * 1.1 + fin

        if (10 <= we_plus) {
            sss += 7 + (we_plus - 10) * 1.8;
        }

        switch (element) {
            case "高":
                sss += 38;
                break;
            case "中":
                sss += 28;
                break;
            case "低":
                sss += 18;
                break;
            case "超低":
                sss += 12.5;
                break;
            default:
                sss = 0;
                break;
        }

        return sss
    })

    g[1] = (g[1] * (100 - g[0]) * 0.01)

    let res_1 = document.getElementById("abi_1_hatu_res")
    let res_2 = document.getElementById("abi_2_hatu_res")
    let res_3 = document.getElementById("abi_sum_hatu_res")

    res_1.textContent = Math.floor(g[0] * 10) / 10 + " %"
    res_2.textContent = Math.floor(g[1] * 10) / 10 + " %"
    res_3.textContent = Math.floor((g[0] + g[1]) * 10) / 10 + " %"
}


//イベント追加
function add_eve() {
    let id_input_status = document.querySelectorAll(".input_status")
    id_input_status.forEach(element => {
        element.addEventListener("input", calc)
        element.addEventListener("blur", calc)
    })
}
add_eve()