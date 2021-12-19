context('Valid Log in to the Amazon WebSite',() => {
    it('It should launch the base url', () =>{
        cy.lauchSite('/');
    
    })

    it('It should assert helloAmen Button if it is visible', () =>{
        cy.fixture('element-mappers').then((em) => {
            cy.helloAmen(em.helloAmenButton);
        })
    })

    it('It should type User email Address on the field', () =>{
        cy.fixture('element-mappers').then((em) => {
            cy.typeEmail(em.email,'amenaghayedo@gmail.com');
        })
    })

    it('It should click on continue button', () =>{
        cy.fixture('element-mappers').then((em) => {
            cy.clickContinue(em.continueButton);
        })
    })

    })
