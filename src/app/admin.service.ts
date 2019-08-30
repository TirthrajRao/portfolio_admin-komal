import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from './config';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

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

  getProjectById(projectId){
    console.log(projectId)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.http.get(config.baseApiUrl + 'project/'+projectId).pipe(
      map(res => {
        return res;
      })
    )
  }

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

  addProject(details){
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

  updateProject(details,projectId){
    console.log(details,projectId)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.http.put(config.baseApiUrl + 'project/'+projectId, details).pipe(
      map(res => {
        return res;
      })
    );
  }
  deleteProject(projectId){
    console.log(projectId)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.http.delete(config.baseApiUrl + 'project/'+projectId).pipe(
      map(res => {
        return res;
      })
    );
  }

  addTechnology(details){
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
  deleteTechnology(id){
    console.log(id);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.http.delete(config.baseApiUrl + 'technology/'+id).pipe(
      map(res => {
        return res;
      })
    );
  }

  updateTechnology(details,technolgyId){
    console.log(details,technolgyId)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.http.put(config.baseApiUrl + 'technology/'+technolgyId, details).pipe(
      map(res => {
        return res;
      })
    );
  }
  addCategory(details){
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
  
  deleteCategory(id){
    console.log(id);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.http.delete(config.baseApiUrl + 'category/'+id).pipe(
      map(res => {
        return res;
      })
    );
  }

  updateCategory(details,categoryId){
    console.log(details,categoryId)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.http.put(config.baseApiUrl + 'category/'+categoryId, details).pipe(
      map(res => {
        return res;
      })
    );
  }
}
