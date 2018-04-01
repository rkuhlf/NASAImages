var url = "https://api.nasa.gov/planetary/apod?api_key=Gb7nKSJOxm0wzDAesFQc0vTK7dJsiRwcmGqJ1kvQ";


$.ajax({
    url: url,
    success: function(result) {
        if ("copyright" in result) {
            $("#copyright").text("Image Credits: " + result.copyright);
        } else {
            $("#copyright").text("Image Credits: " + "Public Domain");
        }

        if (result.media_type == "video") {
            $("#apodImgId").css("display", "none");
            $("#apodVidId").attr("src", result.url);
        } else {
            $("#apodVidId").css("display", "none");
            $("#apodImgId").attr("src", result.url);
        }
        $("#apodExplanation").text(result.explanation);
        $("#apodTitle").text(result.title);
    }
});