import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile.model';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  providers: [ProfileService]
})
export class RosterComponent implements OnInit {
  profiles: Profile[];

  constructor(private router: Router, private profileService: ProfileService) { }

  ngOnInit() {
    this.profiles = this.profileService.getProfiles();
  }

  goToDetailPage(clickedProfile: Profile) {
    this.router.navigate(['profiles', clickedProfile.id]);
  };

}
