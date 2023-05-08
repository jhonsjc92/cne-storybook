import { Meta, StoryObj, moduleMetadata  } from '@storybook/angular';
import { DxButtonModule } from 'devextreme-angular';
import { ScneButtonComponent } from './components/cne-buttons/scne-buttons.component';
import { CneButtonModule } from 'projects/cne-material/src/lib/cne-button/cne-button.module';


// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<ScneButtonComponent> = {
  title: 'Example/cneButton',
  component: ScneButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [CneButtonModule],
    }),
  ],
  tags: ['autodocs'],
  render: (args: ScneButtonComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
  }
};

export default meta;
type Story = StoryObj<ScneButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    typeButton:'primary'
  },
};

export const Secondary: Story = {
  args: {
    typeButton:'secondary'
  },
};


