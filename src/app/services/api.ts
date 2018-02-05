import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class Api {
  result: any
  // getWebsiteData:any
  constructor(private http: HttpClient) { }

  websiteListData() {
    // Make the HTTP request:
    return this.http.get('http://localhost:3000/api/Websites');
  }

  getCategoryData(webisteId) {
    return this.http.get('http://localhost:3000/api/Websites/' + webisteId + '/categories')
  }

  createCategory(categoryData) {
    return this.http.post('http://localhost:3000/api/FAQCategories/', categoryData)
  }

  updateCategory(updateCategoryObj, websiteId, categoryId) {
    return this.http.put('http://localhost:3000/api/Websites/' + websiteId + '/categories/' + categoryId, updateCategoryObj)
  }

  deleteCurrentCategory(categoryId, categoryObj) {
    return this.http.delete('http://localhost:3000/api/FAQCategories/' + categoryId, categoryObj)
  }
}