const square = (x) => {
  const result = x*x;
  return result;
}

const user = {
  name: 'Isaac',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  }
}

user.sayHi(1,2,3);
