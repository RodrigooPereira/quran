var fatiha = new Audio('../recitations/fatiha.mp3');

function playFatiha() {
    fatiha.play();
    pausefatiha.style.display = 'flex';
    playfatiha.style.display = 'none';
}

function pauseFatiha() {
    fatiha.pause();
    playfatiha.style.display = 'flex';
    pausefatiha.style.display = 'none';
}

