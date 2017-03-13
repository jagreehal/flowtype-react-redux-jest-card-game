const folders = ['components','containers','lib','pages','redux','cards'];
const files = ({prefix, ext}) => folders.map(folder => {
  return `${prefix || ''}${folder}/**/*.${ext}`
});

module.exports = function(wallaby) {
  return {
    debug: true,
    files: files({ext:'js*'}).concat(files({ext:'snap'})).concat(files({ext:'spec.js*', prefix: '!'})),
    tests: files({ext: 'spec.js*'}),
    env: { type: 'node', runner: 'node' },
    compilers: { '**/*.js*': wallaby.compilers.babel() },
    testFramework: 'jest',
    setup: function() {
      wallaby.testFramework.configure({
        testRegex: '(components|containers|lib|pages|redux)/.*\\.spec\\.js$'
      });
    }
  };
};
