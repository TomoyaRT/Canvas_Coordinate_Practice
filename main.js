// Canvas
const canvas = document.getElementById('canvas_coordinate')
const ctx = canvas.getContext('2d')

// 常用變數
const blockWidth = 200
const PI = Math.PI
const PI2 = Math.PI * 2

// 畫布尺寸
canvas.width = blockWidth * 3
canvas.height = blockWidth * 3

// 色票
const color = {
  red: "#F74456",
  white: "#FFF",
  yellow: "#F1DA56",
  blue: "#036FAF",
}


/**
 * 每次開始繪製前，先定義要繪製的起始點與範圍。
 *
 * @param {Object} pos 畫布的起始點
 * @param {String} bgColor 矩形的背景色
 * @param {Function} draw 矩形範圍內的畫布繪製
 * @param {Number} time 動畫時間
 */
function drawBlock(pos, bgColor, draw, time) {
  // 儲存當前的畫布狀態
  ctx.save()

  // 移動畫布在網格上的起點
  ctx.translate(pos.x * blockWidth, pos.y * blockWidth)
  // 設定填色的色彩
  ctx.fillStyle = bgColor
  // 繪製一個實心的矩形 (作為這次的繪製範圍)
  ctx.fillRect(0, 0, blockWidth, blockWidth)
  // 移動畫布在網格上的起點，這次從繪製的矩形起點開始移動。(讓每一次繪製都從矩形的中心點開始)
  ctx.translate(blockWidth / 2, blockWidth / 2)
  // 開始繪製
  draw()

  // 還原最近一次儲存的畫布狀態
  ctx.restore()
}


// 動畫用的變數
let time = 0;
let stime = 0;
function draw() {
  time++
  stime = parseInt(time / 60)

  drawBlock({x:0, y:0}, color.blue, leftTopBlock, time)
  drawBlock({x:1, y:0}, color.red, centerTopBlock, time)
  drawBlock({x:2, y:0}, color.yellow, rightTopBlock, time)

  drawBlock({x:0, y:1}, color.yellow, leftCenterBlock, time)
  drawBlock({x:1, y:1}, color.white, centerCenterBlock, time)
  drawBlock({x:2, y:1}, color.blue, rightCenterBlock, time)

  drawBlock({x:0, y:2}, color.red, leftBottomBlock, time)
  drawBlock({x:1, y:2}, color.blue, centerBottomBlock, time)
  drawBlock({x:2, y:2}, color.yellow, rightBottomBlock, time)

  // 遞歸呼叫
  requestAnimationFrame(draw)
}

// 第一次繪製
requestAnimationFrame(draw)


// ----------------------------------------------------------------

function leftTopBlock() {
  ctx.beginPath()
  ctx.arc(0, 0, 30 / (stime % 3 + 1), 0, PI2)
  ctx.strokeStyle = "white"
  ctx.lineWidth = 15
  ctx.stroke()

  for(let i = 0; i < 8; i++) {
    ctx.fillStyle = (stime % 8 === i) ? color.red : color.white
    if ((i + stime) % 4 !== 0) {
      ctx.fillRect(60, -4, 20, 8)
    }
    ctx.rotate(PI2/8)
  }

}

function centerTopBlock() {
  ctx.save()
  ctx.scale(0.8,0.8)
  ctx.translate(-60, -60)
  for (let i = 0; i < 3; i++) {
    ctx.save()
    for (let o = 0; o < 3; o++) {
      ctx.beginPath()
      ctx.arc(0,0,20,0,PI2)
      ctx.fillStyle = ((i+o*2+stime)%5 === 0) ? color.yellow : color.white
      ctx.fill()
      ctx.translate(0,60)
    }
    ctx.restore()
    ctx.translate(60,0)
  }
  ctx.restore()
}

function rightTopBlock() {
  for (let i = 0; i < 4; i++) {
    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.lineTo(80,20)
    ctx.lineTo(80,80)
    ctx.closePath()
    ctx.fillStyle = color.white
    ctx.fill()
    if (stime % 4 == i) {
      ctx.beginPath()
      ctx.arc(60,40,6,0,PI2)
      ctx.fillStyle = color.red
      ctx.fill()
    }
    ctx.rotate(PI/2)
  }
}

function leftCenterBlock() {
  // 白色矩形
  ctx.translate(-60,-60)
  ctx.fillStyle = color.white
  ctx.fillRect(0,0,60,60)

  // 紅色英文字 D
  ctx.translate(30,30)
  ctx.rotate(-PI/4)
  ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.lineTo(40,0)
    ctx.arc(40,40,40,-PI,PI/2)
    ctx.lineTo(0,80)
  ctx.closePath()
  ctx.fillStyle = color.red
  ctx.fill()

  // 藍色矩形
  const blueRectAnimation = () => 10*Math.sin(time/25)
  ctx.translate(-100 + blueRectAnimation(), 60)
  ctx.fillStyle = color.blue
  ctx.fillRect(0,0,100,40)

  // 白色矩形
  const whiteRectAnimation = () => 10*Math.cos(time/20)
  ctx.translate(100 + whiteRectAnimation(),40)
  ctx.fillStyle = color.white
  ctx.fillRect(0,0,50,20)
}

function centerCenterBlock() {

}

function rightCenterBlock() {

}

function leftBottomBlock() {

}

function centerBottomBlock() {

}

function rightBottomBlock() {

}
