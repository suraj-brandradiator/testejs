window.addEventListener("load", function () {
  document
    .querySelector("#edit")
    .addEventListener("change", async function (e) {
      e.preventDefault();
      let file = document.querySelector("#edit").files[0];
      let formData = new FormData();
      formData.append("user", file);

      fetch("http://localhost:3000/user/updateprofilephoto", {
        method: "PATCH",
        body: formData,
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.message) {
            // Reloading the page after uploading the profile photo
            window.location.reload();
          }
        });
    });
});
