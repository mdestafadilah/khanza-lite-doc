---
id: setupsurat
title: 🛠 Setup Module
sidebar_position: 3
---
Halaman ini hanya untuk penjelasan setup module surat, dan diperuntukkan untuk PJ (Penanggung Jawab) module **E-Office** atau pengguna lainnya, yang faham setup modul prima secara umum.

## Function Outline

Berikut ini nama fungsi yang tersedia di E-Office, dimana digunakan untuk membentuk GROUP user/ dan sesuai kebutuhannya, diantaranya:

### 📗 office

<details>
  <summary>Fungsi</summary>

1. surat
2. surat_keluar
3. surat_keluar_add
4. surat_keluar_edit
5. surat_keluar_view
6. surat_masuk
7. surat_masuk_view
8. surat_balas
9. surat_disposisi
10. surat_disposisi_add
11. settings
12. settings_entitas
13. settings_jabatan
14. settings_pengguna
15. settings_tujuan
16. settings_template
17. cetak
18. edit_sdm

</details>

### 📕 officeAction

<details>
  <summary>Action</summary>

1. accKepala
2. addFile
3. delete_surat_disposisi_internal
4. delete_surat_keluar
5. kembalikan
6. readSurat
7. submitSurat
8. surat_disposisi_eksternal_read
9. surat_disposisi_internal_read

</details>

## Function Group

<details>
<summary>Contoh #1</summary>
<p>

| F. Outline                      | Admin Surat (ALL) | Admin Surat Masuk | Admin Surat Keluar | Admin Surat Disposisi | Custom |
| ------------------------------- | ----------------- | ----------------- | ------------------ | --------------------- | ------ |
| surat                           | ✔️                |                   |                    |                       |        |
| surat_keluar                    | ✔️                |                   | ✔️                 |                       |        |
| surat_keluar_add                | ✔️                |                   | ✔️                 |                       |        |
| surat_keluar_edit               | ✔️                |                   | ✔️                 |                       |        |
| surat_keluar_view               | ✔️                | ✔️                | ✔️                 |                       |        |
| surat_masuk                     | ✔️                | ✔️                |                    | ✔️                    |        |
| surat_masuk_view                | ✔️                | ✔️                |                    | ✔️                    |        |
| surat_balas                     | ✔️                | ✔️                | ✔️                 |                       | ✔️     |
| surat_disposisi                 | ✔️                | ✔️                |                    | ✔️                    |        |
| surat_disposisi_add             | ✔️                | ✔️                |                    | ✔️                    |        |
| settings                        | ✔️                |                   |                    |                       | ✔️     |
| settings_entitas                | ✔️                |                   |                    |                       | ✔️     |
| settings_jabatan                | ✔️                |                   |                    |                       | ✔️     |
| settings_pengguna               | ✔️                |                   |                    |                       | ✔️     |
| settings_tujuan                 | ✔️                |                   |                    |                       | ✔️     |
| settings_template               | ✔️                |                   |                    |                       | ✔️     |
| cetak                           | ✔️                | ✔️                | ✔️                 |                       |        |
| edit_sdm                        | ✔️                |                   |                    |                       |        |
| accKepala                       | ✔️                |                   | ✔️                 |                       |        |
| addFile                         | ✔️                | ✔️                | ✔️                 |                       |        |
| delete_surat_disposisi_internal | ✔️                |                   |                    |                       |        |
| delete_surat_keluar             | ✔️                |                   |                    |                       |        |
| kembalikan                      | ✔️                |                   | ✔️                 |                       |        |
| readSurat                       | 🌎                | 🌎                | 🌎                 | 🌎                    | 🌎     |
| submitSurat                     | ✔️                | ✔️                | ✔️                 |                       |        |
| surat_disposisi_eksternal_read  | ✔️                | ✔️                |                    |                       |        |
| surat_disposisi_internal_read   | ✔️                | ✔️                |                    |                       |        |

</p>
</details>

### 📝 Studi Kasus

```
👴🏾 : Saya mau Sekertaris saya bisa buka semua surat masuk, keluar, disposisi, balasa dan lain lain ya!
👨🏾‍🔧 : Baiklah, akan saya jabarkan, dengan syarat, anda sudah membaca halaman awal sebelum masuk lebih dalam ya!
```

Berikut ini langkahnya:

1. Pilih **Setup Modul**
2. Pilih **Daftar Modul**, dan ketik dengan pencarian **Office** akan muncul function outline, seperti gambar dibawah ini:
   ![Setup Module Surat](/img/office/setupmoduloffice.png)
3. Jika sudah, edit dengan memilih salah satu function outline, misalkan **office**, nanti akan muncul nama function yang tersedia, seperti gambar dibawah ini:
   ![Setup Module Surat](/img/office/setupmoduloffice2.png)
4. Jika ada penambahan function outline di **office**, silahkan ketik dikolm **action**, dan save changes!
5. Lalu, pilih **Setup Group**, maka akan diarahkan ke daftar group, silahkan klik **tambah group** akan muncul halaman seperti dibawah ini, lalu tambahkan function outline yang telah tersedia (lihat alur gambar agar lebih jelas).
   ![Setup Module Surat](/img/office/setupmoduloffice3.png)
   ![Arrow Down](/img/arrow-down-60.png)
   ![Setup Module Surat](/img/office/setupmoduloffice4.png)
   ![Arrow Down](/img/arrow-down-60.png)
   ![Setup Module Surat](/img/office/setupmoduloffice5.png)\
   ![Arrow Down](/img/arrow-down-60.png)
   ![Setup Module Surat](/img/office/setupmoduloffice6.png)
6. Jika sudah disimpan, sekarag masuk ke module **setup user**, nama sekertarisnya adalah joko, ketik dipencarian, lalu klik tombol **edit** dan checklist ADMIN SURAT OFFICE, berikut gambar langkahnya:
   ![Setup Module Surat](/img/office/setupmoduloffice7.png)
   ![Arrow Down](/img/arrow-down-60.png)
   ![Setup Module Surat](/img/office/setupmoduloffice8.png)
7. Done, Logout dan Login Kembali.