import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post';
import { CommonModule } from '@angular/common';
import { Climate } from '../climate/climate';

@Component({
  selector: 'app-post-demo',
  imports: [CommonModule,Climate],
  templateUrl: './post-demo.html'
})
export class PostDemoComponent implements OnInit {

  posts: any[] = [];
  singlePost: any;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadPosts();
    this.getSinglePost();
    this.createNewPost();
    this.updateExistingPost();
    this.deletePost();
  }

  loadPosts() {
    this.postService.getPosts().subscribe(res=>{
      next: this.posts = res.body;
    }
    );
  }

  getSinglePost() {
    this.postService.getPost(1).subscribe({
      next: data => this.singlePost = data
    });
  }

  createNewPost() {
    const newPost = {
      title: 'Angular Demo Created Post',
      body: 'This is a sample post created from Angular.',
      userId: 1
    };

    this.postService.createPost(newPost).subscribe(res => {
      console.log('Created:', res);
    });
  }

  updateExistingPost() {
    const updatedPost = {
      title: 'Updated Title',
      body: 'Updated content from Angular.',
      userId: 1
    };

    this.postService.updatePost(1, updatedPost).subscribe(res => {
      console.log('Updated:', res);
    });
  }

  deletePost() {
    this.postService.deletePost(1).subscribe(res => {
      console.log('Deleted:', res);
    });
  }
}
