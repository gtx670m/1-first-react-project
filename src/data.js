import React from 'react';

const product = [
    {
        name: 'iPhone 7 Plus',
        price: '10500000',
        status: undefined,
        image: 'https://cdn.tgdd.vn/Products/Images/42/78124/apple-iphone-7-plus-1-400x460-400x460.png'
    }, {
        name: 'iPhone 8 Plus',
        price: '12800000',
        status: null,
        image: 'https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-64gb-h1-400x460.png'
    },
];

class Person {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
}

const checkAge = (age) => {
    return age > 18 ? 'Is over 18' : 'Is under 18';
}

const showPerson = (show, users) => {
    return (
        show ? (
            users.map((user, index) => {
                return (
                    <h3 key={index}>{user.name} {checkAge(user.age)}</h3>
                )
            })
        ) : ''
    )
}
const onClick = () => {
    alert('Ok!');
}

const display = true;
const a = 'Quang';
const c = 1;
const d = 2;
const str = `I'm ${a}`;

const Teo = new Person('Teo', 25);
const Ti = new Person('Ti', 20);
const Tun = new Person('Tun', 17);
const users = [Teo, Ti, Tun];

export { product, showPerson, onClick, display, c, d, str, users };