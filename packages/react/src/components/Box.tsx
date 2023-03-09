import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles' // É a importação do Stitches

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'
/* Avatar.displayName na visualização dos component no StoryBook apareça assim
   Com o nome de component, em vez de div, span ...
*/
