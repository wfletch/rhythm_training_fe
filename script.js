function local_function() {
  $.ajax({
    url: "/update",
    context: document.body,
  }).done(function (data) {
    console.log("DONE?")
    // $(this).addClass("done");
    // let text = "beat_";
    let num = data["current_beat"] + 1;
    // let beat = texct.concat(num);
    console.log(data);

    $(".beat-box").each(function (index) {
      $(this).removeClass("btn-success");
    });
    $("#beat_" + num).addClass("btn-success");
    //     if (num === 1) {
    //       document
    //         .getElementById("beat_1")
    //         .setAttribute("class", "btn btn-success");
    //     } else {
    //       document
    //         .getElementById("beat_1")
    //         .setAttribute("class", "btn btn-secondary");
    //     }
    //     if (num === 2) {
    //       document
    //         .getElementById("beat_2")
    //         .setAttribute("class", "btn btn-success");
    //     } else {
    //       document
    //         .getElementById("beat_2")
    //         .setAttribute("class", "btn btn-secondary");
    //     }
    //     if (num === 3) {
    //       document
    //         .getElementById("beat_3")
    //         .setAttribute("class", "btn btn-success");
    //     } else {
    //       document
    //         .getElementById("beat_3")
    //         .setAttribute("class", "btn btn-secondary");
    //     }
    //     if (num === 4) {
    //       document
    //         .getElementById("beat_4")
    //         .setAttribute("class", "btn btn-success");
    //     } else {
    //       document
    //         .getElementById("beat_4")
    //         .setAttribute("class", "btn btn-secondary");
    //     }
  });
}

window.setInterval(local_function, 100);
