let date = "Wednesday";
switch (date) {
    case "Monday":
        console.log ("today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
            console.log("Today is Wednesday");
         break;
    case "Thursday":
            console.log("Today is Thursday");
            break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    default:
        console.log("Today is Sunday");
}

let firstbox, secondbox, thirdbox, btn1, btn2, btn3, btnall, allColors;

allColors = ["red", "green", "blue", "yellow", "purple", "orange", "black", "maroon", "silver", "gold", "lavender"]
allborders = []

firstbox = document.getElementById('first');
secondbox = document.getElementById('second');
thirdbox = document.getElementById('third');

btn1 = document.getElementById("changebtn1");
btn2 = document.getElementById("changebtn2");
btn3 = document.getElementById("changebtn3");
btnall = document.getElementById("changebtnall");

function changeBoxOne() {
    firstbox.style.backgroundColor = allColors[Math.floor(Math.random() * allColors.length)];
    firstbox.style.border = "5px solid " + allColors[Math.floor(Math.random() * allColors.length)];
}

function changeBoxTwo() {
    secondbox.style.backgroundColor = allColors[Math.floor(Math.random() * allColors.length)];
    secondbox.style.border = "5px solid " + allColors[Math.floor(Math.random() * allColors.length)];
}

btn1.addEventListener("click", changeBoxOne