# @dekproject/rsa

RSA interface plugin for DEK

## Instalation

To install the bootstrap we recommend using the CLI

```bash
$ yarn add @dekproject/rsa --save
```

## Usage

Using in the standard DEK skeleton

```js
import { rsa } from "@dekproject/scope";

var cryptPassword = rsa.encrypt("123", "base64");
console.log(rsa.decrypt(cryptPassword).toString()); //123
```
