import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-egg-create',
  templateUrl: './egg-create.component.html',
  styleUrls: ['./egg-create.component.css']
})
export class EggCreateComponent implements OnInit {

  @Input() eggDetails = { ChickenId: 1, 
                          joinDate: Date.now }

  Chickens:any = [];

  constructor(public restApi: RestApiService, public router: Router) { }

  ngOnInit() {
    this.restApi.getChickens().subscribe( data => this.Chickens = data);
  }

  addEgg(dataEgg) {
    this.restApi.createEgg(this.eggDetails)
      .subscribe((data: {}) => {
        this.router.navigate(['/chickens-list'])
      })
  }

}
