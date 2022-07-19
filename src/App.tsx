import { WidgetPopover } from "./components/WidgetPopover";



export function App() {
  return (
    <>
      <div className='bg-zinc-900 p-4 relative rounded-xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
        <h1>Pagina Principal do site</h1>
      </div>

      <WidgetPopover />

    </>


  )

}