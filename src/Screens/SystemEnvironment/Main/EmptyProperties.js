import AddProperties from '@Image/add-properties.png'

export default function EmptyProperties() {
   return (
      <div className='properties__body-empty'>
         <img src={AddProperties} alt='add properties' />
         <p className='text__properties-empty'>Add your properties here</p>
         <span className='text__properties-empty--info'>By manually add a property or upload your file.</span>
      </div>
   )
}
