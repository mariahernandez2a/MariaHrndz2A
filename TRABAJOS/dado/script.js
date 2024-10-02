function dado(){
    const min = +document.querySelector('#numMin');
    const max = +document.querySelector('numMax');
    let random = Math.round(Math.random()*(max-min+1)+min);
    const salida = document.querySelector('#out');
    salida.textContent = random;
}
