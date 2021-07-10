// javascript

// Create an array of this week's submissions.
const imagePath = '/imgs/entries/'
const scrimPath = 'https://scrimba.com/scrim/'
const submissions = [
  {
    name: 'Dave',
    entryURL: 'https://scrimba.com/scrim/co0814bebbf16212f2e7736da',
    thumbnail: 'Dave.png',
    winner: false
  },
  {
    name: 'David',
    entryURL: 'https://scrimba.com/scrim/cP2ev3Tk',
    thumbnail: 'David.png',
    winner: false
  },
  {
    name: 'Oliver Coates',
    entryURL: 'https://scrimba.com/scrim/co1434f96ae151f801becb63c',
    thumbnail: 'Oliver_Coates.png',
    winner: false
  },
  {
    name: 'Brenda Michelle',
    entryURL: 'https://scrimba.com/scrim/cod7343dfa5c3034f39b8c345',
    thumbnail: 'Brenda_Michelle.png',
    winner: false
  },
  {
    name: 'KevinBlac',
    entryURL: 'https://scrimba.com/scrim/cob8c4a579eea2787e19ea1d7',
    thumbnail: 'KevinBlac.png',
    winner: false
  },
  {
    name: 'Dev_N',
    entryURL: 'https://scrimba.com/scrim/co2394864a21f331418cf9aa0',
    thumbnail: 'Dev_N.png',
    winner: false
  },
  {
    name: 'Alana',
    entryURL: 'https://alanacapcreates-wwdc-accessibility070721.netlify.app/?',
    thumbnail: 'Alana.png',
    winner: false
  },
  {
    name: 'Noel',
    entryURL: 'https://scrimba.com/scrim/co5ac43d998067a2fec408ea0',
    thumbnail: 'Noel.png',
    winner: false
  },
  {
    name: 'Mareike',
    entryURL: 'https://scrimba.com/scrim/co9ae4c0c9ae42996b433a8cc',
    thumbnail: 'Mareike.png',
    winner: false
  }
]

console.log(imagePath, submissions[0].thumbnail)

const challengeContainer = document.querySelector('.challenge-container')
const takePartDiv = document.querySelector('.take-part')
// Loop through submissions array
submissions.forEach(submission => {
  // Create a new submission element with a class of submission
  const submissionElement = document.createElement('div')
  submissionElement.classList.add('submission')

  // If it is the winner, add the winner class
  if (submission.winner) submissionElement.classList.add('winner')

  // Add elements to submission element
  // First the anchor tag (link)
  const link = document.createElement('a')
  link.href = submission.entryURL
  link.target = '_blank'
  submissionElement.appendChild(link)

  // Then, inside the anchor tag, the thumbnail and name.
  const img = document.createElement('img')
  img.src = `${imagePath}${submission.thumbnail}`
  img.classList.add('submission-img')
  link.appendChild(img)
  const nameParagraph = document.createElement('p')
  nameParagraph.textContent = submission.name
  link.appendChild(nameParagraph)

  // Inject the submission element into the DOM
  takePartDiv.insertAdjacentElement('beforebegin', submissionElement)
})
