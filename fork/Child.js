// child.js
process.on('message', (message) => {
    const { chunk, index } = message;
    console.log(`Child process ${process.pid} received chunk ${index}:`, chunk);
  
    // Simulate a time-consuming task with a delay
    setTimeout(() => {
      const result = chunk.map(item => item * 2); // Example processing
      console.log(`Child process ${process.pid} processed chunk ${index}:`, result);
  
      // Send result back to parent process
      process.send({ result, index });
      process.exit(); // Terminate child process after processing
    }, Math.random() * 2000); 
  });
  