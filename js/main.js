const createWatchform = document.getElementById("createWatch");

let watchList = JSON.parse(localStorage.getItem("watchList"));

if (!watchList) {
  watchList = [];
}

const handleCreateWatch = (event) => {
  event.preventDefault();
  alertPlaceholder.innerHTML = "";
  const watchName = document.getElementById("InputWatchName").value;
  const watchUrl = document.getElementById("InputWatchUrl").value;
  const watchItem = { name: watchName, url: watchUrl };
  watchList.push(watchItem);
  localStorage.setItem("watchList", JSON.stringify(watchList));
  watchAlert("Watch Created!", "success");
  setTimeout(() => {
    alertPlaceholder.innerHTML = "";
    document.getElementById("InputWatchName").value = "";
    document.getElementById("InputWatchUrl").value = "";
  }, 1200);
  console.log(watchList);
};

createWatchform.addEventListener("submit", handleCreateWatch);

const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

const watchAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert" style="margin-top: 15px">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};
