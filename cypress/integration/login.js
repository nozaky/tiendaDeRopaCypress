describe('Login', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('Login with incorrect email', () => {
        cy.login('something','pass');
        cy.fixture('loginPage').then((loginPage)=>{
            cy.get(loginPage.emailError).should('contain','Invalid email address');
        });
    });
});