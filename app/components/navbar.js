import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NavbarComponent extends Component {
  @tracked current = 'introduction';

  @action change(args) {
    this.current = args;
  }
}
