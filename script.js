let hobbys = ["Gaming", "Spending time with friends and family", "Working out", "Film and TV Series", "Relaxing"]

let ul = document.createElement("ul");
document.body.append(ul);

for(let i = 0; i < hobbys.length; i++) {
    ul.insertAdjacentHTML("beforeend", "<li>" + hobbys[i] + "</li>");
}