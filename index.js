var express = require('express');

var staticSiteOptions = {
   portnum: 80,
   maxAge: 1000 * 60 * 15
};

express().use(express.static(
    __dirname,
   staticSiteOptions
)).listen(process.env.PORT || 80);
