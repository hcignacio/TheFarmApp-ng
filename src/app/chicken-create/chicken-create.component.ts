import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chicken-create',
  templateUrl: './chicken-create.component.html',
  styleUrls: ['./chicken-create.component.css']
})
export class ChickenCreateComponent implements OnInit {

  @Input() chickenDetails = { name: '',
                              farmId: 0, 
                              joinDate: Date.now }

  constructor(public restApi: RestApiService, public router: Router) { }

  ngOnInit() {
  }

  addChicken(dataChicken) {
    this.restApi.createChicken(this.chickenDetails)
      .subscribe((data: {}) => {
        this.router.navigate(['/chickens-list'])
      })
  }
}
