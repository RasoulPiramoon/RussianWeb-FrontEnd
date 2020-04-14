import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PostsService } from '../posts.service';
import { postviwer } from './Post';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  items: MenuItem[];
  posts: postviwer[];
  selected: postviwer;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.getPostsforviwe();
  }
  getPostsforviwe(): void {
    this.postsService.getPostsforviwe()
      .subscribe(posts => this.posts = posts)
  }
}
