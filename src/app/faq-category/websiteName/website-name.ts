import {Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Api } from '../../services/api';

@Component({
    selector:'website-name',
    templateUrl:'website-name.html'
})
export class WebsiteName{
    @Input() getwebsiteNameList:any;
    @Input() getModalObj;
    @Output() sendWebsiteId:EventEmitter<string> = new EventEmitter<string>();
    @Input() websiteId:string
     sendWebsiteIdHandler(){
         this.sendWebsiteId.emit(this.websiteId);
    }
 
}