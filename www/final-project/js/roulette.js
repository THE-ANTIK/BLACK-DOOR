var options = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SES", "S", "SSW", "SW", "WSW", "W", "WWW", "NW", "NWW"];

var startAngle = 0;
var arc = Math.PI / (options.length / 2);
var spinTimeout = null;

var spinArcStart = 10;
var spinTime = 0;
var spinTimeTotal = 0;
var ctx;

document.getElementById("spin").addEventListener("click", spin);



function byte2Hex(n) {
    var nybHexString = "0123456789ABCDEF";
    return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
}

function RGB2Color(r,g,b) {
    return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
}

function getColor(item, maxitem) {
    var phase = 0;
    var center = 0;
    var width = 310;
    var frequency = Math.PI*2/maxitem;

    red   = Math.sin(frequency*item+2+phase) * width + center;
    green = Math.sin(frequency*item+phase) * width + center;
    blue  = Math.sin(frequency*item+4+phase) * width + center;

    return RGB2Color(red,green,blue);
}

function drawRouletteWheel() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var outsideRadius = 200;
        var textRadius = 160;
        var insideRadius = 1;

        ctx = canvas.getContext("2d");
        ctx.clearRect(0,0,500,500);

        ctx.strokeStyle = "black";
        ctx.lineWidth = 10;

        ctx.font = '16px Roboto Condensed, Arial';

        for(var i = 0; i < options.length; i++) {
            var angle = startAngle + i * arc;
            //ctx.fillStyle = colors[i];
            ctx.fillStyle = getColor(i, options.length);

            ctx.beginPath();
            ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
            ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
            ctx.stroke();
            ctx.fill();

            ctx.save();
            ctx.fillStyle = "black";
            ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius,
                250 + Math.sin(angle + arc / 2) * textRadius);
            ctx.rotate(angle + arc / 2 + Math.PI / 2);
            var text = options[i];
            ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
            ctx.restore();
        }

        //Arrow
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.moveTo(250 - 6, 250 - (outsideRadius + 15));
        ctx.lineTo(250 + 4, 250 - (outsideRadius + 15));
        ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
        ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
        ctx.lineTo(250, 250 - (outsideRadius - 13));
        ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
        ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
        ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
        ctx.fill();
    }
}

function spin() {
    spinAngleStart = Math.random() * 10 + 10;
    spinTime = 0;
    spinTimeTotal = Math.random() * 3 + 4 * 1000;
    rotateWheel();
}

function rotateWheel() {
    spinTime += 30;
    if(spinTime >= spinTimeTotal) {
        stopRotateWheel();
        return;
    }
    var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
    startAngle += (spinAngle * Math.PI / 180);
    drawRouletteWheel();
    spinTimeout = setTimeout('rotateWheel()', 30);
}

function stopRotateWheel() {
    clearTimeout(spinTimeout);
    var degrees = startAngle * 180 / Math.PI + 90;
    var arcd = arc * 180 / Math.PI;
    var index = Math.floor((360 - degrees % 360) / arcd);
    ctx.save();
    ctx.font = '30px Roboto Condensed, Arial';
    var text = options[index]
    ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10);
    ctx.restore();
}

function easeOut(t, b, c, d) {
    var ts = (t/=d)*t;
    var tc = ts*t;
    return b+c*(tc + -3*ts + 3*t);
}

drawRouletteWheel();





function openDestinationResult() {
    var NNE = "index.html";
    var NE = "index.html";
    var ENE = "index.html";
    var E = "index.html";
    var ESE = "index.html";
    var SE = "index.html";
    var SES = "index.html";
    var S = "index.html";
    var SSW = "index.html";
    var SW = "index.html";
    var WSW = "index.html";
    var W = "index.html";
    var WWW = "index.html";
    var NW = "index.html";
    var N = "index.html";

    if (N === "N")
    {
        document.location.replace("about.html");
    }
    else if (NE === "NE")
    {
        document.location.replace("index.html");
    }
    else if (ENE === "ENE")
    {
        document.location.replace("index.html");
    }
    else if (E === "E")
    {
        document.location.replace("index.html");
    }

    else if (ESE === "ESE")
    {
        document.location.replace("index.html");
    }

}