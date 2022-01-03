<?php

/* CONFIGURATION VARIABLES */
$counter_file="counter.txt";
$visitors_ips_file="visitors_ips.txt";
$ip_addr=$_SERVER['REMOTE_ADDR'];
$current_time=time();

/* END CONFIGURATION */

$iprt=3600; # 1 hour is 3600 seconds, I P Residence Time
$ips=array();
$ipfh=fopen($visitors_ips_file,"r");
$flag=0;
while (! feof($ipfh))
{
    $line=fgets($ipfh);
    if(preg_match("/\d/",$line))
    {
        $ls=split(";",$line);
        $ip=$ls[0];$time=trim($ls[1]);
        if($time>$current_time-$iprt)
        {
            $ips[$ip]=$time;
        }
    }
}
fclose($ipfh);
$ipfh=fopen($visitors_ips_file,"w");
foreach ($ips as $key=>$value)
{
    $line="$key;$value\n";
    $write=fputs($ipfh,$line);
}
$line="$ip_addr;$current_time\n\n";
$write=fputs($ipfh,$line);
fclose($ipfh);
$ips_keys=array_keys($ips);
foreach($ips_keys as $cip) # current ip
{
    if (trim($ip_addr)==trim($cip)){$flag=1;break;}
}
$cfh=fopen($counter_file,"r");
$line=fgets($cfh);
$count=trim($line);
CreateCounterImage ($count);
$cfh=fopen($counter_file,"w");

if (!$flag){$count=(int)$count + 1;} #!preg_match("/^93\.44\.212\.1/",$ip_addr) or

$write = fputs($cfh, $count);

function CreateCounterImage ($count){ # creates a captcha image and returns the value written on it
  $im = ImageCreate(80, 20);  # we create an image providing width and height (in pixels) as arguments. Edit this for changing the image counter size
  $selbgcol=rand(0,4);
  
  /* ALLOCATING COLORS TO THE IMAGE */
  
  $red = ImageColorAllocate($im, 189, 5, 8);#RED
  //$black =  ImageColorAllocate($im, 0, 0, 0);#BLACK
$green  = ImageColorAllocate($im, 115, 211, 45);#GREEN
$orange = ImageColorAllocate($im, 252, 149, 26);#ORANGE
$blue = ImageColorAllocate($im, 72, 103, 173);#BLUE 
  $white = ImageColorAllocate($im, 255, 255, 255); # the numbers (text) in the counter will always be white and the above colors are used randomly for the background
  
  $colors = array($black,$orange,$green,$blue,$red);
  $captcha_bg_color = $colors[$selbgcol]; # this will be the background color, selected randomly, unless we uncomment the next line that will override this line 
  # If you want to bypass the random background color you can uncomment the line below and maybe set your own color. Default is green
  #$captcha_bg_color = ImageColorAllocate($im, 115, 211, 45);#GREEN      

  $new_string=$count;
  # we fill the image with the background color
  ImageFill($im, 0, 0, $captcha_bg_color);
  
  # we now write the string text to the image. The last number in the arguments list of ImageString moves the image text vertically, small number -> text goes up, big number text goes down
  # default color for text is white, as defined in the colors list above and then used as last argument in the ImageString call. Feel free to play with the colors here
  ImageString($im, 8, 12, 2, $new_string, $white); # 
 
  #output to browser
  ImagePNG($im, "counter.png");
  header("Content-type:  image/png");
  imagePNG($im);
  echo $im;
  ImageDestroy($im); 
}


?>
