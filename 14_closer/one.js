function doAddition(x){
    return function(y){
        return x+y;
    }
}

console.log(doAddition(5)(3));