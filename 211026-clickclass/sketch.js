const container = document.getElementById('p5-container')
// make sure there is a #p5-container in index.html.

// Canvas Vars
let canvas
let canW = container.offsetWidth //canvas Width
let canH = container.offsetHeight //canvas Height
let canMax = Math.max(canW, canH) //longer canvas side
let canMin = Math.min(canW, canH) //shorter canvas side


let nodes = []


function createNode() {
    nodes.push( new Node( mouseX, mouseY ) )
    console.log(nodes[nodes.length-1])
}

// p5 Setup
function setup() {
    //initial setup of canvas and container
    canvas = createCanvas(canW,canH)
    canvas.parent(container)

    //actual code starts here
    canvas.mouseClicked(createNode)
}

// p5 Draw
function draw() {
    background(255)
    for (let n = 0; n < nodes.length; n++) {
        let node = nodes[n]
        node.drawNode()
        node.drawNet(nodes)
    }
    // console.log(nodes)
}