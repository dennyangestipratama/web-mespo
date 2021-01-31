import { ReactComponent as Info } from '@Icon/info.svg'

export default function Alert({ label }) {
   return (
      <section className='alert'>
         <Info />
         <span className='alert__title text__alert'>{label}</span>
      </section>
   )
}
