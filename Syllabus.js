function observeBody() {
  var body = document.querySelector("body");
  if (!body) {
  setTimeout(observeBody, 10);
  return;
  }
  
  chrome.storage.sync.get(defaults, function(items) {
  if (items.darkmode) {
  var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
  var descriptions = mutation.target.querySelectorAll(".description");
  if (descriptions.length > 0) {
  descriptions.forEach(function(description) {
  description.style.backgroundColor = "#272727";
  description.style.border = "1px solid #000000";
  });
  }
  var edit = mutation.target.querySelectorAll(".edit");
  if (edit.length > 0) {
  edit.forEach(function(e) {
  e.style.backgroundColor = "#272727";
  e.style.width = "auto";
  });
  }
  var pagebody = mutation.target.querySelectorAll(".pagebody");
  if (pagebody.length > 0) {
  pagebody.forEach(function(p) {
  p.style.borderLeft = "1px solid #121212";
  p.style.borderRight = "1px solid #121212";
  });
  }
  var navigator = mutation.target.querySelectorAll(".navigator");
  if (navigator.length > 0) {
  navigator.forEach(function(n) {
  n.style.backgroundColor = "#272727";
  });
  }
  var row0 = mutation.target.querySelectorAll(".row0");
  if (row0.length > 0) {
  row0.forEach(function(r) {
  r.style.backgroundColor = "#272727";
  });
  }
  });
  });
  observer.observe(body, {
  childList: true,
  subtree: true
  });
  }
  });
  }
  
  observeBody();