<?php

function html_header($title){?>
    <!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title><?php echo $title;?></title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link rel="stylesheet" href="css/style.css">
    <script type="text/javascript" src="Js/mouse.js"></script>
</head>
<body>
<?php
}

function html_footer(){?>
    </body>
    </html>
<?php
}

function html_presentation($title){?>
    <div id="containerGeneral">
        <div id="containerPresentation">
            <div>
                    <img id="myseft" src="Img/yoN.png">
            </div>
            <div>
                <div class="media-body">
                    <h5>The best recipe for a Software Developer</h5>
                </div>
            </div>
        </div>
    </div>
<?php
}
?>