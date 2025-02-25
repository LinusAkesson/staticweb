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
          'Content-Type': 'x-ms-client-principle',
          'swa-managed-key':
            'iwGmr9+aalw49Wy7MIAfnZ0O47mpEBq6WeOAdr1uglyLxt9yBElPzA==',
        },
      })
      .subscribe((data: any) => {
        this.title = data.text;
      });
  }
}
