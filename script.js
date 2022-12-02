function local_function() {
  $.ajax({
    url: "/update",
    context: document.body,
  }).done(function (data) {
    // $(this).addClass("done");
    // let text = "beat_";
    let num = data["key"];
    // let beat = text.concat(num);
    // console.log(data);
    console.log(beat);

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
