import { ReactComponent as IconDelete } from '@Icon/delete.svg'
import { ReactComponent as IconClose } from '@Icon/close.svg'

const ModalDelete = ({ setToggle, title, type }) => {
   return (
      <div className="modalDelete">
         <IconClose onClick={() => setToggle('isModalDelete')} />
         <div className="modalDelete__body">
            <IconDelete />
            <div className="text">You are about to delete a <span>{type}</span> :</div>
            <div className="title">{title}</div>
            <div className="text--input">To continue, type the <span>{type}</span> name below.</div>
            <input type="text" />
            <button>Delete <span>{type}</span></button>
         </div>
      </div>
   )
}

export default ModalDelete