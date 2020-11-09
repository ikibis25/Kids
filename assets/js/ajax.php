<?php
$un=$_POST['first_name'];
$ph=$_POST['phone_number'];
$ln=$_POST['last_name'];
$em=$_POST['email'];
$msg=$_POST['message'];

$to = "support@templatebundle.net";
$subject = "My subject";
$txt = "Hello admin! query is send by the user and user details are : first-name : ".$un." phone : ".$ph." last-name : ".$ln." email : ".$em." message : ".$msg."";
$headers = "From: webmaster@example.com";

echo mail($to,$subject,$txt,$headers);


?>