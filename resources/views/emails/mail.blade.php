<!DOCTYPE html>
<html>

<head>
    <title>Payment monthly</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&display=swap"
        rel="stylesheet">
    <style type="text/css">
        * {
            padding: 0;
            margin: 0;
            font-family: 'Montserrat', sans-serif;
            box-sizing: border-box;
        }

        body {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .main {
            display: flex;
            width: 90%;
            padding: 50px 20px;
        }

        .main .content {
            width: 38%;
            padding: 0px 2%;
        }

        .main .content h4 {
            font-size: 18px;
        }

        .main .content h2 {
            font-size: 45px;
            font-weight: 600;
            padding-top: 10px;
        }

        .main .content h2 span {
            color: red;
            font-weight: bolder;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, .5);
        }

        .main .content p {
            font-size: 17px;
            font-weight: 400;
            padding-top: 20px;
        }

        .form {
            padding: 0px 10px;
        }

        form input {
            width: 46%;
            height: 60px;
            padding: 15px 25px;
            margin-left: 20px;
            color: #545454;
            font-weight: 500;
            background: #f5f5f5;
            border: none;
            outline: none;
        }

        form .subject {
            margin-top: 25px;
            width: 95%;
            background: #f5f5f5;
            border: none;
        }

        form textarea {
            margin-top: 25px;
            width: 95%;
            padding: 15px 25px;
            height: 120px;
            margin-left: 20px;
            color: #545454;
            background: #f5f5f5;
            font-weight: 600;
            border: none;
            outline: none;
        }

        .button-main {
            width: 190px;
            height: 55px;
            color: #fff;
            position: relative;
            margin-left: 30px;
            margin-top: 40px;
        }

        button {
            border: none;
            width: 100%;
            height: 100%;
            background: #ff0000;
            font-size: 15px;
            font-weight: bold;
            text-transform: uppercase;
            cursor: pointer;
            position: absolute;
            top: 0;
            left: 0;
            color: #fff;
            letter-spacing: 1px;
            transition: .5s;
            display: block;
        }

        button:hover {
            top: 10px;
            left: -10px;
            background: transparent;
            box-shadow: 12px 12px 20px 0 rgb(255 0 0 / 20%);
        }

        button:before {
            content: '';
            display: block;
            width: 0%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: #000;
            transition: .5s;
            z-index: -1;
        }

        .button-main:hover button:before {
            width: 100%;
        }

        .first {
            position: absolute;
            background: transparent;
            height: 50px;
            width: 50px;
            display: block;
            border-left: 2px solid #ff0000;
            border-bottom: 2px solid #ff0000;
            left: -10px;
            top: 10px;
        }

        .button-main:hover .first {
            border-left: 2px solid #000;
            border-bottom: 2px solid #000;
        }

        .second {
            position: absolute;
            width: 0%;
            height: 0%;
            display: block;
            background: transparent;
            top: 0px;
            right: 0px;
            border-right: 2px solid #ff0000;
            border-top: 2px solid #ff0000;
            transition: .5s;
        }

        .button-main:hover .second {
            width: 105%;
            height: 105%;
        }
    </style>
</head>

<body>
    <div class="main">
        <div class="content">
            <h4>CONTACT ME IF YOU HAVE A QUESTION</h4>
            <p>Good day I remind you to pay this month for your rental thank you and godbless.<br/><br/>Otherwise, if you did not make this request then please ignore this email.</p>
        </div>
    </div>
</body>
</html>
