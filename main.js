//This program reads the contents of a specified directory and logs the list of files in it. If the directory doesn't exist or an error occurs, it will display the error in the console.
import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "C:\\Users\\Programmer\\Desktop\\VS Codes\\Web Development Course\\Projects\\Clear the Clutter in Node-JS";

let files = await fs.readdir(basepath)

for (const item of files) {
    let ext = item.split(".")[item.split(".").length - 1]
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {
        if (fsn.existsSync(path.join(basepath, ext))) {
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        else {
            fs.mkdir(ext)
        }
    }
}