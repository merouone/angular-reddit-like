import { Component } from '@angular/core';
import { Article } from "./article/article.model";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // collection of articles 
  articles : Article[];

  constructor(){
  // init the collection with article objects 
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];
  }
  // when submit button is clicked this action is triggered 
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    // define a local var to hold a new object of type Article 
    // to be added in the articles array
    let newArticle = new Article(title.value,link.value);
    this.articles.push(newArticle);
    title.value = "";
    link.value = "";
    
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false; 
  }
  // get the article collection sorted by votes 
  sortedArticleByVotes(){
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes)
  }

}
