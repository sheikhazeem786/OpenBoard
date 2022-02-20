let boardTop = canvasBoard.getBoundingClientRect().top;
let boardLeft = canvasBoard.getBoundingClientRect().left;
let iX, iY, fX, fY;
let drawingMode = false;

// pencil, eraser, rectangle, line

body.addEventListener("mousedown",

    function(e) {
        iX = e.clientX - boardLeft;
        iY = e.clientY - boardTop;
        if (currTool == "pencil" || currTool == "eraser") {
            drawingMode = true;
            tool.beginPath();
            tool.moveTo(iX, iY);
        }
    })
body.addEventListener("mouseup",
        function(e) {
            if (currTool == "pencil" || currTool == "eraser") {
                drawingMode = false;
            } else {
                // rect, line
                fX = e.clientX + boardLeft;
                fY = e.clientY - boardTop;
                let width = fX - iX;
                let height = fY - iY;
                if (currTool == "rect") {
                    tool.strokeRect(iX, iY, width, height);

                } else if (currTool == "line") {
                    tool.beginPath();
                    tool.moveTo(iX, iY);
                    tool.lineTo(fX, fY);
                    tool.stroke();
                }

            }
        })
    // pencil, eraser only
body.addEventListener("mousemove",
    function(e) {
        if (drawingMode == false) {
            return;
        }
        if (currTool == "pencil" || currTool == "eraser") {
            fX = e.clientX - boardLeft;
            fY = e.clientY - boardTop;

            tool.lineTo(fX, fY);
            tool.stroke();
            iX = fX;
            iY = fY;

        }
    })