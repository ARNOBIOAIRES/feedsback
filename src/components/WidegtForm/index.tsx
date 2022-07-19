import { useState } from "react";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSuccessStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";


//olhe que legal, defino (na importação) uma variável que vai apontar para o endereço da imagem
//e no código uso essa variável. Abaixo utiliar os icones do popup
import butImageURL from '../../assets/bug.svg'
import ideaImageURL from '../../assets/idea.svg'
import thoughtImageURL from '../../assets/thought.svg'



export const obj_feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: butImageURL,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Idea',
    image: {
      source: ideaImageURL,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageURL,
      alt: 'Imagem de uma nuvem de pensamento'
    }
  }
}

/* A linha (41) abaixo está criando um TYPE (FeedbackType) que representa
as keyof (as chaves) do objeto feedbackTypes.
Assim quando for preciso manipular o conteúdo desse objeto
utilizando o useState posso definitir que as variáveis
que o useState vai manipular é do tipo  (FeedbackType)

*/
export type FeedbackType = keyof typeof obj_feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setfeedbackSent] = useState(false)

  /*  a função abaixo é para reiniciar o formulario do zero */
  function handleRestartFeddback() {
    setfeedbackSent(false)
    setFeedbackType(null)
  }
  /* agorar vamos enviar essa função via props para o componente */

  return (
    <div className='bg-zinc-900 p-4 relative rounded-xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      {/* o header Deixe seu feedback, foi para o componente */}

      {feedbackSent ? (
        <FeedbackSucessStep onFeedbackRestartRequest={handleRestartFeddback} />
      ) : (
        <>

          {feedbackType ? (
            <FeedbackContentStep
              vcv_feedbackType={feedbackType}
              onFeedbackRestartRequest={handleRestartFeddback}
              onFeedbackSent={() => setfeedbackSent(true)} />

          ) : (
            <FeedbackTypeStep
              onFeedbackTypeChanged={setFeedbackType} />
          )}
        </>
      )}

      <footer className='text-xs text-neutral-400'>
        Feito com amor pela <a className='underline underline-offset-2' href='https://github.com/ARNOBIOAIRES' />
      </footer>
    </div >
  )
}