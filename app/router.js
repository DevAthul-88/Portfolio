import EmberRouter from '@ember/routing/router';
import config from 'athul-vinod/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('projects/1', {path:"/projects/1"});
});
