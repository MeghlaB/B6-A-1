**1. Interface vs Type**

TypeScript-এ interface এবং type দুটোই কোনো object-এর structure বা data-এর structure নির্ধারণ করতে ব্যবহার হয়। তবে এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে।

Interface একাধিক বার একই নামে declare করা যায় এবং এগুলো merge হয়ে যায়।
Type কখনো merge হয় না, একই নাম আবার দিলে error হয়।

Type দিয়ে সহজেই union এবং intersection তৈরি করা যায়। Interface union করতে পারে না।

```ts
type ID = string | number;       
type User = Person & Address;   
```

Interface সহজে অন্য interface কে extend করতে পারে।
Type-এ extend নেই, তবে intersection (&) দিয়ে একই কাজ করা যায়।

```ts
interface A { name: string }
interface B extends A { age: number }
```

**2. Example of Intersection and Union Types**

//Union Type

```ts
let value: string | number;

value = "Hello";
console.log(value); 

value = 123;
console.log(value); 
```

এখানে আমরা value ভ্যারিয়েবলের ভিতরে number ও string—দুই ধরনের মানই রাখতে পারি Union Type ব্যবহার করে।

//Intersection Type

Intersection Type ব্যবহার করা হয় যখন একটি ভ্যারিয়েবল বা অবজেক্টকে একাধিক টাইপের সব বৈশিষ্ট্য একসাথে থাকতে হবে।
যেমন এখানে Person ও Employee এর সকল বৈশিষ্ট্য staffMember এর মধ্যে থাকতে হবে।
```ts
interface Person {
    name: string;
    age: number;
}

interface Employee {
    employeeId: number;
    department: string;
}

type Staff = Person & Employee;

const staffMember: Staff = {
    name: "Meghla",
    age: 22,
    employeeId: 101,
    department: "IT"
};

console.log(staffMember);
```