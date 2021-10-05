export function renderSubmissions(submissions, imagePath) {
  // Loop through submissions array

  const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  shuffleArray(submissions);
  submissions.forEach((submission, index) => {
    // Create a new submission element with a class of submission
    const submissionElement = document.createElement("div");
    submissionElement.classList.add("submission");

    // If it is the winner, add the winner class
    if (submission.winner) submissionElement.classList.add("winner");

    // Add elements to submission element
    // First the anchor tag (link)
    const link = document.createElement("a");
    link.href = submission.entryURL;
    link.target = "_blank";
    link.rel = "noopener";
    submissionElement.appendChild(link);

    // Then, inside the anchor tag, the thumbnail and name.
    const img = document.createElement("img");
    img.src = `${imagePath}${submission.thumbnail}`;
    img.loading = "lazy";
    img.classList.add("submission-img");
    link.appendChild(img);
    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = submission.name;
    link.appendChild(nameParagraph);
    const altText = document.createAttribute("alt");
    altText.textContent = `${submission.name}'s submission`;
    img.setAttributeNode(altText);

    // When most of the image is prepared, remove the placeholder
    const placeholder = document.getElementById(`placeholder${index}`);
    if (placeholder) placeholder.remove();

    // Inject the submission element into the DOM
    const takePartDiv = document.querySelector(".take-part");
    takePartDiv.insertAdjacentElement("afterend", submissionElement);
  });
}

export async function getSubmissions(jsonPath) {
  const response = await fetch(jsonPath);
  let data = await response.json();
  return data;
}
