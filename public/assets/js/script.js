$(document).ready(function () {
  $("#gogoGhostie").on("click", function (a) {
    a.preventDefault(),
      console.log("this clicked"),
      $("#gogoGhostie").addClass("hide"),
      $("#gogoGhostie").removeClass("show"),
      $("#interaction1-0").removeClass("hide");
  }),
    $("#positiveBtn").on("click", function (a) {
      a.preventDefault(),
        $("#interaction1-0").addClass("hide"),
        $("#interaction1-1").removeClass("hide");
    }),
    $("#negativeBtn").on("click", function (a) {
      a.preventDefault(),
        $("#interaction1-0").addClass("hide"),
        $("#interaction1-2").removeClass("hide");
    }),
    $("#positiveBtn2").on("click", function (a) {
      a.preventDefault(),
        $("#interaction1-1").addClass("hide"),
        $("#interaction1-2").addClass("hide"),
        $("#interaction1-3").removeClass("hide");
    }),
    $("#negativeBtn2").on("click", function (a) {
      a.preventDefault(),
        $("#interaction1-0").addClass("hide"),
        $("#interaction1-1").addClass("hide"),
        $("#interaction1-2").addClass("hide"),
        $("#interaction1-4").removeClass("hide");
    }),
    $("#positiveBtn3").on("click", function (a) {
      a.preventDefault(),
        $("#interaction1-0").addClass("hide"),
        $("#interaction1-1").addClass("hide"),
        $("#interaction1-2").addClass("hide"),
        $("#interaction1-3").removeClass("hide");
    }),
    $("#negativeBtn3").on("click", function (a) {
      a.preventDefault(),
        $("#interaction1-0").addClass("hide"),
        $("#interaction1-1").addClass("hide"),
        $("#interaction1-2").addClass("hide"),
        $("#interaction1-4").removeClass("hide");
    }),
    $("#positiveBtn4").on("click", function (a) {
      a.preventDefault(),
        console.log("you clicked"),
        $("#interaction1-0").addClass("hide"),
        $("#interaction1-1").addClass("hide"),
        $("#interaction1-2").addClass("hide"),
        $("#interaction1-3").addClass("hide"),
        $("#interaction1-4").addClass("hide"),
        $("#interaction1-5").removeClass("hide");
    }),
    $("#negativeBtn4").on("click", function (a) {
      a.preventDefault(),
        console.log("you clicked"),
        $("#interaction1-0").addClass("hide"),
        $("#interaction1-1").addClass("hide"),
        $("#interaction1-2").addClass("hide"),
        $("#interaction1-3").addClass("hide"),
        $("#interaction1-4").addClass("hide"),
        $("#interaction1-6").removeClass("hide");
    }),
    $("#positiveBtn5").on("click", function (a) {
      a.preventDefault(),
        $("#interaction1-0").addClass("hide"),
        $("#interaction1-1").addClass("hide"),
        $("#interaction1-2").addClass("hide"),
        $("#interaction1-3").addClass("hide"),
        $("#interaction1-4").addClass("hide"),
        $("#interaction1-5").removeClass("hide");
    }),
    $("#negativeBtn5").on("click", function (a) {
      a.preventDefault(),
        $("#interaction1-0").addClass("hide"),
        $("#interaction1-1").addClass("hide"),
        $("#interaction1-2").addClass("hide"),
        $("#interaction1-3").addClass("hide"),
        $("#interaction1-4").addClass("hide"),
        $("#interaction1-6").removeClass("hide");
    });
});
