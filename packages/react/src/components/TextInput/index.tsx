import { ComponentProps, forwardRef, ElementRef } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

// Semana 5**  ⇒ Seção: Publicação e manutenção Aula: Ajustes no Design System 8:40
// forwardRef<ElementRef e, MinhasProps>
export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => {
    // Aqui me da acesso  ref do elemento
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
/* Avatar.displayName na visualização dos component no StoryBook apareça assim
   Com o nome de component, em vez de div, span ...
*/
