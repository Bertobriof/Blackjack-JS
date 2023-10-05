/**
 * 
 * @param {String} carta Nombre de la carta. Ej: 2H.
 * @param {HTMLElement} divCartas Elemento HTML que identifica que jugador recibe la cata. 
 */
export const crearCarta = (carta,divCartas) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    divCartas.append( imgCarta );
}

