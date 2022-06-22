import Route from '@ember/routing/route';
import data from '../../data/projects';
export default class Projects2Route extends Route {
  model() {
    return data.find((e) => e.route == 2);
  }
  activate() {
    super.activate(...arguments);
    window.scrollTo(0, 0);
  }
}
