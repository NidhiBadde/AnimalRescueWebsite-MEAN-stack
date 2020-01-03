import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';
import { Binary } from 'selenium-webdriver/firefox';
import { AnimalSchema } from './../../../../../Backend/api/models/AnimalSchema';



@Component({
  selector: 'app-donation-impact',
  templateUrl: './donation-impact.component.html',
  styleUrls: ['./donation-impact.component.scss']
})
export class DonationImpactComponent implements OnInit {

  animals: AnimalSchema[];
  status : String;
  countStatus: number;
  animalcount: number;
  percentadopted : number;
  crueltycase : number;
  veterinarycarecount: number;
  
  
/**
 * 
 * @param _http this is used for server and data connection and CRUD methods
 * @param sanitizer 
 */
  constructor(private _http : HttpService, public sanitizer: DomSanitizer) {
    
    this.countStatus=0;
    this.animalcount=0;
    this.percentadopted=0;
    this.crueltycase=0;
    this.veterinarycarecount=10;    
   
  }

  /**
   * here we pull all the list of animals and pull out the count of animals which are adopted or which are filed under cruelty case
   */
  ngOnInit() {

    // get all the animals list

    this._http.getAnimals().subscribe(data => {
      this.animals = data;

      for (let anm of this.animals) {
        // filtering the animals which are adopted 
        this.animalcount = this.animalcount + 1 ;
        if( anm.status == "Adopted")
        {
            this.countStatus = this.countStatus + 1 ;
            this.percentadopted = ((this.countStatus/this.animalcount)*100);

        }
        // filtering all the list of animals of cruelty case
      if ( anm.crueltyCase == "yes")
        {
            this.crueltycase = this.crueltycase + 1;
           
        }

    }
 
  });
}
}
