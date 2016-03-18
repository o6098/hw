function CB(A) {
    console.log('你好');
    var data = {
        name: '初音ミク'
    };
    
    A(data);
}

CB(data => {
    console.log('The callback was invoked!');
    console.log(data);
});

CB(data =>{
    console.log('Another callback was invoked!');
    console.log(data.name);
})