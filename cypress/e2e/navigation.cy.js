describe('Header component', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('should render all navigation links correctly', () => {
		cy.contains('Overview').should('be.visible');
		cy.contains('Projects').should('be.visible');
		cy.contains('Profile').should('be.visible');
		cy.contains('Get in Touch').should('be.visible');
	});
});

describe('should check navigation redirecting', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('should render all pages correctly', () => {
		cy.contains('Overview').click();
		cy.url().should('include', '/');

		cy.contains('Projects').click();
		cy.url().should('include', '/projects');

		cy.contains('Profile').click();
		cy.url().should('include', '/profile');

		cy.contains('Get in Touch').click();
		cy.url().should('include', '/contacts');
	});
});
