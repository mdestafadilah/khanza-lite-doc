---
sidebar_position: 1
id: pengantar
title: Kata Pengantar
sidebar_label: Kata Pengantar
---
## mLite

mLITE adalah penerus Khanza LITE, dibuat sebagai alternatif ringan untuk SIMKES Khanza agar bisa dijalankan via Mobile / Browser. Kali ini mLITE dibangun lagi dari awal dengan berfokus pada kesederhanaan - programer pemula pun dapat membuat Module-Modul sendiri. Bahkan mengganti tampilan pengguna (User Interface). Ini karena menerapkan sistem dan arsitektur aplikasi yang sangat mudah dalam bentuk Kerangka Kerja (Framework).

Oh iya, mLITE memiliki panduan pemasangan yang sangat mudah juga. Hanya perlu 1 langkah penyesuaian. Segera setelah anda menyalin file-file ke komputer / server dan pengaturan selesai, mLITE siap digunakan! Proses pemasangan bahkan tidak membutuhkan waktu sebanyak yang diperlukan untuk menyalin file-filenya ;-)

Panel kontrol dan tampilan default sepenuhnya responsif, yang membuatnya dapat diakses dari perangkat seluler apa pun, bahkan di ponsel berkat kerangka kerja CSS yang digunakan - Bootstrap. Setiap modul dapat menyesuaikan dengan CSS nya sendiri.

Masih banyak fitur-fitur tersembunyi untuk kebutuhan pengembangan. Silahkan jelajahi!!


## Kebutuhan Sistem

Persyaratan sistem untuk mLITE  sangat sederhana, sehingga setiap server modern sudah cukup. Berikut persyaratan minimal yang diperlukan

+ Apache 2.2+ dengan `mod_rewrite` atau Nginx
+ PHP versi 5.5+
+ MySQL atau MariaDB

Konfigurasi PHP harus memiliki ekstensi berikut:

+ dom
+ gd
+ mbstring
+ pdo
+ zip
+ cURL

Pemasangan
----------

### Pemasangan menggunakan composer.
1. Jalankan perintah composer untuk pemasangan paket utama dan independensi

```
$ composer create-project basoro/khanza-lite
```

2. Buat folder `uploads`, `tmp/` dan `admin/tmp`. Beberapa server mungkin memerlukan izin tambahan `chmod 777` untuk direktori dan file tersebut

3. Buat database lalu sesuaikan pengaturan di config.php

4. Import file mlite_db.sql ke database yang sudah dibuat di point 3 (untuk pengguna SIMRS Khanza silahkan import database di file mlite_only.sql)

5. Buka browser Anda dan navigasikan ke alamat tempat file mLITE berada

6. Silahkan login dengan Username: admin dan Password: admin

### Pemasangan Manual
1. Unduh versi terbaru [mLITE] (https://github.com/basoro/khanza-lite)

2. Ekstrak semua file dari paket terkompresi dan kemudian transfer ke direktori lokal atau server. Biasanya, file diunggah ke `www`,` htdocs` atau `public_html`.

3. Jalankan perintah composer untuk pemasangan independensi
```
$ composer install
```

4. Buat folder `uploads`, `tmp/` dan `admin/tmp`. Beberapa server mungkin memerlukan izin tambahan `chmod 777` untuk direktori dan file tersebut

5. Buat database lalu sesuaikan pengaturan di config.php

6. Import file mlite_db.sql ke database yang sudah dibuat di point 5 (untuk pengguna SIMRS Khanza silahkan import database di file mlite_only.sql)

7. Buka browser Anda dan navigasikan ke alamat tempat file mLITE berada

8. Silahkan login dengan Username: admin dan Password: admin


### Untuk pengembangan
Anda bisa melakukan debuging dan proses pengembangan dengan menggunakan build-in server PHP dengan menjalankan perintah berikut diterminal (lingkungan Unix)

```
cd systems
php -d max_execution_time=180 -S 0.0.0.0:8080 -t .. srv/router.php
```

Atau dalam lingkungan Windows dengan klik 2x pada file

```
systems\srv\startServer.bat
```

Poses pengembangan juga bisa dilakukan di lingkungan Docker. Sumbangan kode dari https://github.com/guhkun13


### Peringatan!

+ Untuk pengguna Apache, pastikan file `.htaccess` juga ada di server. Tanpanya mLITE tidak akan berfungsi.
+ Untuk pengguna Nginx, tambahkan konfigurasi berikut di pengaturan nginx.conf (atau sejenisnya)

```bash
location  / {
    index  index.php;
    if (!-e $request_filename) {
        rewrite / /index.php last;
    }
}

location ^~ /systems/data/ {
    deny all;
    return 403;
}

location  /admin {
    index index.php;
    try_files $uri $uri/ /admin/index.php?$args;
}
```

Jika ada didalam folder, misalnya `lite`

```bash
location  /lite {
    index  index.php;
    if (!-e $request_filename) {
        rewrite / /lite/index.php last;
    }
}

location ^~ /lite/systems/data/ {
    deny all;
    return 403;
}

location  /lite/admin {
    index index.php;
    try_files $uri $uri/ /lite/admin/index.php?$args;
}
```

Untuk masuk ke panel administrasi, tambahkan `/admin/` di akhir URL.
#### Login: `admin` Kata sandi: `admin`
Ini harus diubah segera setelah login untuk alasan keamanan. Juga dapat mengganti nama direktori dengan panel administrasi.  (Anda perlu mengubahnya pada `config.php`)
