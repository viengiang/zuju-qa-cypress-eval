class SignInPage {
	public welcomeHeading: string;
	public createAccountHeading: string;
	public signInModalSelector: string;
	public email: string;
	public registerEmail: string;
	public invalidEmail: string;
	public password: string;
	public invalidPassword: string;
	public invalidErrorMsg: string;
	public emailRequiredText: string;
	public passwordRequiredText: string;
	public btnGoogleText: string;
	public btnFacebookText: string;
	public btnAppleText: string;
	public btnDiscordText: string;
	public completeRegister: string;

	constructor() {
		this.signInModalSelector = '[data-cy="signin-modal"]';
		this.welcomeHeading = 'Welcome to ZUJU KICKOFF';
		this.createAccountHeading = 'Create Your Account';
		this.email = 'zujutest+automation@gmail.com';
		this.registerEmail = `registerEmail+${new Date().getTime()}@gmail.com`;
		this.invalidEmail = 'invalid@gmail.com';
		this.password = 'TestAuto123';
		this.invalidPassword = 'invalid';
		this.invalidErrorMsg =
			'The email or password you entered is incorrect. Please try again.';
		this.emailRequiredText = 'Email is required!';
		this.passwordRequiredText = 'Password is required!';
		this.btnGoogleText = 'Continue with Google';
		this.btnFacebookText = 'Continue with Facebook';
		this.btnAppleText = 'Continue with Apple';
		this.btnDiscordText = 'Continue with Discord';
		this.completeRegister = 'Complete your registration';
	}

	public get inputEmail() {
		return cy.get("input[name='email']");
	}

	public get inputPassword() {
		return cy.get("input[name='password']");
	}

	public get inputConfirmPassword() {
		return cy.get("input[name='confirmPassword']");
	}

	public get btnSubmit() {
		return cy.get(`button[type='submit']`);
	}

	public get errorMessage() {
		return cy
			.get(`${this.signInModalSelector} .MuiTypography-body1`)
			.contains(this.invalidErrorMsg);
	}

	public get emailRequiredMsg() {
		return cy
			.get(`${this.signInModalSelector} .MuiFormHelperText-sizeMedium`)
			.contains(this.emailRequiredText);
	}

	public get passwordRequiredMsg() {
		return cy
			.get(`${this.signInModalSelector} .MuiFormHelperText-sizeMedium`)
			.contains(this.passwordRequiredText);
	}

	public get btnGoogle() {
		return cy
			.get(`${this.signInModalSelector} .MuiButton-contained`)
			.contains(this.btnGoogleText);
	}

	public get btnFacebook() {
		return cy
			.get(`${this.signInModalSelector} .MuiButton-contained`)
			.contains(this.btnFacebookText);
	}

	public get btnApple() {
		return cy
			.get(`${this.signInModalSelector} .MuiButton-contained`)
			.contains(this.btnAppleText);
	}

	public get btnDiscord() {
		return cy
			.get(`${this.signInModalSelector} .MuiButton-contained`)
			.contains(this.btnDiscordText);
	}

	public get forgotPasswordLink() {
		return cy
			.get(`${this.signInModalSelector} .MuiLink-root`)
			.contains('Forgot password?');
	}

	public get createOneLink() {
		return cy
			.get(`${this.signInModalSelector} .MuiLink-root`)
			.contains('Create one');
	}

	public login(email: string = '', password: string = '') {
		this.inputEmail.click().clear().type(email);
		this.inputEmail.should('have.value', email);
		this.inputPassword.click().clear().type(password);
		this.inputPassword.should('have.value', password);
		this.btnSubmit.click();
	}
}

export default new SignInPage();
