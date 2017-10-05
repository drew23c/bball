var readline = require('readline');

var rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

var playerOne ={
    teamName: undefined,
    teamPoints:0
}
var computer = {
    teamName: 'Monstars',
    teamPoints: 0
}

console.log('Time to play the MONSTARS');
rl.setPrompt('Enter your team name');
rl.prompt();

var plays = [
    'freeThrow', 'jumpShot', 'threePointShot'] 
var calls=['WWWOOOOWWW','BOOM SHAKALAKA', 'You won\t see that everyday',
'someone\s ankle is broken', 'Man DOWN']
var madeShot =['made','missed']

var rPlays = Math.floor(Math.random() * plays.length);
var rCalls = Math.floor(Math.random() * calls.length);
var rShot = Math.floor(Math.random() * madeShot.length);


rl.on('line', function(input){
    if(playerOne.teamName === undefined){
        playerOne.teamName = input;
    }
    console.log('JUMPBALL')
    var jumpBall = Math.floor(Math.floor(Math.random() * 5))    
    if(jumpBall > 3){
        console.log(`${playerOne.teamName}'s ball`)
    }else{
        console.log(`${computer.teamName} ball`)
    }
    var rShot = Math.floor(Math.random() * madeShot.length);
    if(input.toLowerCase === 'shoot'){
        var rPlays = Math.floor(Math.random() * plays.length);
        console.log(`${rCalls}, ${rPlays} is ${rShot}`)
        console.log(`${computer.teamName} ${computer.teamPoints}`);
        console.log(`${playerOne.teamName} ${playerOne.teamPoints}`);
        if(rPlays === 'freeThrow' && rShot === 'made'){
            playerOne.teamPoints += teamPoints + 1;
        }else if(rPlays === 'jumpshot' && rShot === 'made'){
            playerOne.teamPoints += teamPoints + 2;
        }else if(rPlays === 'threePointShot' && rShot === 'made'){
            playerOne.teamPoints += teamPoints + 3;
        }
    }
    
})