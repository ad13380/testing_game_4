import Player from "./player.js";
import Input from './input.js';

let userInput = document.getElementById("userinput")
let canvas = document.getElementById("gameArea");
let ctx = canvas.getContext("2d");
let btnPlay = document.getElementById("play")

const GRID_SIZE = 30;

// define game area size
const GAME_HEIGHT = 9 * GRID_SIZE;
const GAME_WIDTH = 16 * GRID_SIZE;

// modify canvas size
canvas.height = GAME_HEIGHT;
canvas.width = GAME_WIDTH;

let map = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
          1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
          1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,
          1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
          1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,
          1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,
          1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,
          1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

let drawMap = function() {
  for (let index = 0; index < map.length; index ++) {
    ctx.fillStyle = (map[index] == 1) ? "#B7DFE1" : "#CCF2F4";
    ctx.fillRect((index % 16) * GRID_SIZE, Math.floor(index/16) * GRID_SIZE, GRID_SIZE, GRID_SIZE);
  }
};





let player = new Player(GAME_HEIGHT, GAME_WIDTH);
// let input = new Input();

let lastTime = 0;
function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  drawMap()
  player.update(deltaTime);
  player.draw(ctx);

  requestAnimationFrame(gameLoop);
}
gameLoop();


btnPlay.addEventListener("click", function(){
  let test = userInput.value.split("\n")
  player.start(test)
});
