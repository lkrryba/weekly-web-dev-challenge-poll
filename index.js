import { renderSubmissions, getSubmissions } from "./submissions.js"
import { displaySubmissionCount } from "/displaySubmissionCount.js"
import {renderPreviousChallenges} from './prevChallengesList.js'
// All awaits need to be wrapped into async iifes, 
// because top level await (https://v8.dev/features/top-level-await)
// isn't supported in safari:
// https://caniuse.com/?search=top%20level%20await

(async () => {
    const submissionsJson = "./submissions.json"
    const images = '/imgs/entries/'

    
    const subs = (await getSubmissions(submissionsJson)).latest_challenge
    // display num of subs 
    // let submissionCountDisplay = document.getElementById("submission-count-display")
    // let submissionCount = Object.keys(subs).length
    // submissionCountDisplay.textContent = "Submissions so far: " + submissionCount
    displaySubmissionCount()
    renderSubmissions(subs, images)
    renderPreviousChallenges()
})()
