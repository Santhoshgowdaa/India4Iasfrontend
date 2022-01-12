import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-footer',
  templateUrl: './common-footer.component.html',
  styleUrls: ['./common-footer.component.css']
})
export class CommonFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  aboutUs() {
    window.location.href = "https://www.india4ias.com/about-us/";
  }

  home() {
    window.location.href = "https://www.india4ias.com/";
  }

  faq(){
    window.location.href = "https://www.india4ias.com/faq/";
  }
 
  terms() {
    window.location.href = "https://www.india4ias.com/terms-conditions/";
  }

  privacy() {
    window.location.href = "https://www.india4ias.com/privacy-policy/";
  }

  cancellation() {
    window.location.href = "https://www.india4ias.com/cancellation-refund-policy/";
  }

  contactUs() {
    window.location.href = "https://www.india4ias.com/contact-us/";
  }

  facebook() {
    window.location.href = "https://www.facebook.com/INDIA4IAS/";
  }

  youtube() {
    window.location.href = "https://www.youtube.com/channel/UCustQiPT_YP80YqaNFEtmgQ";
  }

  instagram() {
    window.location.href = "https://www.instagram.com/india4ias/";
  }

  telegram() {
    window.location.href = "https://t.me/India4IASAcademy";
  }
}
