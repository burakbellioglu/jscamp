//istediğimiz kadar sayi parametre gönderen fonksiyon
//her sayi için asal mı değil mi?

//FIND PRİME
function findPrime(...numbers) {
    let primeNumbers = []
    let nonPrimeNumbers = []

    for(let i = 0; i <= numbers.length; i++) 
    {

        for(let j = 2; j < numbers[i]; j++) 
        {
            //Asal olmayan bir sayıdan sonra isItPrime false döndüğü için döngü başına true.
            let isItPrime = true
            if(numbers[i] % j == 0) 
            {
                nonPrimeNumbers.push(numbers[i])
                isItPrime = false
                break;
            }
               
        }

        if(isItPrime!=false) 
        {
            primeNumbers.push(numbers[i])
        }

    }

console.log(...numbers, " Sayılarından")
console.log("Asal Olanlar : ", primeNumbers)
console.log("Asal olmayanlar : ", nonPrimeNumbers)

}

findPrime(2,3,5,7,6,8,15,25,9,10,47,95)

//----------------------------------------------

//Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.
function friendsNumbers(...number) {
    let total1 = []

    for(let j = 0; j < number.length; j++) 
    {
        let total = 0

        for (let i = 1; i < number[j]; i++)
        { 
        
        if(number[j] % i == 0) 
        {
            total = total + i
        }

        }
        
        total1[j] = total
    
    }
    
    if(total1[1] == number[0] && total1[0] == number[1]) 
    {
        console.log(number[0], " ve", number[1], " arkadaş sayılardır.")
    }

    else 
    {
        console.log(number[0], " ve", number[1], " arkadaş sayı değildir.")
    }

}

friendsNumbers(15,284)


//----------------------------------------------

//1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
for (let i = 1; i <= 1000; i++) 
{
    let total2 = 0;

    for(let j = 1; j <= i; j++) 
    {
        if(i % j == 0) 
        {
            total2 = total2 + j
        }
    }

    if(i * 2 == total2) 
    {
        console.log(i)
    }
    
}

//----------------------------------------------

//1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
function isItPrimeNumber(number1) 
{

    if(number1 == 2)
    {
        console.log(2)
    }

    for(let i = 2; i < number1; i++)
    {
        let isItPrime = true
        if(number1 % i == 0)
        {
          isItPrime = false
          break;
        }

    }

    if(isItPrime == true) 
        {
            console.log(number1)
        } 
}

for (let i = 1; i <= 1000; i++){
    isItPrimeNumber(i)
}

