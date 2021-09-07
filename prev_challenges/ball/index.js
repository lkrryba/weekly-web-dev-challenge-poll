import { renderSubmissions, getSubmissions } from "/submissions.js"

(async () => {
    const submissionsJson = "../../submissions.json"
    
    const subs = (await getSubmissions(submissionsJson)).ball
    const images = './ball_imgs/'

    renderSubmissions(subs, images)
})()
