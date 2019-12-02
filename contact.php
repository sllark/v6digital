<?php
 
 if(isset($_REQUEST['fnames']))
    {
		$name=$_REQUEST['fnames'];
     }else{
		 $name="";
		 $incomplete='Y';
		 }

 if(isset($_REQUEST['email']))
    {
		$email=$_REQUEST['email'];
     }else{
		 $email="";
		 $incomplete='Y';
		 }
 if(isset($_REQUEST['phone']))
    {
		$phone=$_REQUEST['phone'];
     }else{
		 $phone="";
		 $incomplete='Y';
		 }
 if(isset($_REQUEST['company']))
    {
		$company=$_REQUEST['company'];
     }else{
		 $company="";
		 $incomplete='Y';
		 }
 if(isset($_REQUEST['website']))
    {
		$website=$_REQUEST['website'];
     }else{
		 $website="";
		 $incomplete='Y';
		 }
 if(isset($_REQUEST['monthly_budget']))
    {
		$monthly_budget=$_REQUEST['monthly_budget'];
     }else{
		 $monthly_budget="";
		 $incomplete='Y';
		 }

 if(isset($_REQUEST['message']))
    {
		$details=$_REQUEST['message'];
     }else{
		 $details="";
		 }
		 
$servername = "server247.web-hosting.com";
$username = "tqdynsrg_d7c5b3";
$password = "#dPSz=F+!Vhl";
$dbname = "tqdynsrg_mx4d8e7f4";


$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
		
 $now   = new DateTime;
 $dt=$now->format( 'Y-m-d H:i:s' ); 

$sql = "insert into contacts_v6(name,email,phone,company,website,monthly_budget,details,joined_date) values('".$name."','".$email."','".$phone."','".$company."','".$website."','".$monthly_budget."','".$details."','".$dt."')";
$result = mysqli_query($conn, $sql);  

$to = 'hello@v6digital.com';
        $from = "hello@v6digital.com";
		$subject = "v6Digital New Contact";

		$body  =  "
		<br/><br/>
		Name: ".$name.",
		<br/>
		Company: ".$company.",
		<br/>
		Website: ".$website.",
		<br/>
		Email: ".$email.",
		<br/>
		Phone: ".$phone.",
		<br/>
		Budget: ".$monthly_budget.",
		<br/>
		Details: ".$details.",
		<br/><br/>
		<br/><br/>";
               
        
		$header="From: <hello@v6digital.com> \nReply-To: hello@v6digital.com\n";
		$header .= "X-Mailer: PHP/".phpversion()."\n";
		$header .= "X-Sender-IP: \n";
		$header .= "Content-Type: text/html";
		
		//$header .= "X-Mailer: PHP/".phpversion()."\n";
		
mail($to,$subject,$body,$header);
		
mysqli_close($conn);

?>