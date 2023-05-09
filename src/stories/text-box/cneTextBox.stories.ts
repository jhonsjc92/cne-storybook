import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CneTextBoxModule } from 'projects/cne-material/src/lib/cne-text-box/cne-text-box.module';
import { CneTextBoxComponent } from 'projects/cne-material/src/lib/cne-text-box/components/cne-text-box/cne-text-box.component';

export type botontype = 'primary' | "secondary";
// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<CneTextBoxComponent> = {
  title: 'cneTextBox',
  component: CneTextBoxComponent,
  decorators: [
    moduleMetadata({
      imports: [CneTextBoxModule],
    }),
  ],
  tags: ['autodocs'],
  render: (args: CneTextBoxComponent) => ({
    props: {
      ...args,
    }
  }),
  argTypes: {
   
  },

};



export default meta;
type Story = StoryObj<CneTextBoxComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  argTypes: {
    idButton: {
      options: [1, 2, 3, 4],
      control: 'select',
    }
  },
  args: {
    typeButton: 'primary',
    idButton: 1
  },
};

export const Secondary: Story = {
  args: {
    typeButton: 'secondary',
    idButton: 2
  },
};
