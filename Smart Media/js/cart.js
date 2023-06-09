let carts=[];

const addCart = (maSo, maNhom) => {
    // Nhóm Mặt hàng
    getArray(Number(maNhom)).then(result => {
        let id = maSo;
        let sl = Number(document.querySelector(`#sl${id}`).value)
        // Lưu trữ vào session
        let vt = -1;
        // Lưu vào sessionStorage
        if (sessionStorage.getItem("carts") != undefined) {
            carts = JSON.parse(sessionStorage.getItem("carts"))
            vt = carts.findIndex(item => item.maso == id);
        }

        if (vt == -1) {
            let tmp = result.find(x => x.Ma_so == id);
            let cart = {
                maso: id,
                soluong: sl,
                ten: tmp.Ten,
                dongiaban: Number(tmp.Don_gia_Ban),
                manhom: maNhom
            }
            carts.push(cart) // Thêm 
        } else {
            carts[vt].soluong += sl // Cập nhật lại số lượng
        }

        if (carts.length > 0) {
            sessionStorage.setItem("carts", JSON.stringify(carts))
        } else {
            sessionStorage.removeItem("carts")
        }
        document.getElementById("Th_Giohang").innerHTML= carts.length
    })
}
const getArray = async (maNhom) => {
    let ds=[]
    if (maNhom == 1) {
        ds = await apiTivi();
    } else if (maNhom == 2) {
        ds = await apiFood();
    } else {
        ds = await apiDienthoai();
    }
    return ds;
}
const openCart = () => {
    if (sessionStorage.getItem("carts") != undefined) {
        window.location = `../cart/`
    }
}


const xuatCart = (carts, Th_Cha) => {
    console.log('carts', carts);
    Th_Cha.innerHTML = ""
    var noi_dung_HTML = ``

    carts.forEach(itemMua => {
        let thanhTien = itemMua.soluong * itemMua.dongiaban
        noi_dung_HTML += `
        <tr>
            <td scope="row" class="text-center">
                <img src=${urlImg}/${itemMua.maso}.png style="width:80px" />
            </td >
            <td class="text-nowrap">${itemMua.ten}</td>
            <td class="text-right">
                <input onchange="soLuong('${itemMua.maso}',this)" type="number" min="1" max="10" value="${itemMua.soluong}" class="text-right" />
            </td>
            <td class="text-right">${itemMua.dongiaban.toLocaleString()}<sup>đ</sup></td>
            <td class="text-right" id="tt${itemMua.maso}">${thanhTien.toLocaleString()}<sup>đ</sup></td>
            <td class='xoa text-center' onclick="xoaGiohang('${itemMua.maso}')"> Xóa </td>
        </tr >
        `
    })

    noi_dung_HTML += `
        <tr>
                <td colspan="6" id="Th_Tong" style="text-align: right;" class="text-danger"></td>
                
        </tr>
    `
    Th_Cha.innerHTML = noi_dung_HTML
    tongThanhtien()

}

const tongThanhtien = () => {
    let kq = 0
    carts = JSON.parse(sessionStorage.getItem("carts"));
    carts.forEach(dt => {
        kq += dt.soluong * dt.dongiaban
    })
    Th_Tong.innerHTML = `<strong>Tổng thành tiền:</strong> ${kq.toLocaleString()}<sup>đ</sup>`
}

const soLuong = (Ma_so, input) => {
    //console.log(`Ma so:${Ma_so} - So luong ${input.value}`)
    carts = JSON.parse(sessionStorage.getItem('carts'));
    let item = carts.find(x => x.maso == Ma_so);
    //console.log(item);
    item.soluong = Number(input.value); // Cập nhật số lượng Mới
    let thanhTien = item.soluong * item.dongiaban; // Tính lại Thành tiền
    document.getElementById(`tt${Ma_so}`).innerHTML = `${thanhTien.toLocaleString()}<sup>đ</sup>` // Hiển thị thành tiền
    // Cập nhật lại session (Giỏ hàng)
    sessionStorage.setItem('carts', JSON.stringify(carts));
    tongThanhtien()
}

const xoaGiohang = (Ma_so) => {
    carts = JSON.parse(sessionStorage.getItem('carts'));
    let vt = carts.findIndex(x => x.maso == Ma_so);
    carts.splice(vt, 1);
    if (carts.length == 0) {
        Th_XoaCarts.click()
    } else {
        sessionStorage.setItem('carts', JSON.stringify(carts));
        xuatCart(carts, Th_Carts)
    }
}

