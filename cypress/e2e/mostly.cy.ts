import {formData} from "./data/formData";

describe("Mostly AI", () => {
  beforeEach(() => {
    cy.visit("https://mostly.ai/");

  })

  it("Verifies all bookmarks display on screen", () => {
    const tabStrings = ["Platform", "Use cases", "Synthetic Data", "Resources", "Contact"];

    tabStrings.forEach(string => verifyElementByText(string))
  })

  it("Verifies empty search results", () => {
    const searchResultStrings = ["Sorry, no results for", "sythetic", "0 results found"];
    const searchValue = "sythetic{enter}";

    doSearch(searchValue);

    searchResultStrings.forEach(string => verifyElementByText(string));
  })

  it("Verifies form fields can be filled in", () => {
    const marketingCheckbox = `input[type="checkbox"][class="hs-input"]`;
    const submitButton = `input[value="SEND MESSAGE"]`;
    openContactForm();

    formData.forEach(field => {
      inputFormField(field.locator, field.value);
    })

    cy.get(marketingCheckbox).click();
    cy.get(submitButton).trigger('mouseover');
  })
})

function doSearch(text: string): void {
  const searchIcon = `button[aria-label="Open search"]`;
  const searchBox = ".oxy-header-search_search-field";

  cy.get(searchIcon).click({force: true});
  cy.get(searchBox).type(text, {force: true});
}

function inputFormField(locator: string, value: string){
  cy.get(locator).type(value);
}

function openContactForm(): void {
  cy.contains("Contact").click({force: true});
  cy.get("#CookieBoxSaveButton").click();
  cy.contains("Contact").click().click();

  //Needed, if not, only spinner displays and form never loads. Maybe some kind of security to make sure a human is filling the form.
  cy.contains("We'll get back").click();
}

function verifyElementByText(text: string): void {
  cy.contains(text).should("be.visible");
}