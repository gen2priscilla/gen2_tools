const url = "/gen2_tools/data/armor_list.json"
let armor_data = new Array

fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok.");
            // Errorが発生したら、ここで処理を中断して、下記のcatchに移行する
        }
        return response.json();
    })
    .then((json) => {
        armor_data = structuredClone(json);
        input_abi()
    })
    .catch((error) => console.log(error))



//実際にセット
function input_abi() {
    set_armor("armor")
    set_armor_abi("abi_2")
}


//防具,アビリティを選択肢にセット
function set_armor(target_id) {
    let armor_order = {
        "強化": ["勇将", "猛皇", "猛将", "賢皇", "賢将"],
        "S変換": ["誘惑"],
        "A変換": ["威風", "戦略", "慈恵", "遊戯"],
        "D変換": ["砕身", "悪戯", "改命", "瞑想"],
        "L": ["博打", "才華", "浪漫"],
        "SAD増加": ["大帝", "修羅", "一八", "覇王", "天佑", "加護"],
        "強化 2": ["雲竜", "生存", "虎砲", "闘争", "護鶴", "防衛"],
        "属性": ["獣属", "魔属", "霊属", "龍属", "地属", "無属"],
        "その他": ["成長", "持久", "底力", "強固", "頑固", "鉄壁", "激運", "天運"]
    }
    let _el_ar = document.getElementById(target_id)


    Object.entries(armor_order).forEach(([key, val]) => {

        let created_el = document.createElement("optgroup")
        created_el.label = key
        created_el.id = `armor_${key}`

        _el_ar.appendChild(created_el)

        let a = document.getElementById(created_el.id)

        val.forEach(element => {
            armor_data.forEach(val => {
                if (element == val["ability"]) {
                    let armor_option = document.createElement("option")
                    armor_option.value = val["name"]
                    armor_option.textContent = `${val["ability"]} : ${val["name"]}`

                    a.appendChild(armor_option)
                }
            })

        })
    })

}

function set_armor_abi(target_id) {
    let ability_name = {
        "S変換": ["誘惑"],
        "A変換": ["威風", "戦略", "慈恵", "遊戯"],
        "D変換": ["砕身", "悪戯", "改命", "瞑想"],
        // "強化": ["勇将", "猛皇", "猛将", "賢皇", "賢将"],
        "強化"/*強化 2*/: ["雲竜", "生存", "虎砲", "闘争", "護鶴", "防衛"],
        "L": ["博打", "才華", "浪漫"],
        "SAD増加": ["大帝", "修羅", "一八", "覇王", "天佑", "加護"],
        "属性": ["獣属", "魔属", "霊属", "龍属", "地属", "無属"],
        "その他": ["成長", "持久", "底力", "強固", "頑固", "鉄壁", "激運", "天運"]
    }

    let a = document.getElementById(target_id)

    Object.entries(ability_name).forEach(([key, val]) => {

        let opt_group = document.createElement("optgroup")
        opt_group.label = key
        opt_group.id = `armor_abi_${key}`

        a.appendChild(opt_group)

        let id_op = document.getElementById(opt_group.id)

        val.forEach(element => {

            let abi_option = document.createElement("option")
            abi_option.textContent = element

            id_op.appendChild(abi_option)
        })
    })
}


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
    q4.textContent = res.attack
    q6.textContent = res.defence + ddd()
    q8.textContent = res.luck

}
function ddd() {
    let def = 0
    let r = document.getElementById("armor_plus").value

    let d = document.getElementById("armor").value
    d = armor_data.find(ele => ele["name"] == d)

    if (r > 10) {
        def = r * (30 + d.grade) / 100
    } else {
        def = r * (20 + d.grade) / 100
    }
    def = Math.ceil(d.base_DEF * def) + d.base_DEF
    return def
}

//防具アビリティ計算
function abi(abi_name, gen_status, grade) {
    grade = parseInt(grade)
    let buf = structuredClone(gen_status);
    let aaaaaa;

    //0埋め
    Object.keys(buf).map(key => {
        if (isNaN(buf[key])) {
            buf[key] = 0
        }
    }
    )

    switch (abi_name) {

        //stamina_up
        case "生存":
            buf.stamina = gen_status.stamina + gen_status.stamina * grade * 0.05;
            break;
        case "雲竜":
            buf.stamina = gen_status.stamina + gen_status.stamina * grade * 0.06;
            buf.luck = gen_status.luck + 100;
            break;
        case "勇将":
            buf.stamina = gen_status.stamina + gen_status.stamina * grade * 0.075;
            break;
        case "勇皇":
            bu.stamina = gen_status.stamina + gen_status.stamina * grade * 0.1;
            break;


        //attack_up
        case "闘争":
            buf.attack = gen_status.attack + gen_status.attack * grade * 0.01;
            break;
        case "虎砲":
            buf.attack = gen_status.attack + gen_status.attack * grade * 0.0125;
            buf.luck = gen_status.luck + 100;
            break;
        case "猛将":
            buf.attack = gen_status.attack + gen_status.attack * grade * 0.02;
            break;
        case "猛皇":
            buf.attack = gen_status.attack + gen_status.attack * grade * 0.04;
            break;


        //defence_up
        case "防衛":
            buf.defence = gen_status.defence + gen_status.defence * grade * 0.01;
            break;
        case "護鶴":
            buf.defence = gen_status.defence + gen_status.defence * grade * 0.0125;
            buf.luck = gen_status.luck + 100;
            break;
        case "賢将":
            buf.defence = gen_status.defence + gen_status.defence * grade * 0.02;
            break;
        case "賢皇":
            buf.defence = gen_status.defence + gen_status.defence * grade * 0.04;
            break;


        //attack and defence
        case "加護":
            buf.stamina = gen_status.stamina + gen_status.stamina * 0.1;
            buf.attack = gen_status.attack + gen_status.attack * 0.1;
            buf.defence = gen_status.defence + gen_status.defence * 0.1;
            break;
        case "天佑":
            buf.stamina = gen_status.stamina + gen_status.stamina * 0.12;
            buf.attack = gen_status.attack + gen_status.attack * 0.12;
            buf.defence = gen_status.defence + gen_status.defence * 0.12;
            buf.luck = gen_status.luck + gen_status.luck * 0.12;
            break;
        case "覇王":
            buf.attack = gen_status.attack + gen_status.attack * 0.15;
            buf.defence = gen_status.defence + gen_status.defence * 0.15;
            break;
        case "一八":
            buf.stamina = gen_status.stamina + gen_status.stamina * grade * 0.03;
            buf.attack = gen_status.attack + gen_status.attack * grade * 0.01;
            buf.defence = gen_status.defence + gen_status.defence * grade * 0.01;
            break;
        case "修羅":
            buf.stamina = gen_status.stamina + gen_status.stamina * grade * 0.04;
            buf.attack = gen_status.attack + gen_status.attack * grade * 0.015;
            buf.defence = gen_status.defence + gen_status.defence * grade * 0.015;
            break;
        case "大帝":
            buf.stamina = gen_status.stamina + gen_status.stamina * 0.45;
            buf.attack = gen_status.attack + gen_status.attack * 0.15;
            break;


        //convert_S
        case "誘惑":
            aaaaaa = gen_status.stamina * 0.2;
            buf.stamina = gen_status.stamina - aaaaaa;
            buf.attack = gen_status.attack + aaaaaa;
            break;


        //convert_A
        case "遊戯":
            aaaaaa = gen_status.attack * 0.2;
            buf.stamina = gen_status.stamina + aaaaaa;
            buf.attack = gen_status.attack - aaaaaa;
            buf.defence = gen_status.defence + aaaaaa;
            break;
        case "慈恵":
            aaaaaa = gen_status.attack * 0.15;
            buf.stamina = gen_status.stamina + aaaaaa * 0.5;
            buf.attack = gen_status.attack - aaaaaa;
            buf.defence = gen_status.defence + aaaaaa * 4;
            break;

        case "戦略":
            aaaaaa = gen_status.attack * 0.15;
            buf.stamina = gen_status.stamina + aaaaaa * 8;
            buf.attack = gen_status.attack - aaaaaa;
            buf.luck = gen_status.luck + aaaaaa * 0.15;
            break;
        case "威風":
            aaaaaa = gen_status.attack * 0.1;
            buf.stamina = gen_status.stamina + aaaaaa * 15;
            buf.attack = gen_status.attack - aaaaaa;
            buf.luck = gen_status.luck + aaaaaa * 0.12;
            break;


        //convert_D
        case "悪戯":
            aaaaaa = gen_status.defence * 0.2;
            buf.stamina = gen_status.stamina + aaaaaa;
            buf.attack = gen_status.attack + aaaaaa;
            buf.defence = gen_status.defence - aaaaaa;
            break;
        case "砕身":
            aaaaaa = gen_status.defence * 0.15;
            buf.stamina = gen_status.stamina + aaaaaa * 0.5;
            buf.attack = gen_status.attack + aaaaaa * 4;
            buf.defence = gen_status.defence - aaaaaa;
            break;

        case "瞑想":
            aaaaaa = gen_status.defence * 0.15;
            buf.stamina = gen_status.stamina + aaaaaa * 8;
            buf.defence = gen_status.defence - aaaaaa;
            buf.luck = gen_status.luck + aaaaaa * 0.15;
            break;
        case "改命":
            aaaaaa = gen_status.defence * 0.1;
            buf.stamina = gen_status.stamina + aaaaaa * 15;
            buf.defence = gen_status.defence - aaaaaa;
            buf.luck = gen_status.luck + aaaaaa * 0.12;
            break;


        //convert_L
        case "博打":
            buf.luck = gen_status.defence + 50;
            break;
        case "才華":
            aaaaaa = gen_status.luck * 0.5;
            buf.stamina = gen_status.stamina + aaaaaa * 7.5;
            buf.attack = gen_status.attack + aaaaaa * 7.5;
            buf.defence = gen_status.defence + aaaaaa * 7.5;
            buf.luck = gen_status.luck - aaaaaa;
            break;
        case "浪漫":
            buf.luck = gen_status.defence + 50;
            break;


        //other
        case "成長":
            buf.stamina = gen_status.stamina + 300;
            break;
        case "持久":
            buf.stamina = gen_status.stamina + gen_status.stamina * 0.15;
            break;
        case "底力":
            buf.stamina = gen_status.stamina + gen_status.stamina * 0.2;
            break;
        case "強固":
            buf.defence = gen_status.defence + 50;
            break;
        case "頑固":
            buf.defence = gen_status.defence + gen_status.defence * 0.1;
            break;
        case "鉄壁":
            buf.defence = gen_status.defence + gen_status.defence * 0.15;
            break;
        case "激運":
            buf.luck = gen_status.luck + 50;
            break;
        case "天運":
            buf.luck = gen_status.luck + grade * 5
            break;

        default:
            break;
    }

    return buf;

}

//イベント追加
function add_eve() {
    let id_input_status = document.querySelectorAll(".input_status")
    id_input_status.forEach(element => {
        element.addEventListener("change", calc)
        element.addEventListener("blur", calc)
    })
    let id = document.getElementById("armor_plus")
    id.addEventListener("change", calc)
    id.addEventListener("blur", calc)
}
add_eve()