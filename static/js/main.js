function calculateDay(day, month, year){
    let dd = day;
    if (dd<=0 || dd>31){
    alert("Enter a valid date");
    }// validate day 1<= day <=31
    let mm = month; 
    if (mm<=0 || mm>12){
    alert("Enter a valid month");
    }// validate month 0 < month <= 12
    let temp = year.split("")
    let temp2 = temp.slice()
    let yy = parseInt("".join(((temp.split("")).slice(0,2)))) // pick first 2 digits from year as century, and convert to integer
    let cc = parseInt("".join(((temp2.split("")).slice(2,2)))) // pick last 2 digits from year as year - will this work for year 00?, and convert to integer
    let dayIndex =  ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7 
    return dayIndex;
}
​
function getDayAndName(){
    function getDayAndName(){
   var dd = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
  // days of the week array
    // akan male names array
    // akan female names array
    let index = calculateDay(); // call our function & pass arguments (input from user), day, month, year
   var button = document.getElementById("submit");
   button.onclick= calculateDay;getDayAndName;
    
    
    let day = days[index]  // 
    let gender = "";  // gender input from user
    let name = "";   
    if (gender === "M"){
        // use male names array
    } // else use female names array
​
    // return day && name and display it to user
}

  