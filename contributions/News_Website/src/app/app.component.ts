import { Component } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  news:any;
  articles=[];

  constructor(private http: HttpClient){}

  ngOnInit():void {
    this.http.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=432d23e8e31445b383713c7b33030dd5')
    .subscribe(Response =>

      {this.news=Response;
        this.articles=this.news.articles
      });

    
  }
}
