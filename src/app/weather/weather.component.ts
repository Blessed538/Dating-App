import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  weathers: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getValues() {
    this.http.get('http://localhost:5000/api/weathers').subscribe(
      (response) => {
        this.weathers = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
