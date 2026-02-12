const url = "/gen2_tools/data/gen_data_after.json"
let gen_data = new Object
let pr = new Array
fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok.");
            // Errorが発生したら、ここで処理を中断して、下記のcatchに移行する
        }
        return response.json();
    })
    .then((json) => {
        gen_data = structuredClone(json);
        init(1)
    })
    .catch((error) => console.log(error))

//変化シミュのメイン部分
function init(no) {

    pr.push(no)

    console.log(pr)
    let text = gen_data[no]
    let qq = document.getElementById("now_gen")
    qq.textContent = ` ${no} : ${text["幻獣Name"]} ( ${text["変化Name"]} )`
    let b = document.getElementById("next_gen")
    b.textContent = ""

    if (no != 1) {
        res(text)
    }

    Object.keys(text).forEach(element => {
        if (element === "次") {

            Object.keys(text["次"]).forEach(element_ => {

                let created_eleme = document.createElement("button")
                created_eleme.style = "height : 30px"
                created_eleme.style.width
                if (gen_data[text["次"][element_]] != undefined) {
                    created_eleme.textContent = text["次"][element_] + " : " + gen_data[text["次"][element_]]["幻獣Name"] + ` ( ${gen_data[text["次"][element_]]["変化Name"]} ) `
                } else {
                    created_eleme.textContent = text["次"][element_] + " : "
                }
                created_eleme.onclick = () => {
                    init(text["次"][element_])
                }
                b.appendChild(created_eleme)

            })
        }
    })

}

function res(data) {
    let buf = document.getElementById("res")
    if (buf.textContent.length != 0) {
        buf.textContent += " -> "
    }
    buf.textContent += `${data["幻獣Name"]} ( ${data["変化Name"]} )`
}

function fin() {
    let d = ""
    pr.forEach(el => {
        if (el != 1) {
            d += `${gen_data[el]["幻獣Name"]} ( ${gen_data[el]["変化Name"]} ) -> `
        }
    })
    d = d.substring(0, d.length - 4)
    let blob = new Blob([d], { type: "text/plain" })
    let link = document.createElement("a")
    link.href = window.URL.createObjectURL(blob)
    link.download = "幻獣変化ルート"
    link.click()
    URL.revokeObjectURL(link)
}
function prev() {
    pr.pop()
    let buf = pr.pop()
    let f = document.getElementById("res")
    f.textContent = ""

    pr.forEach(el => {
        // console.log(el)
        if (el != 1) {
            if (f.textContent.length != 0) {
                f.textContent += " -> "
            }
            f.textContent += `${gen_data[el]["幻獣Name"]} ( ${gen_data[el]["変化Name"]} )`
        }
    })

    init(buf)
}

