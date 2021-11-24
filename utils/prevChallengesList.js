export async function renderPreviousChallenges() {
  const response = await fetch('./prev_challenges/challenges.json')
  const challenges = await response.json()

  const container = document.querySelector('.prev_challenges')
  const unorderedList = document.createElement('ul')
  // const reversedChallenges = challenges.reverse()
  challenges.challenges.forEach((challenge) => {
    const listItem = document.createElement('li')
    const anchorTag = document.createElement('a')
    anchorTag.textContent = challenge.name
    anchorTag.setAttribute('href', challenge.path)

    listItem.appendChild(anchorTag)
    unorderedList.appendChild(listItem)
  })

  container.insertAdjacentElement('beforeend', unorderedList)
}
