class RecruitmentPage {

    openRecruitment() {
        cy.contains('Recruitment').click()
    }

    searchButton() {
        return cy.contains('button', 'Search')
    }

    resetButton() {
        return cy.contains('button', 'Reset')
    }

    addButton() {
        return cy.contains('button', 'Add')
    }

    candidateField() {
        return cy.get('input[placeholder="Type for hints..."]').first()
    }

    searchCandidate(name) {
        this.candidateField().clear().type(name)
    }

    clickSearch() {
        this.searchButton().click()
    }

    clickReset() {
        this.resetButton().click()
    }

    clickAdd() {
        this.addButton().click()
    }

    verifyRecruitmentPage() {
        cy.url().should('include', 'recruitment')
    }
}

export default RecruitmentPage