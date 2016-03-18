'use strict'
class producer {
    constructor(name,introduce){
        this.name = name;
        this.introduce = introduce;
    }
    Greeting (){
        console.log(`名字： ${this.name}        簡介： ${this.introduce}`);
    }
}

var fortymP = new producer('40mP','風格嘗試多變，但多為清新搖滾風格，輕快的節奏與旋律值得一聽再聽');
fortymP.Greeting();

var doriko = new producer('doriko','擅用鋼琴詮釋，多為抒情慢歌，觸動人心中最容易感動的部分');
doriko.Greeting();