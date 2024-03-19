<h1>Установка</h1>
<h3>Чтобы установить следуйте этим шагам:</h3>
<h4>Внимание! Это гайд только для операционной системы Windows</h4>
<ul>
  <li>1. Скачайте код как архив на вкладке Code и зайдите в архив, если папка в архиве называется не console-js(скорее всего console-js-main) то переименуйте ее в console-js</li>
  <li>2. Далее распакуйте архив по пути C:\Users\пользователь, например для меня C:\Users\sirbo</li>
  <li>3. Далее внимательно следуйте инструкциям: нажмите Win "⊞" + R, откроется окно "Выполнить". Введите в поле команду "sysdm.cpl" и нажмите Enter, откроется окно "Свойства системы". Перейдите в пункт "Дополнительно" и нажмите кнопку "Переменные среды", откроется окно "Переменные среды". Далее в разделе системные переменные найдите пункт Path и нажмите кнопку "изменить", откроется окно "Изменить переменную среды". Нажмите кнопку "создать" и введите "C:\Users\пользователь\console-js\sv.cmd". Нажимайте кнопку "ОК" пока не выйдите из окон параметров системы</li>
  <li>4. Введите в поиске, возле меню пуск, "cmd" и нажмите правый клик по приложению "Командная строка" и выберите пункт "Запуск от имени администратора", откроется командная строка. Введите команду "mklink C:\Users\пользователь\sv.cmd C:\Users\пользователь\console-js\sv.cmd", например для меня "mklink C:\Users\sirbo\sv.cmd C:\Users\sirbo\console-js\sv.cmd". Готово!</li>
</ul>
<h4>Теперь вы можете использовать некоторые команды из Voices of the void в консоли cmd.</h4>
<h4>Для использования откройте обычную консоль cmd(не от имени администратора) и введите какую-то команду, например sv ping example.com</h4>
<h4>Если что-то не работает напишите мне в дискорд https://discordapp.com/users/1164292596223463466/</h4>

<h1>Все команды</h1>
<ul>
  <li>Внимание! Синтаксис команд немного отличается от игры, заместо, например sv.ping, пишите sv ping через пробел.</li>
  <li>sv ping "домен" - отправляет 4 пакета на сайт и ожидает возвращения, если количество пакетов вывело зеленым цветом, то сайт полностью рабочий. Пример - sv ping example.com</li>
  <li>sv hash "домен" - пишет в консоли IP-адрес сайта. Пример - sv hash example.com</li>
  <li>sv target "домен" - открывает в браузере по умолчанию сайт по вписанному домену. Пример - sv target example.com</li>
  <li>sv cheats - выводит в консоль "lmao no"</li>
</ul>
