parseInt(prompt("Enter a number"));




function parseInt(input){
    
    for (let i = 0; i<=input;i++){
        let output = "";
        if (i % 3 == 0){
            output = output + "Fizz";
        }
        if (i % 5 == 0){
            output = output + "Buzz"
        } 
        if (output == ""){
            output = i;
        }
        console.log(output);

    }
    

}








console.log("heya there!");
let firstName = "Cameron";
let lastName = " Winter";
const goat = firstName + lastName
console.log("Who's the greatest of them all?");
console.log(goat);
let year = prompt('Mirror mirror on the wall, what is the greatest game of them all?', '');
if (year == "Spelunky 2"){
    alert( 'You are right!' );
}
else {
    alert("Wrong!");
    alert("Why would you think that?");
    alert("Are you crazy? Are you from the planet where everything is opposite?");
    alert("Except opposite day which is normal which is still opposite");
    alert("I forget what day opposite day is, is it in january?");
    alert("Either way why did you think that was the greatest game of all time?")
    alert("Wait, ohhh I get it now, you just haven't played spelunky 2 yet");
    alert("I feel like such an idiot how did that not cross my mind?");
    alert("Alright here you go https://store.steampowered.com/app/418530/Spelunky_2/")
}