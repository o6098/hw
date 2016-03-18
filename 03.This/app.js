// Your Javascript Code Goes Here
'use strict';
var person = {
    Firstname: 'Jack',
    Lastname: 'the Ripper',
    Greet0: function () {
        console.log('obj-method-this = ');
        console.log(this);
    },
    Greet1: () => {
        console.log('obj-arrow-this = ');
        console.log(this);
    },
    Greet2: function () {
        (() => {
            console.log('obj-method-arrow-this = ');
            console.log(this);
        })();
    },
    Greet3: function () {
        (function () {
            console.log('obj-method-fn-this = ');
            console.log(this);
        })();
    },
    Greet4: function () {
        (function () {
            (() => {
                console.log('obj-method-fn-arrow-this = ');
                console.log(this);
            })();
        })();
    },
    Greet5:() => {
        (() => {
            console.log('obj-arrow-arrow-this');
            console.log(this);
        })();
    }
};
person.Greet0();
person.Greet1();
person.Greet2();
person.Greet3();
person.Greet4();
person.Greet5();

console.log(this);

(function () {
    console.log('fn-this = ');
    console.log(this);
})();
(() => {
    console.log('arrow-this = ');
    console.log(this);
})();

(function () {
    (function () {
        console.log('fn-fn-this = ');
        console.log(this);
    })();
})();

(function () {
    (() => {
        console.log('fn-arrow-this = ');
        console.log(this);
    })();
})();