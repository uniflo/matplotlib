const ejs = require("ejs")
const process = require("child_process")
const path = require("path")
const fs = require("fs")

function render(chartJson, template, unitHomeDir) {
    
    const RESULT_FILE = path.join(unitHomeDir, "result.png")
    
    if (!chartJson.data) {
        return path.join(unitHomeDir, "error.png")
    }
    
    let script = path.join(unitHomeDir, "matplot.py")
    process.spawnSync("python3", [script, JSON.stringify(chartJson), template, RESULT_FILE])    
    
    return RESULT_FILE
}

// export render function
module.exports = render