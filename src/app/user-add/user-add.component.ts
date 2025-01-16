import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css'],
})
export class UserAddComponent {
  users: User[] = []; // Store only the user data array

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.retrieveUsers();
  }

  async retrieveUsers(): Promise<void> {
    try {
      const response = await firstValueFrom(this.userService.getAll());
      this.users = response.data; // Extract only the 'data' array
      console.log(this.users);
    } catch (error) {
      console.error(error);
    }
  }
}
