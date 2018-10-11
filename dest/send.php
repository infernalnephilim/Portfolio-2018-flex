<?php

	$email = $_POST['emailV'] ;
	$subject = $_POST['nameV'] ;
	$message = $_POST['textV'] ;
	mail("aleksandra.poltorak.x@gmail.com", "E-Mail od: " .$subject. " (" .$email.") z formularza aleksandra-poltorak.pl",
	$message, "From:" . $email);
  
  ?>