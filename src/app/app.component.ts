import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('api/GetData').subscribe((data) => {
      this.title = data.text;
    });
  }
}
