//kullanıcıdan aldığımız veri tiplerine verilen isim module

export default class User {

    //firstName:String yapamayız
    //yapıcı blok
    constructor(id, firstName, lastName, city, age) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.city = city
        this.age = age
    }


}