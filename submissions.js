export function renderSubmissions(submissions, imagePath) {
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
        link.rel = "noopener"
        submissionElement.appendChild(link)

        // Then, inside the anchor tag, the thumbnail and name.
        const img = document.createElement('img')
        // img.src = `${imagePath}${submission.thumbnail}`
        img.src = `${imagePath}${submission.thumbnail}`

        // img.src = "/prev_challenges/accessibility/a_imgs/Alana.png"

        img.classList.add('submission-img')
        link.appendChild(img)

        const nameParagraph = document.createElement('p')
        nameParagraph.textContent = submission.name
        link.appendChild(nameParagraph)

        const altText = document.createAttribute('alt')
        altText.textContent = `${submission.name}'s submission`
        img.setAttributeNode(altText)

        // Inject the submission element into the DOM
        const takePartDiv = document.querySelector('.take-part')
        takePartDiv.insertAdjacentElement('beforebegin', submissionElement)
    })
}

export async function getSubmissions(jsonPath) {
    const response = await fetch(jsonPath)
    let data = await response.json()
    return data;
}
