import { Selector } from 'testcafe';

fixture('Login Tests')
  .page('https://beta.deepthought.education/login');

test('Successful Login with Valid Credentials', async t => {
    const usernameInput = Selector('#username');
  const passwordInput = Selector('#password');
  const loginButton = Selector('#login');

  const dashboardPage = Selector('#page-content-wrapper > nav > h5');

  await t
.maximizeWindow()

    .typeText(usernameInput, 'aniketlake276@gmail.com')
     .wait(5000)
    .typeText(passwordInput, '42599524')
.wait(5000)
    .click(loginButton);

  await t.expect(dashboardPage.exists).ok();
});

test('Invalid Login with Incorrect Credentials', async t => {
    const usernameInput = Selector('#username');
  const passwordInput = Selector('#password');
  const loginButton = Selector('#login');

  const errorMessage = Selector('#login-error-notify > strong');

  await t
    .typeText(usernameInput, 'aniketlake276@gmail.com')
.wait(5000)
    .typeText(passwordInput, '1111111')
.wait(5000)
    .click(loginButton);

  const expectedErrorMessage = 'Login Unsuccessful';
  await t.expect(errorMessage.innerText).eql(expectedErrorMessage);
});

test('Successful Login Redirects to Dashboard', async t => {
    const usernameInput = Selector('#username');
  const passwordInput = Selector('#password');
  const loginButton = Selector('#login');
  const dashboardPage = Selector('#page-content-wrapper > nav > h5');
  const welcomeMessage = Selector('.welcome-message');
  const logoutButton = Selector('body > header > div > div > div > form > button > span');

  await t
    .typeText(usernameInput, 'aniketlake276@gmail.com')
.wait(5000)
    .typeText(passwordInput, '42599524')
.wait(5000)
    .click(loginButton);

  await t.expect(dashboardPage.exists).ok();
  
  const expectedWelcomeMessage = 'Welcome to DeepThought';
 
 

  await t.expect(logoutButton.exists).ok();
});
