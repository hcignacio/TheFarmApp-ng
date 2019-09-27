import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chicken-edit',
  templateUrl: './chicken-edit.component.html',
  styleUrls: ['./chicken-edit.component.css']
})
export class ChickenEditComponent implements OnInit {
  farmId = this.actRoute.snapshot.params['id'];
  id = this.actRoute.snapshot.params['id'];

  @Input() chickenDetails = { name: ''}

  constructor(public restApi: RestApiService,
              public router: Router,
              public actRoute: ActivatedRoute,) { }

  ngOnInit() {
  }

  updateChicken(chickenDetails) {
    this.restApi.editChicken(this.farmId, this.id, this.chickenDetails)
      .subscribe((data: {}) => {
        this.router.navigate(['/chickens-list'])
      })
  }

}
