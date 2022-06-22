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

  it.only('Verifies empty search results', () => {
    cy.contains('Contact').click({force: true})
    cy.get('#CookieBoxSaveButton').click()
    cy.contains('Contact').click().click()

    cy.contains("We'll get back").click()
    cy.get('input[name="firstname"]').type('Ramiro')
    cy.get('input[name="lastname"]').type('Blanco')
    cy.get('input[name="email"][class="hs-input"]').type('ramiroiblanco1980@mybusiness.com')
    cy.get('input[name="company"]').type('Ramiro Inc.')
    cy.get('textarea[class="hs-input"]').type("I'd like to know more about you!")
    cy.get('input[type="checkbox"][class="hs-input"]').click()
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