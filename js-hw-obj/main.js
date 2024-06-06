/*

1)Метод обєкту це просто функція в обєкті і яка працює з його змінними



2)Він може мати такі типи данних :
String
Number
Boolean
Null
Undefined
Array
Date



3)Посилання на об'єкт:
Коли ви створюєте об'єкт і присвоюєте його змінній, ця змінна зберігає посилання на об'єкт у пам'яті.

Якщо написати obj1 = obj2 ми його не копіюємо а копіюємо його посилання.
*/







const product = {
    name: 'apple',
    price: "100$",
    discount: "50%", 

    

    calculation : function() {
        let priceValue = parseInt(this.price.slice(0, -1))
        let discountValue = parseInt(this.discount.slice(0, -1))

        let cost = priceValue / 100 * discountValue
        this.cost = cost

        return cost
    },

    
}


product.calculation()

console.log(product.cost)


console.log(product)





let a = prompt('Please enter your name')
let b = prompt('Please enter your age')


b = Number(b)

user = {
    name: a,
    age: b,

    greeting: function(name, age) {

        if (isNaN(this.age)) {
            alert('You entered wrong data(number)')
        } else if (typeof this.name !== 'string') {
            alert('You entered wrong data(string)')
        } else {
            let congratulation = `Hello ${user.name} you are ${user.age}! Congratulations`
            this.congratulation =  congratulation
            return congratulation
        }
    
    
    
    }
}

user.greeting();

console.log(user.congratulation);

console.log(user);









thirdObj = {
    name: 'Iliya',
    lastName: 'Kushnir',
    age: 16
}


JSON.stringify(thirdObj)

JSON.parse(thirdObj)