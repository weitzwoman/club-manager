import { Pipe, PipeTransform } from '@angular/core';
import { Profile } from './profile.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Pipe({
  name: "role",
  pure: false
})

export class RolePipe implements PipeTransform {
  transform(input: Profile[], roleFilter) {
    var output: any[] = [];
    if(input) {
      if (roleFilter === "Instructor") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].role === "Instructor") {
            output.push(input[i]);
          }
        }
      return output;
      } else if (roleFilter === "Committee") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].role === "Committee") {
          output.push(input[i]);
        }
      }
      return output;
      } else if (roleFilter === "Student") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].role === "Student") {
          output.push(input[i]);
        }
      }
      return output;
      } else {
      return input;
      }
    }
  }
}
