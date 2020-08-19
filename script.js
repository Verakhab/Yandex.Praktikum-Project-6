const root = document.querySelector('.root');
const placesList = root.querySelector('.places-list');
const popup = root.querySelector('.popup');
const popupLink = root.querySelector('.popup_link');
const popupEdit = root.querySelector('.popup_edit');
const popupButtonOpen = root.querySelector('.profile');
const form = document.forms.new;
const forma = document.forms.edit;
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Нургуш',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg'
  },
  {
    name: 'Тулиновка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg'
  },
  {
    name: 'Остров Желтухина',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg'
  },
  {
    name: 'Владивосток',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg'
    }
];

const createCard = (nameV, linkV) => { // функция создания карточки 
  const placesCard = document.createElement('div');
  placesCard.classList.add('place-card');
  placesList.appendChild(placesCard);

  const cardImage = document.createElement('div');
  cardImage.classList.add('place-card__image');
  cardImage.setAttribute('style', `background-image: url(${linkV})`);
  placesCard.appendChild(cardImage);

  const buttonDeleteIcon = document.createElement('button');
  buttonDeleteIcon.classList.add('place-card__delete-icon');
  cardImage.appendChild(buttonDeleteIcon);

  const cardDescription = document.createElement('div');
  cardDescription.classList.add('place-card__description');
  placesCard.appendChild(cardDescription);

  const cardName = document.createElement('h3');
  cardName.classList.add('place-card__name');
  cardName.textContent = nameV;
  cardDescription.appendChild(cardName);

  const buttonLike = document.createElement('button');
  buttonLike.classList.add('place-card__like-icon');
  cardDescription.appendChild(buttonLike);

  return placesList;
};

const initialCard = arrCards => { // функция для перебора массива существующих карточек и добавления на страницу
  arrCards.forEach(e => {
    const name1 = e.name;
    const link1 = e.link;
      
    createCard(name1, link1);
  });
};

initialCard(initialCards); // вызываем функцию перебора массива и добавления существующих карточек

const addCard = event => { // функция добавления новых карточек

  event.preventDefault();

  const form = document.forms.new;
  const title = form.elements.name;
  const addLink = form.elements.link;
  
  placesCard = createCard(title.value, addLink.value);
  form.reset();
};

const keyHandler = event => { // функция добавления карточек и изменении инфо о пользователе при нажатии Enter
  if(event.key === 'Enter') {
    addCard();
    addInfo();
    disButton();
  }
};

const createInfo = (nameUs, aboutUs) => { //функция изменения инфо о пользователе

  const userInfoName = document.querySelector('.user-info__name');
  const userInfoJob = document.querySelector('.user-info__job');

  userInfoName.textContent = nameUs;
  userInfoJob.textContent = aboutUs;

  forma.reset();
};

const addInfo = event => { //функция добавления инфо о пользователе
  event.preventDefault();

  let userInfo = document.querySelector('.user-info');
  const forma = document.forms.edit;
  const usName = forma.elements.nameuser;
  const usAbout = forma.elements.aboutuser;

  userInfo = createInfo(usName.value, usAbout.value);
};

const popupImage = (imageLink) => { //функция добавляющая затемняющий фон и увеличенную картинку
  const darkLayer = document.createElement('div');
  darkLayer.classList.add('dark-layer');
  root.appendChild(darkLayer);

  const divChild = document.createElement('div');
  divChild.classList.add('dark-layer_child');
  darkLayer.appendChild(divChild);

  const imageMax = document.createElement('div');
  imageMax.classList.add('place-card__image');
  imageMax.classList.add('place-card__image_max');
  imageMax.setAttribute('style', `background-image: url(${imageLink})`);
  darkLayer.appendChild(imageMax);

  const imageClose = document.createElement('img');
  imageClose.classList.add('popup__close-image');
  imageClose.setAttribute('src', './images/close.svg');
  imageMax.appendChild(imageClose);
  
  imageClose.addEventListener('click', () => {
  root.removeChild(darkLayer);
});
}

const validName = (event) => { //функция валидации имени в попапе инфо о пользователе

  const usName = forma.elements.nameuser;
  const validAlways = root.querySelector('.popup__valid-always');
  const validLength = root.querySelector('.popup__valid-length');

  if (event.target.classList.contains('popup__input-edit_nameuser') && usName.value.length === 0) {
    validAlways.classList.add('popup_is-opened');
  }
   if (usName.value.length > 0 && usName.value.length < 2) {
    validAlways.classList.remove('popup_is-opened');
    validLength.classList.add('popup_is-opened');
  }
   if (!event.target.classList.contains('popup__input-edit_nameuser')) {
    validAlways.classList.remove('popup_is-opened');
    validLength.classList.remove('popup_is-opened');
  }
   if (event.type === 'input') {
    validAlways.classList.remove('popup_is-opened');
    validLength.classList.remove('popup_is-opened');
   }
   if (event.target.classList.contains('popup__input-edit_nameuser') && usName.value.length === 0) {
    validAlways.classList.add('popup_is-opened');
  }
   if (usName.value.length > 0 && usName.value.length < 2) {
    validAlways.classList.remove('popup_is-opened');
    validLength.classList.add('popup_is-opened');
  }
   if (!event.target.classList.contains('popup__input-edit_nameuser')) {
    validAlways.classList.remove('popup_is-opened');
    validLength.classList.remove('popup_is-opened');
  }
};

const validJob = (event) => { //функция валидации инфо о работе в попапе инфо о пользователе

  const usAbout = forma.elements.aboutuser;
  const validAlwaysJob = root.querySelector('.popup__valid-always-job');
  const validLengthJob = root.querySelector('.popup__valid-length-job');

  if (event.target.classList.contains('popup__input-edit_aboutuser') && usAbout.value.length === 0) {
    validAlwaysJob.classList.add('popup_is-opened');
  }
   if (usAbout.value.length > 0 && usAbout.value.length < 2) {
    validAlwaysJob.classList.remove('popup_is-opened');
    validLengthJob.classList.add('popup_is-opened');
  }
   if (!event.target.classList.contains('popup__input-edit_aboutuser')) {
    validAlwaysJob.classList.remove('popup_is-opened');
    validLengthJob.classList.remove('popup_is-opened');
  }
   if (event.type === 'input') {
    validAlwaysJob.classList.remove('popup_is-opened');
    validLengthJob.classList.remove('popup_is-opened');
   }
   if (event.target.classList.contains('popup__input-edit_aboutuser') && usAbout.value.length === 0) {
    validAlwaysJob.classList.add('popup_is-opened');
  }
   if (usAbout.value.length > 0 && usAbout.value.length < 2) {
    validAlwaysJob.classList.remove('popup_is-opened');
    validLengthJob.classList.add('popup_is-opened');
  }
   if (!event.target.classList.contains('popup__input-edit_aboutuser')) {
    validAlwaysJob.classList.remove('popup_is-opened');
    validLengthJob.classList.remove('popup_is-opened');
  }
};

const validTitl = (event) => { //функция валидации наименования в попапе добавления новой карточки

  const title = form.elements.name;
  const validTitle = root.querySelector('.popup__valid-title');
  const validLink = root.querySelector('.popup__valid-link');

  if (event.target.classList.contains('popup__input_type_name') && title.value.length === 0) {
    validTitle.classList.add('popup_is-opened');
  }
   if (title.value.length > 0 && title.value.length < 2) {
    validTitle.classList.remove('popup_is-opened');
    validLink.classList.add('popup_is-opened');
  }
   if (!event.target.classList.contains('popup__input_type_name')) {
    validTitle.classList.remove('popup_is-opened');
  }
   if (event.type === 'input') {
    validLink.classList.remove('popup_is-opened');
    validTitle.classList.remove('popup_is-opened');
   }
   if (event.target.classList.contains('popup__input_type_name') && title.value.length === 0) {
    validTitle.classList.add('popup_is-opened');
  }
   if (title.value.length > 0 && title.value.length < 2) {
    validTitle.classList.remove('popup_is-opened');
    validLink.classList.add('popup_is-opened');
  }
   if (!event.target.classList.contains('popup__input_type_name')) {
    validTitle.classList.remove('popup_is-opened');
  }
};

const validLink = (event) => { //функция валидации ссылки в попапе добавления новой карточки

  const addLink = form.elements.link;
  const titleLink = root.querySelector('.popup__valid-title-link');
  const lengthLink = root.querySelector('.popup__valid-length-link');

  if (event.target.classList.contains('popup__input_type_link-url') ) {
    titleLink.classList.add('popup_is-opened');
  }
   if (addLink.value.length > 0) {
    titleLink.classList.remove('popup_is-opened');
    lengthLink.classList.add('popup_is-opened');
  }
   if (!event.target.classList.contains('popup__input_type_link-url') || addLink.value.includes('https')) {
    titleLink.classList.remove('popup_is-opened');
    lengthLink.classList.remove('popup_is-opened');
  }
   if (event.type === 'input') {
    lengthLink.classList.remove('popup_is-opened');
    titleLink.classList.remove('popup_is-opened');
   }
   if (event.target.classList.contains('popup__input_type_link-url') && addLink.value.length === 0) {
    titleLink.classList.add('popup_is-opened');
  }
   if (addLink.value.length > 0) {
    titleLink.classList.remove('popup_is-opened');
    lengthLink.classList.add('popup_is-opened');
  }
   if (!event.target.classList.contains('popup__input_type_link-url') || addLink.value.includes('https')) {
    titleLink.classList.remove('popup_is-opened');
    lengthLink.classList.remove('popup_is-opened');
  }
};

const disButton = () => { // функция отключения кнопки "добавить" при не соблюдении условий
  
  const button = document.querySelector('.popup__button');
  const buttonInfo = document.querySelector('.popup__button_edit');

  const form = document.forms.new;
  const title = form.elements.name;
  const addLink = form.elements.link;
  const forma = document.forms.edit;
  const usName = forma.elements.nameuser;
  const usAbout = forma.elements.aboutuser;

  if (title.value.length < 2 || title.value.length > 30 || !addLink.value.includes('https')) {
    button.setAttribute('style', 'background-color: #f1f1f1; cursor: default');
    button.setAttribute('disabled', true);
  } 
  if (usName.value.length < 2 || usName.value.length > 30 || usAbout.value.length < 2 || usAbout.value.length > 30) {
    buttonInfo.setAttribute('style', 'background-color: #f1f1f1; cursor: default');
    buttonInfo.setAttribute('disabled', true);
  } 

  const aplet = event => { // функция улавливания событий в полях ввода
  if (title.value.length < 2 || title.value.length > 30 || !addLink.value.includes('https')) {
    button.setAttribute('style', 'background-color: #f1f1f1; cursor: default');
    button.setAttribute('disabled', true);
  } 
  if (usName.value.length < 2 || usName.value.length > 30 || usAbout.value.length < 2 || usAbout.value.length > 30) {
    buttonInfo.setAttribute('style', 'background-color: #f1f1f1; cursor: default');
    buttonInfo.setAttribute('disabled', true);
  }
  if (event.type === 'input') {
    button.removeAttribute('style', 'background-color: #f1f1f1; cursor: default');
    button.removeAttribute('disabled', true);
    buttonInfo.removeAttribute('style', 'background-color: #f1f1f1; cursor: default');
    buttonInfo.removeAttribute('disabled', true);
  }
  if (title.value.length < 2 || title.value.length > 30 || !addLink.value.includes('https')) {
    button.setAttribute('style', 'background-color: #f1f1f1; cursor: default');
    button.setAttribute('disabled', true);
  } 
  if (usName.value.length < 2 || usName.value.length > 30 || usAbout.value.length < 2 || usAbout.value.length > 30) {
    buttonInfo.setAttribute('style', 'background-color: #f1f1f1; cursor: default');
    buttonInfo.setAttribute('disabled', true);
  }
};

popupLink.addEventListener('input', e => { // слушатель в попапе добавления новой карточки - клава
  if (e.target.closest('input[name=name]')) { 
    aplet(event);
    validTitl(event);
  }
  if (e.target.closest('input[name=link]')) {
    aplet(event);
    validLink(event);
  }
});

popupLink.addEventListener('click', e => { // слушатель в попапе добавления новой карточки - клик
  if (e.target.closest('.popup__close')) {
    popup.classList.remove('popup_is-opened');
    disButton();
  }
  if (e.target.closest('.popup__button')) {
    popup.classList.remove('popup_is-opened');
  }
  if (e.target.closest('input[name=name]')) {
    aplet(event);
    validTitl(event);
  }
  if (!e.target.closest('input[name=name]')) {
    aplet(event);
    validTitl(event);
  }
  if (e.target.closest('input[name=link]')) {
    aplet(event);
    validLink(event);
  }
  if (!e.target.closest('input[name=link]')) {
    aplet(event);
    validLink(event);
  } 
});

popupEdit.addEventListener('input', e => { // слушатель в попапе инфо о пользователе - клава
  if (e.target.closest('input[name=nameuser]')) {
    aplet(event);
    validName(event);
  }
  if (e.target.closest('input[name=aboutuser]')) {
    aplet(event);
    validJob(event);
  }
  if (e.target.closest('.popup__button_edit')) {
    popupEdit.classList.remove('popup_is-opened');
  }
});

popupEdit.addEventListener('click', e => { // слушатель в попапе инфо о пользователе - клик
  if (e.target.closest('.popup__close_edit')) {
    popupEdit.classList.remove('popup_is-opened');
    disButton();
  }
  if (e.target.closest('.popup__button')) {
    popup.classList.remove('popup_is-opened');
  }
  if (e.target.closest('input[name=nameuser]')) {
    aplet(event);
    validName(event);
  }
  if (!e.target.closest('input[name=nameuser]')) {
    aplet(event);
    validName(event);
  }
  if (e.target.closest('input[name=aboutuser]')) {
    aplet(event);
    validJob(event);
  }
  if (!e.target.closest('input[name=aboutuser]')) {
    aplet(event);
    validJob(event);
  }
  if (e.target.closest('.popup__button_edit')) {
    popupEdit.classList.remove('popup_is-opened');
  }
});
  form.reset();
  forma.reset();
};

form.addEventListener('submit', addCard); //добавить новую карточку
forma.addEventListener('submit', addInfo); //обновить инфо о пользователе

placesList.addEventListener('click', event => { //открытие картинки, лайк, удалить
  if (event.target.classList.contains('place-card__image')) {// открытие большого изображения
    let a = event.target.getAttribute('style');
    let b = a.slice(22, -1);
    popupImage(b);
  }
  if (event.target.closest('.place-card__like-icon')) { //лайкнуть карточку
    event.target.classList.toggle('place-card__like-icon_liked');
  }
  if (event.target.closest('.place-card__delete-icon')) { //удалить карточку
    placesList.removeChild(event.target.closest('.place-card'));
  }
});

popupButtonOpen.addEventListener('click', event => { //открытие попапов
  if (event.target.classList.contains('user-info__button_info')) {
    popup.classList.add('popup_is-opened');
    disButton();
  }
  if (event.target.classList.contains('user-info__button_edit-button')) {
    popupEdit.classList.add('popup_is-opened');
    disButton();
  }
});










