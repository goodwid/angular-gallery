import angular from 'angular';
import components from './components';
import services from './services';
import ngDialog from 'ng-dialog';
import router from '@uirouter/angularjs';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMessages from 'angular-messages';
import 'angular-material/angular-material.css';
import 'ng-dialog/css/ngDialog.css';
import 'ng-dialog/css/ngDialog-theme-default.css';
import '@uirouter/angularjs/release/stateEvents';


const app = angular.module('gallery', [
  angular.module('ui.router.state.events').name,
  router,
  ngDialog,
  ngMaterial,
  ngAria,
  ngAnimate,
  ngMessages,
  components,
  services]);

export default app;
