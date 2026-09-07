const fs = require("fs");

const fileName = "sample.txt";

console.log("Starting file creation...");

fs.writeFile(fileName, "Hello! This is my Smart Utility Toolkit.", (err) => {
    if (err) {
        console.log("Error while creating file:", err);
    } else {
        console.log("File created successfully!");

        console.log("Starting file reading...");

        fs.readFile(fileName, "utf8", (err, data) => {
            if (err) {
                console.log("Error while reading file:", err);
            } else {
                console.log("File content:", data);

                console.log("Starting file update...");

                fs.appendFile(
                    fileName,
                    "\nThis file has been updated successfully.",
                    (err) => {
                        if (err) {
                            console.log("Error while updating file:", err);
                        } else {
                            console.log("File updated successfully!");

                            console.log("Starting file deletion...");

                            fs.unlink(fileName, (err) => {
                                if (err) {
                                    console.log("Error while deleting file:", err);
                                } else {
                                    console.log("File deleted successfully!");
                                }
                            });
                        }
                    }
                );
            }
        });
    }
});