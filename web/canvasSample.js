 onload = function () { 
        draw(); 
}; 
    function draw() { 
        var canvas = document.getElementById("canvassample"); 
        if (!canvas || !canvas.getContext) { 
            return false ;
        } 
        var ctx = canvas.getContext("2d"); 
        ctx.fillRect(10, 10, 200, 200) ;
    } 