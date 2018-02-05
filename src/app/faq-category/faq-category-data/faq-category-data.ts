import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Api } from '../../services/api';
@Component({
    selector:'faq-category-data',
    templateUrl:'faq-category-data.html'
})
export class FaqCategoryData{
    @Input() getCategoryData:any;
    @Output() sendEditCaegoryObj:EventEmitter<object> = new EventEmitter<object>()
    @Output() curerentCategoryObj:EventEmitter<object> = new EventEmitter<object>();
    editCategory(categoryObj,actionName,actionType){
        var editCaegoriesObj = Object.assign(categoryObj,{actionName,actionType})
        this.sendEditCaegoryObj.emit(editCaegoriesObj)
    }
    deleteCategory(categoryObj){
        this.curerentCategoryObj.emit(categoryObj);
    }

    ngOnChanges(){
        
    }
}