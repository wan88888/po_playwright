import {test, expect} from '@playwright/test';

import {user} from './testdata';
import {HomePage} from '../pages/home-page';
import {LoginPage} from '../pages/login-page';

test('User can login and logout', async ({page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(user.username, user.password)

    const userIsLoggedIn = await new HomePage(page).userIsLoggedIn();
    expect(userIsLoggedIn).toBeTruthy();

    await new HomePage(page).clickMenu();
    await new HomePage(page).clickLogOut();

    const userIsLoggedOut = await loginPage.userIsLoggedOut();
    expect(userIsLoggedOut).toBeTruthy();
});