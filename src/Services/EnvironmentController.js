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

export default class EnvironmentController {
   /**
    * GET controller
    * for Environment
    */

   static environment() {
      return fetch(`${BASE_URL}/environments`, {
         headers: {
            'Content-Type': 'application/json',
            'Correlation-ID': UUID(),
         },
      }).then((res) => res.json())
   }

   static detailEnvironment(ID) {
      return fetch(`${BASE_URL}/environments/${ID}`, {
         headers: {
            'Content-Type': 'application/json',
            'Correlation-ID': UUID(),
         },
      }).then((res) => res.json())
   }

   static environmentSystem(ID) {
      return fetch(`${BASE_URL}/environments/systems/${ID}`, {
         headers: {
            'Content-Type': 'application/json',
            'Correlation-ID': UUID(),
         },
      }).then((res) => res.json())
   }

   static environmentSystem() {
      return fetch(`${BASE_URL}/environments/systems`, {
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

   static createEnvironment(params) {
      const payload = {
         name: params.name,
         description: params.description,
         environmentId: params.environmentId,
      }

      return fetch(`${BASE_URL}/environments`, {
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

   static deleteEnvironment(id, params) {
      const query = {
         version: params.version,
      }

      return fetch(`${BASE_URL}/environments/${id}?${queryString.stringify(query)}`, {
         method: 'delete',
         headers: {
            'Content-Type': 'application/json',
            'Correlation-ID': UUID(),
         },
      }).then((res) => res.json())
   }
}
