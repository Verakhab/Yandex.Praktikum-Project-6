# Yandex.Praktikum-Project-6

Github: https://github.com/Verakhab/Yandex.Praktikum-Project-6

gh-pages: https://verakhab.github.io/Yandex.Praktikum-Project-6/

Project work #6

Version: v.1.1.0

## Описание Проекта

Сервис Mesto: интерактивная страница, куда можно добавлять фотографии, удалять их и ставить лайки.

Продолжил писать функционал проекта Mesto.

__В этом обновлении:__

  - Добавил диалоговое окно «Редактировать профиль». В нём два поля: «Имя» и «О себе», а также, кнопка «Сохранить». Диалоговое окно открывается по нажатию кнопки Edit, её добавил на главную страницу. Закрывается диалоговое окно по клику на крестик.
  - Добавил возможность редактирования имени и информации о себе. Кроме открытия и закрытия диалоговое окно «Редактировать профиль» умеет редактировать соответствующие поля страницы. Когда диалоговое окно открывают, в текстовые поля подставляются имя и информация о себе. После внесения изменений и нажатия кнопки «Сохранить» на странице отображается отредактированная информация.
  - Добавил возможность открытия диалогового окна с картинкой. При клике на картинку она открывается в диалоговом окне и закрывается по клику на крестик.
  - Валидация всех форм. В формах «Новое место» и «Редактировать профиль» кнопки неактивны, если хотя бы в одном из текстовых полей отсутствует текст.
  - Валидация формы «Редактировать профиль». Если поле формы «Редактировать профиль» не прошло валидацию, под ним появляется красный текст ошибки:
    - если поле пустое: «Это обязательное поле».
    - если в поле 1 символ или больше 30: «Должно быть от 2 до 30 символов».
  Если хотя бы одно из полей не прошло валидацию, кнопка «Сохранить» меняет цвет и становится неактивной. Если оба поля прошли валидацию — кнопка становится активной и имеет чёрный фон.
  - Валидация формы «Новое место». У поля для ссылки нет проверки длины текста, зато есть дополнительная проверка, что введена именно ссылка. Тексты ошибок:
    - если поле пустое: «Это обязательное поле»;
    - если в поле «Название» 1 символ или больше 30: «Должно быть от 2 до 30 символов»;
    - если в поле «Ссылка на картинку» не ссылка: «Здесь должна быть ссылка».

__Используемые технологии:__ HTML, CSS, JavaScript, BEM, адаптивная, кроссбраузерная вёрстка.

## Локальный запуск
  ```
     Склонировать репозиторий
     Запустить с помощью браузера файл index.html
  ```
