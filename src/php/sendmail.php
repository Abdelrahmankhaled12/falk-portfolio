<?php
$to = "abdelrahman.khaled1086@gmail.com";
$subject = $_POST['subject'];
$message = $_POST['message'];
$headers = "From: ".$_POST['email'];

mail($to, $subject, $message, $headers);
?>