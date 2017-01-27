import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProfileService]
})
export class AdminComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }

  submitForm(name: string, email: string, phone: string, role: string) {
    var newProfile: Profile = new Profile (name, email, phone, role);
    this.profileService.addProfile(newProfile);
  }

}
