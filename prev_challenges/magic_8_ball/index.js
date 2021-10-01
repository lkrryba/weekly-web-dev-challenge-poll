import { renderSubmissions, getSubmissions } from "/submissions.js"

(async () => {
    const submissionsJson = "../../submissions.json"
    
    const subs = (await getSubmissions(submissionsJson)).magic_8_ball
    const images = './magic_8_ball_imgs/'

    renderSubmissions(subs, images)
})()
