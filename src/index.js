// Elements
const tabLinks = document.querySelectorAll(".tab-link");
const tabContents = document.querySelectorAll(".tab-content");

// Event Listeners
tabLinks.forEach((tabLink, index) => {
  tabLink.addEventListener("click", (event) => {
    openReward(event, `tab-link-${index + 1}`);
    openReward(event, `content-${index + 1}`);
  });
});

function openReward(tabLink, tabContent) {
  var i, tabcontents, tablinks;

  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  tabcontents = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontents.length; i++) {
    tabcontents[i].className = tabcontents[i].className.replace(" active", "");
  }

  tabLink.currentTarget.className += " active";
  document.getElementById(tabContent).className += " active";
}
