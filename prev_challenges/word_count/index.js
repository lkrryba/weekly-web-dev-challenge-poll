import { renderSubmissions, getSubmissions } from "/submissions.js"
import { displaySubmissionCount } from "/displaySubmissionCount.js"

(async () => {
    const submissionsJson = "../../submissions.json"
    const challengeName = "word_count"
    const submissionText = "Total submissions: "

    const subs = (await getSubmissions(submissionsJson))[challengeName]
    const images = './word_count_imgs/'

    displaySubmissionCount(challengeName, submissionText)
    renderSubmissions(subs, images)
})()
