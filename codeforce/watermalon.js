function watermalon(w){
    if(typeof w !== 'number' || w <0 || !Number.isInteger(w)){
        return "NO"
    }
    if(w%2==0 && w > 2){
        return "YES"
    }else{
        return "NO"
    }
}

console.log(watermalon(8));