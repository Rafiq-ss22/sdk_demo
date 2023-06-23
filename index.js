
const { spawn } = require('child_process');
const path = require('path');
const pythonScriptPath = path.join(__dirname, 'sdk_client.py');
function print(arg1,arg2,arg3){
    const pythonProcess = spawn('python', [pythonScriptPath,arg1.toString(), arg2.toString(), arg3.toString()])

    console.log(arg1,arg2,arg3);


    // Capture output from Python
    pythonProcess.stdout.on('data', (data) => {
        console.log(`Python script output: ${data}`);
      });
      
      pythonProcess.stderr.on('data', (data) => {
        console.error(`Python script error: ${data}`);
      });
      
      pythonProcess.on('close', (code) => {
        console.log(`Python script exited with code ${code}`);
      });

      return console.log("completed")
}

// Command to run Python
module.exports = print