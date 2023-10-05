/**
 * 
 * @param {string} carta Nombre de carta como string. Ejempo: 2H.
 * @returns {number} Devuelve el valor numérico vinculado a esa carta.
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}