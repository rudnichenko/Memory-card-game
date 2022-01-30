//Grab couple things
const section = document.querySelector('section');
const playerLivesCount = document.querySelector('.playerLivesCount');
let playerLives = 6;

//Link text
playerLivesCount.textContent = playerLives;

//Generate data
const getData = () => [
  {imgSrc: "./images/beatles.jpeg", name: "beatles"},
  {imgSrc: "./images/blink182.jpeg", name: "blink 182"},
  {imgSrc: "./images/fkatwigs.jpeg", name: "fka twigs"},
  {imgSrc: "./images/fleetwood.jpeg", name: "fleetwood"},
  {imgSrc: "./images/joy-division.jpeg", name: "joy division"},
  {imgSrc: "./images/ledzep.jpeg", name: "led zeppelin"},
  {imgSrc: "./images/metallica.jpeg", name: "metallica"},
  {imgSrc: "./images/pinkfloyd.jpeg", name: "pinkfloyd"},
  {imgSrc: "./images/beatles.jpeg", name: "beatles"},
  {imgSrc: "./images/blink182.jpeg", name: "blink 182"},
  {imgSrc: "./images/fkatwigs.jpeg", name: "fka twigs"},
  {imgSrc: "./images/fleetwood.jpeg", name: "fleetwood"},
  {imgSrc: "./images/joy-division.jpeg", name: "joy division"},
  {imgSrc: "./images/ledzep.jpeg", name: "led zeppelin"},
  {imgSrc: "./images/metallica.jpeg", name: "metallica"},
  {imgSrc: "./images/pinkfloyd.jpeg", name: "pinkfloyd"},
];

//Random the cards
const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

//Card Generator Function
const cardGenerator = () => {
  const cardData = randomize();
  //Generate html
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    //Attach the info to the cards
    face.src = item.imgSrc;
    card.setAttribute("name", item.name);
    //Attach the cards to the section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCards(e);
    });
  });
};

//Check cards
const checkCards = (e) => {
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  const toggleCards = document.querySelectorAll(".toggleCard");
  //Logic
  if (flippedCards.length === 2) {
    if (flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")) {
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
      playerLives++;
      playerLivesCount.textContent = playerLives;
    } else {
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 1000);
      });
      playerLives--;
      playerLivesCount.textContent = playerLives;
      if (playerLives === 0) {
        restart("LOSER, try again");
      }
    }
  }
  
  if (toggleCards.length === 16) {
    let node = document.createElement("button");
    node.classList.add("newGameBtn");
    node.textContent = "New Game";
    node.addEventListener("click", () => {restart("Lets play new game!")}, false);
    document.body.appendChild(node);
    setTimeout(() => window.alert("You WIN!"),1000);
  }
}

//Restart
const restart = (text) => {
  let cardData = randomize();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  let newGameBtn = document.querySelector(".newGameBtn");
  section.style.pointerEvents = "none";
  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");
    
    setTimeout(() => {
      cards[index].style.pointerEvents = "all";
      faces[index].src = item.imgSrc;
      cards[index].setAttribute("name", item.name);
      section.style.pointerEvents = "all";
    }, 1000);
  });
  playerLives = 6;
  playerLivesCount.textContent = playerLives;
  setTimeout(() => window.alert(text),100);
  newGameBtn.remove();
}

cardGenerator();