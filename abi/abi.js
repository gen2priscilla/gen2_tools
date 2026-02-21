let aa = ["s", "a", "d", "l"]
let ff = ["ihu", "sen", "jik", "yuu"]
let gg = ["sai", "ita", "kai", "mei"]
let sta_a = { "s": 0, "a": 0, "d": 0, "l": 0 }
let sta_d = { "s": 0, "a": 0, "d": 0, "l": 0 }
function a() {

    aa.forEach(ii => {
        let buf = document.getElementById(`A_${ii}`)

        sta_a[ii] = buf.value != "" ? parseInt(buf.value) : 0
    })


    ff.forEach(el => {
        let buf = fff(sta_a, el)
        aa.forEach(li => {
            let g = document.getElementById(`${el}_res_${li}`)
            g.textContent = Math.floor(buf[li])
        })
    })
}
a()

function d() {

    aa.forEach(ii => {
        let buf = document.getElementById(`D_${ii}`)

        sta_d[ii] = buf.value != "" ? parseInt(buf.value) : 0
    })


    gg.forEach(el => {
        let buf = fff(sta_d, el)
        aa.forEach(li => {
            let g = document.getElementById(`${el}_res_${li}`)
            g.textContent = Math.floor(buf[li])
        })
    })
}
d()

function fff(obj_in, abi) {
    let obj = structuredClone(obj_in)
    let buf = 0
    switch (abi) {
        case "ihu":
            buf = obj.a * 0.1
            obj.s += buf * 15
            obj.a = obj.a - buf
            obj.l += buf * 0.12
            break;
        case "sen":
            buf = obj.a * 0.15
            obj.s += buf * 8
            obj.a = obj.a - buf
            obj.l += buf * 0.15
            break;
        case "jik":
            buf = obj.a * 0.15
            obj.s += buf * 0.5
            obj.a = obj.a - buf
            obj.d += buf * 4
            break;
        case "yuu":
            buf = obj.a * 0.2
            obj.s += buf
            obj.a = obj.a - buf
            obj.d += buf
            break;

        case "sai":
            buf = obj.d * 0.15
            obj.s += buf * 0.5
            obj.a += buf * 4
            obj.d = obj.d - buf
            break;
        case "ita":
            buf = obj.d * 0.2
            obj.s += buf
            obj.a += buf
            obj.d = obj.d - buf
            break;
        case "kai":
            buf = obj.d * 0.1
            obj.s += buf * 15
            obj.d = obj.d - buf
            obj.l += buf * 0.12
            break;
        case "mei":
            buf = obj.d * 0.15
            obj.s += buf * 8
            obj.d = obj.d - buf
            obj.l += buf * 0.15
            break;

        default:
            break;
    }
    return obj
}

function add_eve() {
    let id_input_status_A = document.querySelectorAll(".input_A")
    id_input_status_A.forEach(element => {
        element.addEventListener("input", a)
        element.addEventListener("blur", a)
    })
    let id_input_status_D = document.querySelectorAll(".input_D")
    id_input_status_D.forEach(element => {
        element.addEventListener("input", d)
        element.addEventListener("blur", d)
    })
}
add_eve()