define(['plugins/router', 'durandal/app'], function (router, app) {

    return {
    router: router,
    activate: function () {

            router.map([
                { route: '', title:'Home', moduleId: 'home', nav: true },
                { route:'rainier', title:'Mount Rainier', moduleId:'rainier', nav:true }
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});