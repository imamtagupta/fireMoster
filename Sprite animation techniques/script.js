const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600

// standard class to create img tag
const playerImage = new Image();
playerImage.src = 'shadow_dog.png'
spriteWidth = 575;
spriteHeight = 523
let gameFrame = 0
let staggeredFrame = 5
dropdown = document.getElementById('ChoseState');
let playerState = 'run'
dropdown.addEventListener('change', () => {
    playerState =  dropdown.value
})
console.log(playerState);
const spriteAnimation = []

const animationState = [
    {
        name:'idle',
        frames:7
    },
    {
        name:'jump',
        frames:7
    },
    {
        name:'fall',
        frames:7
    },
    {
        name:'run',
        frames:7
    },
    {
        name:'dizzy',
        frames:11
    },
    {
        name:'sit',
        frames:5
    },
    {
        name:'roll',
        frames:7
    },
    {
        name:'bite',
        frames:7
    },
    {
        name:'ko',
        frames:7
    },
    {
        name:'getHit',
        frames:4 
    },
]

animationState.forEach((state, index) => {
    let frames = {
        loc : [],
    }

    for(let j=0; j< state.frames; j++){
        let positionX = j * spriteWidth
        let positionY = index * spriteHeight
        frames.loc.push({x: positionX, y: positionY})
    }
    spriteAnimation[state.name] = frames
})

console.log(spriteAnimation);

const animate = () => {
    
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.fillRect(50, 50, 100, 100);
    // drawImage takes 1,3,5 argument based on the controls of image
    // ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
    position = Math.floor(gameFrame/ staggeredFrame) % spriteAnimation[playerState].loc.length
    let frameX = position * spriteWidth
    let frameY = spriteAnimation[playerState].loc[position].y
    ctx.drawImage(playerImage, frameX , frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();