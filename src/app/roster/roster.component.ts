import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile.model';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  providers: [ProfileService]
})

export class RosterComponent implements OnInit {
  profiles: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  filterByRole: any = "All";

  constructor(private router: Router, private profileService: ProfileService) { }

  ngOnInit() {
    this.profiles = this.profileService.getProfiles();
  }

  goToDetailPage(clickedProfile) {
    this.router.navigate(['profiles', clickedProfile.$key]);
  };

  onRoleChange(role) {
    this.filterByRole = role;
  }
}
