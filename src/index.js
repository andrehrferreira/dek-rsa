import fs from "fs";
import path from "path";
import RSA from "node-rsa";
import { $ } from "@dekproject/scope";

export default async () => {
    try{
        let env = process.env;

        if(fs.existsSync(path.join(process.cwd(), "application.key"))) {
            var key = new RSA(fs.readFileSync(path.join(process.cwd(), "application.key")), "pkcs8-private-pem");
            key.importKey(fs.readFileSync(path.join(process.cwd(), "application.public")), "pkcs8-public-pem");
        }
        else{
            var key = new RSA({ b: 1024 });
            fs.writeFileSync(path.join(process.cwd(), "application.public"), key.exportKey("pkcs8-public-pem"));
            fs.writeFileSync(path.join(process.cwd(), "application.key"), key.exportKey("pkcs8-private-pem"));
        }

        if(process.env.DEBUG == 'true')
            console.log(`[ RSA ] - RSA successfully signed`);

        $.set("rsa", key);
    }
    catch(e){
        console.log(`[ RSA ] - ${e.message}`);
        reject();
    }
}
