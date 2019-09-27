import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chicken-detail',
  templateUrl: './chicken-detail.component.html',
  styleUrls: ['./chicken-detail.component.css']
})
export class ChickenDetailComponent implements OnInit {
  farmId = this.actRoute.snapshot.params['id'];
  id = this.actRoute.snapshot.params['id'];

  constructor(public restApi: RestApiService,
    public router: Router,
    public actRoute: ActivatedRoute,) { }

    ngOnInit() : void{
      this.getChicken(this.farmId, this.id);
    }
  
    getChicken(farmId, chickenId) : void{
      this.restApi.getChickenById(this.farmId, this.id);
    }

}
