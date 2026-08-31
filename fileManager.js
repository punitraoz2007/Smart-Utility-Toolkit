// File Manager using Node.js fs module

const fs = require("fs");

const FILE_NAME = "utility.txt";

const [, , operation] = process.argv;

console.log(" File Manager Started ");

switch ((operation || "").toLowerCase()) {
  case "create":
    console.log("[CREATE] Creating file...");

    fs.writeFile(
      FILE_NAME,
      "Smart Utility Toolkit - Initial Content\n",
      (err) => {
        if (err) {
          console.log("Create Error:", err.message);
          return;
        }

        console.log(`[CREATE] File "${FILE_NAME}" created successfully.`);
      },
    );

    break;

  case "read":
    console.log("[READ] Reading file...");

    fs.readFile(FILE_NAME, "utf8", (err, data) => {
      if (err) {
        if (err.code === "ENOENT") {
          console.log(`[READ] Error: "${FILE_NAME}" does not exist.`);
        } else {
          console.log("[READ] Error:", err.message);
        }

        return;
      }

      console.log("[READ] File content:");
      console.log(data);
    });

    break;

  case "update":
    console.log("[UPDATE] Updating file...");

    fs.appendFile(
      FILE_NAME,
      `Updated at: ${new Date().toLocaleString()}\n`,
      (err) => {
        if (err) {
          if (err.code === "ENOENT") {
            console.log(
              `[UPDATE] Error: "${FILE_NAME}" does not exist. Create it first.`,
            );
          } else {
            console.log("[UPDATE] Error:", err.message);
          }

          return;
        }

        console.log(`[UPDATE] File "${FILE_NAME}" updated successfully.`);
      },
    );

    break;

  case "delete":
    console.log("[DELETE] Deleting file...");

    fs.unlink(FILE_NAME, (err) => {
      if (err) {
        if (err.code === "ENOENT") {
          console.log(`[DELETE] Error: "${FILE_NAME}" does not exist.`);
        } else {
          console.log("[DELETE] Error:", err.message);
        }

        return;
      }

      console.log(`[DELETE] File "${FILE_NAME}" deleted successfully.`);
    });

    break;

  default:
    console.log("Usage:");

    console.log("node fileManager.js create");
    console.log("node fileManager.js read");
    console.log("node fileManager.js update");
    console.log("node fileManager.js delete");
}
