
let cart = 
[
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Şarj Cihazı", quantity:2, unitPrice:100},
]

//Sepeti dolaş      her product için bu hareketi yap
//cart.map(product => console.log(product.productName))

cart.map(product => {
        console.log(product.productName, " : ", product.quantity*product.unitPrice)
})

//filtreleme
let quantityOver2 = cart.filter(product=> product.quantity>2)
console.log(quantityOver2)
















//referans tip
//sepete ekleye bastığımızda
function addToCart(sepet) {
    sepet.push({id:7, productName:"Ruhsat", quantity:1, unitPrice:20})
}

addToCart(cart)

//console.log(cart)

//değer tip 10 yazar 
let sayi = 10
function sayiTopla(number) {
    number+=1
}
sayiTopla(sayi)
//console.log(sayi)