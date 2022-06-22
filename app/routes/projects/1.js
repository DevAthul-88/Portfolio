import Route from '@ember/routing/route';
import data from '../../data/projects';
export default class Projects1Route extends Route {
  model() {
    return data.find((e) => e.route == 1);
  }
  activate() {
    super.activate(...arguments);
    window.scrollTo(0, 0);
  }
}
