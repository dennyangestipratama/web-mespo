import queryString from 'query-string'
import API from './API'

export default class EnvironmentController {
   static environment() {
      return API.fetch('environments')
   }

   static detailEnvironment(id) {
      return API.fetch(`environments/${id}`)
   }

   static createEnvironment(params) {
      const payload = API.cleanPayload({
         environmentId: params.environmentId,
         name: params.name,
         canonicalName: params.canonicalName,
         description: params.description,
         version: params.version,
         ownerPartyId: params.ownerPartyId,
         dateModifiedLocal: params.dateModifiedLocal,
         dateModifiedTimeZoneId: params.dateModifiedTimeZoneId,
         dateModifiedUtc: params.dateModifiedUtc,
         dateModifiedTimeZoneVersion: params.dateModifiedTimeZoneVersion,
      })
      return API.fetch('environments', { method: 'POST', body: payload })
   }

   static deleteEnvironment(id, params) {
      const query = API.cleanPayload({
         version: params.version,
      })
      return API.fetch(`environments/${id}?${queryString.stringify(query)}`)
   }
}
