import { BaseController } from './BaseController';
import { LoginService } from '../services/LoginService';
import { LinkTextValue } from './Decorators';

export class LoginController extends BaseController {
  private loginService = new LoginService();

  private title = this.createElement('h2', 'Please login!');
  private userName = this.createElement('label', 'Username:');
  private userNameInput = this.createElement('input');
  private break1 = this.createElement('br');
  private password = this.createElement('label', 'Password:');
  private passwordInput = this.createElement('input');
  private break2 = this.createElement('br');

  private loginButton = this.createElement('button', 'Login', async () => {
    if (this.userNameInput.value && this.passwordInput.value) {
      this.errorLabelText = '';
      const result = await this.loginService.login(
        this.userNameInput.value,
        this.passwordInput.value
      );
      if (result) {
        this.router.switchToDashboardView(result);
      } else {
        this.errorLabelText = 'Wrong username or password!';
      }
    } else {
      this.errorLabelText = 'Please fill in both fields!';
    }
  });

  private break3 = this.createElement('br');

  private errorLabel = this.createElement('label');

  @LinkTextValue('errorLabel')
  private errorLabelText = '';

  // private resetErrorLabel() {
  //   this.errorLabel.style.color = 'red';
  //   this.errorLabel.style.visibility = 'hidden';
  // }

  // private showErrorLabel(errorMessage: string) {
  //   this.errorLabel.innerText = errorMessage;
  //   this.errorLabel.style.visibility = 'visible';
  // }

  public createView(): HTMLDivElement {
    this.errorLabel.id = 'errorLabel';
    this.errorLabel.style.color = 'red';
    this.passwordInput.type = 'Password';

    return this.container;
  }
}
