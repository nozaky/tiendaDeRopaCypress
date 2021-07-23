describe('Search elements', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('search for elements with multiple results', () => {
        cy.search('dress');
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.titleLabel).should('contain','dress');
        });
    });
    it('search for elements with no results', () => {
        cy.search('qwerty');
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.errorAlert).should('contain','No results were found for your search');
        });
    });
});