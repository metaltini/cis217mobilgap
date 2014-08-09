<?php
/**
 * Created by PhpStorm.
 * User: Pete Stein
 * Date: 8/7/14
 * Time: 11:45 PM
 */


print_r($_GET);
$qty = $_GET['qty'];
$pids = $_GET['pid'];

print_r($qty);
print_r($pids);


// Process some of the order here

$form = <<<END_OF_FORM

<form method=post action="purchase.php?">
Name: <input type="text" name="name" /><br/>
Address: <input type="address" name="address" /><br/>
<input type= "submit" name="submit" value="Submit Order"/>
</form>


END_OF_FORM;


echo json_encode($form);