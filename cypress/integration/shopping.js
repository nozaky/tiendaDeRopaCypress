describe('Open shopping cart', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('open Shopping Cart', () => {
        cy.openShopCart();
    });
});