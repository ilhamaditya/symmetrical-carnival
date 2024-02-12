import { $ } from '@wdio/globals'

class LoginPage {

    async isHomePage (){
    }

    get email () {
        return $('');
    }

    get password () {
        return $('');
    }

    get btnLogin () {
        return $('');
    }

    async login (email: string, password: string) {
        await this.email.setValue(email);
        await this.password.setValue(password);
        await this.btnLogin.click();
    }
}

export default new LoginPage();