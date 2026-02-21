
//実際にセット
function input_abi() {
    let aaa = document.getElementById("abi_2")
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

            let armor_option = document.createElement("option")
            armor_option.textContent = element

            a.appendChild(armor_option)
        })
    })
}

function set_armor_abi(target_id) {
    let ability_name = {
        // "基礎 2": ["勇将", "猛皇", "猛将", "賢皇", "賢将"],

        "S変換": ["誘惑"],
        "A変換": ["威風", "戦略", "慈恵", "遊戯"],
        "D変換": ["砕身", "悪戯", "改命", "瞑想"],
        "強化": ["雲竜", "生存", "虎砲", "闘争", "護鶴", "防衛"],
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

    let ob = new Object()
    ob.stamina = parseInt(q1.value)
    ob.attack = parseInt(q3.value)
    ob.defence = parseInt(q5.value)
    ob.luck = parseInt(q7.value)

    let buff = abi(qq1.value, ob)
    let res = abi(qq2.value, buff)

    q2.textContent = res.stamina
    q4.textContent = res.attack
    q6.textContent = res.defence
    q8.textContent = res.luck
}


//防具アビリティ計算
function abi(abi_name, gen_status /*, grade*/) {
    grade = 20
    let buf = structuredClone(gen_status);
    let aaaaaa;

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
}
add_eve()