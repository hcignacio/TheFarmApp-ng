import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farms-list',
  templateUrl: './farms-list.component.html',
  styleUrls: ['./farms-list.component.css']
})
export class FarmsListComponent implements OnInit {

  Farm: any = [];

  constructor(public restApi: RestApiService, public router: Router) { }

  ngOnInit() {
    this.loadFarms();
  }

  loadFarms() {
    return this.restApi.getFarms().subscribe( data => this.Farm = data);
  }

  
  editFarm(farmId) {
    if (window.confirm('Are you sure you want to edit?')) {
      this.router.navigate([ '/farm-edit/' + farmId ])
    }
  }
  
  deleteFarm(farm) {
    if (window.confirm('Are you sure you want to delete?')) {
    this.restApi.deleteFarm(farm)
      .subscribe(data => this.loadFarms())
    }
  }
  
  addChickenById(id) {
    this.restApi.createChickenById(id)
      .subscribe((data: {}) => {
        this.router.navigate(['/chickens-list'])
      })
  }
}
