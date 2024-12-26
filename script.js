const hex = document.getElementById("hex");
const genrateRandom = () => {
    const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 15)];
    }
    return color;
}
const changeColor = () => {
    color = genrateRandom();
    document.body.style.backgroundColor = color;
    hex.innerText = `Hexcode=${color}`;
}
