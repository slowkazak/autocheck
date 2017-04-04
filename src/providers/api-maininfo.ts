import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {ApiBase} from "./api-base";
import 'rxjs/add/operator/toPromise';
/*
 Generated class for the ApiMaininfo provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class ApiMaininfo extends ApiBase {

  constructor(public http: Http) {
    super();
  }

  /**
   * Получение спискса категорий
   * @returns {null}
   * @constructor
   */
  public GetCategories() {
    let res = null;
    try {
      res = this.http.get('http://api.auto.ria.com/categories').toPromise().then(res => super.SuccessCallback(res)).catch(err => super.ErrCallback(err))
    }
    catch (err) {
      res = Promise.reject(false);
      console.error("Ошибка при выполнении функции GetCategories", err)
    }
    return res;
  }
  public GetMarks(categoryid){
    let res = null;
    try {
      res = this.http.get('http://api.auto.ria.com/categories/'+categoryid+'/marks/').toPromise().then(res => super.SuccessCallback(res)).catch(err => super.ErrCallback(err))
    }
    catch (err) {
      res = Promise.reject(false);
      console.error("Ошибка при выполнении функции GetMarks", err)
    }
    return res;
  }
}
