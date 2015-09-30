<html>
    <head>
        <style>
            img{border:2px #000;}
        </style>
    </head>
    <body>
<?php
$conn = mysql_connect('localhost', 'root', 'sparx');
if(! mysql_select_db("whiteboard", $conn)){
    die('database not found.');
}

$query = mysql_query("SELECT image, ut FROM canvas ORDER BY ut DESC");
?>
        <ul>
            <li>
                <?php
                while($obj = mysql_fetch_object($query)){
                    echo '<img src="'.$obj->image.'" width="500"/>';
                }
                ?>
            </li>
        </ul>
</body>
</html>