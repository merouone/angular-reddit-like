import { Component, OnInit,HostBinding, Input } from '@angular/core';
import {Article} from './article.model';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
/*
* Article component used to dispaly each article as <app-article>
*/
export class ArticleComponent implements OnInit {
  // to be able to control css class from here // class="row grid"
  @HostBinding('attr.class') cssClass = 'row grid';
  // object article given as property binding param [article]
  @Input() article : Article;
  // init 
  constructor() {
    // nothing here 
  }
  // increment votes by 1
  voteUp(){
    this.article.voteUp();
    return false;
  }
  // decrement votes by 1
  voteDown(){
    this.article.voteDown();
    return false;
  }
  
  ngOnInit() {
  }

}
