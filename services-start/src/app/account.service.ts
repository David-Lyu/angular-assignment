import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
//Can also have this instead of exporting this Service class to app module's provider attribute also lazy loaded in
//@Injectable({providedIn: 'root'})
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status:string) {
    this.accounts.push({name, status})
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id:number, status:string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}
