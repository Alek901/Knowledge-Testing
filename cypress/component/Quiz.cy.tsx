
import Quiz from '../../src/components/Quiz'

describe('Quiz Component', () => {
    it('renders correctly', () => {
        cy.mount(<Quiz />)
        cy.get('[data-testid="answer-option"]').first().click()
        cy.get('[data-testid="next-button"]').click()
    })

    
}
