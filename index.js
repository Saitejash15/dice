document.getElementById("roll").addEventListener("click", function() {
                         const scores = [];
                         for (let i = 1; i <= 3; i++) {
                             const score = Math.floor(Math.random() * 6) + 1;
                             document.getElementById(`member-${i}`).innerText = score;
                             scores.push(score);
                         }
                         determineWinner(scores);
                     });
             
                     function determineWinner(scores) {
                         const maxScore = Math.max(...scores);
                         const minScore = Math.min(...scores);
                         let winnerMessage = "Winner is: ";
                         let colors = ["", "", ""];
                         let uniqueScores = new Set(scores);
             
                         if (uniqueScores.size === 1) { // all are equal
                             colors.fill("blue");
                             winnerMessage += "It's a draw!";
                         } else {
                             scores.forEach((score, index) => {
                                 if (score === maxScore) {
                                     colors[index] = "green";
                                     winnerMessage += `Member ${index + 1} `;
                                 } else if (score === minScore) {
                                     colors[index] = "red";
                                 } else {
                                     colors[index] = "yellow";
                                 }
                             });
                         }
             
                         colors.forEach((color, index) => {
                             document.getElementById(`member-${index + 1}`).className = `dice ${color}`;
                         });
             
                         document.getElementById("winner").innerText = winnerMessage;
                     }