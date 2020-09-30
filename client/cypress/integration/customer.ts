describe('customer', () => {
  let customerMock, name;

  beforeEach(() => {
    cy.fixture('customer').then((customer: any) => {
      console.log("customer", customer)
      customerMock = customer;
      name = customerMock.name.first + " " + customerMock.name.last;
    });
  });

  function goToCustomerPage() {
    cy.visit('http://localhost:4200/#/customer');
    cy.get('.header').should('be.visible');
  }

  function fillField(field, value) {
    cy.get(`input[formControlName="${field}"]`)
      .clear()
      .scrollIntoView()
      .should('be.visible').type(value);
  }

  describe('customer crud', () => {
    it('should create a customer', () => {
      goToCustomerPage();
      cy.get('#create').should('be.visible').click();
      cy.get('#submit-button').scrollIntoView().should('be.visible').should('be.disabled');
      // input
      fillField('first', customerMock.name.first);
      fillField('last', customerMock.name.last);
      fillField('birthday', customerMock.birthday);
      fillField('lastContact', customerMock.lastContact);
      fillField('customerLifetimeValue', customerMock.customerLifetimeValue);
      cy.get('#submit-button').scrollIntoView().should('not.be.disabled').click();
      cy.get('p').contains(name).should('be.visible');
    });

    it('should update a customer', () => {
      goToCustomerPage();
      cy.get('p').contains(name).should('be.visible').click();
      cy.get('#submit-button').scrollIntoView().should('be.visible');
      // input
      fillField('first', 'Mock');
      fillField('last', 'Mock');
      cy.get('#submit-button').scrollIntoView().should('not.be.disabled').click();
      cy.get('p').contains("Mock Mock").should('be.visible');
    });

    it('should delete a customer', () => {
      goToCustomerPage();
      cy.get('p').contains("Mock Mock").should('be.visible').click();
      cy.get('.delete').scrollIntoView().should('be.visible').click();
      cy.get('p').contains("Mock Mock").should('not.be.visible');
    });
  });
});
