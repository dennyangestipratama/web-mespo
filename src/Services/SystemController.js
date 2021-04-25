import queryString from 'query-string'

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

   static systemProperties(ID) {
      return fetch(`${BASE_URL}/environments/systems/${ID}/nodes/properties`, {
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

   static systemEnvironmentAttach(ID) {
      return fetch(`${BASE_URL}/systems/${ID}/environments/attachments`, {
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
         systemId: params.systemId,
         url: params.url,
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

   static attachSystemEnvironment(params) {
      const payload = {
         environmentId: params.environmentId,
         systemId: params.systemId,
      }

      return fetch(`${BASE_URL}/environments/systems`, {
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

   static updateSystem(ID, params, queryParams) {
      const payload = {
         name: params.name,
         description: params.description,
         systemId: params.systemId,
         url: params.url,
         ownerPartyId: params.ownerPartyId,
      }

      const query = {
         version: queryParams.version,
      }

      return fetch(`${BASE_URL}/systems/${ID}?${queryString.stringify(query)}`, {
         method: 'put',
         headers: {
            'Content-Type': 'application/json',
            'Correlation-ID': UUID(),
         },
         body: JSON.stringify(payload),
      }).then((res) => res.json())
   }

   static updateAttachSystemEnvironment(params) {
      const payload = {
         system: params.system,
         attachments: params.attachments,
      }

      return fetch(`${BASE_URL}/systems/environments/attachments`, {
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
    * for Systems
    */

   static deleteSystem(id, params) {
      const query = {
         version: params.version,
         confirmed: true,
      }

      return fetch(`${BASE_URL}/systems/${id}/completely?${queryString.stringify(query)}`, {
         method: 'delete',
         headers: {
            'Content-Type': 'application/json',
            'Correlation-ID': UUID(),
         },
      }).then((res) => res.json())
   }
}
