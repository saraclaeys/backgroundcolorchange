let color = ["#84134A", "#FFDD02", "#141518", "#07FB70", "#041E3F", "#F133BE"];
let i = 0;
document.querySelector("button").addEventListener("click", function () {
    i = i < color.length ? ++i : 0;
    document.querySelector("body").style.background = color[i];
})