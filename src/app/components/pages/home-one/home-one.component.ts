import { Component, OnInit } from '@angular/core';
import { EmailDTO } from './../emaildto';
import { EnquiryMessageDTO } from './../enquiryMessageDTO';
import { SubscribeService } from './../../../subscribe.service';

@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent implements OnInit {

  constructor(private subscribeService : SubscribeService) { }

  model = new EmailDTO("");




  subscribeEmail(): void {
    let response = this.subscribeService.subscribeUser(this.model).subscribe((result) => {
      console.log(result);
    });
    console.log(response);
  }

  ngOnInit(): void {
  }

}
