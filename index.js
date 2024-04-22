const goButton = document.getElementById("go")
const dayMs = 1000*60*60*24
function getDate(){
    let years, months, days, hours, minutes, seconds
    let y1,y2,mn1,mn2,d1,d2,h1,h2,mu1,mu2,s1,s2
    const dateNow = new Date()
    const pickedDate = document.getElementById("input-date").value
    const birthday = new Date(pickedDate)
    y1 = birthday.getFullYear()
    mn1 = birthday. getMonth()
    d1 = birthday.getDay()
    h1 = birthday.getHours()
    mu1 = birthday.getMinutes()
    s1 = birthday.getSeconds()
    y2 = birthday.getFullYear()
    mn2 = birthday. getMonth()
    d2 = birthday.getDay()
    h2 = birthday.getHours()
    mu2 = birthday.getMinutes()
    s2 = birthday.getSeconds()
    console.log(mn1)
    years = y2 -y1
    if (mn2>mn1){
months = mn2-mn1
    }else{
        months = (12-mn1) + mn2+1
        years--
    }
}
console.log(`your are ${years} and ${months}`)
goButton.addEventListener("click",getDate)