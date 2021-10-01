import { getSubmissions } from "./submissions.js"

export async function displaySubmissionCount() {
    const submissionsJson = "./submissions.json"
    const subs = (await getSubmissions(submissionsJson)).latest_challenge
    
    // display num of subs 
    let submissionCountDisplay = document.getElementById("submission-count-display")
    let submissionCount = Object.keys(subs).length
    submissionCountDisplay.textContent += submissionCount

}