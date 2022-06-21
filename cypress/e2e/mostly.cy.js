describe('Mostly AI', () => {
  it('Verifies all bookmarks display on screen', () => {
    //Inconsistencies: Use cases vs Synthetic Data second word casing is not always the same.
    const bookmarks = ['Platform', 'Use cases', 'Synthetic Data', 'Resources', 'Contact']

    cy.visit('https://mostly.ai/')

    bookmarks.forEach(bookmark => cy.contains(bookmark))
  })
})