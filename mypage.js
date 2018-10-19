
$(document).ready(function(){
  $("#btn").on('click', function() {
    var text = $("#field").val();
    var arr = text.split(", ");
    console.log(arr);
      $("#bg").fadeIn(400, function() {
          $("#CURImodal").fadeIn(400);
      });
  });

  $("#CURImodal img").on('click', function() {
      var text = $(this).siblings('.descr').text();
      $("#CURImodal").fadeOut(400, function() {
          $("#bg").fadeOut(400, function() {
              $("#field").val(text);
          });
      });
  });

    $("#add").on('click', function() {
      var text = $("#mod").val();
      if($("#field").val() !== "")
        text = $("#field").val() + ", " + text;
      $("#field").val(text);
      $("#mod").val("");
      // console.log(text);
      // $("#modal").fadeOut(400, function() {
      //     $("#bg").fadeOut(400, function() {
      //         $("#field").val(text);
      //     });
      // });
    });

    $("#done").on('click', function() {
      $("#CURImodal").fadeOut(400, function() {
          $("#bg").fadeOut(400, function() {
          });
      });
    });

})
