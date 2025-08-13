// describe('Verifying that our page is LIVE', () => {
//   it('it visits the live app', () => {
//     cy.visit('https://securityy.vercel.app/')

//     cy.contains('EDO STATE SECURITY SUMMIT').should('be.visible')
    
//   })

// })

describe('NNavigation Test', () => {
  it('it visits the live app', () => {
    cy.visit('https://securityy.vercel.app/')
    cy.contains('Event').click()
    cy.url().should('include', '/event')
    cy.contains('THE EDO STATE SECURITY SUMMIT').should('be.visible')

    cy.contains('Speakers').click()
    cy.url().should('include', '/speakers')
    cy.contains('THE EDO STATE SECURITY SUMMIT').should('be.visible')

    cy.contains('Gallery').click()
    cy.url().should('include', '/gallery')
    cy.contains('Our Gallery').should('be.visible')

    cy.contains('Services').click()
    cy.url().should('include', '/services')
    cy.contains('Ministry of Public Security and Safety').should('be.visible')

    cy.contains('Contact').click()
    cy.url().should('include', '/contact')

    cy.contains('FOR ENQUIRES!').should('be.visible')
    
  })

})
