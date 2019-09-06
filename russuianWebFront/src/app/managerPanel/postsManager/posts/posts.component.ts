import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/posts.service';
import { postManager } from '../Post';


@Component({
  selector: 'app-postsManager',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 
posts:postManager[]

  constructor(private postsService:PostsService ) { }

  ngOnInit() {
    this.getPosts();
  }
  getPosts():void {
    this.postsService.getPosts()
    .subscribe (posts => this.posts = posts)
  }
}