export const countdown = function (date) {
  const challengeCountdownEl = document.getElementById(
    'challenge-countdown-display'
  )

  const cd = setInterval(function () {
    const currentDate = new Date()
    const diffInMiliseconds = date - currentDate
    // console.log(date)
    const diffInSeconds = Math.trunc(diffInMiliseconds / 1000)
    const daysLeft = Math.trunc(diffInSeconds / 3600 / 24)
    const hoursLeft = Math.trunc(diffInSeconds / 3600) % 24
    const minutesLeft = Math.trunc(diffInSeconds / 60) % 60
    const secondsLeft = Math.trunc(diffInSeconds) % 60

    const finalString = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`

    challengeCountdownEl.innerHTML = finalString

    if (diffInMiliseconds < 0) {
      challengeCountdownEl.innerHTML = 'ENDED'
      clearInterval(cd)
    }
  }, 1000)
}
