export default class Player {
  constructor(gameHeight, gameWidth) {
    // game area size
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    // object size
    this.height = 30;
    this.width = 30;
    // object position
    this.position = {
      x: 0,
      y: this.gameHeight - this.height,
    };
    //movement value
    this.moveIncrement = {
      x: 30,
      y: 30,
    };
    // object velocaity
    this.vel = {
      x: 0,
      y: 0
    }
    // speed
    this.speed = 10;
    // friction
    this.friction = 1 - (this.speed/this.moveIncrement.x)
    // move interval (ms)
    this.moveInterval = 1000
  }

  draw(ctx) {
    ctx.fillStyle = "#000000";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    if (!deltaTime) return;
    this.position.x +=  this.vel.x;
    this.vel.x *= this.friction;
  }

  async moveRight() {
    this.vel.x = this.speed;
    await this.wait(1000)
  }

  async moveLeft() {
    this.vel.x = -this.speed;
    await this.wait(1000)
  }

  wait(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }

  async start(mockData) {
    for (let i = 0; i < mockData.length; i++) {
      await this._stringToFunction(mockData[i]);
    }
  }

  async _stringToFunction(input) {
    switch (input) {
      case "player.moveRight()":
        await this.moveRight();
        break;
      case "player.moveLeft()":
        await this.moveLeft();
        break;
    }
  }
}
