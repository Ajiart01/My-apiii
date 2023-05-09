const convert = require('./convert-saldo-gopay.js')
var { 
  topupFreeFire,
  payDiamond
} = require("./freefire");

async function topupFreeFiree(id, jumlah, nomor) {
const makeSession = await topupFreeFire(id, jumlah, nomor) // support nominal 5 12 70 140 355 720'
// console.log(makeSession) if get more property
return await payDiamond(makeSession, nomor)
}
module.exports.topupFreeFiree = topupFreeFiree

async function gopay(idProduct, PhoneNumber) {
    const csrf = await convert.csrfGenerator()
    const { data } = await convert.listProduct(csrf)
    // console.log(data) untuk melihat id product yang tersedia
    const isValidId = data.daftar_product.find(product => product.id == idProduct)
    if (!isValidId) return console.error('invalid id product')
    const gass = await convert.convertGopay(idProduct,PhoneNumber, csrf)
    if (!'qr' in gass) return console.error('kurang ganteng')
    return {
        ...gass,
        ...isValidId
    }
}

module.exports.gopay = gopay