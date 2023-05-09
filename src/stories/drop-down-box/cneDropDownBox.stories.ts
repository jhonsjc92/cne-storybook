import { Meta, StoryObj, moduleMetadata  } from '@storybook/angular';
// import { SCneDropDownBoxComponent } from './components/cne-drop-down-box/scne-drop-down-box.component';
import { CneDropDownBoxModule } from 'projects/cne-material/src/lib/cne-drop-down-box/cne-drop-down-box.module';
import { CneDropDownBoxComponent } from 'projects/cne-material/src/lib/cne-drop-down-box/components/cne-drop-down-box/cne-drop-down-box.component';


// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<CneDropDownBoxComponent> = {
  title: 'Example/cneDropDownBox',
  component: CneDropDownBoxComponent,
  decorators: [
    moduleMetadata({
      imports: [CneDropDownBoxModule],
    }),
  ],
  tags: ['autodocs'],
  render: (args: CneDropDownBoxComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
  }
};

export default meta;
type Story = StoryObj<CneDropDownBoxComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Single: Story = {
  args: {
    dataSource:['uno','dos','tres']
  },
};

export const Secondary: Story = {
  args: {
    dataSource:['uno','dos','tres']
  },
};


