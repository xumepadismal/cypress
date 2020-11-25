describe('TypeScript Spec', () => {
    it('should do something', () => {
        // Some comments and blank lines
        cy.wrap(5)

        // Some comments and blank lines
        cy.wrap(5)

        // Some comments and blank lines
        cy.wrap(5).then(v => expect(v).to.equal(10));
    });
});
