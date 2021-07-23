describe('Search elements', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('search for elements with multiple results', () => {
        cy.fixture('homePage').then((homePage) =>{
            cy.get(homePage.searchInput).type('dress');
            cy.get(homePage.searchButton).click();
        });
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.titleLabel).should('contain','dress');
        });
    });
    it('search for elements with no results', () => {
        cy.fixture('homePage').then((homePage) =>{
            cy.get(homePage.searchInput).type('qwerty');
            cy.get(homePage.searchButton).click();
        });
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.errorAlert).should('contain','No results were found for your search');
        });
    });
});