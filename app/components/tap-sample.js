import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TapSampleComponent extends Component {
  @tracked flag = false;

  @action
  setFlag() {
    this.flag = true;
  }
}
