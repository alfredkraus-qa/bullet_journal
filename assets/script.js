const penTool = document.getElementById('pen');
const eraserTool = document.getElementById('eraser');
const highlightTool = document.getElementById('highlight');
const textTool = document.getElementById('text');

const canvasLeft = document.getElementById('canvas-left');
const canvasRight = document.getElementById('canvas-right');
const ctxLeft = canvasLeft.getContext('2d');
const ctxRight = canvasRight.getContext('2d');

let currentTool = 'mouse'; // ferramenta inicial
let drawing = false;
let highlightColor = 'green';

const toolButtons = [penTool, eraserTool, highlightTool, textTool];