import Vue, { CreateElement } from 'vue';
import Component from 'vue-class-component';

import './index.scss';

@Component
export default class TsxDemo extends Vue {

  state = {
    message: 'Hello, TSX',
    counter: 0
  };

  handleClick() {
    this.state.counter++;
  }

  render(h: CreateElement) {
    return (
      <div className="tsx-demo">
        This is rendered from TSX.
        <p>
          { this.state.message } - { this.state.counter }
        </p>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}
