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
function draw() {
  time++

  console.log('time', time)

  drawBlock({x:0, y:0}, color.blue, leftTopBlock, time)
  // drawBlock({x:0, y:0}, color.blue, centerTopBlock, time)
  // drawBlock({x:0, y:0}, color.blue, rightTopBlock, time)

  // drawBlock({x:0, y:0}, color.blue, leftCenterBlock, time)
  // drawBlock({x:0, y:0}, color.blue, centerCenterBlock, time)
  // drawBlock({x:0, y:0}, color.blue, rightCenterBlock, time)

  // drawBlock({x:0, y:0}, color.blue, leftBottomBlock, time)
  // drawBlock({x:0, y:0}, color.blue, centerBottomBlock, time)
  // drawBlock({x:0, y:0}, color.blue, rightBottomBlock, time)

  // 遞歸呼叫
  // requestAnimationFrame(draw)
}

// 第一次繪製
requestAnimationFrame(draw)


// ----------------------------------------------------------------

function leftTopBlock() {
  ctx.beginPath()
  ctx.arc(0, 0, 30, 0, PI2)
  ctx.strokeStyle = "white"
  ctx.lineWidth = 15
  ctx.stroke()
}

function centerTopBlock() {
  
}

function rightTopBlock() {
  
}

function leftCenterBlock() {
  
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
