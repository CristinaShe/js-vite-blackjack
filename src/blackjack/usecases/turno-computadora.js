import { pedirCarta, valorCarta, crearCartaHTML } from "./";

/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {Array<String>} deck 
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas
 */

export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {

    if (!puntosMinimos) mensaje2.innerText = 'Puntos mínimos son necesarios'
    if (!puntosHTML) mensaje2.innerText = 'Argumento puntosHTML es necesario'

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // TODO: crear carta
        const imgCarta = crearCartaHTML(carta)
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            mensaje2.innerText = 'Nadie gana :('
        } else if ( puntosMinimos > 21 ) {
            mensaje2.innerText = 'Computadora gana'
        } else if( puntosComputadora > 21 ) {
            mensaje2.innerText = 'Jugador Gana'
        } else {
            mensaje2.innerText = 'Computadora Gana'
        }
    }, 100 );
}