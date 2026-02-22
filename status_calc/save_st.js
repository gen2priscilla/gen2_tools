
let gen_data_array = new Array


function save_st() {
    let id_string = {
        "status": ["Name_in", "stamina_re", "attack_re", "defence_re", "luck_re"],
        "equipment": ["weapon", "abi_1", "weapon_plus", "armor", "abi_2", "armor_plus"]
    }
    let data = {
        "status": [],
        "equipment": []
    }
    Object.entries(id_string).forEach(([key, id_array]) => {
        id_array.forEach(val => {
            let buf = document.getElementById(val)

            if (key == "equipment") {
                data[key].push(buf.value)
            } else if (val == "Name_in") {
                data[key].push(buf.value)
            }
            else {
                data[key].push(buf.textContent)
            }
        })
    })

    let f = document.getElementById("sele_data")

    // console.log(data)
    if (data["status"][0] == "") {
        data["status"][0] = `幻獣_${f.length}`
    }

    let created_el = document.createElement("option")
    created_el.textContent = data["status"][0]
    created_el.value = f.length

    f.appendChild(created_el)

    gen_data_array.push(data)
}
window.onload = function () {
    let ele = document.getElementById("sele_data")
    ele.addEventListener("change", () => {
        _set_ar()
    })
}

function _set_ar() {
    let aa = ["save_data_st", "save_data_at", "save_data_de", "save_data_lu", "save_data_we", "save_data_ar"]
    let vvv = document.getElementById("sele_data").value
    if (vvv != 0) {
        aa.forEach((element, index) => {

            let str = ""
            let data_ = gen_data_array[vvv - 1]
            // console.log(gen_data_array)
            let g = data_["equipment"]

            if (element == "save_data_we") {
                str = `${g[0]} : ${g[1]} : ${g[2]}`
            } else if (element == "save_data_ar") {
                str = `${g[3]} : ${g[4]} : ${g[5]}`
            } else {
                str = data_["status"][index + 1]
            }
            let buf = document.getElementById(element)
            buf.textContent = str
        })
    }
}