//src new file 
//index html istediğin dosyayı oku
function addToCart(productName="Elma",quantity) { //yer değiştirebilir!! adet ön isim son
    console.log("Sepete Eklendi! : " , productName , "adet" , quantity)
}

addToCart("Yumurta",5)

//Değişkenden fonksiyon atama yukarıdaki gibi
let sayHello = ()=> {
    console.log("Hello")
}
sayHello()

let sayHello2 = function() {
    console.log("Hello2")
} 
sayHello2()

let product1 = {
    productName:"Elma", quantity:5, unitPrice:10
}



function addToCart2(product) {
    console.log("Ürün :",product.productName)
    console.log("Adet : ", product.quantity)
    console.log("Fiyat : ", product.unitPrice)
}
product1.productName = "Karpuz"
addToCart2(product1)
 
//sayılar değer tip
//string obje array referans tip veri atanmaz bellekteki adres atanır
product1.productName = "Karpuz"//bellekteki adres 100 olsun
//100 ün productname i karpuz!!

//tümünü sepete ekle
function addToCart4(x) {
    console.log(products)
}
//bu products farklı 
let products = [
    {productName:"Elma", quantity:5, unitPrice:10},
    {productName:"Armut", quantity:5, unitPrice:10},
    {productName:"Karpuz", quantity:5, unitPrice:10}

]
addToCart4(products)

let numbers = [30,10,50,100]

            //rest operatörü
function add(...numbers) { //başka parametre varsa başa yaz sona yazılırsa rest olduğu içn okunmaz
    for(let i = 0; i<numbers.length; i++)
    console.log(numbers[i])
}
add(20,30)
add(20,30,40,50)
add(numbers)

console.log(...numbers) //ayır
console.log(Math.max(...numbers))


let [icAnadolu, marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]] = 
[
    {name:"İç anadolu", population:"20M"}, 
    {name:"Marmara", population:"30M"}, 
    {name:"Karadeniz", population:"15M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
]
//console.log(icAnadolu.name)
//console.log(icAnadolu.population)
console.log(icAnadolu.name)
console.log(icAnadoluSehirleri)


