function toggleDisciplines() {
    const disciplines = document.querySelectorAll('.direction-key-disciplines p');

    disciplines.forEach(discipline => {
        discipline.style.display = discipline.style.display === 'none' ? 'block' : 'none';
    });
}

$(document).ready(function () {

    $("#review-submit-text").on("keydown", function (e) {
        if (e.key === "Enter") { 
            e.preventDefault(); 
            var currentText = $(this).val();
            $(this).val(currentText + "\n"); 
        }
    });

    var currentIndex = 0;
    var reviews = [];

    loadReviews(); 

    $("#submit-button").on("click", function () {
        var reviewText = $("#review-submit-text").val();
        if (reviewText.trim() !== "") {
            var currentDate = getCurrentDate();
            var review = {
                text: reviewText,
                date: currentDate
            };
            reviews.push(review);

            saveReviews();
            displayReview(review);

            $("#review-submit-text").val(""); 
            updateReviews();
        }
    });

    $("#prev-btn").on("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateReviews();
        }
    });

    $("#next-btn").on("click", function () {
        if (currentIndex < reviews.length - 1) {
            currentIndex++;
            updateReviews();
        }
    });

    function getCurrentDate() {
        var date = new Date();
        return (
            ("0" + date.getDate()).slice(-2) +
            "." +
            ("0" + (date.getMonth() + 1)).slice(-2) +
            "." +
            date.getFullYear()
        );
    }

    function loadReviews() {
        reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        displayReviews();
    }

    function saveReviews() {
        localStorage.setItem("reviews", JSON.stringify(reviews));
    }

    function displayReview(review) {
        var reviewContainer = $("<div class='review-container'></div>")
            .append("<div class='review-top-section'><b>Отзыв</b></div>")
            .append("<p class='review-text'>" + review.text + "</p>")
            .append("<div class='review-bottom-section'><time class='review-time'>" + review.date + "</time></div>");

        $(".reviews-list").append(reviewContainer);
    }

    function displayReviews() {
        $(".reviews-list").empty();
        for (var i = 0; i < reviews.length; i++) {
            displayReview(reviews[i]);
        }
        updateReviews();
    }

    function updateReviews() {
        var maxIndex = reviews.length - 1;
        currentIndex = Math.min(Math.max(currentIndex, 0), maxIndex);

        $(".review-container").removeClass("active");
        $(".review-container:eq(" + currentIndex + ")").addClass("active");

        var translateValue = -currentIndex * ($(".review-container:eq(" + currentIndex + ")").outerWidth(true));
        $(".reviews-list").css("transform", "translateX(" + translateValue + "px)");

        $("#prev-btn").prop("disabled", currentIndex === 0);
        $("#next-btn").prop("disabled", currentIndex === maxIndex);
    }
});
