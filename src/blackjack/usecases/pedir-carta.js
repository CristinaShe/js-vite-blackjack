
/**
 * 
 * @param {Array<String>} deck es un array de string
 * @returns {String} retorna la carta del deck
 */
export const pedirCarta = (deck) => {
    if (!deck || deck.lenght === 0) {
        mensaje2.innerText = 'No hay cartas en el deck'
    }
    const carta = deck.pop();
    return carta;
}