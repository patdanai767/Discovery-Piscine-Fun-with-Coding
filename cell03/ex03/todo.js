// const textList = document.getElementById("todolist");
const list = document.getElementById("ft_list");

function addList() {
  const val = prompt("What is your name?");
  if ((val !== "") & (val !== null)) {
    var li = document.createElement("li");
    var x = document.createElement("p");
    li.innerHTML = "";
    x.innerHTML = val;
    list.prepend(li);
    li.prepend(x);
    document.cookie = `data=${list.outerHTML}`;
  }
}

list.addEventListener("click", (e) => {
  if (e.target.tagName === "P") {
    const checked = confirm(`Are you sure to delete?`);
    if (checked) {
      e.target.parentElement.remove();
      document.cookie = `data=${list.outerHTML}`;
    }
  }
});

function showTask() {
  list.innerHTML = document.cookie.substring(5);
}
showTask();
