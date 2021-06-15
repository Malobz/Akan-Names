function getUserInput() {
    let inputArr = [];
    let date = prompt("Enter your date of birth");
    date = parseInt(date);
    if (date < 1 || date > 31) {
        alert("Please enter a valid date")
        
    } else {
        inputArr.push(date);
        let month = prompt("Enter your month of birth");
        month = parseInt(month);
        if (month < 1 || month > 12) {
            alert("Please enter a valid month");
                    
        } else {
            inputArr.push(month);
            let year = prompt("Enter your year of birth")
            if ( year.length !==4){
                alert("Please enter a valid year");
            }
            year = parseInt(year);
            inputArr.push(year);
            return inputArr;

        }
    }
     return [date, month, year]
     return [0, 0, 0000]
   
} 
function calculateDayIndex(inptArr) {
    let day = inptArr[0]
    let month = inptArr[1]
    let year = inptArr[2]
    let century = 19
    let index = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7;
    return parseInt(index.toString().split(".")[0]);
}
function main() {
    let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenna", "Akua", "Yaa", "Afua", "Ama"];
    let userInputArr = getUserInput();
    if (userInputArr[0] === 0 ){
        alert("Please try again");
    } else {
        let index = calculateDayIndex(userInputArr);
        let day = daysOfTheWeek[index];
        let name = "";
        let gender = prompt(" Enter your gender");
        if (gender.toLowerCase().startsWith("m")){
            name = maleNames[index];
        } else {
            name = femaleNames[index];
        }
        alert ("You were born on "  + day + "\ And your Akan name is " + name);

    }
    
}

