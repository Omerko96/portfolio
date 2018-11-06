<?php 
  $firstName = $POST['firstName'];
  $lastName = $POST['lastName'];
  $email = $POST['email'];
  $message = $POST['message'];

  $email_from = 'omerko1996@gmail.com';

  $email_subject = 'New Form Submission';

  $email_body = "First Name: $firstName.\n".
                "Last Name: $lastName.\n".
                "email: $email.\n".
                "message: $message.\n";

  $to = "stefan.omerovic96@gmail.com";

  $headers = "From: $email_from \r\n";

  $headers .= "Reply-To: $email \r\n";

  mail($to, $email_subject, $email_body, $headers);

  header("Location: index.html");

?>