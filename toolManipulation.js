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
        tool.lineWidth = pencilSize;
    }
})
eraser.addEventListener("click", function(e) {
    if (currTool == "eraser") {
        //second click
        //options show
        options[1].style.display = "flex";
    } else {
        //first click
        // eraser.style.border = "1px solid red";
        currTool = "eraser";
        tool.strokeStyle = "white";
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        tool.lineWidth = eraserSize;
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
        tool.lineWidth = rectSize;
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
        tool.lineWidth = lineSize;
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
let pencilSize = 5;
let eraserSize = 5;
let rectSize = 5;
let lineSize = 5;
let sizeBoxArr = document.querySelectorAll(".box-size");
sizeBoxArr[0].addEventListener("click", function(e) {
    let elements = ["size1", "size2", "size3", "size4"];
    let allTheClasses = e.target.classList;
    let firstClass = allTheClasses[0];
    let test = elements.includes(firstClass);
    if (test) {
        // console.log(firstClass);
        if (firstClass == "size1") {
            pencilSize = 5;

        } else if (firstClass == "size2") {
            pencilSize = 10;

        } else if (firstClass == "size3") {
            pencilSize = 15;
        } else if (firstClass == "size4") {
            pencilSize = 20;
        }
    }
    tool.lineWidth = pencilSize;
})
sizeBoxArr[1].addEventListener("click", function(e) {
    let elements = ["size1", "size2", "size3", "size4"];
    let alltheClasses = e.target.classList;
    let firstClass = alltheClasses[0];
    let test = elements.includes(firstClass);
    if (test) {
        // console.log(firstClass);
        if (firstClass == "size1") {
            eraserSize = 5;

        } else if (firstClass == "size2") {
            eraserSize = 10;

        } else if (firstClass == "size3") {
            eraserSize = 15;
        } else if (firstClass == "size4") {
            eraserSize = 20;
        }
    }
    tool.lineWidth = eraserSize;
})
sizeBoxArr[2].addEventListener("click", function(e) {
    let elements = ["size1", "size2", "size3", "size4"];
    let alltheClasses = e.target.classList;
    let firstClass = alltheClasses[0];
    let test = elements.includes(firstClass);
    if (test) {
        // console.log(firstClass);
        if (firstClass == "size1") {
            rectSize = 5;

        } else if (firstClass == "size2") {
            rectSize = 10;

        } else if (firstClass == "size3") {
            rectSize = 15;
        } else if (firstClass == "size4") {
            rectSize = 20;
        }
    }
    tool.lineWidth = rectSize;
})
sizeBoxArr[3].addEventListener("click", function(e) {
    let elements = ["size1", "size2", "size3", "size4"];
    let alltheClasses = e.target.classList;
    let firstClass = alltheClasses[0];
    let test = elements.includes(firstClass);
    if (test) {
        // console.log(firstClass);
        if (firstClass == "size1") {
            lineSize = 5;

        } else if (firstClass == "size2") {
            lineSize = 10;

        } else if (firstClass == "size3") {
            lineSize = 15;
        } else if (firstClass == "size4") {
            lineSize = 20;
        }
    }
    tool.lineWidth = lineSize;
})