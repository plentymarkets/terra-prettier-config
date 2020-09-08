module.exports = function () {
    var sources = {
        packageJson: './package.json',
        readme: './README.md',
        configuration: './.prettierrc.js'
    };

    var destinations = {
        dist: './dist/'
    };

    return {
        sources: sources,
        destinations: destinations
    };
};
