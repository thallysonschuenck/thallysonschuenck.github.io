$(document).ready(function() {
    let slideIndex = 1;
    const totalSlides = $(".carousel img").length;
    const slideWidth = $(".carousel img").outerWidth(true);
    const visibleSlides = 3; // Número de slides visíveis

    function showSlides(n) {
        if (n > totalSlides) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = totalSlides;
        }

        const offset = -(slideIndex - 1) * slideWidth;
        $(".carousel").css("transform", "translateX(" + offset + "px)");

        // Reinicia imediatamente para as imagens iniciais quando atingir o último conjunto de slides visíveis
        if (slideIndex > totalSlides - visibleSlides) {
            slideIndex = 1;
            const newOffset = -(slideIndex - 1) * slideWidth;
            $(".carousel").css("transition", "none");
            $(".carousel").css("transform", "translateX(" + newOffset + "px)");
            setTimeout(function() {
                $(".carousel").css("transition", "transform 0.5s ease-in-out");
            }, 50);
        }
    }

    $(".prev").click(function() {
        showSlides(slideIndex -= 1);
    });

    $(".next").click(function() {
        showSlides(slideIndex += 1);
    });
});

