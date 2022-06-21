describe('Mostly AI', () => {
  beforeEach(() => {
    cy.visit('https://mostly.ai/')
  })

  it('Verifies all bookmarks display on screen', () => {
    //Inconsistencies: Use cases vs Synthetic Data second word casing is not always the same.
    const strings = ['Platform', 'Use cases', 'Synthetic Data', 'Resources', 'Contact']

    strings.forEach(string => verifyByText(string))
  })

  it('Verifies empty search results', () => {
    const strings = ['Sorry, no results for', 'sythetic', '0 results found']

    doSearch('sythetic{enter}')

    strings.forEach(string => verifyByText(string))

  })

  function doSearch(text: string): void {
    cy.get('button[aria-label="Open search"]').click({force: true})
    cy.get('.oxy-header-search_search-field').type(text, {force: true})
  }

  function verifyByText(text: string): void {
    cy.contains(text).should('be.visible')
  }
})