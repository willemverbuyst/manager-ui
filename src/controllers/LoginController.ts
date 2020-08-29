export class LoginController {
  public createView(): HTMLDivElement {
    const container = document.createElement('div');

    const title = document.createElement('h2');
    title.innerText = 'Please login!';

    const userName = document.createElement('label');
    userName.innerText = 'Username:';

    const userNameInput = document.createElement('input');

    const breakElement = document.createElement('br');

    const breakElement2 = document.createElement('br');

    const password = document.createElement('label');
    password.innerText = 'Password:';

    const passwordInput = document.createElement('input');
    passwordInput.type = 'Password';

    const loginButton = document.createElement('button');
    loginButton.innerText = 'Login';

    container.append(
      title,
      userName,
      userNameInput,
      breakElement,
      password,
      passwordInput,
      breakElement2,
      loginButton
    );

    return container;
  }
}
