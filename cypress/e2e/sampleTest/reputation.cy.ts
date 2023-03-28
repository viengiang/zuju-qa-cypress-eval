import General from '../../pageobjects/general';
import ReputationPage from '../../pageobjects/reputationPage';
import SignInPage from '../../pageobjects/signInPage';
import HomePage from '../../pageobjects/homePage';

describe('Reputation', () => {
	before(() => {
		General.accessToEndpoint(General.signInEndpoint);
		SignInPage.login(SignInPage.email, SignInPage.password);
		cy.url().should('not.include', General.signInEndpoint);
		HomePage.pageHeading.should('contain', HomePage.upcomingHeading);
		General.accessToEndpoint(General.reputationEndpoint);
	});

	it('should display the Favourite Teams title', () => {
		General.h2Heading
			.contains(ReputationPage.favouriteTeamsText)
			.should('be.visible');
	});

	it('should display the All Teams title', () => {
		General.h2Heading
			.contains(ReputationPage.allTeamsText)
			.should('be.visible');
	});

	it('should display the team not found message when searching a not existing team name', () => {
		General.h2Heading
			.contains(ReputationPage.allTeamsText)
			.should('be.visible');
		ReputationPage.inputSearchTeam
			.click()
			.clear()
			.type(`invalid ${new Date().getTime()}`);
		ReputationPage.teamNotFound.should(
			'contain',
			ReputationPage.teamNotFoundMsg
		);
	});

	it('should able to favorite a team', () => {
		General.h2Heading
			.contains(ReputationPage.allTeamsText)
			.should('be.visible');
		ReputationPage.inputSearchTeam
			.click()
			.clear()
			.type(ReputationPage.teamName);
		ReputationPage.teamList
			.find(ReputationPage.cardSelector)
			.contains(ReputationPage.teamName)
			.parents(ReputationPage.cardSelector)
			.find('button[aria-label="favorite"]')
			.click();
		ReputationPage.favTeamList
			.find(ReputationPage.cardSelector)
			.contains(ReputationPage.teamName)
			.should('be.exist');
	});

	it('should able to unfavorite a team', () => {
		General.h2Heading
			.contains(ReputationPage.favouriteTeamsText)
			.should('be.visible');
		ReputationPage.favTeamList
			.find(ReputationPage.cardSelector)
			.contains(ReputationPage.teamName)
			.parents(ReputationPage.cardSelector)
			.find('button[aria-label="favorite"]')
			.click();
		ReputationPage.favTeamList
			.find(ReputationPage.cardSelector)
			.contains(ReputationPage.teamName)
			.should('not.exist');
	});
});
