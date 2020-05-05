function resident() {
  let contact = document.querySelector('input[name="contact"]:checked').value
  var resident = document.getElementById("resident");
  var contactbox = document.getElementById("contact");
  var days = document.getElementById("days");
  var notresident = document.getElementById("notresident");
  var noteligible = document.getElementById("noteligible");
  // If the checkbox is checked, display the output text
  if (contact == "yes"){
    resident.style.display = "block";
    noteligible.style.display ="none";
  } else {
    resident.style.display = "none";
    noteligible.style.display ="block";
    days.style.display = "none";
    notresident.style.display ="none";
    contactbox.style.display ="none";
  }

} 

function days() {
  let residentChoice = document.querySelector('input[name="resident"]:checked').value
  var days = document.getElementById("days");
  var notresident = document.getElementById("notresident");

  if (residentChoice == "yes"){
    days.style.display = "block";
    notresident.style.display ="none";
} 
  else {
    days.style.display = "none";
    notresident.style.display ="block";

  }
} 

function final() {
    var dayChoice = document.querySelector('input[name="day"]:checked').value
    var notresident = document.getElementById("notresident");
    var yesresident = document.getElementById("yesresident");
  
    if (dayChoice == "yes"){
      notresident.style.display ="none";
      yesresident.style.dispay ="block";
  } 
    else {
      notresident.style.display ="block";
      isresident.style.dispay ="none";
  
    }
  } 