import { renderSubmissions, getSubmissions } from "./submissions.js"
import { displaySubmissionCount } from "/displaySubmissionCount.js"
import {renderPreviousChallenges} from './prevChallengesList.js'
import { countdown } from "./challengeCountdown.js";
// because top level await (https://v8.dev/features/top-level-await)
// isn't supported in safari:
// https://caniuse.com/?search=top%20level%20await

(async () => {
    const submissionsJson = "./submissions.json"
    const images = '/imgs/entries/'
    const challengeName = "latest_challenge"
    const submissionText = "Submissions so far: "
   
    const subs = (await getSubmissions(submissionsJson)).latest_challenge
    // const subs = (await getSubmissions(submissionsJson))[challengeName]
    
    // let submissionCountDisplay = document.getElementById("submission-count-display")
    // let submissionCount = Object.keys(subs).length
    // submissionCountDisplay.textContent = "Submissions so far: " + submissionCount
    // displaySubmissionCount()
    displaySubmissionCount(challengeName, submissionText)
  
    renderSubmissions(subs, images)
  
    renderPreviousChallenges()
})()


//Challenge Countdown
//Date Format -> Month day, year time/hour Timezone
countdown(new Date("October 4, 2021 13:00:00 GMT+01:00"));
