function messageDisplay() {
    var enteredDate = document.getElementById("dateOfLaunch").value;
    var currentDate = new Date().toISOString().slice(0,10);
    if(enteredDate < currentDate)
        alert("Please enter a valid date!");
}