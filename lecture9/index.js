//Classes
class Human{
    //properties
    age =13; //Public
    #wt=50; //private
    ht=180;


    //behaviour

    walking(){
        console.log("I am   Walking",this.#wt); //this means current object ko bata raha hai
    }

    running(){
        console.log("I am Running")
    }
    //getter --> use for fetch
    get fetchWeight(){
        return this.#wt;
    }
    //setter --> use for modify
    set modifyWeight(val){
        this.#wt=val;

    }
}
let obj = new Human();
console.log(obj.age);
obj.walking();