# theo-plugin-formats
Useful formats which can be consumed by Salesforce UX's [Theo](https://github.com/salesforce-ux/theo) library.

[ ![Codeship Status for johnnycopperstone/theo-plugin-formats](https://codeship.com/projects/c0553380-dd4b-0133-c869-6e554581ddcc/status?branch=master)](https://codeship.com/projects/144341)

### Formats Overview

- [Stylus](#stylus)

### Usage

Using these plugins is very simple using ES6. For the time being ES6 is supported only, eventually I'll add transpiled support.

From your ES6 app, simply import the specific format you want to use, and then add it to theo. To understand how theo works, just check out the docs, they're very thorough.

Also keep in mind that every formatting function might work differently, so check the API.

### Formats

The formats:

#### Stylus

  `stylusFormat(prefix)`

Stylus formatting allows for an optional prefix to be defined, so it returns a wrapper fn to let you do this. So be sure to pass the invoked function in `registerFormat` with or without a prefix.

    import theo from 'theo';
    import { stylusFormat } from 'theo-plugin-formats';

    // without a prefix
    theo.registerFormat('styl', stylusFormat());

    // and with
    theo.registerFormat('styl', stylusFormat('$'));
