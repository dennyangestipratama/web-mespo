import queryString from 'query-string'

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

   static detailEnvironmentSystem(ID) {
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

   static searchEnvironment(params) {
      const query = {
         q: params.q,
      }

      return fetch(`${BASE_URL}/environments/search?${queryString.stringify(query)}`, {
         headers: {
            'Content-Type': 'application/json',
            'Correlation-ID': UUID(),
         },
      }).then((res) => res.json())
   }

   /**
    * POST controller
    * for Environments
    */

   static createEnvironment(params) {
      const payload = {
         name: params.name,
         description: params.description,
         environmentId: params.environmentId,
         url: params.url,
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

   static attachSystem(params) {
      const payload = {
         systemId: params.systemId,
      }

      return fetch(`${BASE_URL}/environments/systems/attachments`, {
         method: 'post',
         headers: {
            'Content-Type': 'application/json',
            'Correlation-ID': UUID(),
         },
         body: JSON.stringify(payload),
      }).then((res) => res.json())
   }

   static attachEnvironmentSystem(params) {
      const payload = {
         environment: params.environment,
         attachments: params.attachments,
      }

      return fetch(`${BASE_URL}/environments/systems/attachments`, {
         method: 'post',
         headers: {
            'Content-Type': 'application/json',
            'Correlation-ID': UUID(),
         },
         body: JSON.stringify(payload),
      }).then((res) => res.json())
   }

   /**
    * PUT controller
    * for Systems
    */

   static updateEnvironment(ID, params, queryParams) {
      const payload = {
         name: params.name,
         description: params.description,
         ownerPartyId: params.ownerPartyId,
         url: params.url,
         environmentId: params.environmentId,
      }

      const query = {
         version: queryParams.version,
      }

      return fetch(`${BASE_URL}/environments/${ID}?${queryString.stringify(query)}`, {
         method: 'put',
         headers: {
            'Content-Type': 'application/json',
            'Correlation-ID': UUID(),
         },
         body: JSON.stringify(payload),
      }).then((res) => res.json())
   }

   /**
    * DELETE controller
    * for Environments
    */

   static deleteEnvironment(id, params) {
      const query = {
         version: params.version,
         confirmed: true,
      }

      return fetch(`${BASE_URL}/environments/${id}/completely?${queryString.stringify(query)}`, {
         method: 'delete',
         headers: {
            'Content-Type': 'application/json',
            'Correlation-ID': UUID(),
         },
      }).then((res) => res.json())
   }
}
