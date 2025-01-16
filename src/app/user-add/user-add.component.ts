import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css'],
})
export class UserAddComponent implements OnInit {
  users: User[] = [];
  currentUser: User = {} as User;
  currentIndex = -1;
  name = '';
  page = 1;
  totalPages = 1;
  totalRecords = 0;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.userService.getAll(this.page).subscribe({
      next: (response) => {
        if (response && Array.isArray(response.data)) {
          this.users = response.data;
          this.page = response.page;
          this.totalPages = response.totalPages;
          this.totalRecords = response.totalRecords;
        } else {
          console.error('Expected an array but got:', response);
        }
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  refreshList(): void {
    this.retrieveUsers();
    this.currentUser = {} as User;
    this.currentIndex = -1;
  }

  setActiveUser(user: User, index: number): void {
    this.currentUser = user;
    this.currentIndex = index;
  }

  changePage(newPage: number): void {
    if (newPage > 0 && newPage <= this.totalPages) {
      this.page = newPage;
      this.retrieveUsers();
    }
  }
}