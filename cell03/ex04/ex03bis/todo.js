$(document).ready(function () {
  var cookies = document.cookie;
  $(".btn-add").on("click", function () {
    const val = encodeURIComponent(prompt());
    if ((val !== "null") & (val !== "") & (val !== null)) {
      if (cookies) {
        document.cookie = `data=${val + cookies.split("data=").join("|~|")}`;
        cookies = document.cookie;
        $("#ft_list").prepend(`<li id="list">${decodeURIComponent(val)}</li>`);
      } else {
        document.cookie = `data=${val}`;
        cookies = document.cookie;
        $("#ft_list").prepend(`<li>${decodeURIComponent(val)}</li>`);
      }
    }
  });

  $("#ft_list").on("click", "#list", function () {
    if (confirm("Do you want to delete this task?")) {
      const text = encodeURIComponent($(this).text());
      let data = cookies.substring(5);
      let updatedData = data
        .split("|~|") // string to array
        .filter((item) => item !== text)
        .join("|~|"); //back to string
      document.cookie = `data=${updatedData}`;
      cookies = document.cookie;
      $(this).remove();
    }
  });

  function showList() {
    var words = document.cookie.substring(5).split("|~|");
    if (words[0] !== "") {
      for (let i in words) {
        if (words[i] !== "" && words[i] !== "null")
          $("#ft_list").append(`<li class="${i}" id="list">${decodeURIComponent(words[i])}</li>`);
      }
    }
  }
  showList();
});
