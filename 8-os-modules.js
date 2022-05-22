// OS MODULE

const os = require("os");

// info about current user

const user = os.userInfo();

// method returns the uptime of a system in seconds

const uptime = os.uptime();

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
