# node-mongodb-datadog-stats

Log mongodb query performance information using [debug](https://www.npmjs.com/package/debug).

```shell
npm install mongodb-datadog-stats --save
```

```javascript
var mongodb = require('mongodb');
var mongoDogStats = require('node-mongodb-debug-log');

mongoDogStats.install(mongodb, {
  debugName: 'mongo',
  slowLogMS: 10
});
```

Then, make sure you enable the debug log via the DEBUG environment var.

```shell
DEBUG=mongo node app.js
```

And you'll start seeing debug messages, in your console:

```text
mongo:slowlog users insert took 2468000µs: {"a":1,"b":2,"_id":"55a7aecb689693800b9be674"} +0ms
mongo users findOne took 2870µs: {} +3ms
```

# Licence

License
The MIT License (MIT)

Copyright (c) 2014, Andrew Newdigate

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
