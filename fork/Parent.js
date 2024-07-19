
const { fork } = require('child_process');
const path = require('path');

const Parent=async (req,res)=>{
    console.log('parent id',process.pid);

    //  Data to be processed
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11 ,12 ,13 ,14 ,15 ,16 ,17,18];
    
    //  Split data into chunks
    const chunkSize = 2;
    const chunks = [];
    for (let i = 0; i < data.length; i += chunkSize) {
      chunks.push(data.slice(i, i + chunkSize));
    }
    
    //  Process each chunk using a forked child process
    chunks.forEach((chunk, index) => {
      const child = fork(path.join(__dirname, 'Child.js'));
    
    //    Send chunk to child process
      child.send({ chunk, index });
    
    //    Receive result from child process
      child.on('message', (message) => {
        console.log(`Chunk ${message.index} processed:`, message.result);
      });
    });
    res.send('From the Fork process module')
}

module.exports={
  Parent
}