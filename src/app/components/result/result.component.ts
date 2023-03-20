import { Component, OnInit } from '@angular/core';
import { DataFormService } from 'src/app/services/data-form.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  public firstName: string;
  public lastName: string;
  public email: string;
  public phoneNumber: number;
  public address: string;
  public age: number;
  constructor(
    public _dataFormService: DataFormService
  ) {

  }

  ngOnInit() {
    this._dataFormService.data$
      .subscribe((data: any) => {
        this.firstName = data.userName.firstName;
        this.lastName = data.userName.lastName;
        this.email = data.userContacts.email;
        this.phoneNumber = data.userContacts.phoneNumber;
        this.address = data.userAddress.address;
        this.age = data.userAddress.age;
      });
  }
}
