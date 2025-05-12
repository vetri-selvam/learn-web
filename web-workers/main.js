const worker = new Worker("worker.js");

worker.postMessage("Hello, Worker!");

worker.onmessage = function(e) {
  console.log("Worker replied:", e.data);
};
