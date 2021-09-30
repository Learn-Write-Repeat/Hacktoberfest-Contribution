$(function () {
  $.getJSON(
    "/Hacktoberfest-Contribution/resources/contributors.json",
    function (data) {
      $.each(data.contributors, function (i, contributor) {
        var contributorCol = `
      <div class="col-lg-12 mb-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title"><a href="${contributor.folder_url}" target="_blank" class="post-title">${contributor.title}</a></h4>
                <h5 class="card-text mt-4">${contributor.short_description}</h5>
                <br />
                <a href="https://github.com/${contributor.github_username}" target="_blank" class="username">
                  <img
                    src="${contributor.image_url}"
                    alt="DP"
                    class="rounded-circle img-fluid mr-2"
                    width="40"
                    height="40"/>${contributor.name}</a>
              </div>
            </div>
          </div>
        `;
        $(contributorCol).appendTo("#contributions");
      });
    }
  );
});
