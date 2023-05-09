import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CneButtonModule } from 'projects/cne-material/src/lib/cne-button/cne-button.module';
import { CneButtonComponent } from 'projects/cne-material/src/lib/cne-button/components/cne-button/cne-button.component';

export type botontype = 'primary' | "secondary";
// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<CneButtonComponent> = {
  title: 'cneButton',
  component: CneButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [CneButtonModule],
    }),
  ],
  tags: ['autodocs'],
  render: (args: CneButtonComponent) => ({
    props: {
      ...args,
    }
  }),
  argTypes: {
    c_onClick: { action: { argTypesRegex: '^on.*' }, description: 'Opcional click evento <code> return event</code>' },
    typeButton: {
      options: ['primary', 'secondary'],
      control: 'radio',
      description: 'Tipo de estilo <code>primary</code> <code>secondary</code>'
    },
    idButton: {
      options: [1, 2, 3, 4],
      control: 'select',
      description: 'Tipo de boton <pre><code>1</code>= Guardar</pre> <pre><code>2</code>= Actualziar</pre> <pre> <code>3</code>= Eliminar </pre> <pre><code>4</code>= Editar</pre> '
    }
  }, parameters: {
    docs: {
      description: {
        component: 'Creación del boton'
      },
    },
  },

};



export default meta;
type Story = StoryObj<CneButtonComponent>;

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
