const bgDiv = document.querySelector('#bg');
const bgImg = ["01.jpeg", "02.jpeg", "03.jpeg"];
const selectedImg = bgImg[Math.floor(Math.random() * bgImg.length)];
const imageTag = document.createElement('img');

imageTag.id = 'bg';
imageTag.src = `./img/background_${selectedImg}`;
bgDiv.appendChild(imageTag);