describe('Quiz E2E', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('completes full quiz flow', () => {
        cy.get('[data-testid="start-quiz"]').click()

        cy.get('[data-testid="quiz-container"]').within(() => {
            cy.get('[data-testid="snswer-option"]').each(($option) => {
                cy.wrap($option).click()
                cy.get('[data-testid="next-button"]').click()
            })
        })

        cy.get('[data-testid="final-score"]').should('be.visible')
        cy.get('[data-testid="restart-button"]').should('be visible')
    })

    it('can restart quiz', () => {
        cy.get('[data-testid="start-quiz"]').click()

        cy.get('[data-testid="quiz-container"]').within(( => {
            cy.get('[data-testid="answer-option"]').each(($option) => {
                cy.wrap($option).click()
                cy.get('[data-testid=:next-button"]').click()
        }))
})