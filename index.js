import { renderSubmissions, getSubmissions } from "./submissions.js"

// All awaits need to be wrapped into async iifes, 
// because top level await (https://v8.dev/features/top-level-await)
// isn't supported in safari:
// https://caniuse.com/?search=top%20level%20await

(async () => {
    const submissionsJson = "./submissions.json"
    console.log('me')
    const subs = (await getSubmissions(submissionsJson)).energy_meter
    const images = '/imgs/entries/'

    // display num of subs 
    let submissionCountDisplay = document.getElementById("submission-count-display")
    let submissionCount = Object.keys(subs).length
    console.log(submissionCount)
    submissionCountDisplay.textContent = "Submissions so far: " + submissionCount


    renderSubmissions(subs, images)
})()

// function showSubsNum(){
//     let submissionCountDisplay = document.getElementById("submission-count-display")
//     let submissionCount = 
//     submissionCountDisplay.textContent = "submissions so far: " + "3"
// }

// showSubsNum()