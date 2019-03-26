import 'babel-polyfill';
import { EntryPage } from '../../lib/subPages/main-page';
import { expect} from 'chai';

const LoginPage = new EntryPage();
it("Enter User Name and password", (async () => {
    await LoginPage.wrtiteUserNamePassword(`amundra@teksystems.com`, `Moukim21*`)
    .catch((err) => expect.fail(err));
 }));
 it("Login to LMS", (async () => {
    await LoginPage.clickLoginButton()
    .catch((err) => expect.fail(err));
 }));
 it("Validate Login", (async () => {
    await LoginPage.checkLogoutButton()
    .then((state) => expect(state).to.be.true)
    .catch((err) => expect.fail(err));
 }));
 