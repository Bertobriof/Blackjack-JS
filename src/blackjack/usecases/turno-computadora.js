import { crearCarta } from "./crear-carta";
import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";


/**
 * 
 * @param {Number} puntosMinimos Puntos mínimos que la CPU necesita para ganar. 
 * @param {Array<String>} deck Mazo de cartas.
 * @param {HTMLElement} elemento HTML para mostrar los puntos de la CPU.
 * @param {HTMLHtmlElement} divCartasComputadora HTML para añadir las cartas.
 */
export const turnoComputadora = ( puntosMinimos, deck = [], puntosHTML, divCartasComputadora ) => {
    if(!puntosMinimos) throw new Error('Puntos mínimos son necesarios');
    if(!puntosHTML) throw new Error('puntosHTML son necesarios');
    if(!divCartasComputadora) throw new Error('divCartasComputadora son necesarios');
    if(!deck) throw new Error('El deck es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        // const imgCarta = document.createElement('img');
        // imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        // imgCarta.classList.add('carta');
        // divCartasComputadora.append( imgCarta );
        crearCarta(carta,divCartasComputadora);

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Empate');
        } else if ( puntosMinimos > 21 ) {
            alert('Derrota. Gana la CPU')
        } else if( puntosComputadora > 21 ) {
            alert('¡Victoria! Gana el jugador');
        } else {
            alert('Derrota. Gana la CPU')
        }
    }, 100 );
}