import { renderSubmissions, getSubmissions } from "../../utils/submissions"
import { displaySubmissionCount } from "../../utils/displaySubmissionCount"

// All awaits need to be wrapped into async iifes,
// because top level await (https://v8.dev/features/top-level-await)
// isn't supported in safari:
// https://caniuse.com/?search=top%20level%20await

(async () => {
    const submissionsJson = "../../submissions.json"
    const challengeName = "accessibility"
    const submissionText = "Total submissions: "

    const subs = (await getSubmissions(submissionsJson))[challengeName]
    const images = './accessibility_imgs/'

    displaySubmissionCount(challengeName, submissionText)
    renderSubmissions(subs, images)
})()
