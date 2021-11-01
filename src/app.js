console.log("Merhaba")
//float int yazmana gerek yok let keyword
//JS type safe değildir!!! istediğin type
let dolardun = 9.20
let dolarbugun = 9.30
{
    let dolardun = 9.10
}
console.log(dolardun)
//const sabitleme
const eurodun = 11.2
console.log(eurodun)

//array
let konutKredileri =["konut kredisi","Emlak kredisi","Kamu kredisi","Özel konut"]
console.log(konutKredileri)


//html çıktısı
console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")  
}
console.log("</ul>")



