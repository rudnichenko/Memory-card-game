//Grab couple things
const section = document.querySelector('section');
const playerLivesCount = document.querySelector('.playerLivesCount');
const playerLives = 6;

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
		//Attach the cards to the section
		section.appendChild(card);
		card.appendChild(face);
		card.appendChild(back);
		
	});


};

cardGenerator();