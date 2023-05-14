const urlService=`http://localhost:8080`
const urlImg= `https://res.cloudinary.com/dpndp5u78/image/upload/v1/images`
const apiTivi=()=> {
    return new Promise((resolve, reject) => {
        const Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText)
            resolve(Doi_tuong_Kq)
        }
        let apiName="dsTivi"
        Xu_ly_HTTP.open("GET", `${urlService}/${apiName}`)
        Xu_ly_HTTP.send()
    })
}
const apiDienthoai=()=> {
    return new Promise((resolve, reject) => {
        const Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText)
            resolve(Doi_tuong_Kq)
        }
        let apiName="dsDienthoai"
        Xu_ly_HTTP.open("GET", `${urlService}/${apiName}`)
        Xu_ly_HTTP.send()
    })
}
const apiFood=()=>{
    return new Promise((resolve, reject) => {
        const Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText)
            resolve(Doi_tuong_Kq)
        }
        let apiName="dsFood"
        Xu_ly_HTTP.open("GET", `${urlService}/${apiName}`)
        Xu_ly_HTTP.send()
    })
}

const apiHocsinh=()=>{
    return new Promise((resolve, reject) => {
        const Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText)
            resolve(Doi_tuong_Kq)
        }
        let apiName="dsHocsinh"
        Xu_ly_HTTP.open("GET", `${urlService}/${apiName}`)
        Xu_ly_HTTP.send()
    })
}

const apiCuahang=()=>{
    return new Promise((resolve, reject) => {
        const Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText)
            resolve(Doi_tuong_Kq)
        }
        let apiName="Cuahang"
        Xu_ly_HTTP.open("GET", `${urlService}/${apiName}`)
        Xu_ly_HTTP.send()
    })
}
