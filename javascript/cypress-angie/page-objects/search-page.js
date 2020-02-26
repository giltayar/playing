/// <reference types="cypress" />

export class SearchPage {

     constructor() {
        this.url = 'https://automationbookstore.dev/'
        this.searchBar =  '#searchBar'
        this.visibleBooks = 'li:not(.ui-screen-hidden)'
        this.hiddenBooks = 'li.ui-screen-hidden'
    }

    navigate() {
        cy.visit(this.url) 
    }

    search(query) { 
        cy.get(this.searchBar).type(query)
    }

    getVisibleBooks() {
        return cy.get(this.visibleBooks)
    }
}