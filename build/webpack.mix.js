let mix = require('laravel-mix');
const path = require("path");

mix.setResourceRoot('../');
mix.setPublicPath('../');

mix
    .js('assets/fade-in-sections.js', './js/fade-in-sections.js')