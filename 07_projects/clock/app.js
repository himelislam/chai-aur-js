const banner = document.querySelector('#banner')
const clock = document.querySelector('#clock')

const date = new Date().toLocaleDateString();
const currentTime = new Date()
const currentHour = currentTime.getHours();
const currentMinutes = currentTime.getMinutes();
const currentSeconds = currentTime.getSeconds();

banner.innerHTML = `<h1>${date}</h1>`
clock.innerHTML = `<h1>${currentHour > 12 ? currentHour - 12 : currentHour } : ${currentMinutes} : ${currentSeconds}</h1>`

// shortcut is date.toLocalTimeString();