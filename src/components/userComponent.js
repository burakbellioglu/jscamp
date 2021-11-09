
import { BaseLogger } from "../crossCuttingConcourse/logging/logger.js"
import User from "../modules/user.js"
import UserService from "../services/userService.js"

//EKRAN
//Ürünün detayı gelen ekran
console.log("User component yüklendi")


let logger1 = new BaseLogger()
let userService = new UserService(logger1)


let user1 = new User(1,"Engin","Demiroğ","Ankara");
let user2 = new User(2,"Baran","Gökçekli","Muğla")
userService.add(user1)
userService.add(user2)

console.log(userService.list())

console.log(userService.getById(1))
userService.list()


let customer = {id:1, firstName:"Engin"}
//Prototyping
customer.lastName = "Demiroğ"


