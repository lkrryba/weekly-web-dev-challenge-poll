import { renderSubmissions, getSubmissions } from "/submissions.js"
import { displaySubmissionCount } from "/displaySubmissionCount.js"

(async () => {
    const submissionsJson = "../../submissions.json"
    const challengeName = "gradient_generator"
    const submissionText = "Total submissions: "

    const subs = (await getSubmissions(submissionsJson))[challengeName]
    const images = './gradient_generator_imgs/'

    displaySubmissionCount(challengeName, submissionText)
    renderSubmissions(subs, images)
})()

/* Random background color on page load */
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