import { ReactComponent as IconClone } from '@Icon/clone.svg'
import { ReactComponent as IconEdit } from '@Icon/edit.svg'
import { ReactComponent as IconDelete } from '@Icon/delete.svg'
import { ReactComponent as IconArrowDown } from '@Icon/arrow-down.svg'

export const ModalOptionSystem = ({ showOption, title, setType, setToggle }) => {
   return (
      <div className='modalOption'>
         <div className="modalOption__title">{title}</div>
         <div className="body">
            <div className="wrapper" onClick={() => showOption(0)}>
               <IconClone />
               <span>Clone</span>
            </div>
            <div className="wrapper" onClick={() => showOption(0)}>
               <IconEdit />
               <span>Edit</span>
            </div>
            <div className="wrapper delete" onClick={() => {
               showOption(0)
               setToggle('isModalDelete')
               setType('system')
            }}>
               <IconDelete />
               <span>Delete</span>
            </div>
         </div>
      </div>
   )
}

export const ModalAction = ({ showProperty, setType, setToggle, title }) => {
   return (
      <div className='modalOption modalProperty'>
         <div className="modalOption__title">{title}</div>
         <div className="body">
            <div className="wrapper" onClick={() => showProperty(0)}>
               <IconClone />
               <span>Overide</span>
               <div className="wrapper-dropdown">
                  <span>Select target</span>
                  <IconArrowDown />
               </div>
            </div>
            <div className="wrapper delete" onClick={() => {
               showProperty(0)
               setToggle('isModalDelete')
               setType('environment')
            }}>
               <IconDelete />
               <span>Delete</span>
            </div>
         </div>
      </div>
   )
}