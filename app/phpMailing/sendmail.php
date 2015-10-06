<?php

function spamcheck($field)
{
  //filter_var() sanitizes the e-mail
  //address using FILTER_SANITIZE_EMAIL
  $field=filter_var($field, FILTER_SANITIZE_EMAIL);

  //filter_var() validates the e-mail
  //address using FILTER_VALIDATE_EMAIL
  if(filter_var($field, FILTER_VALIDATE_EMAIL))
  {
    return true;
  }
  else
  {
    return false;
  }
}

function sendMail($toEmail, $fromEmail, $subject, $message)
{
  $validFromEmail = spamcheck($fromEmail);
  if($validFromEmail)
  {
    mail($toEmail, $subject, $message, "From: $fromEmail");
  }
}

$email = 'mar.ziolek@gmail.com';
$fullname = isset($_POST['fullname']) ? $_POST['fullname'] : false;
$phone = isset($_POST['phone']) ? $_POST['phone'] : false;
$hour = isset($_POST['hour']) ? $_POST['hour'] : false;

if($email != false)
{
  $yourEmail = $email;
  $subject = 'Prośba o kontakt od '. $fullname;
  if (isset($fullname) && isset($phone) && isset($hour)) {
    $message = $fullname . ' prosi o kontakt pod numerem: '. $phone .' w godzinach: '. $hour;  
    if (sendMail($email, $yourEmail, $subject, $message)) {
      return true; 
    } else {
      return false;
    }
  }

}