const countSpan = document.querySelector("span");
const links = document.querySelectorAll("li");

fetch("http://127.0.0.1:3001/api/getCount").then((res) =>
  res.json().then((data) => (countSpan.innerHTML = data))
);

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    links.forEach((innerLink) => removeUnderline(innerLink));
    e.target.classList.add("underline");
  });
});

function removeUnderline(link) {
  link.classList.remove("underline");
  console.log("remove");
}
