import { renderSubmissions, getSubmissions } from "/submissions.js"

const submissionsJson = "../../submissions.json"

const subs = (await getSubmissions(submissionsJson)).accessibility
const images = './accessibility_imgs/'

renderSubmissions(subs, images)