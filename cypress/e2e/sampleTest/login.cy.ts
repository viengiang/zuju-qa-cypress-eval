import SignInPage from '../../pageobjects/signInPage';
import HomePage from '../../pageobjects/homePage';
import General from '../../pageobjects/general';

describe('Login', () => {
	before(() => {
		General.accessToEndpoint(General.signInEndpoint);
	});

	it('should display the Welcome to ZUJU KICKOFF title', () => {
		General.h2Heading.should('contain', SignInPage.welcomeHeading);
	});

	it('should able to see other login methods', () => {
		SignInPage.btnGoogle.should('exist');
		SignInPage.btnFacebook.should('exist');
		SignInPage.btnApple.should('exist');
		SignInPage.btnDiscord.should('exist');
	});

	it('should not able to log in without entering any credentials', () => {
		SignInPage.btnSubmit.click();
		SignInPage.emailRequiredMsg.should('be.visible');
		SignInPage.passwordRequiredMsg.should('be.visible');
	});

	it('should not able to log in with invalid email', () => {
		SignInPage.login(SignInPage.invalidEmail, SignInPage.password);
		SignInPage.errorMessage.should('be.visible');
	});

	it('should not able to log in with invalid password', () => {
		SignInPage.login(SignInPage.email, SignInPage.invalidPassword);
		SignInPage.errorMessage.should('be.visible');
	});

	it('should be able to open the forgot the password modal', () => {
		SignInPage.forgotPasswordLink.click();
		cy.url().should('include', General.forgotPasswordEndpoint);
	});

	it('should able to create new account ', () => {
		General.accessToEndpoint(General.signInEndpoint);
		SignInPage.createOneLink.click();
		General.h2Heading.should('contain', SignInPage.createAccountHeading);
		SignInPage.inputEmail.click().type(SignInPage.registerEmail);
		SignInPage.inputPassword.click().type(SignInPage.password);
		SignInPage.inputConfirmPassword.click().type(SignInPage.password);
		SignInPage.btnSubmit.click();
		cy.url().should('not.include', General.signInEndpoint);
		General.h2Heading.should('contain', SignInPage.completeRegister);
	});

	it('should able to log in with valid password', () => {
		General.accessToEndpoint(General.signInEndpoint);
		SignInPage.login(SignInPage.email, SignInPage.password);
		cy.url().should('not.include', General.signInEndpoint, {
			timeout: 60000,
		});
		HomePage.pageHeading.should('contain', HomePage.upcomingHeading);
	});
});
