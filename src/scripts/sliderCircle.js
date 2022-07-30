let goal = 0;
const el = document.getElementById('goal-range');
el.addEventListener("change", () => {
    const elNum = document.querySelector('.number');
    const val = document.getElementById("goal-range").value;
    goal = 4.05 * val;
    elNum.innerHTML = val + "%";
    document.getElementById("goal-circle").setAttribute("stroke-dashoffset", -goal);
})
