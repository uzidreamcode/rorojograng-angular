import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  userId!: number;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.fb.group({
      nama: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      alamat: ['', Validators.required],
      no_telp: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Ambil `userId` dari parameter route
    this.userId = parseInt(this.route.snapshot.params['id'], 10); // Pastikan tipe number

    // Ambil data user berdasarkan ID
    this.userService.getUserById(this.userId).subscribe({
      next: (user: User) => {
        this.editForm.patchValue({
          nama: user.Karyawan.nama,
          email: user.email,
          password: '', // Password tidak diisi untuk keamanan
          alamat: user.Karyawan.alamat,
          no_telp: user.Karyawan.no_telp,
          role: user.role
        });
      },
      error: (error) => {
        console.error('Error fetching user data', error);
      }
    });
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      const { nama, email, password, alamat, no_telp, role } = this.editForm.value;

      this.authService.updateUser(
        this.userId, 
        nama,
        email,
        password,
        alamat,
        no_telp,
        role
      ).subscribe({
        next: (response) => {
          console.log('Update successful', response);
          this.router.navigate(['/user-add']); // Navigasi ke halaman lain setelah update
        },
        error: (error) => {
          console.error('Update failed', error);
          alert('Update failed: ' + error.error.message);
        }
      });
    }
  }
}
