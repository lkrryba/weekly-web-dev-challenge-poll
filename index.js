import { renderSubmissions, getSubmissions } from "./submissions.js"

const submissionsJson = "./submissions.json"

const subs = (await getSubmissions(submissionsJson)).cat_basket
const images = '/imgs/entries/'

renderSubmissions(subs, images)