import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chickens-list',
  templateUrl: './chickens-list.component.html',
  styleUrls: ['./chickens-list.component.css']
})
export class ChickensListComponent implements OnInit {
  Chicken: any = [];

  constructor(public restApi: RestApiService, public router: Router) { }

  ngOnInit() {
    this.loadChickens();
  }

  loadChickens() {
    return this.restApi.getChickens().subscribe( data => this.Chicken = data);
  }

  /*
  deleteChicken(id) {
    if (window.confirm('Are you sure you want to delete?')) {
      this.restApi.deleteChicken(id)
        .subscribe(data => this.loadChickens())
    }
  }
  */

  getChickenById(farmId, chickenId) {
    this.router.navigate([ farmId + '/chicken-detail/' + chickenId ])
  }

  editChicken(farmId, chickenId) {
    if (window.confirm('Are you sure you want to edit?')) {
      this.router.navigate([ farmId + '/chicken-edit/' + chickenId ])
    }
  }

  deleteChicken(chicken) {
    if (window.confirm('Are you sure you want to delete?')) {
      this.restApi.deleteChicken(chicken)
        .subscribe(data => this.loadChickens())
    }
  }

  addEggById(id) {
    this.restApi.createEggById(id)
      .subscribe((data: {}) => {
        this.router.navigate(['/eggs-list'])
      })
  }

}
