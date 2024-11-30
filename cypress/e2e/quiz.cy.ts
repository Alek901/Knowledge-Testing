describe('Quiz E2E', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('completes full quiz flow', () => {
        cy.get('[data-testid="start-quiz"]').click()
    })
})