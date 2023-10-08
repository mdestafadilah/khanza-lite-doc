---
id: viamodul
title: Whatsapp Via Modul
sidebar_position: 2
---

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '7px',
      color: '#fff',
      padding: '0.5rem',
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

Bismillahirrohmanirohim..

Berikut ini tatacara penggunaan Whatsapp Blast (Pengiriman Massal) di Modul Prima.

## Login

Aplikasi Whatsapp Broadcast RSUP Persahabatan dapat diakses melalui melalui komputer, handphone atau perangkat lainnya yang memiliki aplikasi browser seperti google chrome dan firefox.

> Dashboard → API → Whatsapp

Jika login berhasil maka akan tampil modul Whatsapp Broadcast seperti gambar dibawah ini:

![Modul Whatsapp](/img/whatsapp/modul-wa.png)

:::caution INFO

- `WA Connected`, digunakan untuk menghubungkan Whatsapp dihandphone dengan Service Aplikasi Prima.
- `WA Broadcast`, digunakan untuk melakukan proses input penerima, konfirmasi penerima dan  pengiriman pesan massal whatsapp.

:::

## WA Connected

Pada sub-modul ini, digunakan untuk melakukan proses pairing whatsapp di handpone dengan aplikasi prima. Jika sudah diklik, kurang lebih akan tampil halaman seperti berikut:

![WA Connected](/img/whatsapp/wa-connected.png)

:::caution INFO

- `Tambah`, tambah device yang mau dihubungkan, detailnya silahkan baca diketerangan [Tambah Device](#tambah-device)
- `Scan Barcode`, setelah proses penambahan device berhasil, maka lanjut untuk melakukan scan kode QR, detailnya silahkan baca di [Scan Barcode](#scan-barcode)
- `Hapus Koneksi`, menghapus seluruh koneksi, mulai service prima dan aplikasi whatsapp yang ter-pairing.

:::


### Tambah Device

Pada submodul ini digunakan untuk penambahan device, silahkan klik <HighlightButton color="#63cc9e">**Tambah**</HighlightButton>, maka akan muncul tampilan sebagai berikut:

![Tambah Device](/img/whatsapp/tambah-device.png)

:::caution INFO

- `Nama Device`, silahkan ketik nama yang mudah di ingat dan sesuai dengan kebutuhan nomor Whatsapp tersebut.
- `Nomor WA`, Nomor WA pastikan aktif dan belum pernah ditambahkan sebelumnya.
- <HighlightButton color="#6aa6d6">Simpan</HighlightButton>, proses submit data Whatsapp ke Aplikasi Prima.

:::

Jika penambahan berhasil, akan muncul informasi seperti berikut:

![Tambah Device Berhasil](/img/whatsapp/tambah-device-berhasil.png)

Silahkan klik baris `redirect`, untuk masuk ke halaman Device WA Connected. Tapi jika muncul error seperti ini:

![Tambah Device Error](/img/whatsapp/tambah-device-error.png)

Ganti nomor Whatsapp atau silahkan Scan Barcode untuk nomor tersebut.

### Scan Barcode 

Jika Penambahan device sudah, akan muncul seperti ini:

![Tambah Device List](/img/whatsapp/tambah-device-list.png)

:::caution INFO

- `disconnected`, belum ada penambahan device tertaut whatsapp dengan aplikasi prima.
- `connected`, ada error di device yang terhubung dengan aplikasi prima.
- `authenticated`, device nomor whatsapp sudah terhubung dengan aplikasi prima.

:::


Terlihat baris di kolom `status` masih <Highlight color="#ff1d50">**disconnected**</Highlight>, silahkan klik lalu <HighlightButton color="#6aa6d6">Scan Barcode</HighlightButton> dengan aplikasi whatsapp di hanphone anda, maka akan tampil sebagai berikut:

![Tambah Device Scan](/img/whatsapp/tambah-device-scan.png)

Akan muncul proses login seperti berikut:

![Tambah Device Proses](/img/whatsapp/tambah-device-proses.jpg)


Jika proses login berhasil kurang lebih di hanphone akan muncul notifikasi di perangkat tertaut sebagai berikut:

![Tambah Device Tertau](/img/whatsapp/tambah-device-tertaut.png)

Selesai.

### Hapus Koneksi

Jika ingin menghapus silahkan klik <Highlight color="#72b0db">**Hapus Koneksi**</Highlight>, maka akan muncul peringatan konfirmasi, jika di klik `OK` maka proses penghapusan akan dilakukan, kurang lebih akan tampil peringatan seperti dibawah ini:

![Yakin Dihapus](/img/whatsapp/yakin-dihapus.png)

Done. Koneksi sudah tidak ada lagi. baik di aplikasi prima ataupun Whatsapp di perangkat tertaut.

## WA Broadcast

Pada sub-modul ini digunakan untuk melakukan proses pengiriman pesan setelah proses paring WA Device berhasil, kurang lebih akan muncul tampilan seperti berikut:

![Tambah Pesan List](/img/whatsapp/tambah-pesan-list.png)


:::caution INFO

- <HighlightButton color="#83b1d9">Detail Penerima</HighlightButton> melihat nomor dan status penerima pesan
- <HighlightButton color="#83b1d9">Edit Pesan</HighlightButton> untuk melakukan perubahan konten pesan atau pun penerima pesan.
- <HighlightButton color="#83b1d9">Hapus Pesan</HighlightButton> untuk menghapus pesan sekaligus penerima pesan.
- <HighlightButton color="#63cc9e">Tambah</HighlightButton> untuk menambah pesan yang akan dikirim.

:::

### Tambah Pesan

Silahkan klik <HighlightButton color="#63cc9e">Tambah</HighlightButton> maka akan muncul form seperti berikut:

![Tambah Pesan](/img/whatsapp/tambah-pesan.png)

:::warning INFO

Penerima Pesan bisa dalam 2 bentuk
- Freetext
- Upload Excel

Pilih salah satunya ya.

:::

### Edit Pesan

Untuk melakukan perubahan pesan klik <HighlightButton color="#83b1d9">Edit Pesan</HighlightButton>.

### Hapus Pesan

Untuk melakukan hapus pesan klik <HighlightButton color="#83b1d9">Hapus Pesan</HighlightButton>

### Detail Penerima 

![Tambah Pesan Penerima](/img/whatsapp/tambah-pesan-penerima.png)

:::info INFO

- <HighlightButton color="#83b1d9">Konfirmasi</HighlightButton> melakukan konfirmasi penerima pesan.
- <HighlightButton color="#d15e5e">CLOSE</HighlightButton> keluar dari popup penerima pesan.

:::

Silahkan klik <HighlightButton color="#83b1d9">Konfirmasi</HighlightButton> agar bisa melakukan pengiriman pesan.

### Kirim Pesan

Jika sudah dikonfirmasi dihalaman [Detail Penerima](#detail-penerima) maka, akan berubah menjadi `confirmed`. maka akan muncul tombol <HighlightButton color="#83b1d9">Kirim Pesan</HighlightButton> seperti berikut

![Tambah Pesan Kirim](/img/whatsapp/tambah-pesan-kirim.png)

Silahkan klik kirim pesan, maka akan muncul loading. seperti berikut

![Tambah Pesan Loading](/img/whatsapp/tambah-pesan-loading.png)


:::warning PERINGATAN

Semakin banyak penerima, semakin lama loadingnya!

:::


Selesai.