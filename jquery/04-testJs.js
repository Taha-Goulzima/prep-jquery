$(document).ready(function () {
  $("#btn1").click(function () {
    $("img").hide(1000);
  });
  $("#btn2").click(function () {
    $("img").show(1000);
  });
  $("#btn3").dblclick(function () {
    $("img").show(1000);
  });
  $("img").mouseenter(function () {
    $(this).hide(1000);
  });
  $("img").mouseleave(function () {
    $(this).show(1000);
  });
});
