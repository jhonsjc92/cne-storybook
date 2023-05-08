import { Meta, StoryObj, moduleMetadata  } from '@storybook/angular';
import { CneButtonsComponent } from './components/cne-buttons/cne-buttons.component';
import { DxButtonModule } from 'devextreme-angular';
import { CneButtonsModule } from 'cne-material';


// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<CneButtonsComponent> = {
  title: 'Example/cneButton',
  component: CneButtonsComponent,
  decorators: [
    moduleMetadata({
      imports: [CneButtonsModule],
    }),
  ],
  tags: ['autodocs'],
  render: (args: CneButtonsComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  }
};

export default meta;
type Story = StoryObj<CneButtonsComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Prueba: Story = {
  args: {
    size: 'prueba',
    label: 'Button2'
  },
};

