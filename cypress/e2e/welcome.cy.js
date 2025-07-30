describe('Verifying that our page is LIVE', () => {
  it('it visits the live app', () => {
    cy.visit('https://securityy.vercel.app/')

    cy.contains('EDO STATE SECURITY SUMMIT').should('be.visible')
    
  })

})
