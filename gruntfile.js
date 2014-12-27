/// <vs />
module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n by <%=pkg.author %> \n*/\n'
            },
            build: {
                src: 'src/**/*.js',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        log: {
            foo: [1, 2, 3],
            bar: 'hello world',
            baz: false
        },
        imagemin: {                          // Task
            static: {                          // Target
                options: {                       // Target options
                    optimizationLevel: 3,
                    svgoPlugins: [{ removeViewBox: false }],
                    use: [mozjpeg()]
                },
                files: {                         // Dictionary of files
                    'dist/img.png': 'src/img.png', // 'destination': 'source'
                    'dist/img.jpg': 'src/img.jpg',
                    'dist/img.gif': 'src/img.gif'
                }
            },
            dynamic: {                         // Another target
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'src/',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'dist/'                  // Destination path prefix
                }]
            }
        }
    });

    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    
    // 默认被执行的任务列表。
    grunt.registerTask('default', ['uglify', 'imagemin']);

    grunt.registerMultiTask('log', 'Log stuff.', function () {
        grunt.log.writeln(this.target + ': ' + this.data);
    });
};
