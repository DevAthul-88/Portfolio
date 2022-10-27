import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import project from '../data/projects';
import { action } from '@ember/object';

export default class ProjectComponent extends Component {
  data = project;
  @tracked tag = 'all';
  @tracked tab = 1;

  @action update(args) {
    this.tag = args;
  }

  @action changeTab(args) {
    this.tab = args;
  }

  get returnData() {
    if (this.tag === 'all') {
      return (this.data = project);
    } else if (this.tag === 'e-commerce') {
      return (this.data = project.filter((e) => e.tag === 'e-commerce'));
    } else if (this.tag === 'system') {
      return (this.data = project.filter((e) => e.tag === 'system'));
    } else if (this.tag === 'social-network') {
      return (this.data = project.filter((e) => e.tag === 'social-network'));
    } else if (this.tag === 'clones') {
      return (this.data = project.filter((e) => e.tag === 'clones'));
    }
  }

  get tabClass1() {
    if (this.tab == 1) {
      return 'is-active';
    }
  }
  get tabClass2() {
    if (this.tab == 2) {
      return 'is-active';
    }
  }
}
