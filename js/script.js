let color = ["#E81D62", "#9B26AF", "#6639B6", "#009587", "#CCDB38", "#FEC006", "#FE5621"];
let i = 0;
document.querySelector("button").addEventListener("click", function () {
    i = i < color.length ? ++i : 0;
    document.querySelector("body").style.background = color[i];
});