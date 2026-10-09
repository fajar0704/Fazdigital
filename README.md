# FAZ DIGITAL - Digital Agency Website

Website resmi untuk FAZ DIGITAL, penyedia jasa pembuatan website UMKM, undangan digital, dan landing page. Website ini dibangun menggunakan Next.js (App Router), TypeScript, dan Tailwind CSS.

## Fitur Utama
- **Desain Modern & Responsif**: Menggunakan glassmorphism, gradient dinamis, dan pendekatan mobile-first.
- **Data Statis Terpusat**: Seluruh konten layanan, portofolio, harga, dan FAQ diatur dalam direktori `src/data/`.
- **Integrasi WhatsApp**: Mengarahkan formulir kontak dan CTA langsung ke WhatsApp dengan pesan pre-filled tanpa menggunakan backend.
- **SEO & Aksesibilitas Teroptimasi**: Dilengkapi dengan sitemap, robots.txt, semantic HTML, dan meta tags.
- **Tanpa Backend/Database**: Proyek ini sepenuhnya frontend, mudah di-deploy dan aman.

## Struktur Proyek
- `/src/app` - Routing halaman (Next.js App Router)
- `/src/components` - Komponen React (UI, Layout, Home, Services, dll)
- `/src/config` - Konfigurasi situs utama (site.ts)
- `/src/data` - Data statis (services, portfolio, pricing, faq)
- `/src/lib` - Utilitas pendukung (whatsapp.ts)

## Cara Menjalankan Secara Lokal

1. Pastikan Anda telah menginstal Node.js (versi terbaru disarankan).
2. Install dependensi proyek:
   ```bash
   npm install
   ```
3. Jalankan server development:
   ```bash
   npm run dev
   ```
4. Buka `http://localhost:3000` di browser Anda.

## Konfigurasi Sebelum Deployment

Sebelum website dipublikasikan, Anda **wajib** mengubah nilai konfigurasi pada file `src/config/site.ts`:

- `whatsappNumber`: Ganti dengan nomor WhatsApp asli dengan format internasional (contoh: "6281234567890").
- `instagramUrl`: Ganti dengan URL profil Instagram bisnis.
- `email`: Ganti dengan alamat email bisnis.
- `siteUrl`: Ganti dengan URL domain produksi.

## Cara Deployment ke Vercel

Proyek ini telah dikonfigurasi agar siap di-deploy ke Vercel:

1. Push kode ke repository GitHub Anda.
2. Login ke akun [Vercel](https://vercel.com).
3. Klik tombol **Add New...** > **Project**.
4. Import repository GitHub Anda.
5. Biarkan framework preset pada **Next.js**.
6. Klik **Deploy**.
7. Website Anda akan aktif dalam beberapa menit.

---
*Dibangun khusus untuk FAZ DIGITAL.*
