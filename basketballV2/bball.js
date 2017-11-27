var player = {
    name: undefined,
    score: 0
}
var ai = {
    name: 'MONSTARS',
    score: 0
}
let wins = 0;
let losses = 0;
document.addEventListener('DOMContentLoaded', ()=>{
    let e = document.querySelector('#start');
    let inp = document.querySelector('#team-name');
    let tName = document.querySelector('#tName');
    let s = document.querySelector('#enter');
    let monstars = document.querySelector('#monstars');
    let win = document.querySelector('#win');
    let loss = document.querySelector('#loss');
    let off = document.querySelector('#offense');
    let def = document.querySelector('#defense');
    let defend = document.querySelector('#defend');
    let steal = document.querySelector('#steal');
    let dunk = document.querySelector('#dunk');
    let shoot = document.querySelector('#shoot');
    let three = document.querySelector('#three')
    let play = Math.floor(Math.random() * 9);
    let points = document.querySelector('#score'); 
    let aiPoints = [2,3]       
    e.addEventListener('click', (event)=>{
        let text = inp.value;
        if(player.name === undefined){player.name = text.toUpperCase()};
        tName.innerText = `${player.name} vs ${ai.name}`;
        let jumpball = Math.floor(Math.random() * 4);
    if(jumpball < 2){
            off.classList.remove('hide');
        }
        else{
            def.classList.remove('hide');
        }   
        inp.classList.add('hide')
        e.classList.add('hide')
    })
    defend.addEventListener('click', (event)=>{
        let play = Math.floor(Math.random() * 9);        
        console.log(play)
        if(play > 4){ai.score += aiPoints[Math.floor(Math.random() * 2)]; points.innerText = `Poor defensive play by ${player.name}\n${player.name} ${player.score} \n${ai.name} ${ai.score}`}
        else{points.innerText = `Great defensive play by ${player.name}\n${player.name} ${player.score} \n${ai.name} ${ai.score}`} 

        if(ai.score >= 21){
            points.innerText = `${ai.name} defeated ${player.name}!!\nFINAL:\n${player.name} ${player.score}\n${ai.name} ${ai.score}`;
            loss.classList.remove('hide');             
            def.classList.add('hide')
            off.classList.add('hide')
        }else if(player.score >= 21){
            points.innerText = `Congrats ${player.name}!! you have defeated ${ai.name}!!\nFINAL:\n${player.name} ${player.score}\n${ai.name} ${ai.score}`
            win.classList.remove('hide');             
            def.classList.add('hide')
            off.classList.add('hide')
        }else if(ai.score === 20 && player.score === 20){
            points.innerText = `Next point WINS!!!`
        }
        
        def.classList.add('hide')
        off.classList.remove('hide')      
    })
    steal.addEventListener('click', (event)=>{
        let play = Math.floor(Math.random() * 9);        
        console.log(play)
        if(play > 4){ai.score += aiPoints[Math.floor(Math.random() * 2)]; points.innerText = `Bad gamble by ${player.name}\n${player.name} ${player.score} \n${ai.name} ${ai.score}`}
        else{points.innerText = `Great steal by ${player.name}\n${player.name} ${player.score} \n${ai.name} ${ai.score}`}

        if(ai.score >= 21){
            points.innerText = `${ai.name} defeated ${player.name}!!\nFINAL:\n${player.name} ${player.score}\n${ai.name} ${ai.score}`
            loss.classList.remove('hide');             
            def.classList.add('hide')
            off.classList.add('hide')
        }else if(player.score >= 21){
            points.innerText = `Congrats ${player.name}!! you have defeated ${ai.name}!!\nFINAL:\n${player.name} ${player.score}\n${ai.name} ${ai.score}`
            win.classList.remove('hide');             
            def.classList.add('hide')
            off.classList.add('hide')
        }else if(ai.score === 20 && player.score === 20){
            points.innerText = `Next point WINS!!!`
        }
        
        def.classList.add('hide')
        off.classList.remove('hide')              
    })
    dunk.addEventListener('click', (event)=>{
        let play = Math.floor(Math.random() * 9);
        console.log(play);                
        if(play > 2){player.score += 2; points.innerText = `What a dunk!!\n${player.name} ${player.score} \n${ai.name} ${ai.score}`;}
        else{points.innerText = `What a block by ${ai.name}!!\n${player.name} ${player.score} \n${ai.name} ${ai.score}`}

        if(ai.score >= 21){
            points.innerText = `${ai.name} defeated ${player.name}!!\nFINAL:\n${player.name} ${player.score}\n${ai.name} ${ai.score}`
            loss.classList.remove('hide');             
            def.classList.add('hide')
            off.classList.add('hide')
        }else if(player.score >= 21){
            points.innerText = `Congrats ${player.name}!! you have defeated ${ai.name}!!\nFINAL:\n${player.name} ${player.score}\n${ai.name} ${ai.score}`
            win.classList.remove('hide');             
            def.classList.add('hide')
            off.classList.add('hide')
        }else if(ai.score === 20 && player.score === 20){
            points.innerText = `Next point WINS!!!`
        }
        
        off.classList.add('hide')
        def.classList.remove('hide')      
    })
    shoot.addEventListener('click', (event)=>{
        let play = Math.floor(Math.random() * 9); 
        console.log(play)        
        if(play > 4){player.score += 2; points.innerText = `Great shot by ${player.name}!!\n${player.name} ${player.score} \n${ai.name} ${ai.score}`;}
        else{points.innerText = `The shot is no good!!\n${player.name} ${player.score} \n${ai.name} ${ai.score}`}

        if(ai.score >= 21){
            points.innerText = `${ai.name} defeated ${player.name}!!\nFINAL:\n${player.name} ${player.score}\n${ai.name} ${ai.score}`
            loss.classList.remove('hide');             
            def.classList.add('hide')
            off.classList.add('hide')
        }else if(player.score >= 21){
            points.innerText = `Congrats ${player.name}!! you have defeated ${ai.name}!!\nFINAL:\n${player.name} ${player.score}\n${ai.name} ${ai.score}`
            win.classList.remove('hide');             
            def.classList.add('hide')
            off.classList.add('hide')
        }else if(ai.score === 20 && player.score === 20){
            points.innerText = `Next point WINS!!!`
        }
        
        off.classList.add('hide')
        def.classList.remove('hide')      
    })
    three.addEventListener('click', (event)=>{
        let play = Math.floor(Math.random() * 9);                
        console.log(play)
        if(play > 5){player.score += 3; points.innerText = `From down town!!\n${player.name} ${player.score} \n${ai.name} ${ai.score}`;}
        else{points.innerText = `The three is no good!!\n${player.name} ${player.score} \n${ai.name} ${ai.score}`}

        if(ai.score >= 21){
            points.innerText = `${ai.name} defeated ${player.name}!!\nFINAL:\n${player.name} ${player.score}\n${ai.name} ${ai.score}`
            loss.classList.remove('hide');             
            def.classList.add('hide')
            off.classList.add('hide')
        }else if(player.score >= 21){
            points.innerText = `Congrats ${player.name}!! you have defeated ${ai.name}!!\nFINAL:\n${player.name} ${player.score}\n${ai.name} ${ai.score}`
            win.classList.remove('hide');             
            def.classList.add('hide')
            off.classList.add('hide')
        }else if(ai.score === 20 && player.score === 20){
            points.innerText = `Next point WINS!!!`
        }
        
        off.classList.add('hide')
        def.classList.remove('hide')      
    })
})