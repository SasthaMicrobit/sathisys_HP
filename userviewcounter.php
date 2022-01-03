<?php

/* CONFIGURATION VARIABLES */
$counter_file="counter.txt";
$visitors_ips_file="visitors_ips.txt";
$ip_addr=$_SERVER['REMOTE_ADDR'];
$agent =$_SERVER["HTTP_USER_AGENT"];
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
//CreateCounterImage ($count);
$cfh=fopen($counter_file,"w");

if (!$flag){$count=(int)$count + 1;} #!preg_match("/^93\.44\.212\.1/",$ip_addr) or

$write = fputs($cfh, $count);

?>
<!DOCTYPE html>
<html>
    <head>
        <title>UserView</title>
        <style>
            .emplistablehead {
                background-color: #EDC393;
                border-bottom: 1px solid black;
            }
            table.viewerclass tr:nth-child(odd) {
                background-color: #FAEBDD;
            }

            .countclass {
                background-color: #EDC393;
            }
        </style>
    </head>
    <body>
         <span style="font-family:Lucida Calligraphy;text-align:center;">
            <h2>User View History</h2>
        </span>
        <!-- <hr style="border-color:light-grey;margin-top:-20px;" /> -->

        <span style="font-family:Lucida Calligraphy;">
            <h4>Views</h4>
        </span>
        <hr style="border-color:light-grey;margin-top:-20px;" />
        <table border="1"  class = "countclass" style="margin-top:20px;width:20%;word-wrap:break-word;table-layout:fixed;border-collapse:collapse;font-family:times new roman;" align="center">
            <tr style="font-size: 16px;font-weight: bold; border-bottom: 0px; text-align: center;" height="25">
                <td align="center">Total Views</td>
                <td style="background-color:#FAEBDD;" align="center"><?php echo $line; ?></td>
            </tr>
        </table>

        <!-- <span style="font-family:Lucida Calligraphy;">
            <h4>Visitors</h4>
        </span>
        <hr style="border-color:light-grey;margin-top:-20px;" />
        <table border="1"  class = "viewerclass" style="margin-top:20px;width:50%;word-wrap:break-word;table-layout:fixed;border-collapse:collapse;font-family:times new roman;" align="center">
            <tr style="font-size: 16px;font-weight: bold; border-bottom: 0px; text-align: center;" height="25">
                <th class="emplistablehead" width="3%">S.No</th>
                <th class="emplistablehead" width="10%">Ip Address</th>
                <th class="emplistablehead" width="25%">User Agent</th>
                <th class="emplistablehead" width="12%">Date & Time</th>
            </tr>
        <?php 
            $i = 1;
            foreach ($ips AS $key => $value) { 
        ?>
            <tr>
                <td align="center"><?php echo $i; ?></td>
                <td style="padding-left:1px;"><?php echo $key; ?></td>
                <td style="padding-left:1px;"></td>
                <td align="center"><?php echo $value; ?></td>
            </tr>
            
        <?php 
                $i++;
            } 
        ?>
        </table> -->
    </body>
</html>
