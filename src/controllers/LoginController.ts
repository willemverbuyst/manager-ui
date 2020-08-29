import { BaseController } from './BaseController';

export class LoginController extends BaseController {
  public createView(): HTMLDivElement {
    const title = this.createElement('h2', 'Please login!');

    const userName = this.createElement('label', 'Username:');

    const userNameInput = this.createElement('input');

    const breakElement = this.createElement('br');
    const breakElement2 = this.createElement('br');
    const breakElement3 = this.createElement('br');

    const password = this.createElement('label', 'Password:');

    const passwordInput = this.createElement('input');
    passwordInput.type = 'Password';

    const loginButton = this.createElement('button', 'Login', () => {
      if (userNameInput.value && passwordInput.value) {
        errorLabel.style.visibility = 'hidden';
      } else {
        errorLabel.innerText = 'Please fill in both fields!';
        errorLabel.style.visibility = 'visible';
      }
    });

    const errorLabel = this.createElement('label');
    errorLabel.style.color = 'red';
    errorLabel.style.visibility = 'hidden';

    this.container.append(
      title,
      userName,
      userNameInput,
      breakElement,
      password,
      passwordInput,
      breakElement2,
      loginButton,
      breakElement3,
      errorLabel
    );

    return this.container;
  }
}
