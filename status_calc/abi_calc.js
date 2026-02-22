function ooo() {
    console.log("HHH")
}

//防具アビリティ計算
function abi(abi_name, gen_status, grade) {
    grade = parseInt(grade)
    let buf = structuredClone(gen_status);
    let aaaaaa;

    // NaN の 0 埋め
    Object.keys(gen_status).map(key => {
        if (isNaN(gen_status[key])) {
            gen_status[key] = 0
        }
    })
    Object.keys(buf).map(key => {
        if (isNaN(buf[key])) {
            buf[key] = 0
        }
    })

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
            // buf.luck = gen_status.defence + 50;
            break;
        case "才華":
            aaaaaa = gen_status.luck * 0.5;
            buf.stamina = gen_status.stamina + aaaaaa * 7.5;
            buf.attack = gen_status.attack + aaaaaa * 7.5;
            buf.defence = gen_status.defence + aaaaaa * 7.5;
            buf.luck = gen_status.luck - aaaaaa;
            break;
        case "浪漫":
            // buf.luck = gen_status.defence + 50;
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