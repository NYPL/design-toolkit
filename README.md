[![Build Status](https://travis-ci.org/NYPL/design-toolkit.svg?branch=master)](https://travis-ci.org/NYPL/design-toolkit)
[![Stories in Ready](https://badge.waffle.io/NYPL/design-toolkit.png?label=ready&title=Ready)](https://waffle.io/NYPL/design-toolkit?utm_source=badge)
# NYPL Digital Design Toolkit
Design toolkit (SASS) for the NYPL Digital team

## Version: 0.1.35

## [View documentation](http://nypl.github.io/design-toolkit/)

## Viewing documentation locally
### Setting up Jekyll
1. Install [Jekyll](https://jekyllrb.com/) Enter `gem install jekyll bundler` in your terminal.
2. Change directories to the `docs/` folder.
3. Run `bundle install` to install necessary gems.
4. Run `bundle exec jekyll serve` to compile and watch the site as well as start a local server. Or just run `jekyll serve`.
5. Navigate your favorite internet browser to http://127.0.0.1:4000/design-toolkit/

### Compiling SCSS to CSS with Gulp or SASS CLI
1. To view, edit and complie sass to css:
  
    a. For `gulp`: Make sure you have [Node.js](http://nodejs.org/) installed and up to date. From the root of the project run `npm i` this will install the `gulp` dependencies.
    - Once `gulp` is installed, from the root, run `gulp` this will compile your `scss` files to `css` and place them in the correct directory.
    - You can also run `gulp watch` and this will actively watch and complie files on save.

    b. Alternately you can run / compile `sass` directly, via its CLI.
    - From the root of the project run: `sass --watch sass:css/docs`

2. Have a milkshake.

## [Install the toolkit in your application](INSTALL.md)

## [View Change Log](CHANGELOG.md)

## License

See [LICENSE](LICENSE)