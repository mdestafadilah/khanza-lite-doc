---
id: intro
title: ⚙️ Check Server Avaliability
sidebar_position: 1
---

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

Manual untuk memperbaiki jika Aplikasi SIMRS  terkendala, seperti lemot dan terputus saat sedang ada pelayanan yang aktif, yang dibagi dalam 2 kategori utama, yaitu pengecekan dari sisi **<Highlight color="#25c2a0">Aplikasi</Highlight>** dan **<Highlight color="#1877F2">Database</Highlight>**.

## Aplikasi

### Cek Koneksi Aplikasi

![Ping Aplikasi](/img/server/ping-ip.png)

Jika **RTO** cek Koneksi Jaringan, jika ada **Reply**  lakukan pengecekan log web server.

```bash
#tail -f /var/log/httpd/error_log
```

![Log Aplikasi](/img/server/cek-log.png)

:::caution INFO

Dari log web server diatas bisa diambil keputusan bahwa error yang terjadi di
web server disebabkan oleh apa, sehingga kita dapat melakukan pengecekan ke
step selanjutnya.

:::


### Cek Space Tersedia

```bash
#df –h
```

![Log Space](/img/server/cek-space.png)

:::warning PERINGATAN

Pastikan bahwa mounting /home **tidak 100%**, jika direktori /home/ 100%
kita hapus file backup yang terlama di /home/backup/simrs

:::

```bash
#df –ih
```

![Log Space 2](/img/server/cek-space-2.png)

:::warning PERINGATAN

Pastikan bahwa mounting / tidak 100%, jika direktori / 100% kita hapus file
log yang membuat direktori tmp menjadi penuh. bisa kita cek direktori
**/var/spool/mqueue** yang menyebabkan direktori tmp menjadi penuh
untuk menghapus file-file tersebut.

:::

```bash
#rm -rf /var/spool/mqueue/*
```

### Cek Web Server

```bash
#service httpd status
```

![Log web server](/img/server/cek-web-server.png)

Jika muncul *stoped/ is running*, lakukan perintah berikut ini:

```bash
// Untuk Memulai Ulang
#service httpd restart

// Untuk Memulai
#service httpd start
```

## Database

### Cek Koneksi Database

Cek koneksi ke server database menggunakan ping

![Log ping database](/img/server/cek-ping-db.png)

Jika **RTO** cek Koneksi Jaringan, jika ada **Reply** lakukan pengecekan log database.

```bash
#tail -f /var/log/mysqld.log
```

:::info INFO

Jika **reply** tapi tidak bisa login, lakukan langkah berikut.

```bash
#service mysqld restart
#ps –ef | grep mysql
```

Perintah diatas adalah untuk menemukan proses di level sistem operasi. Jika
database tidak bisa di restart menggunakan perintah pada poin 1 diatas maka
bisa memaksa proses tersebut diakhiri dengan perintah kill

```bash
#kill processed [pid]
```
:::

### Cek Status Database

```bash
#mysql –u username –p password
mysql>show processlist
```

Proses ini bisa dilakukan dengan aplikasi Desktop, seperti Navicat, SQLYog, dan DBEvear. Bisa juga dengan membuka Aplikasi Prima.

:::caution INFO

Dashboard->laporan->monitoring->side menu pilih monitoring process

:::

![Cek App Monitoring](/img/server/cek-app-monitor.png)

Dari monitoring proses diatas kita bisa menghentikan proses yang menyebabkan antrian proses di database menjadi banyak dan panjang dengan mengklik
perintah **kill** pada kolom action. Action klik ini hanya untuk perintah select, selain itu seperti update, insert dan delete jangan dihentikan prosesnya karena akan
menyebabkan inkonsistensi data atau integritas data menjadi hilang.


