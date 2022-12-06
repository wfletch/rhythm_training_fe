function local_function() {
  $.ajax({
    url: "/update",
    context: document.body,
  }).done(function (data) {
    // $(this).addClass("done");
    // let text = "beat_";
    let num = data["current_beat"] + 1;
    // let beat = texct.concat(num);

    $(".beat-box").each(function (index) {
      $(this).removeClass("btn-success");
    });
    $("#beat_" + num).addClass("btn-success");
  });
}

window.setInterval(local_function, 100);
