import { renderSubmissions, getSubmissions } from "/submissions.js"
import { displaySubmissionCount } from "/displaySubmissionCount.js"

// All awaits need to be wrapped into async iifes,
// because top level await (https://v8.dev/features/top-level-await)
// isn't supported in safari:
// https://caniuse.com/?search=top%20level%20await

(async () => {
    const submissionsJson = "../../submissions.json"
    const challengeName = "name_beautifier"
    const submissionText = "Total submissions: "

    const subs = (await getSubmissions(submissionsJson))[challengeName]
    const images = './name_beautifier_imgs/'

    displaySubmissionCount(challengeName, submissionText)
    renderSubmissions(subs, images)
})()

let colorOptions = [
    "#AAD1B6", // Green
    "#B5CAF9", // Blue
    "#C7B9FF", // Purple
    "#F0B9DD", // Pink
    "#F3BF99", // Orange
    "#FBF3AB", // Yellow
    "linear-gradient(to right, #c7b9ff, 50%, #f3bf99)", // Purple --> Orange gradient
  ];
  let selectedColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
  document.body.style.backgroundColor = selectedColor;