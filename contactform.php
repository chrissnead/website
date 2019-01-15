<?php
     $name = $_POST['name'];
     $visitor_email = $_POST['email'];
     $message = $_POST['message'];

     $email_from = $email;
     $email_subject = "Christopher Snead: Contact Submission";
     $email_body = "Name: $name.\n".
                   "Email: $visitor_email.\n".
                   "Message: $message.\n";

     $to = "cdsnead21@gmail.com";
     $headers = "From: $email \r\n";
     $headers .= "Reply-To: $visitor_email \r\n";

     mail($to,$email_subject,$email_body,$headers);

     headers("Location: index.html");     
?>
