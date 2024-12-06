import type {Page} from 'playwright';
import {isVisible} from '../utils/common';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async userIsLoggedIn(): Promise<boolean> {
        return await isVisible(this.page, '#react-burger-menu-btn');
    }

    async clickMenu() {
        await this.page.click('#react-burger-menu-btn');
    }

    async clickLogOut() {
        await this.page.click('#logout_sidebar_link');
    }
}