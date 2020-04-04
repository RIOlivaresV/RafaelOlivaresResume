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
    <link rel="stylesheet" href="css/ingredients.css">
    <link rel="stylesheet" href="css/process.css">
    <link rel="stylesheet" href="css/result.css">
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
                <scan> The best recipe for a Software Development!</scan>
            </div>
            <div class="d-flex justify-content-center">
                <div  id="ingredients" class="container">
                    <div class="row">
                        <div id="jalapino" class="col-sm" >
                            <img src="Img/jalapino.png" class="ingredients">
                            <div id="coding">
                                <ul style="list-style-type:none">
                                    <li>
                                        <div class="skill">C#</div>
                                        <div class="bar">
                                            <div class="porcent" id="c">80%</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="skill">PHP</div>
                                        <div class="bar">
                                            <div class="porcent" id="php">70%</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="skill">Java</div>
                                        <div class="bar">
                                            <div class="porcent" id="java">60%</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="skill">JavaScript</div>
                                        <div class="bar">
                                            <div class="porcent" id="js">70%</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="skill">Jquery</div>
                                        <div class="bar">
                                            <div class="porcent" id="jq">50%</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="skill">HTML</div>
                                        <div class="bar">
                                            <div class="porcent" id="html">90%</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="skill">CSS</div>
                                        <div class="bar">
                                            <div class="porcent" id="css">90%</div>
                                        </div>
                                    </li>
                                    <!-- <li>
                                        <div class="skill">SQL / MySQL</div>
                                        <div class="bar">
                                            <div id="db">SQL / MySQL</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="skill">MongoDB</div>
                                        <div class="bar">
                                            <div id="mongo">MongoDB</div>
                                        </div>
                                    </li> -->
                                </ul>
                            </div>
                        </div>
                        <div id="onion" class="col-sm">
                            <img src="Img/onion.png" class="ingredients">
                            <div id="experience">
                                <ul style="list-style-type:none">
                                    <li>
                                        <div class="card">
                                            <div class="flip-card">
                                                <div class="card-front">
                                                   <h3 class="align-middle">Fresh Fast Pizza</h3>
                                                </div>
                                                <div class="card-back align-middle">
                                                    <a href="http://freshfastpizza.ca/" target="_blank" data-toggle="tooltip" title="More about Fresh Fast Pizza"><h4>Fresh Fast Pizza</h4></a>
                                                    <span>Oct 2019 - Feb 2020</span><br>
                                                    <span>WordPress, HTML, CSS</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="card">
                                            <div class="flip-card">
                                                <div class="card-front">
                                                   <h3 class="align-middle">Autostrada Osteria</h3>
                                                </div>
                                                <div class="card-back align-middle">
                                                    <a href="https://autostrada.azurewebsites.net/" target="_blank" data-toggle="tooltip" title="More about Autostrada Osteria"><h4>Autostrada Osteria</h4></a>
                                                    <span>Nov 2018</span><br>
                                                    <span>HTML, CSS, JavaScript</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="card">
                                            <div class="flip-card">
                                                <div class="card-front">
                                                   <h3 class="align-middle">Smart Byte</h3>
                                                </div>
                                                <div class="card-back align-middle">
                                                    <a href="http://www.smartbyte.com.mx/" target="_blank" data-toggle="tooltip" title="More about Smart Byte"><h4>Smart Byte</h4></a>
                                                    <span>Mar 2015 - Jul 2017</span><br>
                                                    <span>C#, Devexpress, Addin-Express</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="card">
                                            <div class="flip-card">
                                                <div class="card-front">
                                                    <h3 class="align-middle">Atento Servicios</h3>
                                                </div>
                                                <div class="card-back align-middle">
                                                <a href="http://atento.com/locations/mexico/" target="_blank" data-toggle="tooltip" title="More about Atento Servicios"><h4>Atento Servicios</h4></a>
                                                    <span>Mar 2013 - Mar 2015</span><br>
                                                    <span>PHP, WAMP, MySQL</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id="tomato" class="col-sm">
                            <img src="Img/tomato.png" class="ingredients">
                            <div id="ux">
                                <ul style="list-style-type:none">
                                    <li>
                                        <div class="item">
                                            <h3>Responsive</h3>
                                            <span>A flavor that everybody likes</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="item">
                                            <h3>Useful</h3>
                                            <span>Satisfying your hungry</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="item">
                                            <h3>Valuable</h3>
                                            <span>You didn't get disappointed</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="processContainer">
                <div id="process">
                    <ol>
                        <li>Analysing and requirements</li>
                        <li>Making documentation</li>
                        <li>Testing</li>
                        <li>Coding good practice</li>
                        <li>Good understanding</li>
                    </ol>
                </div>
            </div>
            <div id="bowl" class="align-self-center">
                <img src="Img/bowl.png">
            </div>
            <div id="result" class="align-self-center">
                <img src="Img/result.png">
            </div>
            <div class="resultRight">
                <div id="estimate">
                    <div class="time">
                    <h5>Total Time</h5>
                    <span>7 years of experience</span>
                    </div>
                    <div class="time">
                    <h5>Prep Time</h5>
                    <span><b>Instituto Politecnico Nacional</b> <br> Computing Engineering</span><br>
                    <span><b>Douglas College</b> <br> Computing & Information Technology</span>
                    </div>
                    <div class="time">
                    <h5>Cook Time</h5>
                    <span>5 years working as <br> Full Stack Developer</span>
                    </div>
                </div>
                <div id="nutrimental">
                    <table>
                        <tr>
                            <th colspan="2"> Nutrimental Info</th>
                        </tr>
                        <tr>
                            <td>Fast</td>
                            <td>Dynamic</td>
                        </tr>
                        <tr>
                            <td>Effective</td>
                            <td>Quality</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div id="contact">
                <div id="aboutME">
                <h2>This is Rafael Olivares</h2>
                <span>I am Full Stack Developer. I am living in Vancouver Canada, but I was born in Mexico City
                <br>I love to code, travel, and cook. With my experience and knowledge, we might make the best
                <br>recipe for your needs. </span>
                </div>
                <div>
                <form action="" method="post">
                    <div class="form-group">
                        <input class="form-control" type="text" id="name" placeholder="Name">
                    </div>
                    <div class="form-group">
                        <input class="from-control" type="text" id="email" pleceholder="Email">
                    </div>
                    <div class="form-group">
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
<?php
}
?>