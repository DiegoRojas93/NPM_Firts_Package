const messages = [
  'Diego',
  'Maria',
  'Jesus',
  'Oscar',
  'Ana',
  'Nicolay',
  'Yesica',
  'Laura',
  "Carolina",
  "Paulina",
  "Pablo"
]

const randomMsg = () => {
  const massage = messages[Math.floor(Math.random() * messages.length)]
  console.log(massage);
};


module.exports = {randomMsg}