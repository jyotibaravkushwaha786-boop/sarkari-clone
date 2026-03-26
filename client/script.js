async function loadPosts() {
  const res = await fetch("http://localhost:5000/api/posts");
  const data = await res.json();

  const container = document.getElementById("posts");

  data.forEach(post => {
    const div = document.createElement("div");
    div.innerHTML = `<a href="${post.link}" target="_blank">${post.title}</a>`;
    container.appendChild(div);
  });
}

loadPosts();
