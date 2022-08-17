const fs = require("fs")

const dir_structure = [
    {type: "folder", name: "app1", path:"./"},
    {type: "folder", name: "routes", path:"./app1/"},
    {type: "folder", name: "controllers", path:"./app1/"},
    {type: "folder", name: "middleweares", path:"./app1/"},
    {type: "file", name: "server.js", path:"./app1/"},
    {type: "file", name: "config.json", path:"./app1/"},
    {type: "file", name: ".gitignore", path:"./app1/"},
]

function createFolder() {
    for (let i = 0; i < dir_structure.length; i++) {
        if (dir_structure[i].type === "folder") {
            fs.mkdirSync(dir_structure[i].path+dir_structure[i].name);
        } else {
            fs.writeFileSync(dir_structure[i].path+dir_structure[i].name, "");
        }
    }
}


module.exports.createFolder = createFolder;