let canvasBoard = document.querySelector("canvas");
let body = document.querySelector("body");
let tool = canvasBoard.getContext("2d");
let currTool = "pencil";
canvasBoard.height = window.innerHeight;
canvasBoard.width = window.innerWidth;
tool.strokeStyle = "red";