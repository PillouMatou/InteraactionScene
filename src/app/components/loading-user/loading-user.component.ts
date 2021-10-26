import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ScenesService} from '../../services/scenes.service';
import {UserDBService} from '../../services/user-db.service';

@Component({
  selector: 'app-loading-user',
  templateUrl: './loading-user.component.html',
  styleUrls: ['./loading-user.component.css']
})
export class LoadingUserComponent implements OnInit {

  username: string = "";

  constructor(private route: Router,
              private scenesService: ScenesService,
              private userDBService: UserDBService,
              public routes: ActivatedRoute) {

  }

  ngOnInit(): void {
    //this.username = location.href.substring(32);
    this.username = String(this.routes.snapshot.paramMap.get('id'));
    this.userDBService.currentUser = this.username;
    this.scenesService.loadUserOfUsersList(this.username);
    setTimeout(() => this.route.navigate(['fr']),500);
  }

}
