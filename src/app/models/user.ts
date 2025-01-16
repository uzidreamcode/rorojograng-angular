export interface Karyawan {
  nama: string;
  alamat: string;
  no_telp: string;
}

export interface User {
  email: string;
  role: string;
  id_karyawan: number;
  Karyawan: Karyawan;
}

export interface ApiResponse {
  page: number;
  totalPages: number;
  totalRecords: number;
  data: User[];
}
