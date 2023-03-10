import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@joezer-ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: { 
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: { action: 'clicked' }, /*Apresenta os Logs de ação no componente*/
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}


// import type { Meta, StoryObj } from '@storybook/react'
// import { Button, ButtonProps } from '@ignite-ui/react'

// export default { // Tudo o q tenho aqui vai ser herdado nas variações abaixo.
//   title: 'Form/Button',  // titulo da página
//   component: Button, // component desta story

//   args: {
//     children: 'Enviar',
//   },
// } as Meta<ButtonProps> /* Colocamos o Meta Para fazer a tipagem, e saber os parametros
// que posso passar neste "export default", como size, ... e demias props. */

// // Os components tem q ter pelo menos UMA variação,  neste caso tenho Primary e Big
// export const Primary: StoryObj<ButtonProps> = {} /* Usamos o StoryObj para faze a tipagem 
//                                                 das variações, o ButtonProps é os parametros
//                                                 que obj aceita receber */

// export const Big: StoryObj<ButtonProps> = {
//   args: {
//     size: 'small',
//   },
// }    

