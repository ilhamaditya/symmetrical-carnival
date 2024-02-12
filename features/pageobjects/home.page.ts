class HomePage {
  async navigateToLogin() {
    (await this.ctaLogin).click();
  }
  get ctaLogin() {
    return $('//android.view.View[@content-desc="Login"]');
  }
}

export default new HomePage();
