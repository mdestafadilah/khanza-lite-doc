---
id: intro
title: 🕛 Event/ Agenda Kegiatan
sidebar_position: 1
---

<!-- import ReactPlayer from 'react-player' -->

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

export const HighlightButton = ({children, color}) => (
  <button md-raised-button
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </button>
);

<!-- <ReactPlayer playing controls url='https://www.youtube.com/watch?v=_Tr1oVxBcUM' /> -->

Tatacara Penggunaan Module Event/ Agenda Acara di RSUP Persahabatan, baik untuk kebutuhan Internal ataupun External. Berikut ini beberapa Aplikasi yang memanfaatkan Module Event.

## Login

Untuk dapat mengakses Prima SIMRS, silahkan login sesuai **NIP** dan **Password** yang sudah terdaftar. Untuk melihat detail tata cara login silahkan kehalaman [Cara Memulai aplikasi](/docs/intro).

Jika Sudah Masuk, Klik menu **"Dashboard" &#8594; "Agenda Acara"**, jika sudah, kurang lebih tampilannya akan seperti ini.

![Menu Event Agenda Acara](/img/kegiatan/menu-event-kegiatan.png)

:::info INFO

1. Daftar TBO (Daftar Event khusus TBO yang diadakan secara Internal untuk Kebutuhan Internal - Pegawai RSUP Persahabatan)
2. [Daftar Event](#daftar-event)

:::

## Daftar Tbo

Modul Daftar TBO digunakan untuk membuat event/ Agenda Acara yang sifatnya hanya sementara dan digunakan untuk keperluan internal RSUP Persahabatan.

Untuk dapat mengakses silahkan Login, setelah didashboard silahkan klik **"Dashboard" &#8594; "Agenda Acara" &#8594; "Daftar TBO"**

![Menu Event TBO](/img/kegiatan/menu-event-tbo.png)

:::warning Informasi Status

1. <Highlight color="#ff3737">Status Draft</Highlight> (Event belum di aCC)
2. <Highlight color="#00ce00">Status Final</Highlight> (Event sudah di aCC)

:::

:::info INFO

1. [Tambah Baru](#tambah-baru)
2. [Verifikasi Data Pegawai](#verifikasi)
3. Set Kuota & Pegawai
4. View Peserta
5. Mapping Peserta Unit
6. Laporan Kuota

:::

### Tambah Baru

Konten tambah baru

### Verifikasi Data Pegawai

Konten verifikasi data on progresss .....

### Set Kuota & Pegawai

Konten set kuota on progresss .....

### View Peserta

Konten View Peserta on progresss .....

### Mapping Peserta Unit

Konten mapping on progresss .....

### Laporan Kuota

Konten Laporan  on progresss .....

## Daftar Event

Modul Daftar Event digunakan untuk membuat event/ Agenda Acara yang sifatnya hanya sementara dan digunakan untuk keperluan unit masing masing ke masyarakat luas (publik).

Untuk dapat mengakses silahkan Login, setelah didashboard, pastikan sudah muncul icon nya (jika belum hubungi SIMRS, agar ditambahkan hak akses) silahkan klik 

> **"Dashboard" &#8594; "Agenda Acara" &#8594; "Daftar Event"**. 

Berikut tampilannya kurang lebih.

![daftar event Agenda Acara](/img/kegiatan/daftar-event-kegiatan.png)

:::info INFO AKSI KLIK

1. [Tambah Event Online](#tambah-event-online) &#8594; <HighlightButton color="#4ab16c"> <div>**Tambah**</div> </HighlightButton>
2. [Detail Event](#detail-event)
3. [Update Status](#update-status)
4. [Buat Soal Survei](#buat-soal-survei)

:::

### Tambah Event Online

Untuk menambah, silahkan klik tombol tambah berawarna Hijau &#8594; <HighlightButton color="#4ab16c"> <div>**Tambah**</div> </HighlightButton>, kurang lebih akan tampil halaman seperti dibawah ini.

![tambah event/ Agenda Acara](/img/kegiatan/tambah-event.png)

:::warning KETERANGAN KOLOM

1. Tema &#8594; Tema utama tentang kegiatan berlangsung
2. Lokasi &#8594; Lokasi tempat dilaksanakannya kegiatan
3. Tanggal Periode &#8594; Tanggal dilaksanakannya kegiatan
4. Nama Aplikasi &#8594; Untuk Aplikasi apa diperuntukkannya kegiatan dibuat
5. Kebutuhan &#8594; Kebutuhan default nyah Offline (TBO), umumnya Online jika ada akses keluar (publik)
6. Jumlah Peserta &#8594; Jumlah peserta, defaultnya adalah total karyawan rsup persahabatan
7. Jumlah Gelombang &#8594; Gelombang atau pembagian setiap kegiatan (readonly)
8. Waktu Mulai &#8594; Waktu per gelombang yang dibuat, akan mempengaruhi jumlah gelombang

:::

### Detail Event

Silahkan klik tombol detail, kurang lebih akan muncul seperti dibawah ini

![detail event](/img/kegiatan/detail-event.png)

### Update Status

Silahkan klik tombol status event, untuk merubah status event, kurang lebih seperti dibawah ini

![status event](/img/kegiatan/status-event.png)

:::info Keterangan Status

* Draft &#8594; Masih bisa diubah dan tidak akan tampil di aplikasi publik
* Final &#8594; Sudah Selesai dan dapat diakses publik
* Selesai &#8594; Sudah Tutup.

:::

### Buat Soal Survei

Submodul buat soal survei hanya digunakan jika Event yang berlangsung berupa Survey, dan Klik Tombol ![buat soal survei](/img/kegiatan/buat-soal-survei.png), kurang lebih akan muncul seperti dibawah ini.

![tambah soal survei](/img/kegiatan/tambah-survei-soal.png)

:::note KETERANGAN KOLOM

1. Kode Survei &#8594; 
2. Judul Survei &#8594; 
3. Sub Judul Survei &#8594; 
4. Sub Judul Survei &#8594; 
5. Urutan Step Survei &#8594; 
6. Kategori Soal  &#8594; 
7. Sub Kategori Soal  &#8594; 
8. Soal/ Pertanyaan &#8594;
9. Value Kolom
10. Tipe Soal
11. Data
12. Tombol (Delete, Tambah, Kurang)

:::

:::warning

Tombol ![buat soal survei](/img/kegiatan/buat-soal-survei.png) hanya muncul jika **Nama Aplikasi**-nya berupa Survei.

:::

.... lainnya on progress.

## Daftar Event Aktif

<details>
  <summary>Klik Detail</summary>

1. [Lowongan Online](/docs/publik/sdm-ol) (Aplikasi Publik/ External)
2. [Bankdarah Online](/docs/publik/bankdarah-ol) (Aplikasi Publik/ External)
3. [Survei Online](/docs/publik/survei) (Aplikasi Publik/ External)

</details>