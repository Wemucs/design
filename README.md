Wemucs design
=============

Here, we are making the Wemucs blog design, based on [Foundation](http://foundation.zurb.com/).

# Prerequisites

- [NodeJS](http://nodejs.org/)
- Bower and Grunt-cli (run ```npm install -g bower grunt-cli``` to install both)

# Compile assets

In order to compile assets, you may run:

```
npm install
grunt
```

These commands download required libraries and start assets compilation.

# File watcher

A file watcher is implemented. To run it, just use:

```
grunt serve
```

Each time a file will be modified, assets will be regenerated.
