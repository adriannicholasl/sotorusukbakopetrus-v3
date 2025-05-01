# 📦 Proyek Game Tangkap - Soto Rusuk Ba' Ko Petrus

Game ini adalah permainan interaktif berbasis web untuk menarik pelanggan di restoran Soto Rusuk Ba' Ko Petrus, diakses melalui LG Standby ME (WebOS) dan HP admin.

---

## 🎮 Fitur Utama
- **Game tangkap interaktif** berbasis touch-screen.
- **4 level kesulitan** dengan pengaturan hadiah yang fleksibel.
- **Sistem hadiah & pemenang** dengan input data pelanggan.
- **Ambil selfie pemenang** via HP admin.
- **Dashboard Admin** untuk atur kecepatan, toleransi, hadiah.
- **Firebase Realtime Database** sebagai backend (tanpa hosting sendiri).
- **Offline-ready** untuk akses di LG Standby ME.

---

## 📱 Alur Penggunaan

### 🔹 Di LG Standby ME (Customer)
1. Akses `index.html` melalui GitHub Pages.
2. Pilih level → main game.
3. Jika menang → isi nama, IG, telepon.
4. QR Selfie ditampilkan untuk staf admin.

### 🔹 Di HP Admin (Staf)
1. Scan QR untuk buka `camera.html` → ambil selfie.
2. Gunakan `admin-access.html` untuk:
   - Atur hadiah dan level: `admin.html`
   - Lihat data pemenang: `data.html`

---

## 🛠️ Teknologi yang Digunakan
- HTML, CSS, JavaScript
- Firebase Realtime Database
- GitHub Pages
- WebOS Browser Compatibility

---

## 🌐 Struktur Halaman

| Halaman              | Akses dari       | Fungsi                                    |
|---------------------|------------------|-------------------------------------------|
| `index.html`        | LG               | Halaman awal & pilih level permainan      |
| `game.html`         | LG               | Gameplay & hasil menang/kalah             |
| `admin.html`        | HP Admin         | Atur kecepatan, hadiah, toleransi         |
| `data.html`         | HP Admin         | Lihat & simpan data pemenang              |
| `camera.html`       | HP Admin         | Ambil selfie pemenang                     |
| `admin-access.html` | HP Admin         | Berisi QR untuk `admin.html` & `data.html`|

---

## 🔐 Akses Aman
- QR untuk Admin & Data **tidak ditampilkan publik**.
- QR Selfie hanya muncul **jika customer menang**.

---

## 🔄 Sinkronisasi Data
Semua data disimpan di **Firebase**:
- `settings/level1` – `level4`: Konfigurasi permainan
- `winners/`: Data pemenang, termasuk selfie

Data tersimpan cloud dan bisa diakses dari semua device.

---

## 📌 Catatan Penting
- Aplikasi ini tidak menggunakan backend pribadi.
- Bisa dijalankan 100% offline di LG Standby ME setelah halaman dimuat.
- Fitur selfie tidak berjalan di LG (kamera tidak didukung), gunakan HP admin.

---

## 🙌 Developer
**Adrian Nicholas** – Mahasiswa Teknik Informatika Semester 6 Universitas Prisma Manado

> Dibuat secara profesional dengan integrasi Firebase dan desain responsif. 

