/*
CANVAS API -> a means for drawing graphics.It is used for
animation, games, data visualization
*/

let canvas = document.getElementById("myCanvas")
let context = canvas.getContext('2d')

//DRAWING TEXT
context.font = "50px MV Boli"
context.fillStyle = "aqua"
context.textAlign = "center"
context.fillText("You Win",canvas.width / 2, canvas.height / 2)

/*DRAWING A TRIANGLE
context.strokeStyle = "purple"
context.fillStyle = "aqua"
context.lineWidth = 10
context.beginPath()
context.moveTo(300, 0)
context.lineTo(0,300)
context.lineTo(600, 300)
context.lineTo(300,0)
context.stroke()
context.fill()
*/

/*
DRAWING LINES IN CANVAS

context.strokeStyle = "purple"
context.lineWidth = 10
context.beginPath()
context.moveTo(0, 0)
context.lineTo(300, 300)
context.lineTo(300, 600)
context.moveTo(600, 0)
context.lineTo(300, 300)
context.lineTo(300, 600)
context.stroke()
*/