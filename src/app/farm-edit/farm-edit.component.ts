import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-farm-edit',
  templateUrl: './farm-edit.component.html',
  styleUrls: ['./farm-edit.component.css']
})
export class FarmEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  
  @Input() farmDetails = { name: ''}

  constructor(public restApi: RestApiService,
    public router: Router,
    public actRoute: ActivatedRoute,) { }

  ngOnInit() {
  }

  updateFarm(chickenDetails) {
    this.restApi.editFarm(this.id, this.farmDetails)
    .subscribe((data: {}) => {
    this.router.navigate(['/farms-list'])
    })
  }

}
