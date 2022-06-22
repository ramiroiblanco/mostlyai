describe('Mostly AI', () => {
  beforeEach(() => {
    cy.visit('https://mostly.ai/')
  })

  it('Verifies all bookmarks display on screen', () => {
    //Inconsistencies: Use cases vs Synthetic Data second word casing is not always the same.
    const tabStrings = ['Platform', 'Use cases', 'Synthetic Data', 'Resources', 'Contact']

    tabStrings.forEach(string => verifyElementByText(string))
  })

  it('Verifies empty search results', () => {
    const searchResultStrings = ['Sorry, no results for', 'sythetic', '0 results found']
    const searchValue = 'sythetic{enter}'

    doSearch(searchValue)

    searchResultStrings.forEach(string => verifyElementByText(string))
  })
})

function doSearch(text: string): void {
  const searchIcon = `button[aria-label="Open search"]`
  const searchBox = ".oxy-header-search_search-field"

  cy.get(searchIcon).click({force: true})
  cy.get(searchBox).type(text, {force: true})
}

function verifyElementByText(text: string): void {
  cy.contains(text).should('be.visible')
}