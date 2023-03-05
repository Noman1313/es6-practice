const person = { name: "Noman", age: 22, job: "learing web development", gfName: "Jim", address: "ECB Cottor", phone: "01533875159", friends: ["limon", "Ashik", "Tareq", "Zahid"]}

// const gfName = person.gfName;
// const {phone, gfName, age} = person;
// const friends = person.friends;

// console.log(gfName, age, phone);
// console.log(gfName, age, phone);
// console.log(gfName, age, phone);
// console.log(gfName, age, phone);
// console.log(gfName, age, phone);

const {phone} = person;
console.log(phone);

const complexObjects = {
    name: "alex",
    info: {
        address : "kola bagan",
        leader : "Tiger leader"
    }
}
const {leader} = complexObjects.info;
console.log(leader);

// const friends = ['ashik', 'limon','tanvir', 'tareq', 'zahid', 'chisty', 'noyon']
// const [friend, friend2, ...allFriend] = friends;
// console.log(allFriend);