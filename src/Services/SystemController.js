import queryString from 'query-string'
import API from './API'

const UUID = () => {
   function _p8(s) {
      var p = (Math.random().toString(16) + '000000000').substr(2, 8)
      return s ? '-' + p.substr(0, 4) + '-' + p.substr(4, 4) : p
   }
   return _p8() + _p8(true) + _p8(true) + _p8()
}

const BASE_URL = '/configurations'

export default class SystemController {
   /**
    * GET controller
    * for Systems
    */

   static system() {
      return API.fetch(`systems`)
   }

   static detailSystem(id) {
      return API.fetch(`systems/${id}`)
   }

   static systemAttachment(id) {
      return API.fetch(`systems/${id}/environments/attachments`)
   }

   static systemProperty(params) {
      const query = API.cleanPayload({
         page: params.page,
      })
      return API.fetch(`systems/properties?${queryString.stringify(query)}`)
   }

   static detailSystemProperty(id) {
      return API.fetch(`systems/properties/${id}`)
   }

   static systemPropertyValue(params) {
      const query = API.cleanPayload({
         page: params.page,
      })
      return API.fetch(`systems/properties/values?${queryString.stringify(query)}`)
   }

   static detailSystemPropertyValue(id) {
      return API.fetch(`systems/properties/values/${id}`)
   }

   static systemToggle(params) {
      const query = API.cleanPayload({
         page: params.page,
         pageSize: params.pageSize,
      })
      return API.fetch(`systems/toggles?${queryString.stringify(query)}`)
   }

   static detailSystemToggle(id) {
      return API.fetch(`systems/toggles/${id}`)
   }

   static searchSystem(params) {
      const query = API.cleanPayload({
         pageNumber: params.pageNumber,
         pageSize: params.pageSize,
         q: params.q,
      })
      return API.fetch(`systems/search?${queryString.stringify(query)}`)
   }

   /**
    * POST controller
    * for Systems
    */

   static createSystem(params) {
      const payload = {
         name: params.name,
         description: params.description,
      }

      return fetch(`${BASE_URL}/systems`, {
         method: 'post',
         headers: {
            'Content-Type': 'application/json',
            'Correlation-ID': UUID(),
         },
         body: JSON.stringify(payload),
      }).then((res) => res.json())
   }

   /**
    * DELETE controller
    * for Systems
    */

   static deleteSystem(id, params) {
      const query = API.cleanPayload({
         version: params.version,
      })
      return API.fetch(`systems/${id}?${queryString.stringify(query)}`, { method: 'DELETE' })
   }

   static deleteSystemProperty(id, params) {
      const query = API.cleanPayload({
         version: params.version,
      })
      return API.fetch(`systems/properties/${id}?${queryString.stringify(query)}`, { method: 'DELETE' })
   }
}
