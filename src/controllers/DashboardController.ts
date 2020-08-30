import { BaseController } from './BaseController';
import { SessionToken, AccessRight } from '../models/AuthenticationModels';
import { DataService } from '../services/DataService';

export class DashboardController extends BaseController {
  private sessionToken: SessionToken | undefined;
  private searchArea: HTMLInputElement | undefined;
  private searchResultArea: HTMLDivElement | undefined;
  private dataService: DataService = new DataService();

  public setSessionToken(sessionToken: SessionToken) {
    this.sessionToken = sessionToken;
  }

  public createView(): HTMLDivElement {
    this.createElement('h2', 'Dashbaord controller');
    if (this.sessionToken) {
      this.createElement('label', `Welcome ${this.sessionToken.username}`);
      this.insertBreak();
      this.generateButtons();
    } else {
      this.createElement('label', `Please go to the public parts of this app!`);
    }
    return this.container;
  }

  private generateButtons() {
    if (this.sessionToken) {
      for (const access of this.sessionToken.accessRights) {
        this.createElement('button', AccessRight[access], async () => {
          await this.triggerAction(access);
        });
      }
      if (this.sessionToken.accessRights.includes(AccessRight.READ)) {
        this.insertBreak();
        this.createElement('label', 'search');
        this.searchArea = this.createElement('input');
        this.searchResultArea = this.createElement('div');
      }
    }
  }

  private async triggerAction(access: AccessRight) {
    console.log(`button ${AccessRight[access]} clicked `);
    switch (access) {
      case AccessRight.READ:
        const users = await this.dataService.getUsers(
          this.sessionToken!.tokenId,
          this.searchArea!.value
        );
        for (const user of users) {
          this.searchResultArea!.append(
            this.createElement('label', JSON.stringify(user))
          );
          this.searchResultArea!.append(document.createElement('br'));
        }

        break;

      default:
        break;
    }
  }
}
