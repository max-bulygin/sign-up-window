This is a simple Java Script pop-up window I made from scratch for one of my customers.
Functionality required:
    1. Pretty pop-up window with subscription form
    2. Validate form on client side
    3. Send data to the server and write it to the file subscribers.csv
    4. Data required: Name, Email, IP Address, Date
    5. Keep it simple

I. Содержимое
    subscribe.js - браузерный скрипт;
    css/subscribe.css - стили для формы;
    form.html - разметка формы, подгружается динамически;
    write-csv.php - серверный скрипт, пишущий в файл;
    users/subscribers.csv - файл с подписчиками
    users/.htaccess - заглушка доступа из браузера;

II. Как подключить
    1. Подключить jQuery: скопировать тэг <script>...</script> из <head> файла index.html
    2. Подключить css/subscribe.css: скопировать тэг <link>...</link> из <head> файла index.html
    3. Подключить subscribe.js: скопировать тэг <script>...</script> из <body> файла index.html
    4. Код для вставки кнопки <button id="subscribe">Подписаться</button>
    5. Содержимое архива вставить в корень вашего сайта. Index.html нужно удалить
    6. Должно работать :)))