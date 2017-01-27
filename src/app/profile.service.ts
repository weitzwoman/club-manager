import { Injectable } from '@angular/core';
import { Profile } from './profile.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ProfileService {
  profiles: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.profiles = angularFire.database.list('/profiles');
  }

  getProfiles() {
    return this.profiles;
  }

  addProfile(newProfile: Profile) {
    this.profiles.push(newProfile);
  }

  getProfileById(profileId: string) {
    return this.angularFire.database.object('/profiles/' + profileId);
  }

  updateProfile(localUpdatedProfile){
    var profileEntryInFirebase = this.getProfileById(localUpdatedProfile.$key);
    profileEntryInFirebase.update({name: localUpdatedProfile.name, email: localUpdatedProfile.email, phone: localUpdatedProfile.phone, role: localUpdatedProfile.role});
  }

  deleteProfile(localProfileToDelete){
    var profileEntryInFirebase = this.getProfileById(localProfileToDelete.$key);
    profileEntryInFirebase.remove();
  }

}
