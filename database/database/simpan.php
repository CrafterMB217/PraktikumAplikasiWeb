<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST['nama'];
    $email = $_POST['email'];
    $telepon = $_POST['telepon'];
    $alamat = $_POST['alamat'];

    $sql = "INSERT INTO pengguna (nama, email, telepon, alamat) VALUES ('$nama', '$email', '$telepon', '$alamat')";

    if ($conn->query($sql) === TRUE) {
        echo "Data berhasil disimpan!";
    } else {
        echo "Gagal menyimpan data: " . $conn->error;
    }
}
?>