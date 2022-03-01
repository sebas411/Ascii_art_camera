const density = '_x$PX@'

let video

const vpw = window.innerWidth - 20*2
const vph = window.innerHeight - 20*2

function setup() {
  const smallerDimension = min(vpw, vph)
  createCanvas(smallerDimension, smallerDimension)
  video = createCapture(VIDEO)
  video.size(48, 48)
}

function draw() {
  background(0)
  //image(video, 0, 0, width, height)
  const w = width / video.width
  const h = height / video.height
  textSize(h)
  textAlign(CENTER, CENTER)
  video.loadPixels()
  let count = 0
  let messageCount = 0
  const bright = 1
  
  
  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      let pixelIndex = (x + y * video.width) * 4
      const r = video.pixels[pixelIndex + 0]
      const g = video.pixels[pixelIndex + 1]
      const b = video.pixels[pixelIndex + 2]
      let character
      const intensity = (r + g + b) / 3
      const index = Math.floor(intensity * density.length/ 256)
      
      character = density.charAt(index)
      
      noStroke()
      fill(min(r * bright, 255), min(g * bright, 255), min(b * bright, 255))
      text(character, w*(x + 0.5), h*(y + 0.5))
      count++
    }
  }
}