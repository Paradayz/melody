$(document).ready(function() {
    var currentFloor = 2;
    var floorPath = $(".home-image path")
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");
    floorPath.on("mouseover", function() {
        floorPath.removeClass('current-floor'); /*кнопка увеличения */
        currentFloor = $(this).attr('data-floor'); /*кнопка уменьшения */
        $(".counter").text(currentFloor);
    });
    // функция пи наведении мышью на этаж
    counterUp.on("click", function() {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString("en-Us", { minimumIntegerDigits: 2, useGrouping: false });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });
    counterDown.on("click", function() {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString("en-Us", { minimumIntegerDigits: 2, useGrouping: false });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });
});