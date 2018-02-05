import { Component, Input, EventEmitter, Output } from '@angular/core';
@Component({
    selector: 'app-modal',
    templateUrl: 'model.html'
})
export class Modal {
    modalStatus: boolean = false
    WebsiteId: string
    categoryName: string;
    sendWebsiteId: string
    actionName: string;
    categoryId: string;
    modelPanelHeading: string;
    @Input() editCategoryObject: any
    @Input() getWebiteData: any
    @Input() getfaqModalData: any;

    @Output() sendAddCategoryObj: EventEmitter<object> = new EventEmitter<object>();
    @Output() sendupdateCategoryObj: EventEmitter<object> = new EventEmitter<object>();

    getWebsiteId(websiteId) {
        this.WebsiteId = websiteId;
        console.log(websiteId)
    }

    save() {
        var addCategoryObj = {
            websiteId: this.WebsiteId,
            name: this.categoryName,
        }
        this.modalStatus = false;

        if (this.actionName == "editCategory") {
            let updateCategoryObj = {
                websiteId: this.sendWebsiteId,
                name: this.categoryName,
                id: this.categoryId
            }
            this.sendupdateCategoryObj.emit(updateCategoryObj);
         
        }

    else if (this.getfaqModalData.actionName == "addCategory") {
            this.sendAddCategoryObj.emit(addCategoryObj);
            this.categoryName = "";
            
        }
     
    }

    ngOnChanges() {
        if (this.getfaqModalData != undefined) {
            this.modalStatus = this.getfaqModalData.actionType;
            if (this.getfaqModalData.actionName == "addCategory") {
                this.modelPanelHeading = "Add Category";
                //this.sendWebsiteId = ""
                this.categoryName = ""
            }
        }
        else if (this.editCategoryObject != undefined) {
            this.modalStatus = this.editCategoryObject.actionType;
            this.sendWebsiteId = this.editCategoryObject.websiteId;
            this.categoryName = this.editCategoryObject.name;
            this.actionName = this.editCategoryObject.actionName;
            this.categoryId = this.editCategoryObject.id;
            this.WebsiteId = this.editCategoryObject.websiteId;
            if (this.editCategoryObject.actionName == "editCategory") {
                this.modelPanelHeading = "Edit Category";
                this.categoryName = this.editCategoryObject.name
            }
        }
    }

  
  
}