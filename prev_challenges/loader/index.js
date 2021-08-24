import { renderSubmissions, getSubmissions } from "/submissions.js"

(async () => {
    const submissionsJson = "../../submissions.json"
    
    const subs = (await getSubmissions(submissionsJson)).loader
    const images = './loader_imgs/'

    renderSubmissions(subs, images)
})()
