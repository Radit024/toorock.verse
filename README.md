Berikut adalah draf `README.md` yang menarik dan profesional, disesuaikan dengan fokus proyekmu serta teknologi yang digunakan di dalam repositori:

````markdown
# 🌌 Toorockverse

Selamat datang di repositori resmi **Toorockverse**! Portal media digital masa kini yang didedikasikan untuk menyajikan berita, ulasan, dan konten-konten seru seputar dunia video game dan anime. Bersama maskot andalan kita, **Toro**, kami siap membawa pengalaman membaca berita kultur pop ke level selanjutnya! 🚀🎮⛩️

## ✨ Fitur Utama

- 📰 **Katalog Artikel Dinamis**: Sistem manajemen dan pembacaan artikel yang lengkap untuk kategori *Games*, *Anime*, *E-sports*, dan *Culture*.
- 👑 **Admin Dashboard & Leaderboard**: Dasbor khusus admin untuk mengelola platform, melacak *leaderboard* kontributor, dan memoderasi konten secara efisien.
- 🤝 **Kolaborasi Artikel**: Fitur *invite* dan kepemilikan artikel yang terintegrasi, memungkinkan beberapa penulis berkolaborasi dalam menyusun satu naskah.
- 🏆 **Live Score Panel & Ticker**: Pembaruan skor pertandingan e-sports secara *real-time* dan *ticker bar* untuk berita kilat.
- 🎨 **UI/UX Modern & Interaktif**: Desain responsif dengan dukungan navigasi *swipeable cards* untuk pengguna seluler, pengaturan ukuran teks, serta fitur *Dark/Light Mode*.

## 🛠️ Tech Stack

Proyek ini dibangun menggunakan teknologi web modern untuk menjamin performa, keamanan, dan skalabilitas:

- **Framework**: [Next.js](https://nextjs.org/) (React)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Komponen UI interaktif (shadcn/ui)
- **Backend & Database**: [Supabase](https://supabase.com/) (PostgreSQL, Auth, Storage, & RLS)
- **Package Manager**: [Bun](https://bun.sh/)
- **Testing**: [Playwright](https://playwright.dev/) (E2E) & [Vitest](https://vitest.dev/) (Unit)

## 🚀 Memulai (Getting Started)

Ikuti langkah-langkat berikut untuk menjalankan proyek ini di mesin lokal kamu.

### Prasyarat
- Pastikan kamu sudah menginstal **[Bun](https://bun.sh/)** di sistem kamu.
- Akun dan proyek aktif di **Supabase**.

### Instalasi & Menjalankan Proyek

1. **Clone repositori**
   ```bash
   git clone [https://github.com/username/toorock.verse.git](https://github.com/username/toorock.verse.git)
   cd toorock.verse
````

2.  **Instal dependensi**
    Karena proyek ini dikunci menggunakan `bun.lockb`, sangat disarankan untuk melakukan instalasi menggunakan Bun:

    ```bash
    bun install
    ```

3.  **Konfigurasi Environment Variables**
    Buat file `.env.local` di *root* direktori dan masukkan kredensial Supabase kamu:

    ```env
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

4.  **Jalankan Development Server**

    ```bash
    bun run dev
    ```

    Buka [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) di browser untuk melihat situs Toorockverse yang sedang berjalan\!

## 🗄️ Database & Keamanan (Supabase)

Proyek ini memanfaatkan Supabase secara ekstensif. Seluruh skema database diatur menggunakan sistem migrasi yang terletak di dalam direktori `supabase/migrations/`. Fitur inti di-*handle* melalui Row Level Security (RLS) PostgreSQL untuk memastikan:

  - Hak akses baca/tulis hanya untuk *author* yang berwenang.
  - Logika sistem kolaborasi (*invitation* antar penulis).
  - Keamanan pengelolaan *storage* untuk unggahan gambar artikel.

## 🤝 Berkontribusi

Ingin ikut membangun Toorockverse? Kami sangat terbuka dengan kontribusi dari sesama *developer*\!

1.  Lakukan *Fork* pada proyek ini.
2.  Buat *branch* fitur kamu (`git checkout -b feature/FiturKeren`).
3.  *Commit* perubahan kamu (`git commit -m 'Menambahkan FiturKeren'`).
4.  *Push* ke *branch* tersebut (`git push origin feature/FiturKeren`).
5.  Buka *Pull Request* dan mari berdiskusi\!

## 📄 Lisensi

Didistribusikan di bawah lisensi MIT. Lihat file `LICENSE` untuk informasi lebih lanjut.

-----

*Dibuat dengan ☕ dan ❤️ untuk komunitas Gamer dan Otaku.*

```
