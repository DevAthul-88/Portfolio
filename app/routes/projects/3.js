import Route from '@ember/routing/route';
import data from '../../data/projects';
export default class Projects3Route extends Route {
  model() {
    return data.find((e) => e.route == 3);
  }
  activate() {
    this._super(...arguments);
    window.scrollTo(0, 0);
  }
}
