/// <reference types="cypress" />

require('cypress-xpath')

export function leerJson() {
    cy.fixture('data.json').then((usuario)  => {
      nombre = usuario.user
      return nombre
})
}

export function ingresarHome() {
    cy.fixture('data.json').then((data) => {
        var uri = data.uri
        cy.visit(uri)
        cy.screenshot()
})
}
  
export function ingresarUser() {
    cy.fixture('user.json').then((usuario)  => {
        var nombre = usuario.user
        cy.get('#user-name').type(nombre)
})
}

export function ingresarPass() {
    cy.fixture('user.json').then((usuario)  => {
        var pass = usuario.password
        cy.get('#password').type(pass)
})
}

export function btnLogin() {
    cy.get('.btn_action').click()
}

export function menuHamb (){
    cy.get('.bm-burger-button > button').click()
}
  
export function btnLogout(){
    cy.get('#logout_sidebar_link').click()
    cy.url().should('equal','https://www.saucedemo.com/index.html')
}

export function btnAddToCart(index){
    cy.xpath(`//*[@id="inventory_container"]/div/div[${index}]/div[3]/button`).click()
}

export function btnCarrito(){
    cy.get('path').click()
}

export function  bntCheckOut(){
    cy.get('.btn_action').click()
}

export function inputFirstName(name){
    cy.get('[data-test=firstName]').type(name)
}

export function inputLastName(lastName){
    cy.get('[data-test=lastName]').type(lastName)
}

export function inputZipCode(zipCode){
    cy.get('[data-test=postalCode]').type(zipCode)
}

export function btnContinue(){
    cy.get('.btn_primary').click()
}

export function btnFinish(){
    cy.get('.btn_action').click()
    cy.screenshot()
}