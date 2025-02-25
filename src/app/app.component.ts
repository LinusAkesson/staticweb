import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '';

  constructor(private http: HttpClient) {
    this.http
      .get('api/GetTitle', {
        headers: {
          'X-MS-CLIENT-PRINCIPAL-NAME': ' ',
        },
      })
      .subscribe((data: any) => {
        console.log(data);
        this.title = data;
      });
  }
}
