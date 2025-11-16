
type multiType = string | number | boolean
const formatValue = (value: multiType):multiType => {
    if (typeof value === "string") {
        return value.toUpperCase()
    }
    else if (typeof value === "number") {
        return value * 10
    }
    else {
        return !value
    }
}






const getLength = (value: string | number[]): number => {
    if (typeof value === 'string') {
        return value.length
    }
    else {
        return value.length
    }
}






class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name,
            this.age = age

    }

    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`
    }

}





type Items = {
    title: string;
    rating: number
}
function filterByRating(booksItems: Items[]): Items[] {
    return booksItems.
        filter(
            booksItem =>
                booksItem.rating >= 4
        )

}







type User = {
    id: number
    name: string;
    email: string;
    isActive: boolean
}
const filterActiveUsers = (users: User[]): User[] => {
    const activeUsers = users.filter((user) =>
        user.isActive
    )
    return activeUsers
}






interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean

}

const printBookDetails = (book: Book): string => {
    return `Title:${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable}`
}




type generic = Array<number | string>;
const getUniqueValues = (arr1: generic, arr2: generic): generic => {
    const newArray: generic = [];
    for (let item of arr2) {
        arr1[arr1.length] = item;
    }
    for (let item1 of arr1) {
        let flag = false;
        for (let item2 of newArray) {
            if (item1 === item2) {
                flag = true;
                break;
            }
        }
        if (!flag) {
            newArray[newArray.length] = item1;
        }
    }

    return newArray;
}



interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}
const calculateTotalPrice = (products: Product[]): number => {
    let totalPrice = 0;
    for (const product of products) {
        let productTotal = product.price * product.quantity;
        if (product.discount) {
            productTotal = productTotal * (1 - product.discount / 100);
        }
        totalPrice += productTotal;
    }
    return totalPrice;
}

