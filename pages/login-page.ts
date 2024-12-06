import type {Page} from 'playwright';
import {isVisible} from "../utils/common";

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username: string, password: string) {
        await this.page.fill('#user-name', username);
        await this.page.fill('#password', password);
        await this.page.click('#login-button');
    }

    async userIsLoggedOut(): Promise<boolean> {
        return isVisible(this.page, '#login-button');
    }
}