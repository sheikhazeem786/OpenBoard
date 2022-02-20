// tool change logic
let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser ");
let rect = document.querySelector("#rect");
let line = document.querySelector("#line");
let options = document.querySelectorAll(".box-size");
pencil.addEventListener("click", function(e) {
    if (currTool == "pencil") {
        //second click
        //options show
        options[0].style.display = "flex";
    } else {
        //first click
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        // pencil.style.border = "1px solid red";
        currTool = "pencil";
        tool.strokeStyle = "red";
    }
})
eraser.addEventListener("click", function(e) {
    if (currTool == "eraser") {
        //second click
        //options show
        options[1].style.display = "flex";
    } else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        //first click
        // eraser.style.border = "1px solid red";
        currTool = "eraser";
        tool.strokeStyle = "white";
    }
})
rect.addEventListener("click", function(e) {
    if (currTool == "rect") {
        //second click
        //options show
        options[2].style.display = "flex";
    } else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        //first click
        // rect.style.border = "1px solid red";
        currTool = "rect";
        tool.strokeStyle = "red";
    }
})
line.addEventListener("click", function(e) {
    if (currTool == "line") {
        //second click
        //options show
        options[3].style.display = "flex";
    } else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        // line.style.border = "1px solid red";
        //first click
        currTool = "line";
        tool.strokeStyle = "red";
    }
})


// Color change logic
let redColor = document.querySelector(".red");
let greenColor = document.querySelector(".green");
let blueColor = document.querySelector(".blue");

redColor.addEventListener("click",
    function() {
        tool.strokeStyle = "lightpink";
    })
greenColor.addEventListener("click",
    function() {
        tool.strokeStyle = "lightgreen";
    })
blueColor.addEventListener("click",
    function() {
        tool.strokeStyle = "lightblue";
    })

//Size change logic