let comments = JSON.parse(localStorage.getItem("ap_comments")) || [];

function removeEmoji(text) {
  return text.replace(
    /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF])/g,
    ""
  );
}

function getFinalComment() {
  let c = comments[Math.floor(Math.random() * comments.length)];
  let emojiOn = document.getElementById("emojiToggle").checked;
  return emojiOn ? c : removeEmoji(c);
}

function generateOne() {
  if (comments.length === 0) {
    output.value = "No comments added yet.";
    return;
  }
  output.value = getFinalComment();
}

function generateBulk(n) {
  if (comments.length === 0) {
    output.value = "No comments added yet.";
    return;
  }
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(getFinalComment());
  }
  output.value = result.join("\n\n");
}

function copyAll() {
  navigator.clipboard.writeText(output.value);
  alert("Copied successfully!");
}
