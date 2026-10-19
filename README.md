# Catatan Uji Teh

Aplikasi web sederhana untuk mencatat dan membandingkan hasil uji coba racikan teh. Satu file HTML, tanpa instalasi, tanpa server.

## Fitur
- Catat tanggal, merek atau campuran, takaran, volume air, suhu, waktu seduh, bahan tambahan, warna, aroma, nilai manis/pahit/sepat (1-5), dan catatan.
- Edit, hapus, dan salin catatan lama menjadi percobaan baru.
- Bandingkan dua percobaan berdampingan. Baris yang berbeda ditandai, dan aplikasi memberi tahu jika yang berbeda lebih dari satu variabel.
- Pencarian, mode gelap otomatis, dan cadangan data (salin/pulihkan).

## Cara memakai
Buka `index.html` di browser, atau pakai GitHub Pages (lihat di bawah).

## Upload ke GitHub dan aktifkan GitHub Pages
1. Di github.com, buat repository baru (misalnya `catatan-uji-teh`), set Public.
2. Klik **Add file > Upload files**, seret **semua file** di folder ini (lihat daftar di bawah), lalu **Commit changes**.
3. Buka **Settings > Pages**. Pada **Branch**, pilih `main` dan folder `/ (root)`, lalu **Save**.
4. Tunggu 1-2 menit. Aplikasi bisa dibuka di `https://<username>.github.io/<nama-repo>/`.

## Daftar file
| File | Fungsi |
|---|---|
| `index.html` | Aplikasi utama |
| `manifest.webmanifest` | Data PWA (nama, warna, ikon) agar bisa dipasang di layar utama HP |
| `sw.js` | Service worker, membuat aplikasi tetap bisa dibuka tanpa internet |
| `logo.svg` | Logo teh hijau |
| `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` | Ikon aplikasi untuk Android dan iPhone |
| `.nojekyll` | Menandai bahwa GitHub Pages tidak perlu memproses Jekyll |

Semua file harus berada di folder yang sama (root repository). Jika `.nojekyll` tidak ikut terupload lewat web, tidak masalah.

## Pasang di HP
Buka alamat GitHub Pages di Chrome (Android), lalu menu **Pasang aplikasi / Add to Home screen**. Di iPhone, pakai Safari, **Bagikan > Tambah ke Layar Utama**.

## Memperbarui aplikasi
Setiap kali mengubah `index.html`, naikkan angka `VERSI` di `sw.js` (misalnya `uji-teh-v2`) supaya perangkat mengambil versi terbaru.

## Catatan data
Data tersimpan di `localStorage` browser masing-masing perangkat dan tidak dikirim ke mana pun. Data hilang jika cache browser dihapus, jadi gunakan tombol **Cadangan** secara berkala.
