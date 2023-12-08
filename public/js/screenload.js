function screenLoad() {
  window.addEventListener("load", () => {
    document.querySelector(".page-loader").style.display = "none";
  });
}

screenLoad();
