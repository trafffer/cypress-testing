/// <reference types="cypress" />

describe('tests',()=>{
    beforeEach(()=>{
        cy.viewport(1920, 1080)
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })
    it('firstTest',()=>{
        cy.contains('GreenKart - buy veg and fruits online').should('exist')
    })
    it('searchTest',()=>{
       cy.get('[type=search]').click().clear().type('br')
       cy.get('.product').get('.product:visible').should('have.length',2)
       .each(()=>{
               cy.contains('ADD TO CART').click();
        });
       cy.get('table tbody tr td strong').last().should('have.text',155)
       cy.get('img[alt=Cart]').click();
       cy.get('.cart-preview.active').should('be.visible').should('contain','Brocolli').should('contain','Brinjal');
       cy.contains('PROCEED TO CHECKOUT').click()
       cy.url().should('include','/cart')
       cy.get('input[class="promoCode"]').type('45455')
       cy.get('button[class="promoBtn"]').click()
       cy.wait(6000)
       cy.get('.promoInfo')
       .should('be.visible').should('have.text','Invalid code ..!')
       cy.contains('Place Order').click();
       cy.get('select').select('Bulgaria').should('contain','Bulgaria');
       cy.get('input[type=checkbox]').check().should('be.checked');
       cy.contains('Proceed').click();
       cy.contains('Thank you, your order has been placed successfully')
       cy.wait(6000)
       cy.url().should('eq','https://rahulshettyacademy.com/seleniumPractise/#/')
    })
})