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
      return fetch(`${BASE_URL}/systems`, {
         headers: {
            'Content-Type': 'application/json',
            'Correlation-ID': UUID(),
         },
      }).then((res) => res.json())
   }

   static detailSystem(ID) {
      return fetch(`${BASE_URL}/systems/${ID}`, {
         headers: {
            'Content-Type': 'application/json',
            'Correlation-ID': UUID(),
         },
      }).then((res) => res.json())
   }

   static searchSystem(params) {
      const query = {
         q: params.q,
         pageNumber: params.pageNumber,
         pageSize: params.pageSize,
      }

      return fetch(`${BASE_URL}/systems/search?${queryString.stringify(query)}`, {
         headers: {
            'Content-Type': 'application/json',
            'Correlation-ID': UUID(),
         },
      }).then((res) => res.json())
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
      const query = {
         version: params.version,
      }

      return fetch(`${BASE_URL}/systems/${id}?${queryString.stringify(query)}`, {
         method: 'delete',
         headers: {
            'Content-Type': 'application/json',
            'Correlation-ID': UUID(),
         },
      }).then((res) => res.json())
   }
}
