---
id: intro
title: 🏢 E-Office
sidebar_position: 1
---

## 1. Login

Aplikasi e-office RSUP Persahabatan dapat diakses melalui melalui komputer, handphone atau perangkat lainnya yang memiliki aplikasi browser seperti google chrome dan firefox.

Tata cara login silahkan ke halaman berikut: Cara Memulai

Jika login berhasil maka akan tampil modul e-office seperti gambar dibawah ini:

![Office](/img/office/awal.png)

Silahkan klik `module e-office` tersebut maka akan tampil sub-modul seperti gambar dibawah ini:

![Sub Menu Office](/img/office/menu.png)

## 2. Surat Keluar

Untuk dapat mengakses `surat keluar` silahkan akses sub module surat keluar, jika berhasil akan tampil halaman seperti dibawah ini:

![User Belom Aktif](/img/office/userBelomAktif.png)

> catatan: Jika muncul kalimat **Tidak ada data atau User belum termapping di Modul Surat** seperti gambar diatas segera hubungi SIMRS untuk diberikan hak akses.

Jika berhasil akan tampil halaman seperti berikut:

![List Surat Keluar](/img/office/keluarList.png)

### 2.1 Pencarian Surat Keluar

Untuk melakukan pencarian surat keluar, dapat memilih **tujuan**, **kategori** dan pengisian **tanggal surat** yang di cari, perhatikan garis merah dibawah ini:

![Pencarian Surat](/img/office/cariSurat.png)

setelah itu klik tombol <button md-raised-button> <div>**cari**</div> </button> maka akan keluar hasil pencariannya.

### 2.2 Buat Surat Keluar

Untuk membuat surat keluar, klik tombol **surat keluar** , ![Buat Surat Keluar](/img/office/tombol.png)

Jika sudah, maka akan muncul tampil gambar seperti dibawah ini:

![Form Surat](/img/office/tambahSuratKeluar.png)

Setelah semua diisi silahkan klik tombol <button md-accent-button> <div>Simpan</div> </button>, maka akan muncul popup, surat berhasil dibuat, dan akan diarahkan ke halaman daftar <a href="#2-surat-keluar">Surat Keluar</a>.

> Penjelasan Kolom Yang Harus Di Isi:
>
> - Dari, muncul dropdown karena Terdapat, Penugasan (PLH) terhadap Instansi Tersebut. Defaultnya: Instansi User/ Pegawai.
> - Klasifikasi, (Di isi berdasarkan tata naskah, kode klasifikasi)
> - Tujuan Surat, Di isi kepada Instansi/ Unit yang terdaftar di SDM (1. Default atau 2. Custom), untuk Custom silahkan lihat manual <a href="#53-custom-tujuan">Setting Custom Tujuan</a>.
> - Perihal ( Perihal surat/ Kalimat Ringkas)
> - Isi Surat (Isi surat, table, font dll)
> - File (Attachmen file jika ada, File yang di izinkan: **PDF,DOCX,DOC,JPG,PNG,JPEG,ZIP**)

```diff
- Harap Perhatikan tanda * (bintang), karena itu wajib diisi.
```

Jika sudah berhasil tersimpan, maka akan diarahkan ke halaman daftar surat keluar, yang selanjutkan harus di ACC oleh kepala ruangan.

### 2.3 Persetujuan Surat Keluar

Pengiriman surat hanya dapat dilakukan oleh **Direktur, Kepala Bagian/Instalasi/Unit, Ketua komite atau user yang memiliki autoritas**. Selain itu _user_ dengan jabatan koordinator atau admin, hanya dapat membuat surat. klik modul surat keluar untuk akses persetujuan surat keluar.

Berikut langkah untuk mengirim/ acc/ persetujuan surat:

1. Klik <button md-raised-button key="1"> <div>View</div> </button>
2. Akan tampil popup surat keluar **(status draft/ belum acc kepala)**
3. Dipojok kiri bawah terdapat deretan tombol, silahkan Klik <button md-raised-button key="2"> <div>Kirim</div> </button> untuk mengirim atau klik <button md-raised-button key="3"> <div>Perbaiki</div> </button> Untuk memperbaiki. ![Tombol Pop UP](/img/office/tombolPopUp.png)
4. Akan muncul notifikasi **surat berhasil di ACC**, artinya Surat akan dikirim ke Instansi/ Unit Tujuan.
5. Selesai.

## 3. Surat Masuk

Untuk dapat mengakses surat masuk, silahkan klik surat masuk, jika sudah, kurang lebih akan tampil halaman seperti berikut ini:

![Surat Masuk](/img/office/suratMasuk2.png)

> Penjelasan Tombol
>
> 1. Tombol <button md-raised-button> <div>View Surat</div> </button> ( Tombol untuk konfirmasi **menerima surat** dan **melihat surat**)
> 2. Tombol <button md-raised-button> <div><a href="#31-view-surat-masuk">View</a></div> </button> (Untuk melihat surat yang sudah diterima sebelumnya)
> 3. Tombol <button md-raised-button> <div><a href="#surat-disposisi">Disposisi</a></div> </button>(Untuk melakuan Disposisi, dengan nomor surat sama)
> 4. Tombol <button md-raised-button> <div><a href="#32-balas-surat-masuk">Balas Surat</a></div> </button> (Untuk membalas surat masuk dari pengirim, dengan nomor surat yang berbeda)

> Penjelasan Warna:
>
> 1. <t style={{color:'purple'}}>Acc Kepala - Ungu</t>
> 2. <t style={{color:'blue'}}>Diterima - Biru</t>
> 3. <t style={{color:'black'}}>Return - Hitam</t>
> 4. <t style={{color:'green'}}>Draft - Hijau</t>

### 3.1 View Surat Masuk

Untuk dapat melihat surat masuk, silahkan klik <button md-raised-button> <div>View</div> </button> tunggu proses loading, maka akan segera muncul surat yang masuk, seperti berikut ini:

![Baca Surat](/img/office/bacaSuratMasuk.png)

> Surat **Tidak Rahasia**
> Siapapun bisa melihat surat, baik di level 1,2,3,4,5,6 atau sifatnya general.

> Surat **Rahasia**
> Jika Surat bersifat rahasia, dan hanya untuk dia seorang, maka tidak akan bisa dibuka:

![Surat Rahasia](/img/office/rahasiaDiaSaja.png)

### 3.2 Balas Surat Masuk

Untuk dapat membalas surat, silahkan masuk ke surat masuk, klik <button md-raised-button> <div>Balas Surat</div> </button> Jika sudah, maka akan tampil halaman form balas surat **(form mirip seperti membuat surat keluar, jangan panik!)** silahkan isi yang bertanda merah saja.

![Baca Surat](/img/office/balasSuratMasuk.png)

> Kolom yang wajib diIsi: **ISI SURAT**

### 3.3 Notifikasi Surat Masuk

#### TODO: Tambah Gambar, Belomaan. hehe. :P

## 4. Surat Disposisi

Untuk dapat akses Surat disposisi bisa melalui **Surat Masuk** atau **Surat Disposisi** sama saja. Input pencarian berdasarkan kebutuhan, bisa nomor surat, tujuan surat, jenis surat dll, sesuaikan dengan kebutuhan.

![List Surat Disposisi](/img/office/listSuratDisposisi.png)

Silahkan klik tombol <button md-raised-button> <div>Add Disposisi</div> </button> maka diarahkan ke halaman seperti dibawah ini:

![Arrow Down](/img/arrow-down-120.png)

![Surat Disposisi](/img/office/suratDisposisi.png)

![Arrow Down](/img/arrow-down-60.png)

![Surat Disposisi](/img/office/menuSuratDisposisi.png)

> Penjelasan Menu:
>
> 1. **Disposisi Internal**, ialah surat internal Instansi digunakan untuk melakukan Penugasan Terhadap masing masing pegawai di unitnya (menggunakan nama jabatan internal, lebih detailnya klik halaman <a href="#52-jabatan">Settings Jabatan</a>)
> 2. **Disposisi Eksternal**, ialah surat eksternal Instansi yang muncul jika Penugasan dilakukan Oleh Jajaran Direksi, berupa Penugasan antar Instansi/ Unit.
> 3. **Balas Surat**, ialah balas surat yang dilakukan oleh Penerima surat kepada Pengirim surat, sama seperti disub modul surat masuk, halaman <a href="#32-balas-surat-masuk">Surat Masuk</a>.

### 4.1 Surat Disposisi Internal

![Disposisi Internal](/img/office/disposisiInternal2.png)

> Nama Pejabat Bisa Ditambahkan di Halaman <a href="#52-jabatan">Settings</a>, setiap Unit **Bertanggung Jawab** terhadap data yang dimasukan.

Silahkan isi, jika selesai silahkan klik tombol <button md-raised-button> <div>Simpan</div> </button> Jika sudah, nanti akan muncul otomatis daftar pendisposisian.

### 4.2 Surat Disposisi Eksternal

![Disposisi Eksternal](/img/office/disposisiEksternal.png)

> Jika nama Instansi/ Unit/ Tim tidak ada, segera Hubungi Bagian Umum, untuk penambahan data.

Silahkan isi, jika selesai silahkan klik tombol <button md-raised-button> <div>Simpan</div> </button> Jika sudah, nanti akan muncul otomatis daftar pendisposisian.

### 4.3 Balas Surat Masuk

![Balas Surat Dihalaman Disposisi](/img/office/balasSurat.png)

## 5. Settings

Menu Setting bisa diakses dengan mengklik module setting, jika sudah akan muncul halaman seperti dibawah ini

![Halaman Settings](/img/office/halamanSettings.png)

### 5.1 Pengguna

Setiap instansi memiliki pengguna yang akan tampil, data ini berdasarkan data SDM, jika tidak ada namanya, silahkan hubungi instansi SDM, untuk update data, berikut ini contoh Pengguna E-Office di Instalasi Sistem Informasi (SIMRS).

![Halaman Settings Pengguna](/img/office/settingsPengguna.png)
![Arrow Down](/img/arrow-down-60.png)
![Halaman Settings Internal Pengguna](/img/office/halamanSettingsInternalPengguna.png)

### 5.2 Jabatan

Setiap instansi memiliki Jabatan Internal masing masing, halaman ini digunakan untuk penambahan dan tidak boleh ada Pengurangan (delete), silahkan lakukan penambahan berdasarkan Instansi masing masing, kurang lebih halaman seperti ini dibawah ini.

![Halaman Settings Jabatan](/img/office/setttingsJabatan.png)
![Arrow Down](/img/arrow-down-60.png)
![Halaman Settings Internal Jabatan](/img/office/halamanSettingsInternalJabatan.png)

### 5.3 Custom Tujuan

Custom Tujuan adalah halaman untuk mengelompokkan tujuan surat, dan setiap Instansi bebas menambahkan, mengurangi atau mengedit, gunakan dengan bijak!

![Halaman Settings Tujuan](/img/office/settingsTujuan.png)
![Arrow Down](/img/arrow-down-60.png)
![Halaman Settings Internal Tujuan Banyak](/img/office/halamanSettingsInternalTujuanBanyak.png)

### 5.4 Entitas Surat

Entitas Surat merupakan halaman untuk mengkonfigurasi data-data dalam surat, seperti, nama kepala, nip kepala, kode surat, kode singkatan unit dan nama panjang unit (nama non-sdm).

![Halaman Settings Entitas](/img/office/settingsEntitas.png)
![Arrow Down](/img/arrow-down-60.png)
![Halaman Settings Internal Entitas](/img/office/halamanSettingsInternalEntitas.png)

### 5.5 Notifikasi Surat

Notifikasi akan muncul saat mengakses halaman utama (dashboard), baik jaringan lokal atau internet. Sistem akan mencatat kode unik dari setiap browser yang berbeda atau juga setelah clear cache browser.

![Notifikasi Dashboard](/img/office/notif-1.png)

Silahkan klik tombol <button md-raised-button> <div>Baiklah</div> </button> untuk mencatan nomor unik browser, jika sudah maka akan muncul notifikasi persetujuan berupa popup, harap setting popup dizinkan ya.

![Notifikasi Izin](/img/office/notif-2.png)

Silahkan klik tombol <button md-raised-button> <div>Allow</div> </button> jika muncul, agar tidak berulang ulang mengklik tombol allow.

Done, Silahkan masuk ke Modul surat -> settings untuk langkah selanjutnya.

![Halaman Settings Entitas](/img/office/notifikasibaru.png)
![Arrow Down](/img/arrow-down-60.png)
![Halaman Settings Internal Entitas](/img/office/halamanSettingsNotifikasi.png)

> Penjelasan Menu:
>
> 1. **Notifikasi Semua Surat**, Untuk menerima semua surat, surat masuk dan surat disposisi eksternal.
> 2. **Notifikasi Surat Masuk**, Hanya menerima surat masuk saja.
> 3. **Notifikasi Surat Disposisi Eksternal**, Hanya menerima surat disposisi eksternal saja.
> 4. **Hapus Notifikasi**, Untuk menghapus seluruh notifikasi di modul e-office.

## 6. Logout

Agar tidak terjadi penyalahgunaan aplikasi PRIMA diharapkan agar user menutup kembali aplikasi dengan melakukan logout.
Untuk melakukan logout, klik pojok kanan aplikasi, pilih logout.

Menjaga kerahasiaan _user_ dan _password_ agar tidak terjadi penyalahgunaan menjadi tanggung jawab user yang bersangkutan. Apabila terjadi penyalahgunaan, segera laporkan ke Instalasi SIMRS.

## 7. Setup Module E-Office

> Silahkan klik halaman [ini](setupsurat), untuk mengakses halaman setup module E-Office.

## 8. Master Data

> Silahkan klik halaman [ini](master), untuk mengakses halaman master.

Selesai, jika ada masukan silahkan email saya: desta@rsuppersahabatan.co.id atau mdestafadilah.simrs@gmail.com
