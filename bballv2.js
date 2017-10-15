var readline = require('readline');

var rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function clear() {
    process.stdout.write('\u001B[2J\u001B[0;0f');
  }

var playerOne ={
    teamName: undefined,
    teamPoints:0
}
var computer = {
    teamName: 'Monstars',
    teamPoints: 0
}

console.log('M-O-N-S-T-A-R-S\nA 3-on-3 basketball game\nFirst team to 21 points WINS');
rl.setPrompt('Enter your team name\n');
rl.prompt();


rl.on('line', function(input){
    
    var offensivePlay = ['shoot','dunk','3']
    var defensivePlay = ['defend', 'steal']

    var controls = Math.floor(Math.random() * 10);
    
    if(playerOne.teamName === undefined){
        playerOne.teamName = input;
    }
    
    clear();

        
    if(input === 'dunk' && controls >= 4){ ///////SELECTED DUNK///////////
        clear();
        playerOne.teamPoints +=  2;
            console.log(`BOOOM SHAKALAKA, I think the ground shook with that DUNK`)
            console.log(`\n${computer.teamName} ${computer.teamPoints}`);
            console.log(`${playerOne.teamName} ${playerOne.teamPoints}`);
            
    
    }else if(input === 'dunk' && controls < 4){
        clear();
        console.log(`\nOH MY!!, ${playerOne.teamName} spazzed on the dunk!!`)
        console.log(`${computer.teamName} ${computer.teamPoints}`);
        console.log(`${playerOne.teamName} ${playerOne.teamPoints}`);
        
    }
    
    if(input === 'shoot' && controls >= 5){/////////SELECTED SHOOT////////////
        clear();
        playerOne.teamPoints +=  2;
            console.log(`Showing off the mid-range GAME`)
            console.log(`\n${computer.teamName} ${computer.teamPoints}`);
            console.log(`${playerOne.teamName} ${playerOne.teamPoints}`);
            
    
    }else if(input === 'shoot' && controls < 5){
        clear();
        console.log(`\nOH MY!!, the shot is no good!!`)
        console.log(`${computer.teamName} ${computer.teamPoints}`);
        console.log(`${playerOne.teamName} ${playerOne.teamPoints}`);
       
    }

    if(input === '3' && controls >= 7){/////////3-POINT SHOT////////////
        clear();
        playerOne.teamPoints +=  3;
            console.log(`From WWAAAYYYY DOWN TOWN`)
            console.log(`\n${computer.teamName} ${computer.teamPoints}`);
            console.log(`${playerOne.teamName} ${playerOne.teamPoints}`);
           
    
    }else if(input === '3' && controls < 7){
        clear();
        console.log(`\nOH MY!!, the 3 is no good!!`)
        console.log(`${computer.teamName} ${computer.teamPoints}`);
        console.log(`${playerOne.teamName} ${playerOne.teamPoints}`);
       
    }


    if(input === 'defend' && controls > 5){
        clear();
        computer.teamPoints +=  2;
            console.log(`\nPoor defense by ${playerOne.teamName}`)
            console.log(`\n${computer.teamName} ${computer.teamPoints}`);
            console.log(`${playerOne.teamName} ${playerOne.teamPoints}`);
           
    
    }else if(input === 'defend' && controls <= 5){
        clear();
        console.log(`\nOH MY!!, the ${computer.teamName} dunk is no good!!`)
        console.log(`${computer.teamName} ${computer.teamPoints}`);
        console.log(`${playerOne.teamName} ${playerOne.teamPoints}`);
    }

    if(input === 'steal' && controls >= 4){
        clear();
        computer.teamPoints +=  2;
            console.log(`That is something you don't see everyday, WWWOOOOWWWW!!!!`)
            console.log(`\n${computer.teamName} ${computer.teamPoints}`);
            console.log(`${playerOne.teamName} ${playerOne.teamPoints}`);
           
    
    }else if(input === 'steal' && controls < 4){
        clear();
        console.log(`\nOH MY!!, what a steal!! ${playerOne.teamName}'s ball!!`)
        console.log(`${computer.teamName} ${computer.teamPoints}`);
        console.log(`${playerOne.teamName} ${playerOne.teamPoints}`);
    }

    if(computer.teamPoints >= 21){
        console.log(`The ${computer.teamName} snatched your basketball soul, ${computer.teamPoints} to ${playerOne.teamPoints} ()-:`)
        rl.close();
    }else if(playerOne.teamPoints >= 21){
        console.log(`################You beat the ${computer.teamName}, ${playerOne.teamPoints} to ${computer.teamPoints}################`)
        rl.close();
    }else{



        console.log(`${playerOne.teamName} v the ${computer.teamName}`)
        console.log(`**********JUMPBALL**********`)
        var jumpBall = Math.floor(Math.random() * 20 + 1)   
        if(jumpBall >= 10){
            console.log(`${playerOne.teamName}'s ball!!`)
            rl.setPrompt(`OFFENSE\ndunk | shoot | 3-pointer\n`)
            rl.prompt();
        }else if(jumpBall < 10){
            console.log(`${computer.teamName} ball!!`)
            rl.setPrompt('DEFENSE\ndefend | steal\n')
            rl.prompt();
        }
        
    }
    
});