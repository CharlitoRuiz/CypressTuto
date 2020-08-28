/// <reference types="cypress" />

import * as paginaPage from '../page-objects/practica-2-page'
// describe: test suite
  describe('Practica formulario', () => {
    // antes de todas las pruebas, hacer esto:
    beforeEach(() => {

      paginaPage.ingresarURI()

      // Assertion
    })
  
  // it: test case
    it('Click al boton form', () => {
      
      paginaPage.btnForm()

      // validacion
      cy.url().should('equal', 'https://demoqa.com/automation-practice-form')

      // tomar captura
      cy.screenshot()

      paginaPage.ingresarNombre()
      paginaPage.ingresarApellido()
      paginaPage.ingresarCorreo()
      paginaPage.rdGenero()
      paginaPage.ingresarTelefono()
      paginaPage.selectFechaNacimiento()
      paginaPage.ingresarSubject()
      paginaPage.chkPasatiempo()
      paginaPage.ingresarDireccion()
      paginaPage.elegirCuidad()

      // tomar captura
      cy.screenshot()

      paginaPage.btnSalir()

    })
})