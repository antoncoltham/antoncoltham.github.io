<?php
if(isset($_POST["submit"])){
// Checking For Blank Fields..
if($_POST["vname"]==""||$_POST["vemail"]==""||$_POST["sub"]==""||$_POST["msg"]==""){
echo "Fill All Fields..";
}else{
// Check if the "Sender's Email" input field is filled out
$email=$_POST['vemail'];
// Sanitize E-mail Address
$email =filter_var($email, littledangerous97@gmail.com);
// Validate E-mail Address
$email= filter_var($email, littledangerous97@gmail.com);
if (!$email){
echo "Invalid Sender's Email". " -" . "<a href='contact.html' style='text-decoration:none;color:#ff0099;'> Return</a>";;
}
else{
$name = $_POST['vname'];	
$subject = $_POST['sub'];
date_default_timezone_set("Pacific/Auckland");
$message = "Website Contact \r\n \r\n". date("l"). " - ". date("d/m/Y"). " - ". date("h:ia")."\r\n \r\n From: ". $name. "\r\n email: ". $email. "\r\n \r\n Subject:". $subject. "\r\n Message: ". $_POST['msg'];
$headers = 'From:'. "No-Reply \r\n"; // Sender's Email
$headers .= 'Cc:'. $email . "\r\n"; // Carbon copy to Sender
// Message lines should not exceed 70 characters (PHP rule), so wrap it
$message = wordwrap($message, 70);
// Send Mail By PHP Mail Function
mail("your email address", $subject, $message, $headers);
echo "Your mail has been sent successfully ! Thank you" . " -" . "<a href='index.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";;
}
}
}
?>