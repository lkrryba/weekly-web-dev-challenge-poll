import { renderSubmissions, getSubmissions } from "./submissions.js"

// All awaits need to be wrapped into async iifes, 
// because top level await (https://v8.dev/features/top-level-await)
// isn't supported in safari:
// https://caniuse.com/?search=top%20level%20await

(async () => {
    const submissionsJson = "./submissions.json"
    console.log('me')
    const subs = (await getSubmissions(submissionsJson)).cat_basket
    const images = '/imgs/entries/'

    renderSubmissions(subs, images)
})()