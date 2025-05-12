onmessage = function(e) {
  console.log("Main thread said:", e.data);
  postMessage("Hello back!");
};
