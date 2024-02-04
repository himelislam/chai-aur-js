// For loop

for (let i = 0; i <= 10; i++) {
    // console.log(`num : ${i}`);    
}

for(let i = 1; i <= 10; i++){
    // console.log(`Outer loop value: ${i}`)

    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and outer loop value ${i}`);
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

const heros = ["Flash", "Batman", "Superman", "Ironman"]

for (let i = 0; i < heros.length; i++) {
    const hero = heros[i];
    // console.log(hero);
}

for (let i = 1; i <= 20; i++) {
    if(i === 5){
        // console.log("detected: 5");
        break
    }
    // console.log("value:" , i);
}


for (let i = 1; i <= 20; i++) {
    if(i === 5){
        console.log("detected: 5");
        continue // just for that index only and other indexes will be run as it is
    }
    console.log("value:" , i);
}


