# Installing the toolkit

You can install the toolkit using NPM and as a Ruby gem. See below for instructions on each method.
Additionally, If you are contributing to the Toolkit you will need follow the commands outlined below.
1. [Node](#node)
2. [Ruby](#ruby)
3. [Accessiblity Testing w/ pa11y](#pa11y)

## <a name="node"><a>Installing with npm and using a Node-based asset pipeline

1. Add nypl-toolkit as a dependency:

  ```bash
  npm install --save @nypl/design-toolkit
  ```

2. If you’re using [Eyeglass](https://www.npmjs.com/package/eyeglass), skip to Step 3. Otherwise, you’ll need to add nypl-toolkit to your node-sass `includePaths` option. `require("@nypl/design-toolkit").includePaths` is an array of directories that you should pass to node-sass. How you do this depends on how node-sass is integrated into your project.

  ##### Webpack 1.x Example

  ```javascript
  const ROOT_PATH = path.resolve(__dirname);
  // Assign the sassPaths
  const sassPaths = require('@nypl/design-toolkit').includePaths.map((sassPath) =>
    `includePaths[]=${sassPath}`
  ).join('&');

  // In the `module.exports` object in `webpack.config.js`
  // Using the ExtractText Plugin - typically when building for production
  module.exports = {
    // ...
    plugins: [
      new ExtractTextPlugin('styles.css'),
      // ...
    ],
    module: {
      loaders: [
        {
          test: /\.scss$/,
          include: path.resolve(ROOT_PATH, 'src'),
          loader: ExtractTextPlugin.extract(`css?sourceMap!sass?sourceMap&${sassPaths}`),
        },
      ],
    },
  };

  // Using the SASS loader - typically with the webpack dev server
  module.exports = {
    // ...
    module: {
      loaders: [
        {
          test: /\.scss?$/,
          loader: `style!css!sass?${sassPaths}`,
          include: path.resolve(ROOT_PATH, 'src'),
        },
      ],
    },
  };
  ```

  ##### Webpack 2.x Example (Tested with 2.7.x)

  ```javascript
  const ROOT_PATH = path.resolve(__dirname);
  // Assign the sassPaths
  const sassPaths = require('@nypl/design-toolkit').includePaths
    .map((sassPath) => sassPath).join('&');
  const loaders = [
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        includePaths: sassPaths,
      },
    },
  ];

  // In the `module.exports` object in `webpack.config.js`
  // Using the ExtractText Plugin - typically when building for production
  module.exports = {
    // ...
    plugins: [
      new ExtractTextPlugin('styles.css'),
      // ...
    ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          include: path.resolve(ROOT_PATH, 'src'),
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: loaders,
          }),
        },
      ],
    },
  };

  // Using the SASS loader - typically with the webpack dev server
  module.exports = {
    // ...
    module: {
      rules: [
        {
          test: /\.scss?$/,
          use: [
            'style-loader',
            'css-loader',
            `sass-loader?includePaths=${sassPaths}`,
          ],
          include: path.resolve(ROOT_PATH, 'src'),
        },
      ],
    },
  };
  ```

3. Import the NYPL Toolkit SASS library into your Sass files:

  ```scss
  @import "toolkit";
  ```

4. If you also need the header or footer styles, add those:

  ```scss
  @import "header";
  @import "footer";
  ```

5. You can also load the normalization file to remove any browser or other colliding styles (must be the first import):

  ```scss
  @import "nypl-normalize";
  ```

## <a name="ruby"></a>Installing as a Ruby gem

This instructions are mainly for Rails-based apps but should also cover other Ruby-based applications. Please let us know if it doesn't by opening an issue.

1. In your `Gemfile` you need to add the `design-toolkit` gem:

  ````ruby
  # loading toolkit from the main repo
  gem 'design-toolkit', :git => 'git@github.com:NYPL/design-toolkit.git'
  ````

Ensure that the `sass-rails` gem is present - it is added to new Rails applications by default.

2. Stop your server if it is running.

3. Run `bundle install`

4. Import the toolkit styles to your stylesheets. For example, in the default `app/assets/stylesheets/application.scss`:

  ````scss
  @import "toolkit";
  ````

Avoid using the `*= require_self`, `*= require_tree .`, and `*= require` statements or your stylesheets will not be able to access the mixins or variables properly.

5. If you also need the header or footer styles, add those:

  ```scss
  @import "header";
  @import "footer";
  ```

6. You can also load the normalization file to remove any browser or other colliding styles (must be the first import):

  ```scss
  @import "nypl-normalize";
  ```

**Important:** Make sure the file has `.scss` extension (or `.sass` for Sass syntax).

## <a name="pa11y"></a>Accessiblity Testing with pa11y
`pa11y` tests are running against the set of example page URLs (see `.pa11yci` for the complete list) . For example, pa11y is calling `http://127.0.0.1:4000/design-toolkit/discovery-item.html` and running its tests on that URL, not the Toolkit Documentation itself. Testing should be run locally before committing to your your branch.

1. If you haven't already run the install steps from the [README.md](README.md) please do so before proceeding.
2. `cd` to the `docs/` folder
3. run this command: `bundle exec jekyll serve` to run the server locally
4. run this command: `npm run test-pa11y` to run the accessiblity test
