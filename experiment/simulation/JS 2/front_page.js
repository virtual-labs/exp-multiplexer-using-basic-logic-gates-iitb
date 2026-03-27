            function DrawORGate()
            {
                CONTEXT1.clearRect(0, 0, CANVAS1.width, CANVAS1.height);
                selectedAnswer = 3;

                var x = startX;
                var y = startY;
                this.CONTEXT1.beginPath();
                this.CONTEXT1.arc(x  + -200, y, 200, Math.PI / 18, -Math.PI / 18, true);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.stroke();
                this.CONTEXT1.beginPath();
                this.CONTEXT1.moveTo(x, y - 200 * Math.sin(Math.PI / 18));
                this.CONTEXT1.quadraticCurveTo(x + 50, y-10, x + 50, y);
                this.CONTEXT1.stroke();
                this.CONTEXT1.beginPath();
                this.CONTEXT1.moveTo(x, y + 200 * Math.sin(Math.PI / 18));
                this.CONTEXT1.quadraticCurveTo(x + 50, y+10, x + 50, y);
                this.CONTEXT1.stroke();

                //IP/OP
                this.CONTEXT1.beginPath()
                this.CONTEXT1.arc(x-100,y-22, 15, 0, 2*Math.PI, true);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.fillStyle = "#888";
                this.CONTEXT1.fill();
                this.CONTEXT1.stroke();  

                this.CONTEXT1.beginPath();
                this.CONTEXT1.moveTo(x-85,y-22);
                this.CONTEXT1.lineTo(x,y-22);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.stroke();

                this.CONTEXT1.beginPath()
                this.CONTEXT1.arc(x-100,y+22, 15, 0, 2*Math.PI, true);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.fillStyle = "#888";
                this.CONTEXT1.fill();
                this.CONTEXT1.stroke();  

                this.CONTEXT1.beginPath();
                this.CONTEXT1.moveTo(x-85,y+22);
                this.CONTEXT1.lineTo(x,y+22);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.stroke();

                this.CONTEXT1.beginPath()
                this.CONTEXT1.arc(x+150,y, 15, 0, 2*Math.PI, true);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.fillStyle = "#888";
                this.CONTEXT1.fill();
                this.CONTEXT1.stroke(); 
                
                this.CONTEXT1.beginPath();
                this.CONTEXT1.moveTo(x+50, y);
                this.CONTEXT1.lineTo(x+135, y);
                this.CONTEXT1.closePath();
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.stroke();
            }

            function DrawANDGate()
            {
                CONTEXT1.clearRect(0, 0, CANVAS1.width, CANVAS1.height);
                selectedAnswer = 1;
                
                var x = startX;
                var y = startY;
                this.CONTEXT1.beginPath();
                this.CONTEXT1.moveTo(x + 40, y - 30);
                this.CONTEXT1.lineTo(x, y - 30);
                this.CONTEXT1.lineTo(x, y + 30);
                this.CONTEXT1.lineTo(x + 40, y + 30);

                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.stroke();

                this.CONTEXT1.beginPath();

                this.CONTEXT1.arc(x + 40, y, 30, Math.PI / 2, -Math.PI / 2, true);

                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.stroke();

                //IP/OP
                this.CONTEXT1.beginPath()
                this.CONTEXT1.arc(x-100,y-22, 15, 0, 2*Math.PI, true);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.fillStyle = "#888";
                this.CONTEXT1.fill();
                this.CONTEXT1.stroke();  

                this.CONTEXT1.beginPath();
                this.CONTEXT1.moveTo(x-85,y-22);
                this.CONTEXT1.lineTo(x,y-22);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.stroke();

                this.CONTEXT1.beginPath()
                this.CONTEXT1.arc(x-100,y+22, 15, 0, 2*Math.PI, true);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.fillStyle = "#888";
                this.CONTEXT1.fill();
                this.CONTEXT1.stroke();  

                this.CONTEXT1.beginPath();
                this.CONTEXT1.moveTo(x-85,y+22);
                this.CONTEXT1.lineTo(x,y+22);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.stroke();

                this.CONTEXT1.beginPath()
                this.CONTEXT1.arc(x+150,y, 15, 0, 2*Math.PI, true);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.fillStyle = "#888";
                this.CONTEXT1.fill();
                this.CONTEXT1.stroke(); 
                
                this.CONTEXT1.beginPath();
                this.CONTEXT1.moveTo(x+70, y);
                this.CONTEXT1.lineTo(x+135, y);
                this.CONTEXT1.closePath();
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.stroke();
            }

            function DrawNOTGate()
            {
                CONTEXT1.clearRect(0, 0, CANVAS1.width, CANVAS1.height);
                selectedAnswer = 2;

                var x=startX;
                var y=startY;

                this.CONTEXT1.beginPath();
                this.CONTEXT1.moveTo(x, y);
                this.CONTEXT1.lineTo(x, y - 30);
                this.CONTEXT1.lineTo(x + 50, y);
                this.CONTEXT1.lineTo(x, y + 30);
                this.CONTEXT1.closePath();
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.stroke();
            
                this.CONTEXT1.beginPath();
                this.CONTEXT1.arc(x + 50, y, 5, 0, 2 * Math.PI, false);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.fillStyle = "#888";
                this.CONTEXT1.fill();
                this.CONTEXT1.stroke();

                this.CONTEXT1.beginPath();
                this.CONTEXT1.arc(x-100, y, 15, 0, 2 * Math.PI, false);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.fillStyle = "#888";
                this.CONTEXT1.fill();
                this.CONTEXT1.stroke();

                this.CONTEXT1.beginPath();
                this.CONTEXT1.arc(x+150, y, 15, 0, 2 * Math.PI, false);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.fillStyle = "#888";
                this.CONTEXT1.fill();
                this.CONTEXT1.stroke();

                this.CONTEXT1.beginPath();
                this.CONTEXT1.moveTo(x-85, y);
                this.CONTEXT1.lineTo(x, y);
                this.CONTEXT1.moveTo(x+55, y);
                this.CONTEXT1.lineTo(x+135, y);
                this.CONTEXT1.closePath();
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.stroke();
            }

            function DrawNORGate()
            {
                CONTEXT1.clearRect(0, 0, CANVAS1.width, CANVAS1.height);
                selectedAnswer = -1;

                var x = startX;
                var y = startY;
                this.CONTEXT1.beginPath();
                this.CONTEXT1.arc(x + -200, y, 200, Math.PI / 18, -Math.PI / 18, true);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.stroke();
                this.CONTEXT1.beginPath();
                this.CONTEXT1.moveTo(x, y - 200 * Math.sin(Math.PI / 18));
                this.CONTEXT1.quadraticCurveTo(x + 50, y-10, x + 50, y);
                this.CONTEXT1.stroke();
                this.CONTEXT1.beginPath();
                this.CONTEXT1.moveTo(x, y + 200 * Math.sin(Math.PI / 18));
                this.CONTEXT1.quadraticCurveTo(x + 50, y+10, x + 50, y);
                this.CONTEXT1.stroke();
                this.CONTEXT1.beginPath();
                this.CONTEXT1.arc(x+57, y, 7, 0, 2*Math.PI, true);
                this.CONTEXT1.stroke();

                //IP/OP
                this.CONTEXT1.beginPath()
                this.CONTEXT1.arc(x-100,y-22, 15, 0, 2*Math.PI, true);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.fillStyle = "#888";
                this.CONTEXT1.fill();
                this.CONTEXT1.stroke();  

                this.CONTEXT1.beginPath();
                this.CONTEXT1.moveTo(x-85,y-22);
                this.CONTEXT1.lineTo(x,y-22);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.stroke();

                this.CONTEXT1.beginPath()
                this.CONTEXT1.arc(x-100,y+22, 15, 0, 2*Math.PI, true);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.fillStyle = "#888";
                this.CONTEXT1.fill();
                this.CONTEXT1.stroke();  

                this.CONTEXT1.beginPath();
                this.CONTEXT1.moveTo(x-85,y+22);
                this.CONTEXT1.lineTo(x,y+22);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.stroke();

                this.CONTEXT1.beginPath()
                this.CONTEXT1.arc(x+150,y, 15, 0, 2*Math.PI, true);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.fillStyle = "#888";
                this.CONTEXT1.fill();
                this.CONTEXT1.stroke(); 
                
                this.CONTEXT1.beginPath();
                this.CONTEXT1.moveTo(x+65, y);
                this.CONTEXT1.lineTo(x+135, y);
                this.CONTEXT1.closePath();
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.stroke();
            }

            function DrawNANDGate()
            {
                CONTEXT1.clearRect(0, 0, CANVAS1.width, CANVAS1.height);
                selectedAnswer = -1;
                
                var x = startX;
                var y = startY;
                this.CONTEXT1.beginPath();
                this.CONTEXT1.moveTo(x + 40, y - 30);
                this.CONTEXT1.lineTo(x, y - 30);
                this.CONTEXT1.lineTo(x, y + 30);
                this.CONTEXT1.lineTo(x + 40, y + 30);

                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.stroke();

                this.CONTEXT1.beginPath();

                this.CONTEXT1.arc(x + 40, y, 30, Math.PI / 2, -Math.PI / 2, true);

                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.stroke();
                this.CONTEXT1.beginPath();
                this.CONTEXT1.arc(x+77, y, 7, 0, 2*Math.PI, true);
                this.CONTEXT1.stroke();

                //IP/OP
                this.CONTEXT1.beginPath()
                this.CONTEXT1.arc(x-100,y-22, 15, 0, 2*Math.PI, true);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.fillStyle = "#888";
                this.CONTEXT1.fill();
                this.CONTEXT1.stroke();  

                this.CONTEXT1.beginPath();
                this.CONTEXT1.moveTo(x-85,y-22);
                this.CONTEXT1.lineTo(x,y-22);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.stroke();

                this.CONTEXT1.beginPath()
                this.CONTEXT1.arc(x-100,y+22, 15, 0, 2*Math.PI, true);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.fillStyle = "#888";
                this.CONTEXT1.fill();
                this.CONTEXT1.stroke();  

                this.CONTEXT1.beginPath();
                this.CONTEXT1.moveTo(x-85,y+22);
                this.CONTEXT1.lineTo(x,y+22);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.stroke();

                this.CONTEXT1.beginPath()
                this.CONTEXT1.arc(x+150,y, 15, 0, 2*Math.PI, true);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.fillStyle = "#888";
                this.CONTEXT1.fill();
                this.CONTEXT1.stroke(); 
                
                this.CONTEXT1.beginPath();
                this.CONTEXT1.moveTo(x+85, y);
                this.CONTEXT1.lineTo(x+135, y);
                this.CONTEXT1.closePath();
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.stroke();
            }

            function DrawXORGate()
            {
                CONTEXT1.clearRect(0, 0, CANVAS1.width, CANVAS1.height);
                selectedAnswer = -1;

                var x = startX;
                var y = startY;
                this.CONTEXT1.beginPath();
                this.CONTEXT1.arc(x + -200, y, 200, Math.PI / 18, -Math.PI / 18, true);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.stroke();
                this.CONTEXT1.beginPath();
                this.CONTEXT1.moveTo(x, y - 200 * Math.sin(Math.PI / 18));
                this.CONTEXT1.quadraticCurveTo(x + 50, y-10, x + 50, y);
                this.CONTEXT1.stroke();
                this.CONTEXT1.beginPath();
                this.CONTEXT1.moveTo(x, y + 200 * Math.sin(Math.PI / 18));
                this.CONTEXT1.quadraticCurveTo(x + 50, y+10, x + 50, y);
                this.CONTEXT1.stroke();
                this.CONTEXT1.beginPath();
                this.CONTEXT1.arc(x + -210, y, 200, Math.PI / 18, -Math.PI / 18, true);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.stroke();

                //IP/OP
                this.CONTEXT1.beginPath()
                this.CONTEXT1.arc(x-100,y-22, 15, 0, 2*Math.PI, true);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.fillStyle = "#888";
                this.CONTEXT1.fill();
                this.CONTEXT1.stroke();  

                this.CONTEXT1.beginPath();
                this.CONTEXT1.moveTo(x-85,y-22);
                this.CONTEXT1.lineTo(x-10,y-22);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.stroke();

                this.CONTEXT1.beginPath()
                this.CONTEXT1.arc(x-100,y+22, 15, 0, 2*Math.PI, true);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.fillStyle = "#888";
                this.CONTEXT1.fill();
                this.CONTEXT1.stroke();  

                this.CONTEXT1.beginPath();
                this.CONTEXT1.moveTo(x-85,y+22);
                this.CONTEXT1.lineTo(x-10,y+22);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.stroke();

                this.CONTEXT1.beginPath()
                this.CONTEXT1.arc(x+150,y, 15, 0, 2*Math.PI, true);
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.fillStyle = "#888";
                this.CONTEXT1.fill();
                this.CONTEXT1.stroke(); 
                
                this.CONTEXT1.beginPath();
                this.CONTEXT1.moveTo(x+50, y);
                this.CONTEXT1.lineTo(x+135, y);
                this.CONTEXT1.closePath();
                this.CONTEXT1.lineWidth = 2;
                this.CONTEXT1.strokeStyle = "black";
                this.CONTEXT1.stroke();
            }