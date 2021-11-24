import { renderSubmissions, getSubmissions } from "../../utils/submissions"
import { displaySubmissionCount } from "../../utils/displaySubmissionCount.js"

(async () => {
    const submissionsJson = "../../submissions.json"
    const challengeName = "light_dark_theme"
    const submissionText = "Total submissions: "

    const subs = (await getSubmissions(submissionsJson))[challengeName]
    const images = './light_dark_theme_imgs/'

    displaySubmissionCount(challengeName, submissionText)
    renderSubmissions(subs, images)
})()
