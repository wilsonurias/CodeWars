// Who remembers back to their time in the schoolyard, when girls would
// take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, 
// where nb_petals > 0


function howMuchILoveYou(nbPetals) {
    const statement = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
    for (let i = 0; i <= nbPetals; i++) {
        statement.push(statement[i])
    }
    return statement[nbPetals-1]
}