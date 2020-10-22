$(document).ready(function () {
  function a() {
    $("#nameForm").hide(),
      $("#foyerOption1").stop().show(),
      $("#foyerStayChoice").stop().show(),
      $("#foyerPosRes").stop().hide(),
      $("#foyerNegRes").stop().hide(),
      $("#ageForm").stop().hide(),
      $("#genderForm").stop().hide(),
      $("#foyerAgeGender").stop().hide();
  }
  function b() {
    $("#nameForm").hide(),
      $("#foyerOption1").stop().hide(),
      $("#foyerStayChoice").stop().hide(),
      $("#foyerPosRes").stop().show(),
      $("#foyerNegRes").stop().hide(),
      $("#ageForm").stop().hide(),
      $("#genderForm").stop().hide(),
      $("#foyerAgeGender").stop().hide();
  }
  function c() {
    $("#nameForm").hide(),
      $("#foyerOption1").stop().hide(),
      $("#foyerStayChoice").stop().hide(),
      $("#foyerPosRes").stop().hide(),
      $("#foyerNegRes").stop().show(),
      $("#ageForm").stop().hide(),
      $("#genderForm").stop().hide(),
      $("#foyerAgeGender").stop().hide();
  }
  function d() {
    $("#nameForm").hide(),
      $("#foyerOption1").stop().hide(),
      $("#foyerStayChoice").stop().hide(),
      $("#foyerPosRes").stop().hide(),
      $("#foyerNegRes").stop().hide(),
      $("#ageForm").stop().show(),
      $("#genderForm").stop().show(),
      $("#foyerAgeGender").stop().show();
  }
  function e() {
    $("#nameForm").hide(),
      $("#foyerOption1").stop().hide(),
      $("#foyerStayChoice").stop().hide(),
      $("#foyerPosRes").stop().hide(),
      $("#foyerNegRes").stop().hide(),
      $("#ageForm").stop().hide(),
      $("#genderForm").stop().hide(),
      $("#foyerAgeGender").stop().hide(),
      $("#foyerRoomChoice").stop().show(),
      $("#foyerLastPrompt").stop().show();
  }
  $("#newStartEnterBtn").on("click", function () {
    $.ajax({ method: "DELETE", url: "/api/ghosts" }),
      $.ajax({ method: "DELETE", url: "/api/users" });
  }),
    $("#name-btn").on("click", function (b) {
      b.preventDefault();
      var c = { fullName: $("#fullName").val().trim(), identifier: 1 };
      $.post("/api/users", c).then((b) => {
        $(".characterName").text(b.fullName), console.log(b), a();
      });
    }),
    $("#foyer-pos-btn").on("click", function (a) {
      a.preventDefault(), b();
    }),
    $("#foyer-neg-btn").on("click", function (a) {
      a.preventDefault(), c();
    }),
    $("#posNext-btn").on("click", function (a) {
      a.preventDefault(), d();
    }),
    $("#negNext-btn").on("click", function (a) {
      a.preventDefault(), d();
    }),
    $("#age-btn").on("click", function (a) {
      a.preventDefault();
      var b = { age: $("#age").val(), gender: $("#gender").val() };
      console.log(b),
        $.ajax({ method: "PUT", url: "/api/users", data: b }).then(b),
        e();
    }),
    $(document).foundation();
}),
  $(document).foundation();
