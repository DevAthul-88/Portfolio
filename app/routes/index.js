import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class IndexRoute extends Route {
  @action
  loading(transition, originRoute) {
    let controller = this.controllerFor('foo');
    controller.set('currentlyLoading', true);
    return true;
  }
}
