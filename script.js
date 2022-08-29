$("#buttonadd").on("click", function () {
  if (!!$("#taskinput").val()) {
    $(".taskbox").append(
      "<div class='task'>" +
        $("#taskinput").val() +

        "<button class='done' >Done</button> <button class='delete' >Delete</button><br></div>"

    );
    $("#taskinput").val("");
  } else {
    console.error("Empety value");
  }
});
$(document).on("click", ".delete", function () {
  $(this).parent(".task").remove();
});

$(document).on("click", ".done", function () {
  $(this).parent(".task").toggleClass("taskDone");
});
