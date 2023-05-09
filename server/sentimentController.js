import { spawn } from "child_process";

function runPythonScript(arg) {
  return new Promise((resolve, reject) => {
    const scriptPath = "./main.py";
    const python = spawn("python", [scriptPath].concat(arg));

    python.stdout.on("data", (data) => {
      let responseString = `${data}`;
      resolve(responseString);
    });

    python.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
    });

    python.on("close", (code) => {
      if (code !== 0) {
        reject(new Error(`Python script exited with code ${code}`));
        return;
      }
    });
  });
}

export const sentimentCheck = (req, res) => {
  try {
    const { arg } = req.body;
    runPythonScript(arg).then(function (value) {
      res.json(value);
    });
  } catch (error) {
    console.log(error);
  }
};
