import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailDTO } from './components/pages/emaildto';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  javaEndPoint:String;


  constructor(private httpClient : HttpClient) { 
    this.javaEndPoint="https://13.233.29.72/v1/";
  }


  subscribeUser(emailDTO) {
    return this.httpClient.post(`${this.javaEndPoint}/email`, emailDTO);
  }

  subscribeEnquiry(enquiryDto) {
    return this.httpClient.post(`${this.javaEndPoint}/enquiry`, enquiryDto);
  }
}
