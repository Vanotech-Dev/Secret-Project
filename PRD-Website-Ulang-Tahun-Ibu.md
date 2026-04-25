# PRD — Website Ucapan Ulang Tahun & Terima Kasih untuk Ibu

**Versi:** 1.0  
**Dibuat:** April 2025  
**Status:** Draft

---

## 1. Latar Belakang

Sebuah website personal yang dibuat anak untuk ibunya sebagai hadiah ulang tahun. Bukan ucapan generik — ini adalah pengalaman digital yang terasa seperti membuka surat sungguhan, dengan foto kenangan dan pesan yang tulus.

---

## 2. Tujuan

- Membuat Ibu merasa benar-benar diperhatikan dan dicintai
- Menyampaikan rasa terima kasih yang selama ini sulit diungkapkan lewat kata langsung
- Menciptakan kenangan digital yang bisa dibuka kembali kapan saja

---

## 3. Target Pengguna

| Peran | Deskripsi |
|---|---|
| **Pembuat** | Anak (pengguna saat ini) — yang mengisi konten, foto, dan pesan |
| **Penerima** | Ibu — yang akan membuka dan membaca website ini |

---

## 4. User Flow

```
Ibu membuka link
      ↓
Layar gelap & hangat muncul
Amplop melayang di tengah layar
Teks: "Untuk Ibu"
      ↓
Ibu mengetuk amplop
      ↓
Amplop terbuka → surat muncul
      ↓
Ibu membaca surat (scroll ke bawah)
      ↓
Foto-foto kenangan (polaroid style)
      ↓
Pesan penutup + tanda tangan
```

---

## 5. Fitur & Kebutuhan

### 5.1 Scene 1 — Halaman Pembuka (Envelope)

| Elemen | Detail |
|---|---|
| Background | Gelap, coklat hangat — nuansa cahaya lilin |
| Efek ambient | Gradasi cahaya keemasan dari bawah layar |
| Partikel | Kelopak bunga melayang pelan |
| Teks atas | `"sebuah surat kecil untuk"` — font kursif |
| Nama | `"Ibu"` — font serif elegante, besar |
| Amplop | Desain CSS murni — krem/gading, ada segel lilin merah |
| Animasi idle | Amplop melayang naik-turun pelan |
| Hover | Glow emas menguat |
| Hint | `"— ketuk untuk membuka —"` blinking pelan |

### 5.2 Animasi Transisi

| Tahap | Animasi |
|---|---|
| Ketuk amplop | Segel memudar, surat menyembul dari dalam amplop |
| Transisi scene | Halaman pembuka fade out, scene surat slide masuk |
| Durasi total | ±1 detik |

### 5.3 Scene 2 — Surat

| Elemen | Detail |
|---|---|
| Background | Overlay gelap blur di belakang surat |
| Kertas surat | Krem hangat, tekstur garis horizontal halus |
| Bingkai | Border tipis dekoratif di dalam kertas |
| Header | Ornamen `✦`, nama "Ibu", teks usia ulang tahun |
| Salutation | `"Kepada Ibu yang paling aku cintai,"` — Dancing Script |
| Body teks | Pesan personal — italic serif, spasi longgar |
| Foto | 4 foto polaroid berserakan dengan rotasi berbeda |
| Caption foto | Teks tangan di bawah setiap polaroid |
| Penutup | Tanda tangan dari anak |
| Tombol tutup | Pojok kanan atas, `✕` |

### 5.4 Foto Polaroid

- Jumlah: 4 foto (bisa ditambah/dikurangi)
- Layout: Grid flexbox, responsive
- Rotasi: Masing-masing sedikit miring (berbeda sudut)
- Hover effect: Lurus + scale naik, z-index di atas yang lain
- Placeholder tersedia sampai foto asli dimasukkan

---

## 6. Desain Visual

| Aspek | Nilai |
|---|---|
| **Palet warna** | Background `#120A04`, Krem `#F4EDD8`, Emas `#C9922A`, Rose `#C97B7B` |
| **Font display** | Cormorant Garamond (italic, elegant) |
| **Font kursif** | Dancing Script (salam, tanda tangan) |
| **Font body** | Lora (italic, serif) |
| **Tone** | Hangat, emosional, intimate — seperti membaca surat fisik di malam hari |

---

## 7. Konten yang Perlu Diisi Pembuat

Sebelum website dikirim ke Ibu, pembuat harus mengisi:

- [ ] **Nama Ibu** — ditampilkan di halaman pembuka & header surat
- [ ] **Usia ulang tahun** — "Selamat Ulang Tahun yang ke-__"
- [ ] **Pesan utama** — 2–4 paragraf, personal dan spesifik
- [ ] **4 foto kenangan** — disertai caption singkat per foto
- [ ] **Nama pengirim** — tanda tangan di penutup surat
- [ ] **Foto** — 4 foto polaroid (bisa diganti/ditambah) - 5MB
- [ ] **Konteks** — bisa diubah di file json
- [ ] **Musik/audio** — bisa diubah di file json

---

## 8. Kebutuhan Teknis

| Item | Keputusan |
|---|---|
| **Tech stack** | HTML + CSS + Vanilla JS (single file) |
| **Font** | Google Fonts (CDN) |
| **Gambar** | URL langsung atau base64 |
| **Hosting** | File lokal / GitHub Pages / Netlify (gratis) |
| **Ukuran target** | < 500KB tanpa foto |
| **Responsif** | Ya — mobile & desktop |
| **Browser support** | Chrome, Safari, Firefox modern |

---

## 9. Yang Tidak Termasuk (Out of Scope)

- Backend atau database
- Login / autentikasi
- Multi-bahasa
- Animasi video

---

## 10. Deliverables

| Item | Status |
|---|---|
| PRD ini | ✅ Selesai |
| File `index.html` (template lengkap) | 🔲 Selanjutnya |
| Panduan cara mengisi konten & foto | 🔲 Bersama file HTML |

---

## 11. Catatan Tambahan

**Kenapa ini tidak akan terasa "boring":**
Website ini bukan halaman ucapan — ini sebuah **pengalaman**. Gelapnya layar di awal menciptakan rasa intim. Animasi amplop menciptakan antisipasi. Dan ketika surat terbuka, yang Ibu baca bukan template — tapi kata-kata anaknya sendiri, disertai foto kenangan mereka berdua. Itulah yang membuat ini berkesan.

**Yang paling menentukan kualitasnya bukan desainnya — tapi isi pesannya.**
