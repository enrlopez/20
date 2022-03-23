var compScore = []

var usrScore = []

var play = "y"

alert("Welcome to 20")
while(play == "y") {


    //Usrs gane
    
    var usr = 0
    var usrTotal = 0
    var choice = "y"
    while (choice == "y" ) {
        usr = Math.floor(Math.random() * 10 )
        usrTotal = usr + usrTotal
        

        if(usrTotal > 20){
            compScore.push(1)
            alert(`You busted with ${usrTotal}`)
            break
        }
        
        choice = prompt(`You have ${usrTotal} points. Would you like to hit? Please only type y or n.`)
        
    }
    if(usrTotal <= 20){

        //computers game
        var cpu = 0
        var cpuTotal = 0
        while (cpuTotal <= 16) {
            if(usrTotal > 20){
                break
            }
            cpu = Math.floor(Math.random() * 10 )
            cpuTotal = cpu + cpuTotal
        
        }

        var skip = "no"

        if(cpuTotal < 20){
            alert("The computer has chose to stand")

        }else if(cpuTotal == 20) {
            alert("The computer has 20 points and can win unless you have 20 points the computer wins ")
        }else if(cpuTotal > 20){
            alert("The computer busted. You win. :{ ")
            skip = "true"
            usrScore.push(1)
        }

        if(skip != "true"){
        
            if(cpuTotal > usrTotal){
                alert(`Congradulations! You lost. ${cpuTotal} to ${usrTotal}`)
                compScore.push(1)
            }else if(cpuTotal < usrTotal){
                alert(`Yeah, Yeah, Yeah, you won. ${usrTotal} to ${cpuTotal}`)
                usrScore.push(1)
            }else{
                alert( `We tied. No points. ${cpuTotal} to ${usrTotal}`)
            }
        
        }

    }
    play = prompt(`The score is CPU: ${compScore.length} USRE: ${usrScore.length} Would you like to play again? Please type y or n`)
    //while (play != "y" && play != "n"){
    //    prompt("Please only type y or n. ")
    //}

    



}
if(compScore.length > usrScore.length){
    alert(`The final score is CPU: ${compScore.length} USRE: ${usrScore.length}. I win! `)
} else if(compScore.length < usrScore.length){
    alert(`The final score is USRE: ${usrScore.length} CPU: ${compScore.length}. You won. :{ `)
}else if(compScore.length == usrScore.length){
    alert(`WE TIED ${usrScore.length} to ${compScore.length}. `)
}
