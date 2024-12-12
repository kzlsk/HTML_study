const Link = {
  setColor: function (color) {
    const aTags = document.querySelectorAll("a");
    let i = 0;
    while (i < aTags.length) {
      aTags[i].style.color = color;
      i += 1;
    }
  },
};
const Body = {
  setColor: function (color) {
    document.querySelector("body").style.color = color;
  },
  setBackgroundColor: function (color) {
    document.querySelector("body").style.backgroundColor = color;
  },
};
function nightDayHandler(self) {
  const ol = document.querySelector("ol");
  if (self.value === "night") {
    Body.setBackgroundColor("black");
    Body.setColor("white");
    Link.setColor("powderblue");
    ol.style.color = "powderblue";
    self.value = "day";
  } else {
    Body.setBackgroundColor("white");
    Body.setColor("black");
    Link.setColor("#819FF7");
    ol.style.color = "#819FF7";
    self.value = "night";
  }
}
