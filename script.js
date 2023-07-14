class cat{
constructor(name, amount, time){
this.name=name;
this.amount=amount;
this.time=time;
this.play='strach'
this.sound='Meow~~~~'
}
playing(){
    console.log(this.strach);
}

makeSound(){
    console.log(this.sound);
}

catInfo(){
    console.log(`The cat ${this.name} is worth at least ${this.amount}`);
}
}

const myCat = new cat ('maineCoon', '1,500', 10)
const herCat= new cat ('PeterBald', '2,000', 12)




console.log(myCat);
console.log(herCat);
myCat.catInfo();
herCat.catInfo();





class pirate{
    constructor(name, age ,weakness){
        this.name=name;
        this.age=age;
        this.weakness=weakness;

    }
pirateDetails(){
    return `PIRATE INFO: name:${this.name} age:${this.age}`
}

}

const jack= new pirate ('Jack', 38, 'water');
const john =new pirate ('John', 28, 'Misquitos');
const jane= new pirate ('Jane', 30, 'salt Water')

// const blackPeral=[jack, john, jane];
const blackPeral=[];
blackPeral.push(jack,john,jane)
console.log(blackPeral);

for(const pirate of blackPeral){
    for(const[key, value] of Object.entries(pirate)){
        console.log(key, value);
    }

    // console.log(pirate.name);
    // console.log(pirate.age);
    // console.log(pirate.weakness);
}

