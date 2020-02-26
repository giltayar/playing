import { SearchPage } from '../../page-objects/search-page'
import { ValidationUtils } from '../../utils/search-validation-utils'

describe('Search for books', () => {
    const page = new SearchPage()
    const validator = new ValidationUtils(page)

    beforeEach( () => {
        page.navigate()
        cy.eyesOpen({
            appName: 'Automation Bookstore',
            batchName: 'Cypress: Bookstore Search Jan 4',
            browser: [ {name: 'chrome', width: 1024, height: 768} ]
        })
    })

    afterEach(() => cy.eyesClose())

    it('should return one book with title Agile Testing', () => {
        page.search('Agile Testing')
        cy.wait(1000) //TODO: wait conditionally
       cy.eyesCheckWindow()
    })
})

    // it('should return one book with title Agile Testing', () => {
    //     const title = 'Agile Testing'
    //     page.search(title)
    //     validator.validateNumberOfVisibleBooks(1)
    //     validator.validateTitleIsVisible(title)
    // })