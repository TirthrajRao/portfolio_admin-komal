import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from './config';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  /**
   * Get all projects
   */
  getAllProjects() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.http.get(config.baseApiUrl + 'project/all').pipe(
      map(res => {
        return res;
      })
    );
  }

  /**
   * Get project by id
   * @param {String} projectId 
   */
  getProjectById(projectId) {
    console.log(projectId)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.http.get(config.baseApiUrl + 'project/' + projectId).pipe(
      map(res => {
        return res;
      })
    )
  }

  /**
   * Get All Category
   */
  getAllCategory() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.http.get(config.baseApiUrl + 'category').pipe(
      map(res => {
        return res;
      })
    );
  }
  /**
    * Get All Technology
    */
  getAllTechnology() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.http.get(config.baseApiUrl + 'technology').pipe(
      map(res => {
        return res;
      })
    );
  }

  /**
   * Add Project
   * @param {object} details 
   */
  addProject(details) {
    console.log(details)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.http.post(config.baseApiUrl + 'project', details).pipe(
      map(res => {
        return res;
      })
    );
  }

  /**
   * Update Project
   * @param {Object} details 
   * @param {String} projectId 
   */
  updateProject(details, projectId) {
    console.log(details, projectId)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.http.put(config.baseApiUrl + 'project/' + projectId, details).pipe(
      map(res => {
        return res;
      })
    );
  }

  /**
   * Delete project by id
   * @param {String} projectId 
   */
  deleteProject(projectId) {
    console.log(projectId)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.http.delete(config.baseApiUrl + 'project/' + projectId).pipe(
      map(res => {
        return res;
      })
    );
  }

  /**
   * Add Technology
   * @param  {object} details 
   */
  addTechnology(details) {
    console.log(details);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.http.post(config.baseApiUrl + 'technology', details).pipe(
      map(res => {
        return res;
      })
    );
  }

  /**
  * Delete Technology by id
  * @param  {String} details 
  */
  deleteTechnology(id) {
    console.log(id);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.http.delete(config.baseApiUrl + 'technology/' + id).pipe(
      map(res => {
        return res;
      })
    );
  }

  /**
   * Update technology by id
   * @param {object} details 
   * @param {String} technolgyId 
   */
  updateTechnology(details, technolgyId) {
    console.log(details, technolgyId)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.http.put(config.baseApiUrl + 'technology/' + technolgyId, details).pipe(
      map(res => {
        return res;
      })
    );
  }

  /**
   * Add Category
   * @param {object} details 
   */
  addCategory(details) {
    console.log(details);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.http.post(config.baseApiUrl + 'category', details).pipe(
      map(res => {
        return res;
      })
    );
  }

  /**
   * Delete Category by id
   * @param {String} id 
   */
  deleteCategory(id) {
    console.log(id);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.http.delete(config.baseApiUrl + 'category/' + id).pipe(
      map(res => {
        return res;
      })
    );
  }
  /**
    * Update category by id
    * @param {object} details 
    * @param {String} categoryId 
    */
  updateCategory(details, categoryId) {
    console.log(details, categoryId)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.http.put(config.baseApiUrl + 'category/' + categoryId, details).pipe(
      map(res => {
        return res;
      })
    );
  }

  /**
   * Get All Tags
   */
  getAllTag() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.http.get(config.baseApiUrl + 'hashtag/').pipe(
      map(res => {
        return res;
      })
    );
  }

  /**
   * Get all contact requests
   */
  getContactRequest() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.http.get(config.baseApiUrl + 'contact-us/').pipe(
      map(res => {
        return res;
      })
    );
  }

  /**
   * Add Brochure
   * @param {Object} data 
   */
  addBrochure(data) {
    console.log("data=>", data);
    return this.http.post(config.baseApiUrl + 'project/add-brochure', data).pipe(
      map(res => {
        return res;
      })
    );
  }
  /**
   * Add Landing Page
   * @param {object} data 
   */
  addLandingPage(data) {
    return this.http.post(config.baseApiUrl + 'project/add-landingpage', data).pipe(
      map(res => {
        return res;
      })
    );
  }

  /**
   * Add Logo Design
   * @param {Object} data 
   */
  addLogoDesign(data){
    return this.http.post(config.baseApiUrl + 'project/add-logo-design', data).pipe(
      map(res => {
        return res;
      })
    );
  }
}
