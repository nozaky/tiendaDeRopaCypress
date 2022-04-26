Cypress.Commands.add('login', (user,pass)=>{
    cy.fixture('homePage').then((homePage)=>{
        cy.get(homePage.loginButton).click();
    });
    cy.fixture('loginPage').then((loginPage)=>{
        cy.get(loginPage.emailInput).type(user);
        cy.get(loginPage.passInput).type(pass);
        cy.get(loginPage.loginButton).click();
    });
})