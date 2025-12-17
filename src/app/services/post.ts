import { Injectable } from '@angular/core';
import { HttpClient, withFetch } from '@angular/common/http';
import { filter, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  // GET all posts
  getPosts(): Observable<any> {
    return this.http.get(this.baseUrl,{ observe: 'response' });
  }

  // GET single post
  getPost(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`,{
      headers: { 'Custom-Header': 'AngularDemo' }
    });
  }

  // POST create
  createPost(post: any): Observable<any> {
    return this.http.post(this.baseUrl, post);
  }

  // PUT update
  updatePost(id: number, post: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, post);
  }

  // DELETE
  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
