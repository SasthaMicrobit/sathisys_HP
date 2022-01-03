<?php

$to = "admin@sathisys.com";
$subject = "Application from sathisys.com";

$name= $_POST["name"];
$gender= $_POST["gender"];
$dob= $_POST["dob"];
$age= $_POST["age"];
$dipdep= $_POST["dipdep"];
$dipmark= $_POST["dipmark"];
$dipyear= $_POST["dipyear"];
$ugdep= $_POST["ugdep"];
$ugmark= $_POST["ugmark"];
$ugyear= $_POST["ugyear"];
$pgdep= $_POST["pgdep"];
$pgmark= $_POST["pgmark"];
$pgyear= $_POST["pgyear"];
$email= $_POST["email"];
$phone= $_POST["phone"];
$pass=$_POST["pass"];
$passno=$_POST["passno"];
$workjap=$_POST["work"];
$term=$_POST["wjt"];
$confident=implode(',',$_POST['conf']);
$willing=implode(',',$_POST['will']);
$area=implode(',',$_POST['aoi']);
$address=$_POST["address"];
$pin=$_POST["pincode"];


$message = '<html><head><title>Mail from Chettiyar Matrimony</title></head><body>
<table>
<tr><td width="163">Name</td>
<td>:</td>
<td colspan="2">'.$name.'</td>
</tr>
<tr><td>Gender</td>
<td>:</td>
<td colspan="2">'.$gender.'</td>
</tr>
<tr><td>Date Of Birth</td>
<td>:</td>
<td colspan="2">'.$dob.'</td>
</tr>
<tr><td>Age</td>
<td>:</td>
<td colspan="2">'.$age.'</td>
</tr>
<tr><td colspan="4">&nbsp;</td></tr>
<tr><td><b>Diploma or HSC</b></td>
<td colspan="3"></td>

</tr>
<tr><td>Department</td>
<td>:</td>
<td colspan="2">'.$dipdep.'</td>
</tr>
<tr><td>Marks</td>
<td>:</td>
<td colspan="2">'.$dipmark.'</td>
</tr>
<tr><td>Year</td>
<td>:</td>
<td colspan="2">'.$dipyear.'</td>
</tr>
<tr><td colspan="4">&nbsp;</td></tr>
<tr><td><b>UG</b></td>
<td colspan="3"></td></tr>
<tr><td>Department</td>
<td>:</td>
<td colspan="2">'.$ugdep.'</td>
</tr>
<tr><td>Marks</td>
<td>&nbsp;</td>
<td colspan="2">'.$ugmark.'</td>
</tr>
<tr><td>Year</td>
<td>&nbsp;</td>
<td colspan="2">'.$ugyear.'</td>
</tr>
<tr><td colspan="4">&nbsp;</td></tr>
<tr><td><b>PG</b></td>
<td colspan="3"></td>
</tr>
<tr><td>Department</td>
<td>&nbsp;</td>
<td colspan="2">'.$pgdep.'</td>
</tr>
<tr><td>Marks</td>
<td></td>
<td colspan="2">'.$pgmark.'</td>
</tr>
<tr><td>Year</td>
<td></td>
<td colspan="2">'.$pgyear.'</td>
</tr>
<tr><td colspan="4">&nbsp;</td></tr>
<tr><td>Email</td><td>:</td>
<td colspan="2">'.$email.'</td>
</tr>
<tr><td>Phone</td><td>:</td>
<td colspan="2">'.$phone.'</td>
</tr>
<tr><td>Having Passport</td><td>:</td>
<td >'.$pass.'</td>
<td >&nbsp;&nbsp;&nbsp;&nbsp;Passport Number&nbsp;&nbsp;&nbsp;&nbsp; '.$passno.'</td>
</tr>
<tr><td>Willing to work in Japan</td><td>:</td>
<td>'.$workjap.'</td>
<td>&nbsp;&nbsp;&nbsp;&nbsp;Willing to work in Japan for&nbsp;&nbsp;&nbsp;&nbsp;'.$term.'</td>
</tr>
<tr><td>Your Confident Language</td><td>:</td>
<td colspan="2">'.$confident.'</td>
</tr>
<tr><td>Willing to work in</td><td>:</td>
<td colspan="2">'.$willing.'</td>
</tr>
<tr><td>Area of Interest</td><td>:</td>
<td colspan="2">'.$area.'</td>
</tr>
<tr><td>Address</td><td>:</td>
<td colspan="2">'.$address.'</td>
</tr>
<tr><td>Pincode</td><td>:</td>
<td colspan="2">'.$pin.'</td>
</tr>
</table></body></html>';
  $mime_boundary="==Multipart_Boundary_x".md5(mt_rand())."x";
         $headers = "From: $email\r\n" .
		 'Reply-To: admin@sathisys.com' . "\r\n" .
         "MIME-Version: 1.0\r\n" .
            "Content-Type: multipart/mixed;\r\n" .
            " boundary=\"{$mime_boundary}\"";
         $message = "This is a multi-part message in MIME format.\n\n" .
            "--{$mime_boundary}\n" .
            "Content-Type: text/html; charset=\"iso-8859-1\"\n" .
            "Content-Transfer-Encoding: 7bit\n\n" .
         $message . "\n\n";
         foreach($_FILES as $userfile)
         {
            $tmp_name = $userfile['tmp_name'];
            $type = $userfile['type'];
            $name = $userfile['name'];
            $size = $userfile['size'];
            if (file_exists($tmp_name))
            {
               if(is_uploaded_file($tmp_name))
               {
                  $file = fopen($tmp_name,'rb');
                  $data = fread($file,filesize($tmp_name));
                  fclose($file);
                  $data = chunk_split(base64_encode($data));
               }
               $message .= "--{$mime_boundary}\n" .
                  "Content-Type: {$type};\n" .
                  " name=\"{$name}\"\n" .
                  "Content-Disposition: attachment;\n" .
                  " filename=\"{$fileatt_name}\"\n" .
                  "Content-Transfer-Encoding: base64\n\n" .
               $data . "\n\n";
            }
         }
        
		
				    $message.="--{$mime_boundary}--\n";
if (mail($to, $subject, $message, $headers))
   echo ("<SCRIPT LANGUAGE='JavaScript'>
    window.alert('Thank You for yor interest in submitting with us. ')
    window.location.href='careers.html';
    </SCRIPT>");
else
   echo "Error in mail";
    $attachFile=$_FILES['resume']['name'];
	$image_name=date("YmdHis")."_".$attachFile;
	$createdat=date("Y-m-d H:i:s");
	move_uploaded_file($_FILES['resume']['tmp_name'],"files/".$image_name);
	
 
?>