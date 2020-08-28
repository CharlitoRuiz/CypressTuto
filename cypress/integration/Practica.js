/// <reference types="cypress" />

import * as paginaPage from '../page-objects/practica-page'

// describe: test suite
  describe('Ingresar a la página Swaglabs', () => {
    // antes de todas las pruebas, hacer esto:
    beforeEach(() => {

      paginaPage.ingresarHome()
      paginaPage.ingresarUser()
      paginaPage.ingresarPass()
      paginaPage.btnLogin()

      // Assertion
      cy.url().should('equal', 'https://www.saucedemo.com/inventory.html')
    })
  
  // it: test case
    it('Comprar un producto', () => {
      
      // Se le envia el index del botón que se quiere seleccionar
      paginaPage.btnAddToCart('1')
      paginaPage.btnCarrito()
      paginaPage.bntCheckOut()
      paginaPage.inputFirstName('Carlos')
      paginaPage.inputLastName('Ruiz')
      paginaPage.inputZipCode('10000')
      paginaPage.btnContinue()
      paginaPage.btnFinish()

      // Assertion 
      cy.url().should('equal','https://www.saucedemo.com/checkout-complete.html')
      cy.get('.pony_express').should('be.visible')
    })
})