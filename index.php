<!DOCTYPE html>
<html lang="es">

<head>
        <meta charset="utf-8">
        <meta name="description" content="<?php echo $content; ?>">
        <meta name="viewport" content="width=device-width">
        <title>Pedro Roberti- Desarrollador de software</title>
        <link rel="stylesheet" href="assets/dist/css/style.css" type="text/css">
        <script src="pages/main.js"></script>
</head>

<body onkeyup="keypressing(event);">
        <div id="x">
                <div class="option" onclick="executeFromSelect('cv');">Show cv</div>
                <div class="option" onclick="executeFromSelect('printable');">
                        Dowload printable CV (pdf)
                </div>
                <div class="option" onclick="executeFromSelect('github');">
                        My GitHub repositories
                </div>
                <div class="option" onclick="excecuteFromSelect('contact');">
                        Contact me!
                </div>
                <div class="option" onclick="executeFromSelect('help');">
                        Show terminal help
                </div>
        </div>

        <div class="terminal" id="terminal">
                <pre style="margin: 0 auto; width: 60%; min-width: 50em;">
╔═══╗╔═══╗╔═══╗╔═══╗╔═══╗
║╔═╗║║╔══╝╚╗╔╗║║╔═╗║║╔═╗║
║╚═╝║║╚══╗─║║║║║╚═╝║║║─║║
║╔══╝║╔══╝─║║║║║╔╗╔╝║║─║║
║║───║╚══╗╔╝╚╝║║║║╚╗║╚═╝║
╚╝───╚═══╝╚═══╝╚╝╚═╝╚═══╝
                        ╔═══╗╔═══╗╔══╗─╔═══╗╔═══╗╔════╗╔══╗
                        ║╔═╗║║╔═╗║║╔╗║─║╔══╝║╔═╗║║╔╗╔╗║╚╣─╝
                        ║╚═╝║║║─║║║╚╝╚╗║╚══╗║╚═╝║╚╝║║╚╝─║║─
                        ║╔╗╔╝║║─║║║╔═╗║║╔══╝║╔╗╔╝──║║───║║─
                        ║║║╚╗║╚═╝║║╚═╝║║╚══╗║║║╚╗──║║──╔╣─╗
                        ╚╝╚═╝╚═══╝╚═══╝╚═══╝╚╝╚═╝──╚╝──╚══╝ Desarrollador de software
        
(Escriba 'a' o 'ayuda' para
ver los comandos disponibles) 
                </pre>

                <p class="hl center">
                        <a href="es.php" onclick="event.stopPropagation();">Spanish Version</a>
                </p>
                <p class="commandLine"><span class="prompt">visitor@pedroroberti:~</span>
                        <noscript>
                                <span class="h1">(This site requires javascript - won't work)</span>
                        </noscript>
                        <span class="command">
                                <span id="currentCommand"></span><span class="cursor">_</span>
                        </span>
                <p>
        </div>
        <div id="contact">
                <a href="es.php" id="language">
                        <strong>ES</strong>
                </a>
                <a href="https://www.linkedin.com/in/pedro-roberti-526a43358">
                        <img src="assets/brand/linkedin.png" alt="LinkedIn Logo">
                </a>
                <a href="https://github.com/PedroRoberti1">
                        <img src="assets/brand/github.png" alt="GitHub Logo">
                </a>
        </div>

</body>

</html>