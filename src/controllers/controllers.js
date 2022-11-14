import path from 'path';
const __dirname = path.resolve();

export const home = (req, res) => {
    //show this file when the "/" is requested
    res.sendFile(__dirname+"/src/pages/index.html");
}