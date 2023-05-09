import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CneDropDownButtonModule } from 'projects/cne-material/src/lib/cne-drop-down-button/cne-drop-down-button.module';
import { CneDropDownButtonComponent } from 'projects/cne-material/src/lib/cne-drop-down-button/components/cne-drop-down-button/cne-drop-down-button.component';


// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<CneDropDownButtonComponent> = {
  title: 'Example/cneDropDownButton',
  component: CneDropDownButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [CneDropDownButtonModule],
    }),
  ],
  tags: ['autodocs'],
  render: (args: CneDropDownButtonComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
  }
};

export default meta;
type Story = StoryObj<CneDropDownButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args


export const Seleccion: Story = {
  args: {
    dataSource: [{
      id: 1, name: 'prueba'
    }]
  },
};