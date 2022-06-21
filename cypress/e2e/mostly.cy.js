describe('Mostly AI', () => {
  it('Verifies all bookmarks display on screen', () => {
    //Inconsistencies: Use cases vs Synthetic Data second word casing is not always the same.
    const bookmarks = ['Platform', 'Use cases', 'Synthetic Data', 'Resources', 'Contact']

    cy.visit('https://mostly.ai/')

    bookmarks.forEach(bookmark => cy.contains(bookmark).should('be.visible'))
  })

  it('Verifies empty search results', () => {
    //click search
    cy.get('button[aria-label="Open search"]').click({force: true})
    //enter search text
    cy.get('.oxy-header-search_search-field').type('sythetic{enter}', {force: true})

    //verify search result
    cy.contains('Sorry, no results for').should('be.visible')
    cy.contains('sythetic').should('be.visible')
    cy.contains('0 results found').should('be.visible')

  })
})