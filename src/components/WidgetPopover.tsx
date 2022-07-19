import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidegtForm';

export function WidgetPopover() {


  return (
    <Popover className='absolute bottom-5 right-5 flex flex-col items-end'>
      <Popover.Panel>

        <WidgetForm />

      </Popover.Panel>


      <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
        <ChatTeardropDots className='w-6 h-6' />

        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>

  )
}


/* 
1 - a div vira Popover
2  - a tag que vai receber o conteúdo vira Popover.Panel
3 - o button que vai receber a ação vira Popover.Button no lugar do button
4 - não precisa usar estado e nem a função para alterar.


conceitos de acessibilidade
- informar um novo elemento na tela (por exemplo)
- tab
- esc para fechaar
- tag area

- ou suar bibliotecas : reakit.io, radix-io, headlessui.dev(ui integrada com o tewsildned
  )

*/

/* 

Usando a bibioteca
chamada phosphoroicons.com
essa biblioteca tem integração direta com o react
no gitub vem o guia de instalação.

é só instalar
npm install phosphor-react

depois instalamos a 
npm install @headlessui/react 
para incluir o component Popover (que já vem com conceitos de acessibilidade)
*/
