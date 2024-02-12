import { $ } from "@wdio/globals";

class LoginPage {
  async isHomePage() {}

  get email() {
    return $('//android.widget.EditText[@content-desc="input-email"]');
  }

  get password() {
    return $('//android.widget.EditText[@content-desc="input-password"]');
  }

  get btnLogin() {
    return $(
      '//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup/android.widget.TextView'
    );
  }

  message(value: any) {
    return $("//android.widget.TextView[contains(@text, '" + value + "')]");
  }

  get btnOk() {
    return $('//android.widget.Button[contains(@text, "OK")]');
  }

  async login(email: string, password: string) {
    browser.pause(1000);
    await this.email.setValue(email);
    await this.password.setValue(password);
    await this.btnLogin.click();
  }
}

export default new LoginPage();
