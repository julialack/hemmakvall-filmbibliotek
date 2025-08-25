describe('Sökfunktion', () => {
  it('kan söka efter en film och visa resultat', () => {
    cy.visit('http://localhost:5173'); // Ändra port om din dev-server har annan port
    cy.get('input[placeholder="Sök efter filmer..."]').type('Batman');
    cy.contains('Sök').click();
    cy.contains('Batman').should('exist');
  });
});