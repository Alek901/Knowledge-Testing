
import Quiz from '../../src/components/Quiz'

describe('Quiz Component', () => {
    it('renders correctly', () => {
        cy.mount(<Quiz />)
        cy.get('[data-testid="answer-option"]').first().click()
        cy.get('[data-testid="next-button"]').click()
    })

    it('allows answering questions', () => {
        cy.mount(<Quiz />)
        cy.get('[data-testid="answer-option"]').first().click()
        cy.get('[data-testid="next-button"]').click()
    })

    it('shows final score', () => {
        cy.mount(<Quiz />)
        cy.get('[data-testid="answer-option"]').each(($option) => {
            cy.wrap($option).click()
            cy.get('[data-testid="next-button"]').click()
        })
        cy.get('[data-testid="final-score"]').should('be.visible')
    })
})
