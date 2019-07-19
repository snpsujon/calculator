window.addEventListener("load", function(event) {
    var texts = document.getElementsByClassName("letters");
    var numOfTexts = texts.length;
    var letterPositions = [];
    for (var i = 0; i < numOfTexts; i++) {
      letterPositions.push(0);
      var letters = texts[i].innerText.replace(
        new RegExp("", "gi"),
        "</span><span>"
      );
  
      texts[i].innerHTML = letters.substring(7, letters.length - 6);
    }
  
    setInterval(function() {
      for (var i = 0; i < numOfTexts; i++) {
        var j = letterPositions[i];
        if (j >= 0) {
          texts[i].childNodes[j].classList.add("focus");
          if (j == 0) {
            texts[i].classList.remove("minusOne");
            texts[i].childNodes[texts[i].childNodes.length - 1].classList.remove(
              "focus"
            );
          } else texts[i].childNodes[j - 1].classList.remove("focus");
        }
  
        if (j == texts[i].childNodes.length - 2) {
          texts[i].classList.add("minusTwo");
        } else if (j == texts[i].childNodes.length - 1) {
          texts[i].classList.add("minusOne");
          texts[i].classList.remove("minusTwo");
        }
  
        letterPositions[i] = ++letterPositions[i] % texts[i].childNodes.length;
      }
    }, 200 /*200 for light in night and smoke,100 for jumping colors*/);
  });
  