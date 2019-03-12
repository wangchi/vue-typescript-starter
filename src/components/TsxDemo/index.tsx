import Vue, { CreateElement } from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import './index.scss';

@Component
export default class TsxDemo extends Vue {
  @Prop() msg!: string;

  message: string = 'Hello, TSX';
  counter: number = 0;

  handleClick() {
    this.counter++;
  }

  render(h: CreateElement) {
    return (
      <div className="tsx-demo">
        This is rendered from TSX.
        <div>
          <input type="text" v-model={this.message} defaultValue={this.message}/>
        </div>
        <p>msg from props: { this.msg }</p>
        <p>
          message: { this.message }
        </p>
        <p>
          counter: { this.counter }
        </p>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}
