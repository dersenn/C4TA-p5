const container = document.getElementById('p5-container')
// make sure there is a #p5-container in index.html.

// Canvas Vars
let canvas
let canW = container.offsetWidth //canvas Width
let canH = container.offsetHeight //canvas Height
let canMax = Math.max(canW, canH) //longer canvas side
let canMin = Math.min(canW, canH) //shorter canvas side

let poly


// The Nodes Array
let nodes = []

function createNode() {
    nodes.push( new Node( mouseX, mouseY ) )
    // console.log(nodes[nodes.length-1])
}

// p5 Setup
function setup() {
    // initial setup of canvas and container
    canvas = createCanvas(canW,canH)
    canvas.parent(container)

    for (let i = 0; i < random(3,36); i++) {
        nodes.push( new Node( random() * width, random() * height ) )
    }

    poly = new Structure( nodes )

    // add nodes on click
    canvas.mouseClicked(createNode)
}

// p5 Draw
function draw() {
    background(0)
    // for (let n = 0; n < nodes.length; n++) {
    //     let node = nodes[n]
    //     node.drawNode(n, nodes)
    // }
    poly.drawStructure()
}