import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CneTextBoxModule } from 'projects/cne-material/src/lib/cne-text-box/cne-text-box.module';
import { CneTextBoxComponent } from 'projects/cne-material/src/lib/cne-text-box/components/cne-text-box/cne-text-box.component';
import { event } from 'devextreme/events';
import { EventEmitter } from '@angular/core';

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
      ...args
    }
  }),
  argTypes: {
   value:{type:'string'},
   label:{type:'string'},
   name:{type:'string'}, 
   maxLength:{type:'number'},
   readOnly:{type:'boolean'},
   mask:{type:'string'},
   mode:{options: ['search', 'password','url','email','tel','text'],
   control: 'radio',
  }
  },

};



export default meta;
type Story = StoryObj<CneTextBoxComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const keyEnterKeyAction: Story = {
  render: (args: CneTextBoxComponent) => ({
    props: {
      ...args
    }
  }),
  args: {
    mode: 'url',
  }, argTypes: {
    onEnterKey: { action: { argTypesRegex: '^on.*' }, description: 'Opcional onEnterKey evento <code> return event</code>' },
  },
};
export const onValueChangedAction: Story = {
  render: (args: CneTextBoxComponent) => ({
    props: {
      ...args
    }
  }),
  args: {
    mode: 'url',
  }, argTypes: {
    onValueChanged: { action: { argTypesRegex: '^on.*' }, description: 'Opcional onValueChanged evento <code> return event</code>' },
  },
};
export const onKeyUpAction: Story = {
  render: (args: CneTextBoxComponent) => ({
    props: {
      ...args
    }
  }),
  args: {
    mode: 'url',
  }, argTypes: {
    onKeyUp: {action: { argTypesRegex: '^on.*' }, description: 'Opcional onKeyUp evento <code> return event</code>' },
  },
};
export const onKeyDownAction: Story = {
  render: (args: CneTextBoxComponent) => ({
    props: {
      ...args
    }
  }),
  args: {
    mode: 'url',
  }, argTypes: {
    onKeyDown: {  action: { argTypesRegex: '^on.*' }, description: 'Opcional onKeyDown evento <code> return event</code>' },
  },
};


