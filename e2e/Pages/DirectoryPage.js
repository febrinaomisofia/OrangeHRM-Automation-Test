class DirectoryPage {

    openDirectory() {
        cy.contains('Directory').click()
    }

    employeeNameField() {
        return cy.get('input[placeholder="Type for hints..."]').first()
    }

    searchButton() {
        return cy.contains('button', 'Search')
    }

    resetButton() {
        return cy.contains('button', 'Reset')
    }

    searchEmployee(name) {
        this.employeeNameField().clear().type(name)
    }

    clickSearch() {
        this.searchButton().click()
    }

    clickReset() {
        this.resetButton().click()
    }

    verifyDirectoryPage() {
        cy.url().should('include', 'directory')
    }

    verifyEmployeeCardsVisible() {
        cy.get('.oxd-sheet').should('exist')
    }
}

export default DirectoryPage