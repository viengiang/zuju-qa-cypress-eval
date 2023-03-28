class ReputationPage {
	public teamListSelector: string;
	public favTeamListSelector: string;
	public favouriteTeamsText: string;
	public allTeamsText: string;
	public teamNotFoundMsg: string;
	public teamName: string;
	public cardSelector: string;

	constructor() {
		this.teamListSelector = '[data-cy="team-list"]';
		this.favTeamListSelector = '[data-cy="fav-team-list"]';
		this.cardSelector = '.MuiCard-root';
		this.favouriteTeamsText = 'Favourite Teams';
		this.allTeamsText = 'All Teams';
		this.teamNotFoundMsg =
			'The team you are looking for cannot be found. Try entering another keyword';
		this.teamName = 'Manchester City';
	}

	get teamList() {
		return cy.get(this.teamListSelector);
	}

	get favTeamList() {
		return cy.get(this.favTeamListSelector);
	}

	get inputSearchTeam() {
		return cy.get('input[placeholder="Search for a team"]');
	}

	get teamNotFound() {
		return cy.get(`${this.teamListSelector} [data-cy="teams-not-found"]`);
	}
}

export default new ReputationPage();
