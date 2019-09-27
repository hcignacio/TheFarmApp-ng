import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farm-create',
  templateUrl: './farm-create.component.html',
  styleUrls: ['./farm-create.component.css']
})
export class FarmCreateComponent implements OnInit {

  @Input() farmDetails = { name: '',
  farmId: 0, 
  creationDate: Date.now }

  constructor(public restApi: RestApiService, public router: Router) { }

  ngOnInit() {
  }

  addFarm(dataFarm) {
    this.restApi.createFarm(this.farmDetails)
      .subscribe((data: {}) => {
        this.router.navigate(['/farms-list'])
      })
  }

}
