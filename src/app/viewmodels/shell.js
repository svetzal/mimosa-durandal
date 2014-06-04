define(['plugins/router', 'durandal/app'], function (router, app) {

   return {
    router: router,
    activate: function () {

            router.map([
                { route: '',      title: 'Set Up', moduleId: 'viewmodels/setup', nav: true },
                { route: 'test',  title: 'Test',   moduleId: 'viewmodels/test',  nav: true },
                { route: 'batch', title: 'Batch',  moduleId: 'viewmodels/batch', nav: true },
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});
