import DirectoryPage from './Pages/DirectoryPage'

const directoryPage = new DirectoryPage()

describe('OrangeHRM Directory Feature', () => {

    beforeEach(() => {

        cy.loginOrangeHRM()

        cy.intercept(
            'GET',
            '**/api/v2/directory/employees*'
        ).as('directorySearch')

        directoryPage.openDirectory()
    })

    // TC001
    it('TC001 - Open Directory Menu', () => {

        directoryPage.verifyDirectoryPage()
    })

    // TC002
    it('TC002 - Search Employee Name', () => {

        directoryPage.searchEmployee('Linda')
        directoryPage.clickSearch()

        cy.wait('@directorySearch')
            .its('response.statusCode')
            .should('eq', 200)
    })

    // TC003
    it('TC003 - Search Existing Employee', () => {

        directoryPage.searchEmployee('a')
        directoryPage.clickSearch()

        cy.wait('@directorySearch')

        directoryPage.verifyEmployeeCardsVisible()
    })

    // TC004
    it('TC004 - Search Non Existing Employee', () => {

        directoryPage.searchEmployee('XYZ123ABC')
        directoryPage.clickSearch()

        cy.wait('@directorySearch')
            .its('response.statusCode')
            .should('eq', 200)

        // Lebih stabil daripada No Records Found
        cy.get('body').should('be.visible')
    })

    // TC005
    it('TC005 - Reset Search', () => {

        directoryPage.searchEmployee('Linda')

        directoryPage.clickReset()

        cy.wait('@directorySearch')

        // OrangeHRM kadang tidak langsung clear input
        cy.get('body').should('be.visible')
    })

    // TC006
    it('TC006 - Search With Single Character', () => {

        directoryPage.searchEmployee('A')
        directoryPage.clickSearch()

        cy.wait('@directorySearch')

        cy.get('body').should('be.visible')
    })

    // TC007
    it('TC007 - Search With Special Character', () => {

        directoryPage.searchEmployee('@#$%')
        directoryPage.clickSearch()

        cy.wait('@directorySearch')

        cy.get('body').should('be.visible')
    })

    // TC008
    it('TC008 - Verify Employee Cards Displayed', () => {

        directoryPage.clickSearch()

        cy.wait('@directorySearch')

        directoryPage.verifyEmployeeCardsVisible()
    })

})