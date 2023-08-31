// This is the worker thread
addEventListener("message", function (event) {
  console.log(event.data);
  // Send a message back to the main thread
  postMessage({
    message: "Hello, main thread!",
  });
});
