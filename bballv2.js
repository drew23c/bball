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

console.log('Time to play the MONSTARS\n A 3-on-3 basketball game\n First team to 21 points WINS');
rl.setPrompt('Enter your team name');
rl.prompt();
var i = 0;


rl.on('line', function(input){
    var plays = ['jumpShot', 'threePointShot'] 
    var calls=['WWWOOOOWWW','BOOM SHAKALAKA', 'You won\t see that everyday',
    'someone\s ankle is broken', 'Man DOWN']
    var madeShot =['made','missed']
    var tVt = [playerOne.teamName, computer.teamName]
    
    var offensivePlay = ['shoot','dunk','3-pointer']
    var defensivePlay = ['defend', 'steal']
    
    var rPlays = Math.floor(Math.random() * plays[i]);
    var rCalls = Math.floor(Math.random() * calls.length);
    var rShot = Math.floor(Math.random() * madeShot.length);
    var vulnerD = Math.floor(Math.random() * 5);
    var teamPool = Math.floor(Math.random() * 5)
    
    if(playerOne.teamName === undefined){
        playerOne.teamName = input;
    }
    console.log('JUMPBALL')
    var jumpBall = Math.floor(Math.random() * 5)   
    if(jumpBall > 3){
        console.log(`${playerOne.teamName}'s ball`)
        rl.setPrompt('OFFENSE\n' + offensivePlay[0] + ' | ' + offensivePlay[1] + ' | ' + offensivePlay[2])
        rl.prompt();
        if(offensivePlay[0]){
            clear();
            rShot
            if(rShot === 'made'){
                console.log(`${rCalls}, jumpshot is made!!`)
                playerOne.teamPoints +=  2;
                console.log(`${computer.teamName} ${computer.teamPoints}`);
                console.log(`${playerOne.teamName} ${playerOne.teamPoints}`);
            }else{
                console.log(`jumpshot is missed!!`)
                console.log(`${computer.teamName} ${computer.teamPoints}`);
                console.log(`${playerOne.teamName} ${playerOne.teamPoints}`);
                teamPool
                if(teamPool > 2){
                    console.log(`${computer.teamName}'s ball`) 
                    rl.setPrompt('DEFESE\n' + defensivePlay[0] + ' | ' + defensivePlay[1])
                    rl.prompt();            
                }else{
                    console.log(`${rCalls}, ${rPlays} is made`)
                    if(rPlays === 'jumpshot'){
                        playerOne.teamPoints +=  2;
                        console.log(`${computer.teamName} ${computer.teamPoints}`);
                        console.log(`${playerOne.teamName} ${playerOne.teamPoints}`);
                    }else if(rPlays === 'threePointShot'){
                        playerOne.teamPoints +=  3;
                        console.log(`${computer.teamName} ${computer.teamPoints}`);
                        console.log(`${playerOne.teamName} ${playerOne.teamPoints}`);
                    }else{
                        playerOne.teamPoints +=  2;
                        console.log(`${computer.teamName} ${computer.teamPoints}`);
                        console.log(`${playerOne.teamName} ${playerOne.teamPoints}`);
                    } 
                        }
                    }
                        
        }
        else if(offensivePlay[1]){
            clear();
            rShot
            if(rShot === 'made'){
                console.log(`${rCalls}, what a DUNK!!`)
                playerOne.teamPoints +=  2;
                console.log(`${computer.teamName} ${computer.teamPoints}`);
                console.log(`${playerOne.teamName} ${playerOne.teamPoints}`);
            }else{
                console.log(`OH MY!!, he spazzed on the dunk!!`)
                console.log(`${computer.teamName} ${computer.teamPoints}`);
                console.log(`${playerOne.teamName} ${playerOne.teamPoints}`);
                teamPool
                if(teamPool > 2){
                    console.log(`${computer.teamName}'s ball`) 
                    rl.setPrompt('DEFESE\n' + defensivePlay[0] + ' | ' + defensivePlay[1])
                    rl.prompt();            
                }else{
                    console.log(`${rCalls}, ${rPlays} is made`)
                    if(rPlays === 'jumpshot'){
                        playerOne.teamPoints +=  2;
                        console.log(`${computer.teamName} ${computer.teamPoints}`);
                        console.log(`${playerOne.teamName} ${playerOne.teamPoints}`);
                        }
                    }
                }
        } else{
            clear();
            rShot
            if(rShot === 'made'){
                console.log(`${rCalls}, the 3 is made!!`)
                playerOne.teamPoints +=  3;
                console.log(`${computer.teamName} ${computer.teamPoints}`);
                console.log(`${playerOne.teamName} ${playerOne.teamPoints}`);
            }else{
                console.log(`The 3 is missed!!`)
                console.log(`${computer.teamName} ${computer.teamPoints}`);
                console.log(`${playerOne.teamName} ${playerOne.teamPoints}`);
                teamPool
                if(teamPool > 2){
                    console.log(`${computer.teamName}'s ball`) 
                    rl.setPrompt('DEFESE\n' + defensivePlay[0] + ' | ' + defensivePlay[1])
                    rl.prompt();            
                }else{
                    console.log(`${rCalls}, ${rPlays} is made`)
                    if(rPlays === 'jumpshot'){
                        playerOne.teamPoints +=  2;
                        console.log(`${computer.teamName} ${computer.teamPoints}`);
                        console.log(`${playerOne.teamName} ${playerOne.teamPoints}`);
                        }
                    }
            }
        }  
    }
    else{
        console.log(`${computer.teamName} ball`)
        rl.setPrompt('DEFESE\n' + defensivePlay[0] + ' | ' + defensivePlay[1])
        rl.prompt();
        if(defensivePlay[1]){
            clear();
            var vulnerD = Math.floor(Math.random() * 5);
                if(vulnerD > 2){
                    console.log(`Matedore D has led to an EZ ${rPlays}`)
                    if(rPlays === 'jumpshot'){
                        computer.teamPoints += 2;
                        console.log(`${computer.teamName} ${computer.teamPoints}`);
                        console.log(`${playerOne.teamName} ${playerOne.teamPoints}`);
                    }else if(rPlays === 'threePointShot'){
                        computer.teamPoints +=  3;
                        console.log(`${computer.teamName} ${computer.teamPoints}`);
                        console.log(`${playerOne.teamName} ${playerOne.teamPoints}`);
                    }else{
                        computer.teamPoints +=  2;
                        console.log(`${computer.teamName} ${computer.teamPoints}`);
                        console.log(`${playerOne.teamName} ${playerOne.teamPoints}`);
                    }
                    
                }
                rl.setPrompt('OFFENSE\n' + offensivePlay[0] + ' | ' + offensivePlay[1] + ' | ' + offensivePlay[2])
                rl.prompt();
        }else{
            clear();
            vulnerD
            if(vulnerD < 3){
                console.log(`${playerOne.teamName} has defended the rim`)
                teamPool
                if(playerOne.teamName){
                    console.log(`${playerOne.teamName} grabbed the rebound`)
                    rl.setPrompt('OFFENSE\n' + offensivePlay[0] + ' | ' + offensivePlay[1] + ' | ' + offensivePlay[2])
                    rl.prompt();
                }else{
                    console.log(`${computer.teamName} with the putback!!`)
                    rPlays
                    if(rPlays === 'jumpshot'){
                        playerOne.teamPoints += 2;
                        console.log(`${computer.teamName} ${computer.teamPoints}`);
                        console.log(`${playerOne.teamName} ${playerOne.teamPoints}`);
                    }else if(rPlays === 'threePointShot'){
                        playerOne.teamPoints +=  3;
                        console.log(`${computer.teamName} ${computer.teamPoints}`);
                        console.log(`${playerOne.teamName} ${playerOne.teamPoints}`);
                    }else{
                        playerOne.teamPoints +=  2;
                        console.log(`${computer.teamName} ${computer.teamPoints}`);
                        console.log(`${playerOne.teamName} ${playerOne.teamPoints}`);
                    }
                }
            }
            rl.setPrompt('OFFENSE\n' + offensivePlay[0] + ' | ' + offensivePlay[1] + ' | ' + offensivePlay[2])
            rl.prompt();
        }
    }
    // var rShot = Math.floor(Math.random() * madeShot.length);
    // if(input.toLowerCase === 'shoot'){
    //     var rPlays = Math.floor(Math.random() * plays.length);
    //     console.log(`${rCalls}, ${rPlays} is ${rShot}`)
    //     console.log(`${computer.teamName} ${computer.teamPoints}`);
    //     console.log(`${playerOne.teamName} ${playerOne.teamPoints}`);
    //     if(rPlays === 'freeThrow' && rShot === 'made'){
    //         playerOne.teamPoints += teamPoints + 1;
    //     }else if(rPlays === 'jumpshot' && rShot === 'made'){
    //         playerOne.teamPoints += teamPoints + 2;
    //     }else if(rPlays === 'threePointShot' && rShot === 'made'){
    //         playerOne.teamPoints += teamPoints + 3;
    //     }
    // }

    // if(computer.teamPoints >= 21){
    //     console.log(`You lost to the ${computer.teamName}, ${computer.teamPoints} to ${playerOne.teamPoints}`)
    //     rl.close();
    // }else{
    //     console.log(`You beat the ${computer.teamName}, ${playerOne.teamPoints} to ${computer.teamPoints}`)
    //     rl.close();
    // }
    
});
