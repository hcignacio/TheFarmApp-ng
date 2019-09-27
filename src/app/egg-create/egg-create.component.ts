import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-egg-create',
  templateUrl: './egg-create.component.html',
  styleUrls: ['./egg-create.component.css']
})
export class EggCreateComponent implements OnInit {

  @Input() eggDetails = { EggId: 0, 
                          joinDate: Date.now }

  constructor(public restApi: RestApiService, public router: Router) { }

  ngOnInit() {
  }

  addEgg(dataEgg) {
    this.restApi.createEgg(this.eggDetails)
      .subscribe((data: {}) => {
        this.router.navigate(['/chickens-list'])
      })
  }

}
