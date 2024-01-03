import { getElementById, openDeeplink, waitForElementById } from "../../helpers";

const baseLink = "accounts";

export default class accountsPage {
  accountTitle = (coin: string) => getElementById(`accounts-title-${coin}`);
  addAccountButton = () => getElementById("add-account-button");

  async openViaDeeplink() {
    await openDeeplink(baseLink);
  }
  async waitForAccountsPageToLoad() {
    await waitForElementById("accounts-list-title");
  }
  async waitForAccountsCoinPageToLoad(coin: string) {
    await waitForElementById(`accounts-title-${coin}`);
  }

  async addAccount() {
    await this.addAccountButton().tap();
  }
}
