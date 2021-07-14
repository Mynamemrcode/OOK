canvas = document.getElementById('notmyCanvas');
    ctx = canvas.getContext("2d");
    var mouseEvent = "";
    canvas.addEventListener("mousedown", my_mousedown);

    function my_mousedown(e)
    {
        color = document.getElementById("color").value;
    widthofline = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
        mouseEvent = "mousedown";

        
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
        currentposofmousex = e.clientX - canvas.offsetLeft;
        currentposofmousey = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mousedown") {
        console.log( currentposofmousex + currentposofmousey);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthofline;
        ctx.arc(currentposofmousex, currentposofmousey, radius,0 , 2 * Math.PI);
        ctx.stroke();
        }

    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseup";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }
