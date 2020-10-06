import { Component, OnInit } from '@angular/core';
import { EnquiryMessageDTO } from '../enquiryMessageDTO';
import { SubscribeService } from './../../../subscribe.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  enquiryModel = new EnquiryMessageDTO("","","","","");

  constructor(private subscribeService : SubscribeService) { }

  ngOnInit(): void {
  }

  
  subscribeEnquiry() : void {
    this.subscribeService.subscribeEnquiry(this.enquiryModel).subscribe((result) =>{
      console.log(result);
    });
  }

}
