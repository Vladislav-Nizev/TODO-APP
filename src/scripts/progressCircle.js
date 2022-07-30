let counter = 0;
let num = 410;
setInterval(() => {
    const el = document.getElementById("seconds-circle");
    const elNum = document.querySelector('.timer')
    if(counter !== 60) {
        num -= 6.833;
        counter++;
        elNum.innerHTML = counter + " С";
        el.setAttribute("stroke-dashoffset", num);
    } else {
        counter = 0;
        num = 410;
    }
}, 1000);
