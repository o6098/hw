var miku = {
    firstname:"Miku",
    lastname:"Hatsune",
    age:16,
    job:"idol",
    cute:true,
    songs:[{
        songname:"Blus Star"
    },{
        songname:"Romeo and Cinderella"
    }]
}
var personjson = JSON.stringify(miku);
console.log(miku);
console.log(personjson);