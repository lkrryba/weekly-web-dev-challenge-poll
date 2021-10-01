import { renderSubmissions, getSubmissions } from "/submissions.js"

(async () => {
    const submissionsJson = "../../submissions.json"
    
    const subs = (await getSubmissions(submissionsJson)).javascript_loader
    const images = './javascript_loader_imgs/'

    renderSubmissions(subs, images)
})()
