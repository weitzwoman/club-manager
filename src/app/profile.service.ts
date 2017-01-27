import { Injectable } from '@angular/core';
import { Profile } from './profile.model';
import { PROFILES } from './mock-profiles';

@Injectable()
export class ProfileService {

  constructor() { }

  getProfiles() {
    return PROFILES;
  }

}
