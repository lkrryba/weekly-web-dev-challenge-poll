const jsonPath = './submissions.json'
const imagesBasePath = '/prev_challenges/'

async function getData(url) {
    const response = await fetch(url)
    const submissionsData = await response.json()
    const arrayOfChallengesNames = Object.getOwnPropertyNames(submissionsData)
    return check(submissionsData, arrayOfChallengesNames)
}
getData(jsonPath)

function check(data, names) {
    names.forEach(item => {
        for (const entry of Object.entries(data[item])) { // iterate over entries for each past challenge
            if (entry[1].winner) { // find entries where winner = true
                console.log(item, entry[1]);
                const challengeName = item;
                const winnerName = entry[1].name
                const winnerUrl = entry[1].entryURL
                const winnerThumbnail = entry[1].thumbnail
                const imagePath = `${imagesBasePath}${challengeName}/${challengeName}_imgs/${winnerThumbnail}`
                
                const hallOfFameElement = document.createElement('div')
                hallOfFameElement.classList.add('submission')
                const link = document.createElement('a')
                link.href = winnerUrl
                link.target = '_blank'
                link.rel = "noopener"
                hallOfFameElement.appendChild(link)
                const img = document.createElement('img')
                img.src = imagePath
                img.classList.add('submission-img')
                link.appendChild(img)
                const challengeH2 = document.createElement('h2')
                challengeH2.textContent = challengeName
                link.appendChild(challengeH2)
                const nameParagraph = document.createElement('p')
                nameParagraph.textContent = winnerName
                link.appendChild(nameParagraph)
                const altText = document.createAttribute('alt')
                altText.textContent = `${winnerName.name}'s submission`
                img.setAttributeNode(altText)

                const hallOfFameDiv = document.querySelector('#hall-of-fame')
                hallOfFameDiv.appendChild(hallOfFameElement)
            }
        }
    })
}