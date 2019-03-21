import { $, plugins, rsa } from "@dekproject/scope";

(async () => {
    await plugins("./");

    $.wait("rsa").then(() => {
        var cryptPassword = rsa.encrypt("123", "base64");
        console.log("Encrypt:", cryptPassword.toString());
        console.log("Decrypt:", rsa.decrypt(cryptPassword).toString()); //123
    });
})();
