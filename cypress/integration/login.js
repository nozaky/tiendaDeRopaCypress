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
    it('Correct login', () => {
        cy.login('danim@gmail.com','danim123');
        cy.fixture('myAccountPage').then((myAccount)=>{
            cy.get(myAccount.accountLabel).should('exist');
        });    
    });
});