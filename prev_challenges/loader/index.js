import { renderSubmissions, getSubmissions } from "/submissions.js"
import { displaySubmissionCount } from "/displaySubmissionCount.js"

(async () => {
    const submissionsJson = "../../submissions.json"
    const challengeName = "loader"
    const submissionText = "Total submissions: "

    const subs = (await getSubmissions(submissionsJson))[challengeName]
    const images = './loader_imgs/'

    displaySubmissionCount(challengeName, submissionText)
    renderSubmissions(subs, images)
})()
