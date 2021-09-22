import { renderSubmissions, getSubmissions } from "/submissions.js"

(async () => {
    const submissionsJson = "../../submissions.json"
    
    const subs = (await getSubmissions(submissionsJson)).timer
    const images = './timer_imgs/'

    renderSubmissions(subs, images)
})()
