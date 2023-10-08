---
id: koreksil14l15
title: Koreksi L14 & L15
sidebar_position: 1
---

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

Bismillah..

Berikut ini langkah langkah untuk melakukan perbaikan L14 & L15 untuk Admin SIMRS.

## Modul Ekspedisi Online

Sebelum masuk ke modul koreksi, harap diperiksa dahulu nomor registrasi di modul ekspedisi dengan memasukkan nomor rekam medis pasien, silahkan masuk ke menu ** Ekspedisi → Telusur Internal**, kurang lebih tampilan akan seperti ini

![Modul Ekspedisi](/img/rekammedis/l14l15/ekspedisi-rm-cek.png)

:::info INFO

1. Hapus Tanggal
2. Ketikkan nomor Rekam Medis Pasien
3. Copy Nomor Register L14/ L15 yang double
4. Klik <HighlightButton color="#348ae2">Cari Pasien</HighlightButton> 

:::

Jika sudah copy pastikan nomor register tersebut yang double, dan benar benar tidak bisa melakukan proses input L14/ L15. lalu buka modul koreksi L14/ L15 di halaman berikut

> http://192.168.132.2/simrs/hidden/user_special_rekammedis/koreksi_14


## Modul Koreksi L14 & L15

Jika sudah membuka modul Koreksi L14/ L15 kurang lebih seperti berikut tampilannya

![Modul Koreksi L14 L15](/img/rekammedis/l14l15/modul-koreksi.png)

Terdapat 3 Kolom yang berbeda, berikut ini penjelasannya

:::info INFO

1. Paste Nomor Register dari Modul Ekspedisi L14/ L15, lalu klik <HighlightButton color="#7bc5d3">Cari</HighlightButton> 
2. Hasil muncul di kolom ini, lalu Copy-Paste Nomor Ekspedisi yang benar/ salah, sesuaikan dengan **Nama Ruangan di Profile Pasien**
3. Copy Nomor Register L14/ L15 yang double
4. Klik <HighlightButton color="#348ae2">Ubah</HighlightButton> 

:::

Selesai.