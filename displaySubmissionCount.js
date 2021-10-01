import { getSubmissions } from "/submissions.js"

export async function displaySubmissionCount(challengeName, submissionText) {
    const submissionsJson = "/submissions.json"
    const subs = (await getSubmissions(submissionsJson))[challengeName]

    // display num of subs
    let submissionCountDisplay = document.getElementById("submission-count-display")
    let submissionCount = Object.keys(subs).length
    submissionCountDisplay.textContent += submissionCount
}
