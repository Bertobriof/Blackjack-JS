// Esta función me permite tomar una carta

/**
 * 
 * @param {Array<string>} deck Necesita un array con las cartas. 
 * @returns {carta<string>} Devuelve una carta
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}