import { Component, OnInit } from '@angular/core';

import { MomentService } from '../../../services/moment.service';
import { Moment } from '../../../Moment';

import { environment } from '../../../../environments/environment';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  allMoments: Moment[] = [];
  moments: Moment[] = [];
  baseApiUrl = environment.baseApiUrl;

  // todo Search

  constructor(private momentService: MomentService) {}

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items) => {
      const data = items.data;

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('en');
      });
      this.allMoments = data;
      this.moments = data;
    });
  }
}
