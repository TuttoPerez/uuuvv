document.getElementById("continueButton").addEventListener("click", function() {
    window.location.href = "propuesta.html";
  });
  
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  