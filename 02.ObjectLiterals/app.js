// Your Javascript Code Goes Here
var cellphone = {
    Brand: 'HUAWEI',
    Size: 5,
    Game:
    {
        FGO: 114,
        PAD: 251
    }
};

var person = {
    Firstname: 'Idiot',
    Lastname: 'BAKA',
    Greet: function () {
        console.log(`hello, ${this.Firstname} ${this.Lastname}`);
    }
};
person.Greet();

console.log(person['Firstname']);
console.log(cellphone.Game['FGO']);