class HomePage {
	public upcomingHeading: string;

	constructor() {
		this.upcomingHeading = 'Upcoming for you';
	}

	get pageHeading() {
		return cy.get('[data-cy="page-heading"]');
	}
}

export default new HomePage();
