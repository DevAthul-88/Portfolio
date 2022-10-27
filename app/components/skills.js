import Component from '@glimmer/component';

export default class SkillsComponent extends Component {
  skills = [
    {
      name: 'html',
      color: '#f291c6',
    },
    {
      name: 'css',
      color: '#27aae1',
    },
    {
      name: 'sass',
      color: '#fbc340',
    },
    {
      name: 'javascript',
      color: '#e91e63',
    },
    {
      name: 'typescript',
      color: '#9b6bff',
    },
    {
      name: 'php',
      color: '#f291c6',
    },
    {
      name: 'ember',
      color: '#27aae1',
    },
    {
      name: 'react',
      color: '#fbc340',
    },
    {
      name: 'next',
      color: '#27aae1',
    },
    {
      name: 'mongodb',
      color: '#f291c6',
    },
    {
      name: 'node',
      color: '#e91e63',
    },
    {
      name: 'express',
      color: '#9b6bff',
    },
    {
      name: 'mysql',
      color: '#fbc340',
    },
    {
      name: 'blitz',
      color: '#f291c6',
    },
    {
      name: 'laravel',
      color: '#e91e63',
    },
  ];

  get skillsComponent() {
    return this.skills;
  }
}
