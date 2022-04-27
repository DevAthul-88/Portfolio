import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import project from '../data/projects';
import {action} from '@ember/object'

export default class ProjectComponent extends Component {
  data = project;
  @tracked tag = "all";

  @action update(args){
    this.tag = args
  }

  get returnData(){
    if(this.tag === "all"){
      return this.data = project
    }
    else if(this.tag === "e-commerce"){
      return this.data = project.filter((e) => e.tag === "e-commerce")
    }
    else if(this.tag === "system"){
      return this.data = project.filter((e) => e.tag === "system")
    }
    else if(this.tag === "social-network"){
      return this.data = project.filter((e) => e.tag === "social-network")
    }
  }
}
