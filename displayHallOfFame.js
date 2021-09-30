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
        // iterate over entries for each past challenge
        for (const entry of Object.entries(data[item])) {
            // find entries where winner = true
            if (entry[1].winner) {
                const challengeNameString = item;
                // remove underscore + capitalise first letter
                let challengeName = challengeNameString.replace('_', ' ').split(' ')
                for (let i = 0; i < challengeName.length; i++) {
                    challengeName[i] = challengeName[i][0].toUpperCase() + challengeName[i].substr(1);
                }
                challengeName = challengeName.join(' ')

                //assign ither values to gariables
                const winnerName = entry[1].name
                const winnerUrl = entry[1].entryURL
                const winnerThumbnail = entry[1].thumbnail
                const imagePath = `${imagesBasePath}${challengeNameString}/${challengeNameString}_imgs/${winnerThumbnail}`
                const challengePath = `${imagesBasePath}${challengeNameString}/${challengeNameString}.html`

                // set up the div to hold the entry         
                const hallOfFameElement = document.createElement('div')
                hallOfFameElement.classList.add('submission')

                //build the entry
                const link = document.createElement('a')
                link.href = winnerUrl
                link.target = '_blank'
                link.rel = "noopener"
                hallOfFameElement.appendChild(link)
                const img = document.createElement('img')
                img.src = imagePath
                img.classList.add('submission-img')
                link.appendChild(img)
                const nameParagraph = document.createElement('h3')
                nameParagraph.textContent = `${winnerName}'s winning entry for the ${challengeName} challenge! 🏆`
                link.appendChild(nameParagraph)
                const altText = document.createAttribute('alt')
                altText.textContent = `${winnerName.name}'s submission`
                img.setAttributeNode(altText)

                // injext div into dom
                const hallOfFameDiv = document.querySelector('#hall-of-fame')
                hallOfFameDiv.appendChild(hallOfFameElement)

            }
        }
    })
}