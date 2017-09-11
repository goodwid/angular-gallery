configRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$transitionsProvider'];

export default function configRoutes($stateProvider, $urlRouterProvider, $transitionsProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: `
      <div id="intro">
      </div>
      `
    });
  $urlRouterProvider.otherwise('/');
  $transitionsProvider.onStart({
    to: state => !!(state.data && state.data.requiresAuth)
  }, ($state) => {
    $state.$to().name;
  });
}
