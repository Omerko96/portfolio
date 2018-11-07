<?php 
  if(isset($_POST['submit'])){
    $firstName=$_POST['firstName'];
    $lastName=$_POST['lastName'];
    $email=$_POST['email'];
    $msg=$_POST['message'];

    $to='stefan.omerovic96@gmail.com';
    $subject='New Form Submission';
    $message="Firstname: ".$firstName."\n"."Lastname: ".$lastName."\n"."Email: ".$email."\n"."Message: ".$msg."\n"
    $headers="From: ".$email;

    if(mail($to, $subject, $message, $headers)){
      echo "<h1>Send Successfully! Thank You!"
    } else {
      echo "Something wend wrong!";
    }
  }

?>