$(document).ready(function () {
    $('#currentDay').html(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));

    $(".saveBtn").on("click", function () {
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })



    $("#hour900 .description").val(localStorage.getItem("hour900"));
    $("#hour1000 .description").val(localStorage.getItem("hour1000"));
    $("#hour1100 .description").val(localStorage.getItem("hour1100"));
    $("#hour1200 .description").val(localStorage.getItem("hour1200"));
    $("#hour1300 .description").val(localStorage.getItem("hour1300"));
    $("#hour1400 .description").val(localStorage.getItem("hour1400"));
    $("#hour1500 .description").val(localStorage.getItem("hour1500"));
    $("#hour1600 .description").val(localStorage.getItem("hour1600"));
    $("#hour1700 .description").val(localStorage.getItem("hour1700"));


    function runningClock() {
        $('#currentDay').html(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
    }
    setInterval(runningClock, 1000);

    function tracker() {
        var nowHour = moment().hour();

        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockHour, nowHour)

            if (blockHour < nowHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            } else if (blockHour === nowHour) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).addClass("future");
                $(this).removeClass("present");
            }
        })
    }
    tracker();
})