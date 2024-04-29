function doAddition(x){
    return function(y){
        return x+y;
    }
}

// console.log(doAddition(5)(3));

const {x, x: y} = {x : 100}

// console.log(`x= ${x}`);
// console.log(`y= ${y}`);

const z = (3,2,"Helloo")

console.log(typeof z, z);
