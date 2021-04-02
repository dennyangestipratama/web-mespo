import queryString from 'query-string'

const UUID = () => {
   function _p8(s) {
      var p = (Math.random().toString(16) + '000000000').substr(2, 8)
      return s ? '-' + p.substr(0, 4) + '-' + p.substr(4, 4) : p
   }
   return _p8() + _p8(true) + _p8(true) + _p8()
}

const BASE_URL = '/configurations'

export default class PropertiesController {
   /**
    * GET controller
    * for Properties
    */

   static detailSystemProperties(ID) {
      return fetch(`${BASE_URL}/systems/${ID}/properties`, {
         headers: {
            'Content-Type': 'application/json',
            'Correlation-ID': UUID(),
         },
      }).then((res) => res.json())
   }

   /**
    * POST controller
    * for Properties
    */

   static createProperties(params) {
      const payload = {
         systemId: params.systemId,
         name: params.name,
         value: params.value,
         valueType: params.valueType,
      }

      return fetch(`${BASE_URL}/systems/properties`, {
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
    * for Properties
    */

   static updateSystemProperties(ID, params) {
      const payload = {
         name: params.name,
         systemId: params.systemId,
         propertyId: params.propertyId,
         propertyTypeId: params.propertyTypeId,
         value: params.value,
         valueType: params.valueType,
         version: params.version,
         ownerPartyId: params.ownerPartyId,
         valueVersion: params.valueVersion,
      }

      return fetch(`${BASE_URL}/systems/properties/${ID}`, {
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
    * for Properties
    */

   static deleteProperties(ID, params) {
      const query = {
         valueVersion: params.valueVersion,
         propertyId: params.propertyId,
         propertyVersion: params.propertyVersion,
      }

      return fetch(`${BASE_URL}/systems/properties/${ID}?${queryString.stringify(query)}`, {
         method: 'delete',
         headers: {
            'Content-Type': 'application/json',
            'Correlation-ID': UUID(),
         },
      }).then((res) => res.json())
   }
}
