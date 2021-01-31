// Map Generate
let count = 1;
let boardHeight = 10;
let boardWidth = 10;
let mapDict = {
    0 : "blank",
    1 : "wall",
    2 : "sushi",
    3 : "onigiri",
};

// let map1 = [
//     [1,1,1,1,1,1,1,1,1,1],
//     [1,0,0,0,3,0,1,0,0,1],
//     [1,0,1,0,1,0,1,0,1,1],
//     [1,0,1,0,1,0,1,0,1,1],
//     [1,0,1,0,1,0,1,0,1,1],
//     [1,2,1,3,1,0,1,0,1,1],
//     [1,2,1,0,1,0,1,0,1,1],
//     [1,0,1,0,1,0,1,0,1,1],
//     [1,0,0,0,1,0,0,0,1,1],
//     [1,1,1,1,1,1,1,1,1,1],
// ];

let map1 = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,1,1,1,1,1,1,0,1],
];

while (count <= boardHeight - 3){
    let newRow = [];
    newRow.push(1);
    for (let i = 1; i < boardWidth - 1; i++){
        newRow.push(Math.floor(Math.random()* 4));
    };
    newRow.push(1);
    map1.push(newRow)
    count++;
};

map1.push([1,1,1,1,1,1,1,1,1,1]);

let drawMap = () => {
    let output = "";
    for (let i = 0; i < map1.length; i++){
        output += "<div class = 'row'>";
        for (let j = 0; j < map1[i].length; j++){
            output += `<div class = ${mapDict[map1[i][j]]}></div>`;
        };
        output += "</div>";
    };
    document.getElementById("map").innerHTML = output;
}

// Ninja Controls
let ninja = {
    x : 1,
    y : 1,
};
let facing = "rotate(0deg)";
let score = 0;

let drawNinja = () => {
    document.getElementById("ninja").style.top = `${ninja.y * 40}px`;
    document.getElementById("ninja").style.left =  `${ninja.x * 40}px`;
    document.getElementById("ninja").style.transform = facing;
};

let updateScore = () => {
    document.getElementById("score").innerHTML = `Points : ${score}`;
};

document.onkeydown = (e) => {
    switch (e.code){
        case "ArrowLeft":
            console.log("Left");
            facing = "scaleX(-1)";
            if (map1[ninja.y][ninja.x - 1] != 1){
                ninja.x--;
            };
            if (map1[ninja.y][ninja.x] == 2){
                score++;
            };
            if (map1[ninja.y][ninja.x] == 3){
                score+= 5;
            };
            break;
        case "ArrowRight":
            console.log("Right");
            facing = "rotate(0deg)";
            if (map1[ninja.y][ninja.x + 1] != 1){
                ninja.x++;
            };
            if (map1[ninja.y][ninja.x] == 2){
                score++;
            };
            if (map1[ninja.y][ninja.x] == 3){
                score+= 5;
            };
            break;
        case "ArrowDown":
            console.log("Down");
            facing = "rotate(90deg)";
            if (map1[ninja.y + 1][ninja.x] != 1){
                ninja.y++;
            };
            if (map1[ninja.y][ninja.x] == 2){
                score++;
            };
            if (map1[ninja.y][ninja.x] == 3){
                score+= 5;
            };
            break;
        case "ArrowUp":
            console.log("Up");
            facing = "rotate(270deg)";
            if (map1[ninja.y - 1][ninja.x] != 1){
                ninja.y--;
            };
            if (map1[ninja.y][ninja.x] == 2){
                score++;
            };
            if (map1[ninja.y][ninja.x] == 3){
                score+=5;
            };
            break; 
    };
    map1[ninja.y][ninja.x] = 0;
    drawNinja();
    updateScore();
    drawMap();
}

// Ghost Controls In Testing
// let ghost = {
//     x : 1,
//     y : 1,
// };
// let test = () => {
//     let moves = ["ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp"];
//     let move = moves[Math.floor(Math.random()*4)];
//     switch (move){
//         case "ArrowLeft":
//             console.log("Left");
//             facing = "scaleX(-1)";
//             if (map1[ninja.y][ninja.x - 1] != 1){
//                 ninja.x--;
//             };
//             if (map1[ninja.y][ninja.x] == 2){
//                 score++;
//             };
//             if (map1[ninja.y][ninja.x] == 3){
//                 score+= 5;
//             };
//             break;
//         case "ArrowRight":
//             console.log("Right");
//             facing = "rotate(0deg)";
//             if (map1[ninja.y][ninja.x + 1] != 1){
//                 ninja.x++;
//             };
//             if (map1[ninja.y][ninja.x] == 2){
//                 score++;
//             };
//             if (map1[ninja.y][ninja.x] == 3){
//                 score+= 5;
//             };
//             break;
//         case "ArrowDown":
//             console.log("Down");
//             facing = "rotate(90deg)";
//             if (map1[ninja.y + 1][ninja.x] != 1){
//                 ninja.y++;
//             };
//             if (map1[ninja.y][ninja.x] == 2){
//                 score++;
//             };
//             if (map1[ninja.y][ninja.x] == 3){
//                 score+= 5;
//             };
//             break;
//         case "ArrowUp":
//             console.log("Up");
//             facing = "rotate(270deg)";
//             if (map1[ninja.y - 1][ninja.x] != 1){
//                 ninja.y--;
//             };
//             if (map1[ninja.y][ninja.x] == 2){
//                 score++;
//             };
//             if (map1[ninja.y][ninja.x] == 3){
//                 score+=5;
//             };
//             break; 
//     };
//     map1[ninja.y][ninja.x] = 0;
//     drawNinja();
//     updateScore();
//     drawMap();
// }

// setInterval(test, 100);

drawMap();
drawNinja();