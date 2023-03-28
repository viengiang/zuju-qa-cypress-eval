class General {
	public signInEndpoint: string;
	public forgotPasswordEndpoint: string;
	public reputationEndpoint: string;

	constructor() {
		this.signInEndpoint = '/#sign-in';
		this.forgotPasswordEndpoint = '/#forgot-password';
		this.reputationEndpoint = '/reputation';
	}

	public get h2Heading() {
		return cy.get('.MuiTypography-h2');
	}

	public accessToEndpoint(endpoint: string) {
		cy.visit(endpoint);

		cy.url().should('eq', Cypress.config().baseUrl + endpoint);
	}
}

export default new General();
