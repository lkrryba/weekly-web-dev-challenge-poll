import { renderSubmissions, getSubmissions } from "/submissions.js"
import { displaySubmissionCount } from "/displaySubmissionCount.js"

(async () => {
    const submissionsJson = "../../submissions.json"
    const challengeName = "gradient_generator"
    const submissionText = "Total submissions: "

    const subs = (await getSubmissions(submissionsJson))[challengeName]
    const images = './gradient_generator_imgs/'

    displaySubmissionCount(challengeName, submissionText)
    renderSubmissions(subs, images)
})()
