

const url_ = "/gen2_tools/data/weapon_list.json"
const url = "/gen2_tools/data/armor_list.json"
let armor_data = new Array
let weapon_data = new Array
fetch(url_)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok.");
            // Errorが発生したら、ここで処理を中断して、下記のcatchに移行する
        }
        return response.json();
    })
    .then((json) => {
        weapon_data = structuredClone(json);
        input_abi_()
    })
    .catch((error) => console.log(error))
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
        calc()
    })
    .catch((error) => console.log(error))

//実際にセット
function input_abi() {
    set_armor("armor")
    set_armor_abi("abi_2")
}
function input_abi_() {
    set_weapon("weapon")
    set_weapon_abi("abi_1")
}

//武器を target_id にセット
function set_weapon(target_id) {
    let weapon_order = {
        "cat 1": ["紅舞", "粉砕", "高揚", "盟旗"],
        "cat 2": ["壮健", "不乱", "大撃"],
        "cat 3": ["疾風", "猛突", "突風"],
        "cat 4": ["和属", "一斉",],
        "回復": ["天晴", "福音", "爽活", "癒唄", "回復",],
        "属性": ["獣属", "魔属", "霊属", "龍属", "地属", "無属"],
        "その他": ["強打", "凍結", "五雨", "砕返", "風返", "破茶", "なし"]
    }
    let _el_ar = document.getElementById(target_id)

    Object.entries(weapon_order).forEach(([key, val]) => {

        let created_el = document.createElement("optgroup")
        created_el.label = key
        created_el.id = `weapon_${key}`

        _el_ar.appendChild(created_el)

        let a = document.getElementById(created_el.id)

        val.forEach(element => {
            weapon_data.forEach(val => {
                if (element == val["ability"]) {
                    let weapon_option = document.createElement("option")
                    weapon_option.value = val["name"]
                    weapon_option.textContent = `${val["ability"]} : ${val["name"]}`

                    a.appendChild(weapon_option)
                }

            })
        })
    })
}

//武器アビリティを target_id にセット
function set_weapon_abi(target_id) {

    let ability_name = {
        "cat 1": ["紅舞", "粉砕", "高揚", "盟旗"],
        "cat 2": ["壮健", "不乱", "大撃"],
        "cat 3": ["疾風", "猛突", "突風"],
        "cat 4": ["和属", "一斉",],
        "回復": ["天晴", "福音", "爽活", "癒唄", "回復",],
        "属性": ["獣属", "魔属", "霊属", "龍属", "地属", "無属"],
        "その他": ["強打", "凍結", "五雨", "砕返", "風返", "破茶", "なし"]
    }

    let a = document.getElementById(target_id)

    Object.entries(ability_name).forEach(([key, val]) => {

        let opt_group = document.createElement("optgroup")
        opt_group.label = key
        opt_group.id = `weapon_abi_${key}`

        a.appendChild(opt_group)

        let id_op = document.getElementById(opt_group.id)

        val.forEach(element => {

            let abi_option = document.createElement("option")
            abi_option.textContent = element

            id_op.appendChild(abi_option)
        })
    })
}



//武器を target_id にセット
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
        "その他": ["成長", "持久", "底力", "強固", "頑固", "鉄壁", "激運", "天運", "なし"]
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


//武器アビリティを target_id にセット
function set_armor_abi(target_id) {
    let ability_name = {
        // "強化": ["勇将", "猛皇", "猛将", "賢皇", "賢将"],
        "強化"/*強化 2*/: ["雲竜", "生存", "虎砲", "闘争", "護鶴", "防衛"],
        "S変換": ["誘惑"],
        "A変換": ["威風", "戦略", "慈恵", "遊戯"],
        "D変換": ["砕身", "悪戯", "改命", "瞑想"],
        "L": ["博打", "才華", "浪漫"],
        "SAD増加": ["大帝", "修羅", "一八", "覇王", "天佑", "加護"],
        "属性": ["獣属", "魔属", "霊属", "龍属", "地属", "無属"],
        "その他": ["成長", "持久", "底力", "強固", "頑固", "鉄壁", "激運", "天運", "なし"]
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