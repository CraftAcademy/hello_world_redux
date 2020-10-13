const stubLocation = require('../support/stubLocation')

describe('User can see current country', () => {
  beforeEach(() => {
    cy.visit("/", stubLocation({latitude: 28.9784, longitude: 41.0082 }))
  })

  it('that displays correctly', () => {
    cy.get("[data-cy='current-location']").should("contain", "You are in Finland!")
  });
})
