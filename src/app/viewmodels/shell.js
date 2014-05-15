define(['plugins/router', 'durandal/app'], function (router, app) {

   return {
    router: router,
    activate: function () {

            router.map([
                { route: '', title:'Home', moduleId: 'viewmodels/home', nav: true },
                { route:'rainier', title:'Mount Rainier', moduleId:'viewmodels/rainier', nav:true }
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});