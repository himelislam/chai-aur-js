const banner = document.querySelector('#banner')
const clock = document.querySelector('#clock')

// shortcut is date.toLocaleTimeString();

setInterval(function(){
    const date = new Date().toLocaleDateString();
    const currentTime = new Date()

    // first approach
    
    banner.innerHTML = `<h1>${date}</h1>`
    clock.innerHTML = currentTime.toLocaleTimeString()

    // second approach

    const currentHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentSeconds = currentTime.getSeconds();

    // if(currentHour===0){
    //     clock.innerHTML = `<h1>${12} : ${currentMinutes} : ${currentSeconds}</h1>`
    // }else{
    //     clock.innerHTML = `<h1>${currentHour <= 12 ? currentHour : currentHour - 12 } : ${currentMinutes} : ${currentSeconds}</h1>`
    // }


    // third approach but not feasible enough

    const time = currentTime.toLocaleTimeString()
    const timetwo = document.createTextNode(time)
    // console.log(typeof(time))
    // console.log(timetwo , 'timetwo');
    // clock.replaceWith(timetwo)

}, 1000)