import { $ } from '@wdio/globals'

class LoginPage {

    async isHomePage (){
    }

    get email () {
        return $('//android.widget.EditText[@content-desc="input-email"]');
    }

    get password () {
        return $('//android.widget.EditText[@content-desc="input-password"]');
    }

    get btnLogin () {
        return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup/android.widget.TextView');
    }
    
    get message () {
        return $('//android.widget.TextView[contains(@text, "You are logged in!")]')
    }

    get btnOk () {
        return $('//android.widget.Button[contains(@text, "OK")]')
    }

    async login (email: string, password: string) {
        await this.email.setValue(email);
        await this.password.setValue(password);
        await this.btnLogin.click();
    }
}

export default new LoginPage();