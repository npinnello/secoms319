function parseScores(scoresString) {

   // split the scoresString w.r.t " "
   
   const scoresArray = scoresString.split(" ");
   
   // return the array of scores
   
   return scoresArray;
   
   }
   
   function buildDistributionArray(scoresArray) {
      let distribution = [0, 0, 0, 0, 0];
    
      for (let i = 0; i < scoresArray.length; i++) {
        let score = parseInt(scoresArray[i]);
        if (score >= 90 && score <= 100) {
          distribution[0]++;
        } else if (score >= 80 && score <= 89) {
          distribution[1]++;
        } else if (score >= 70 && score <= 79) {
          distribution[2]++;
        } else if (score >= 60 && score <= 69) {
          distribution[3]++;
        } else if (score >= 0 && score <= 59) {
          distribution[4]++;
        }
      }
      return distribution;
    }
   
    function setTableContent(scoresString) {
      let scoresArray = parseScores(scoresString);
      let distribution = buildDistributionArray(scoresArray);
    
      let firstRow = document.getElementById("firstRow");
      let thirdRow = document.getElementById("thirdRow");
      for (let i = 0; i < distribution.length; i++) {
        let cell = firstRow.insertCell(-1);
        cell.innerHTML = "<div class='bar" + i + "' style='height:" + (distribution[i] * 10) + "px;'></div>";
        thirdRow.insertCell(-1).innerHTML = distribution[i];
      }
    }
