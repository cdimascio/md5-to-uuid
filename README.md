# md5-to-uuid

![](https://travis-ci.com/cdimascio/md5-to-uuid.svg?branch=master)
![](https://img.shields.io/badge/license-MIT-blue.svg)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/873f7237831c40fc8db306eaf8f3069c)](https://app.codacy.com/app/cdimascio/md5-to-uuid?utm_source=github.com&utm_medium=referral&utm_content=cdimascio/md5-to-uuid&utm_campaign=Badge_Grade_Dashboard)

A node module that converts MD5 hashes to UUIDs

<p align="center">
<img src="https://raw.githubusercontent.com/cdimascio/md5-to-uuid/master/assets/md5-to-uuid.png" width="300px">
</p>

## Install

```shell
npm install md5-to-uuid
```

## Usage

```javascript
const md5ToUuid = require('md5-to-uuid');
const uuid = md5ToUuid(md5Hash)
```

## License
[MIT](LICENSE)
