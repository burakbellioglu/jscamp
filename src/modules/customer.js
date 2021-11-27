export default class Customer extends User { //extend genişletir user i genişletir

    constructor(id, firstName, lastName, city, age, creditCardNumber) {
        super(id,firstName,lastName,city,age) //useri çalıştır!! super = user ayrı ayrı gerek yok
        this.creditCardNumber = creditCardNumber
    }

}