
        var start = new Date().getTime();
        function appear() {
            var x = Math.random()*91;
            var y = Math.random()*301;
            var size = Math.floor(Math.random()*301) + 50;
            var r = Math.floor(Math.random()*256);
            var g = Math.floor(Math.random()*256);
            var b = Math.floor(Math.random()*256);
            var radius = Math.floor(Math.random()*2);
            if (radius == 0) {
                document.getElementById("shape").style.borderRadius = "50%";
            } else {
                document.getElementById("shape").style.borderRadius = "0";
            }
            document.getElementById("shape").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
            document.getElementById("shape").style.width = size + "px";
            document.getElementById("shape").style.height = size + "px";
            document.getElementById("shape").style.top = y + "px";
            document.getElementById("shape").style.left = x + "%";
            document.getElementById("shape").style.display = "block";
            start = new Date().getTime();
        }
        
        function appearance_delay() {
            setTimeout(appear, Math.random()*2000);
        }
        document.getElementById("start").onclick = function() {
            appearance_delay();
        }
        var min = 4;
        point = 0;
        document.getElementById("shape").onclick = function() {
            document.getElementById("shape").style.display = "none";
            var end = new Date().getTime();
            var timetaken = (end - start) / 1000;
            document.getElementById("timetaken").innerHTML = timetaken + "s";
            appearance_delay();
            
            if (timetaken < min) {
                min = timetaken;
                document.getElementById("besttime").innerHTML = min;
            }
            if (timetaken < 1.0) {
                point = point + 1;
            }
            document.getElementById("points").innerHTML = point;
        }
