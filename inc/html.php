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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></script>
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
    <div class="general">
        <div class="progress-container">
            <div class="progress-bar" id="progressBar" data-toggle="tooltip" title="Holi"></div>
        </div>
        <div data-relative-input="true" id="scene" class="containerPresentation card-body">
            <div class="card-title" id="title"></div>
            <div data-depth="0.2" id="containerPicture">
                    <img id="myseft" src="Img/yoN.png">
            </div>
            <div id="textPresentation">
                <scan> The best recipe for a Software Developer</scan>
            </div>
            <div class="d-flex justify-content-center">
                <div  id="ingredients" class="container">
                    <div class="row align-self-center">
                        <div id="jalapino" class="col-sm" >
                            <img src="Img/jalapino.png" class="ingredients">
                            <div></div>
                        </div>
                        <div id="onion" class="col-sm">
                            <img src="Img/onion.png" class="ingredients">
                        </div>
                        <div id="tomato" class="col-sm">
                            <img src="Img/tomato.png" class="ingredients">
                        </div>
                    </div>
                </div>
            </div>
            <div id="bowl" class="align-self-center">
                <img src="Img/bowl.png">
            </div>
            <div id="result" class="align-self-center">
                <img src="Img/result.png">
            </div>
        </div>
    </div>
<?php
}
?>