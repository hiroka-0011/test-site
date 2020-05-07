document.addEventListener("click", e => {
  const target = e.target;
  // clickした要素がclass属性、js-smooth-scrollを含まない場合は処理を中断
  if (!target.classList.contains("js-smooth-scroll")) return;
  e.preventDefault();
  const targetId = target.hash;
  document.querySelector(targetId).scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

$(function () {
    for (var i = 1; i <= 3; i++) {
        // 1
        (function () {
            // 2
            var nextIndex = (i != 3) ? (i + 1) : (1);
            var $nextVideo = $("#video" + nextIndex);

            // 3
            $("#video" + i).on("ended", function () {
                $(this).hide();
                $nextVideo.show();

                $nextVideo.get(0).play();
            });
        })(i);
    }
});