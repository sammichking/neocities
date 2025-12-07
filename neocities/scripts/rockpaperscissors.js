
//rock.addEventListener("click",playGame)

//0 = paper
//1 = scissors
//2 = rock

class choice{
    
    constructor(){
        this.weakness = null;
        this.choiceName = null;
    }
    getWeakness(){
        return this.weakness;
    }
    getName(){
        return this.choiceName;
    }
}
class rock extends choice{

    constructor(){
        super();
        this.weakness = "Paper";
        this.choiceName = "Rock";

    }
}
class paper extends choice{
    
    constructor(){
        super();
        this.weakness = "Scissors";
        this.choiceName = "Paper";
    }
}
class scissors extends choice{
    
    constructor(){
        super();
        this.weakness = "Rock";
        this.choiceName = "Scissors";
    }
}


let input_choices = document.querySelectorAll('.choice');
for (let i=0;i<input_choices.length;i++){
    input_choice = input_choices[i];
    input_choice.addEventListener('click', event => {
    const dictionary = {["Rock"]:new rock(),["Scissors"]:new scissors(),["Paper"]:new paper()}

    let target = event.target;
    let value = target.innerHTML;

    let input = dictionary[value];
    playGame((input))
})
}









function playGame(input){
    let com_number = Math.floor(Math.random()*3);
    let com_choices = [new paper(),new scissors(),new rock()];
    let com_choice = com_choices[com_number];
    if (input.getName() == com_choice.getName()){
        alert("Opponent threw " + com_choice.getName() + ", you draw.");
    }
    else if (input.getName() == com_choice.getWeakness()){
        alert("Opponent threw " + com_choice.getName() + ", you won!");
        let current_wins = Number(document.getElementById("wins").innerHTML);
        let new_wins = current_wins + 1;
        document.getElementById("wins").innerHTML = new_wins;
    }
    else if (input.weakness == com_choice.getName()){
        alert("Opponent threw " + com_choice.getName() + ", you lose...");
        let current_losses = Number(document.getElementById("losses").innerHTML);
        let new_losses = current_losses + 1;
        document.getElementById("losses").innerHTML = new_losses;
    }
}

