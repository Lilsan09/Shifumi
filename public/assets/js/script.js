const buttons = document.querySelectorAll('button');
let playerCount = 0;
let IaCount = 0;
let winrateCounter;
let partiesCounter = 0;
let IaCounter =0;
let VicDefCount =0;
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        partiesCounter++;
        const player = buttons[i].innerHTML;
        const IA = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
        let resultat='';
        if (player === "Pierre") {
            document.getElementById('btn3').style.borderColor='initial'
            document.getElementById('btn2').style.borderColor='initial'
            document.getElementById('btn1').style.borderColor='blue'
        }
        if (player === "Feuille") {
            document.getElementById('btn1').style.borderColor='initial'
            document.getElementById('btn3').style.borderColor='initial'
            document.getElementById('btn2').style.borderColor='blue'
        }
        if (player === "Ciseaux") {
            document.getElementById('btn1').style.borderColor='initial'
            document.getElementById('btn2').style.borderColor='initial'
            document.getElementById('btn3').style.borderColor='blue'
        }
        if (player === IA) {
            // resultat = 'Égalité😐';
            document.getElementById('resultVD').style.display='block';
            document.getElementById('resultVD').src='public/assets/img/tie_game.png';
        }
        else if (player === 'Pierre' && IA === 'Ciseaux' ||
            player === 'Feuille' && IA === 'Pierre' ||
            player === 'Ciseaux' && IA === 'Feuille') {
            // resultat = 'Gagné!🎉';
            document.getElementById('resultVD').style.display='block';
            document.getElementById('resultVD').src='public/assets/img/victory.png';
            playerCount++;
            VicDefCount++;
            document.querySelector('.winCounter').textContent = `${playerCount}`; 
        }   
        else {
            // resultat = 'Perdu..☹️';
            document.getElementById('resultVD').style.display='block';
            document.getElementById('resultVD').src='public/assets/img/defaite.png';
            IaCount++;
            document.querySelector('.loseCounter').textContent = `${IaCount}`; 
            IaCounter++
            VicDefCount++;

            
            // document.getElementById('result').innerHTML='<img src="public/assets/img/defaite.png" alt="defaite">'
            
            // 2eme test
            // img.src = '../img/defaite.png'
            // div.appendChild(img);
        }
        document.querySelector('.resultat').innerHTML = `${resultat}` 
        if (IA === 'Ciseaux'){
            document.getElementById('resultImg').innerHTML='<img src="public/assets/img/gwen.png" alt="Ciseaux">'
        }
        if (IA === 'Pierre'){
            document.getElementById('resultImg').innerHTML='<img src="public/assets/img/Malphite.png" alt="Pierre">'
        }
        if (IA === 'Feuille'){
            document.getElementById('resultImg').innerHTML='<img src="public/assets/img/aniviaPaper.png" alt="Feuille">'
        }
        winrateCounter = parseInt((playerCount/VicDefCount)*100);
        document.querySelector('.winRateCounter').textContent = `${winrateCounter}%`;
    }
    )
}