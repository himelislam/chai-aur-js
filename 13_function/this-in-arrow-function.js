const obj = {
    name: "Himel",
    nameFun: function(){
        console.log(this.name);
    }
}

const onj2 = {
    myMethod(){
        console.log(this);
    }
}

// onj2.myMethod()

// obj.nameFun();
// obj.name = "Islam";
// obj.nameFun()

function thisFun(f){
    console.log(this.queueMicrotask(f), "asd");
}

function callback(){
    return "hello"
}

// thisFun(callback);

function hello(){
    const n = "s"
    console.log(this.n);
}

hello()

const hm = () => {

}