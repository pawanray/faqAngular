import { Component, OnInit } from "@angular/core";
import { Api } from '../services/api'
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Component({
    selector: 'faq-category',
    templateUrl: './faq-category.html',
    styleUrls: ['./faq-category.css']
})

export class FaqCategory implements OnInit {
    websiteNameList: object
    selectedWebsiteId: string;
    sendCategoryData: any;
    faqModalData: object;
    getEditCategoryObj: any
    updateCategoryObj:object

    constructor(private http: HttpClient, private _api: Api) { }

    getWebsiteId(websiteId) {
        this._api.getCategoryData(websiteId).subscribe(data => {
            this.sendCategoryData = data
            // if(websiteId=="Select Website"){
            //     this.sendCategoryData = [];
            // }
            // else{
            // this.sendCategoryData = data
            // }
           
        })
    }


    addCategory(actionName, actionType) {
        debugger
        this.faqModalData = { actionName, actionType }
        console.log(this.faqModalData)
    }

    getAddCategoryObj(addCategoryObj) {
        this._api.createCategory(addCategoryObj).subscribe(data => {
      
        })

    }

    getEditCategory(editCategoryObj) {
        debugger
        this.getEditCategoryObj = editCategoryObj;
        console.log(this.getEditCategoryObj)
    }

    getUpdatedCategory(updateCategory) {
        debugger
        this._api.updateCategory(updateCategory, updateCategory.websiteId, updateCategory.id).subscribe((data:any) => {
            this.updateCategoryObj = data;
            this.sendCategoryData = this.sendCategoryData.map(category=>{
                if(category.id ===data.id){
                    return data;
                }
                return category
            })
        })
    }

    getDeleteCategoryObj(categoryObj) {
        console.log(categoryObj.id)
        this._api.deleteCurrentCategory(categoryObj.id, categoryObj).subscribe((data:any) => {
            this.sendCategoryData = this.sendCategoryData.filter(category=>{
               return category.id != categoryObj.id
            })
        })
    }
    
    ngOnInit() {
        this._api.websiteListData().subscribe(data => {
            this.websiteNameList = data;
        })
    }



}