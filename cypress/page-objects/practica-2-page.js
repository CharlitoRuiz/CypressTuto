/// <reference types="cypress" />

require('cypress-xpath')

export function leerJson() {
    cy.fixture('data.json').then((usuario)  => {
      nombre = usuario.user
      return nombre
})
}

export function ingresarURI() {
    cy.fixture('data.json').then((data) => {
        var uri = data.uriPractica2
        console.log(uri)
        cy.visit(uri)
})
}
  
export function btnForm() {
    cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click()
}

export function ingresarNombre() {
    cy.fixture('form.json').then((datos)  => {
        var nombre = datos.Name
        cy.get('#firstName').type(nombre)
})
}

export function ingresarApellido() {
    cy.fixture('form.json').then((datos)  => {
        var apellido = datos.lastName
        cy.get('#lastName').type(apellido)
})
}

export function ingresarCorreo() {
    cy.fixture('form.json').then((datos)  => {
        var correo = datos.email
        cy.get('#userEmail').type(correo)
})
}

export function rdGenero() {
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()
}

export function ingresarTelefono() {
    cy.fixture('form.json').then((datos)  => {
        var telefono = datos.mobile
        cy.get('#userNumber').type(telefono)
})
}

export function selectFechaNacimiento (){
    cy.get('#dateOfBirthInput').click()
    cy.get('.react-datepicker__month-select').select('November')
    cy.get('.react-datepicker__year-select').select('1988')
    cy.get(':nth-child(1) > .react-datepicker__day--004').click()
}

export function ingresarSubject() {
    cy.fixture('form.json').then((datos) =>{
        var subject = datos.subjects
        cy.get('#subjectsInput').type(subject + '{enter}')
    })
}

export function ingresarDireccion() {
    cy.fixture('form.json').then((datos) =>{
        var direccion = datos.address
        cy.get('#currentAddress').type(direccion)
    })
}
  
export function chkPasatiempo(){
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3)').click()
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()
}

export function btnSubirImagen(){
    cy.get('.form-control-file').click()
}

export function elegirCuidad(){
    cy.fixture('form.json').then((datos) =>{
        var stado = datos.state
        var cuidad = datos.city
        cy.get('#stateCity-wrapper > :nth-child(2)').click()
        cy.get('#stateCity-wrapper > :nth-child(2)').type(stado + '{enter}')
        cy.get('#stateCity-wrapper > :nth-child(2)').click()
        cy.get('#stateCity-wrapper > :nth-child(2)').type(cuidad + '{enter}')
    })
}

export function btnSalir(){
    cy.get('#closeLargeModal').click()

}