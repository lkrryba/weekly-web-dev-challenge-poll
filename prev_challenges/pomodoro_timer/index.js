import { renderSubmissions, getSubmissions } from "/submissions.js"

(async () => {
    const submissionsJson = "../../submissions.json"
    
    const subs = (await getSubmissions(submissionsJson)).pomodoro_timer
    const images = './pomodoro_timer_imgs/'

    renderSubmissions(subs, images)
})()
