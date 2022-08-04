document.getElementById("myButton").onclick = function(){

  let D = Number(document.getElementById("D").value); 
  let M = Number(document.getElementById("M").value); 
  let Y = Number(document.getElementById("Y").value);

    if (M < 3){
        M = M + 12;
        Y = Y - 1;
    }
    Y = String(Y);     

    let C = Math.floor(Y / 100); 
    let K = Y - (100 * C); 

    Z = Math.floor((2.6 * M) - 5.39) + Math.floor(K/4) + Math.floor(C/4) + D + K - (2 * C); 

    let dayOfWeek = Z - (7 * Math.floor(Z / 7))

    if(dayOfWeek == 0) {
      const obama = document.getElementById('display')
      obama.textContent = "SUNDAY" 
    }     
    if(dayOfWeek == 1) {
      const obama = document.getElementById('display')
      obama.textContent = "MONDAY" 
    }
    if(dayOfWeek == 2) {
      const obama = document.getElementById('display')
      obama.textContent = "TUESDAY"
    }
    if(dayOfWeek == 3) {
      const obama = document.getElementById('display')
      obama.textContent = "WEDNESDAY"
    }
    if(dayOfWeek == 4) {
      const obama = document.getElementById('display')
      obama.textContent = "THURSDAY"
    }
    if(dayOfWeek == 5) {
      const obama = document.getElementById('display')
      obama.textContent = "FRIDAY"
    }
    if(dayOfWeek == 6) {
      const obama = document.getElementById('display')
      obama.textContent = "SATURDAY"
    }
  }
