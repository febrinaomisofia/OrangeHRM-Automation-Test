import RecruitmentPage from './Pages/RecruitmentPage'

const recruitmentPage = new RecruitmentPage()

describe('OrangeHRM Recruitment Feature', () => {

    beforeEach(() => {

        cy.loginOrangeHRM()

        cy.intercept(
            'GET',
            '**/api/v2/recruitment/candidates*'
        ).as('candidateSearch')

        recruitmentPage.openRecruitment()
    })

    // TC001
    it('TC001 - Open Recruitment Menu', () => {

        recruitmentPage.verifyRecruitmentPage()
    })

    // TC002
    it('TC002 - Search Candidate Name', () => {

        recruitmentPage.searchCandidate('John')
        recruitmentPage.clickSearch()

        cy.wait('@candidateSearch')
            .its('response.statusCode')
            .should('eq', 200)
    })

    // TC003
    it('TC003 - Search Existing Candidate', () => {

        recruitmentPage.searchCandidate('a')
        recruitmentPage.clickSearch()

        cy.wait('@candidateSearch')

        cy.get('.oxd-table')
            .should('exist')
    })

    // TC004
    it('TC004 - Search Invalid Candidate', () => {

        recruitmentPage.searchCandidate('XYZ123ABC')
        recruitmentPage.clickSearch()

        cy.wait('@candidateSearch')
            .its('response.statusCode')
            .should('eq', 200)
    })

    // TC005
    it('TC005 - Reset Search', () => {

        recruitmentPage.searchCandidate('John')

        recruitmentPage.clickReset()

        cy.wait('@candidateSearch')

        cy.get('body')
            .should('be.visible')
    })

    // TC006
    it('TC006 - Open Add Candidate Form', () => {

        recruitmentPage.clickAdd()

        cy.url()
            .should('include', 'addCandidate')
    })

    // TC007
    it('TC007 - Verify Recruitment Table Displayed', () => {

        recruitmentPage.clickSearch()

        cy.wait('@candidateSearch')

        cy.get('.oxd-table')
            .should('be.visible')
    })

    // TC008
    it('TC008 - Search With Special Character', () => {

        recruitmentPage.searchCandidate('@#$%')
        recruitmentPage.clickSearch()

        cy.wait('@candidateSearch')

        cy.get('body')
            .should('be.visible')
    })

})