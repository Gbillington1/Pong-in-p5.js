<!DOCTYPE html>
<html>

<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Graham's Pong</title>

    <script src="p5.min.js"></script>
    <script src="sketch.js"></script>
    <script src="paddles.js"></script>
    <script src="ball.js"></script>
    <script src="backdrop.js"></script>
    <script src="levels.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">

    <style>
        html body {
            background-color: gray;
            font-family: monospace, sans-serif;
            color: white;
            text-align: center;
            letter-spacing: 2px;
            width: 100%;
            height: 100%;
            margin: 0;
        }

        table {
            margin-left: auto;
            margin-right: auto;
            background-color: #008CBA;
        }

        table tr td {
            outline: 2px solid darkgray;
            padding: 10px 10px;
        }

        button {
            margin-bottom: 20px;
            width: 150px;
            height: 70px;
            border: 2px solid darkgray;
            cursor: pointer;
            background-color: #008CBA;
            color: white;
            font-size: 20px;
            -webkit-transition-duration: 0.2s;
            transition-duration: 0.2s;
        }

        button:hover {
            border: 2px solid #008CBA;
            background-color: white;
            color: #008CBA;
        }

        button:active {
            background-color: lightgray;
            -webkit-transition-duration: 0s;
            transition-duration: 0s;
        }

        button:focus {
            outline: 0;
        }

        a {
            color: #2a81fa;
            text-decoration: underline;
        }

        a:hover {
            color: #6ea6f5;
        }

        #levels-container {
            margin-left: 75px;
            display: block;
            position: absolute;
            top: 275px;
        }

        #send-button {
            width: 100px;
            height: 40px;
            margin-top: 15px;
        }

        .form-input {
            display: list-item;
            margin: auto;
            margin-bottom: 15px;
            background-color: #008CBA;
            border: 1px solid lightgray;
            padding: 5px 0 5px 5px;
            border-radius: 3px;
            font-size: 16px;
            color: white;
            font-family: monospace;
        }

        .form-input:focus {
            outline: none;
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
            transition: background-color 5000s ease-in-out 0s;
            -webkit-text-fill-color: white;
        }

        .form-input.input {
            width: 500px;
            height: 25px;
        }

        .form-input.textarea {
            width: 500px;
            height: 110px;
        }

        ::placeholder {
            /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: lightgray;
            opacity: 1;
            /* Firefox */
        }

        :-ms-input-placeholder {
            /* Internet Explorer 10-11 */
            color: lightgray;
        }

        ::-ms-input-placeholder {
            /* Microsoft Edge */
            color: lightgray;
        }

        #footer {
            background-color: #4a4a4a;
            width: 100%;
            display: table;
            text-align: center;
            margin-left: auto;
            padding: 50px 0;
            margin-right: auto;
        }
    </style>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-154659029-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'UA-154659029-1');
    </script>
</head>

<body>
    <h1>2 Player Pong</h1>
    <button id="pausePlayButton" onClick="pauseGame()"><i class="fa fa-pause"></i> / <i class="fa fa-play"></i></button>
    <button id="resetButton" onClick="resetGame()">Reset</button>
    <div id="container">
    </div>
    <div id="controls">
        <h2>Controls</h2>
        <table>
            <tr>
                <td>
                    Left Paddle
                </td>
                <td>
                    Up: W Key
                    <br>
                    Down: S Key
                </td>
            </tr>
            <tr>
                <td>
                    Right Paddle
                </td>
                <td>
                    Up: Up Arrow
                    <br>
                    Down: Down Arrow
                </td>
            </tr>
        </table>
    </div>
    <h2>Find a bug in the game? Report it!</h2>
    <form method="POST">
        <input class="input form-input" type="text" name="name" placeholder="Name">
        <input class="input form-input" type="text" name="email" placeholder="Email">
        <textarea class="textarea form-input" type="text" name="message" placeholder="Your Message"></textarea>
        <div>
            <button id="send-button" type="submit" name="submit">Send</button>
        </div>
    </form>
    <?php
    if (isset($_POST['submit']) == true) {

        if (empty($_POST['name']) == false && empty($_POST['email']) == false && empty($_POST['message']) == false) {
            $name = $_POST['name'];
            $mailFrom = $_POST['email'];
            $message = $_POST['message'];

            $mailTo = "email@email.com";
            $subject = $name . " sent a Pong bug report!";
            $headers = "From: " . $mailFrom;
            $txt = "You've recieved a bug report from " . $name . ".\n\n" . $message . "\n\n Reply to: " . $mailFrom;

            if (filter_var($mailFrom, FILTER_VALIDATE_EMAIL) == true) {
                mail($mailTo, $subject, $txt, $headers);
                $success = 'Your message has been sent. Thank you!';
                echo "<script type='text/javascript'>alert('$success');</script>";
            } else {
                header("Location: index.php");
                $invalidEmailMessage = 'Please enter a valid e-mail address.';
                echo "<script type='text/javascript'>alert('$invaildEmailMessage');</script>";
            }
        } else {
            $fillFields = 'Please fill out all fields correctly.';
            echo "<script type='text/javascript'>alert('$fillFields');</script>";
        }
    }
    ?>
    <div id="footer">
        <h3>Created By <a href="http://www.grahambillington.com" target="_blank">Graham Billington</a></h3>
        <h4>This game is only playable with an external keyboard.</h4>
    </div>
    <script>
        //disables scroll with arrowkeys
        window.addEventListener("keydown", function (e) {
            //and arrow keys
            if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
                e.preventDefault();
            }
        }, false);

        //makes sure that there is no form resubmission on page reload
        if (window.history.replaceState) {
            window.history.replaceState(null, null, window.location.href);
        }
    </script>
</body>
</html>
