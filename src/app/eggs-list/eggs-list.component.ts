import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eggs-list',
  templateUrl: './eggs-list.component.html',
  styleUrls: ['./eggs-list.component.css']
})
export class EggsListComponent implements OnInit {
  Egg: any = [];

  /*
  chickenToBorn = { name: '',
                    joinDate: Date.now }
  */

  constructor(public restApi: RestApiService, public router: Router) { }

  ngOnInit() {
    this.loadEggs();
  }

  loadEggs() {
    return this.restApi.getEggs().subscribe( data => this.Egg = data);
  }

  deleteEgg(egg) {
    if (window.confirm('Are you sure you want to delete?')) {
      this.restApi.deleteEgg(egg)
        .subscribe(data => this.loadEggs())
    }
  }

  born(egg) {
    this.restApi.born(egg)
      .subscribe((data: {}) => {
        this.router.navigate(['/chickens-list'])
      })
  }
}
