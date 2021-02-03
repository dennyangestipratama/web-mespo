import API from './API'

export default class SystemController {
   static system() {
      return API.fetch('systems')
   }
}
