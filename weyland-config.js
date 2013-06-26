exports.config = function(weyland) {
    weyland.build('main')
        .workingDirectory('C:/Users/Rob/Documents/GitHub/Durandal/platforms/Microsoft.NET/Samples/Durandal.Samples')
        .task.jshint({
            include:'App/**/*.js'
        })
        .task.uglifyjs({
            include:'App/**/*.js'
        })
        .task.rjs({
            include:'App/**/*.{js,html}',
            viewPlugin:'text',
            viewPluginExtension:'.html',
            rjs:{
                name:'../Scripts/almond-custom', //for require use the build's name
                baseUrl : 'App',
                mainConfigFile:'App/main', //not needed for require
                wrap:true, //not needed for require
                paths : {
                    'text': '../Scripts/text',
                    'durandal': '../Scripts/durandal',
                    'plugins': '../Scripts/durandal/plugins',
                    'transitions': '../Scripts/durandal/transitions',
                    'knockout': '../Scripts/knockout-2.2.1',
                    'bootstrap': '../Scripts/bootstrap',
                    'jquery': '../Scripts/jquery-1.9.1'
                },
                inlineText: true,
                optimize : 'none',
                pragmas: {
                    build: true
                },
                stubModules : ['text'],
                keepBuildDir: true,
                out:'App/main-built.js'
            }
        });
}