# Webpack + EJS Demo

## Overview
This project demonstrates how to use **EJS with Webpack** to generate static HTML files. The setup includes:
- Webpack for bundling assets
- `html-webpack-plugin` for processing EJS templates
- SCSS compilation with Webpack loaders

## Current Status
✅ **The demo works** – Webpack successfully compiles EJS into static HTML.
❌ **EJS is not ideal for static sites** – It requires workarounds for includes (`<%- include() %>`) and doesn't precompile templates efficiently.

## Recommendation
For a **better static site solution**, consider using **Handlebars (`.hbs`)** instead of EJS:
- **Handlebars precompiles templates**, making them faster and more efficient.
- **Partial support (`{{> partial}}`)** is built-in and works smoothly with Webpack.
- **More static-friendly**, without runtime dependency issues.

## Conclusion
While EJS is a great templating engine, it is **not optimized for static site generation** with Webpack. 

- **If you need dynamic rendering**, use **EJS + Express**.
- **If you need a static Webpack-powered site**, consider **Handlebars** for better performance and partials support.

👉 **Next Steps:** Check out the Handlebars version of this repository: [webpack-handlebars](https://github.com/steven2k2/webpack-handlebars).

## JavaScript Style Guide
This project follows [Standard JS](https://standardjs.com/).

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

