const UUID = () => {
   function _p8(s) {
      var p = (Math.random().toString(16) + '000000000').substr(2, 8)
      return s ? '-' + p.substr(0, 4) + '-' + p.substr(4, 4) : p
   }
   return _p8() + _p8(true) + _p8(true) + _p8()
}

const BASE_URL = '/configurations'

export default class API {
   static async fetch(uri, config) {
      const defaultConfig = {
         headers: {
            'Content-Type': 'application/json',
            'Correlation-ID': UUID(),
            Accept: 'application/json',
         },
      }

      const mergeConfig = { ...defaultConfig, ...config }
      let bodyConfig = {}
      if (mergeConfig.body && !(mergeConfig.body instanceof FormData)) {
         const form = new FormData()
         Object.entries(mergeConfig.body).map(([label, value]) => {
            console.log('label', label)
            console.log('value', Object.entries(value))
            if (Array.isArray(value)) {
               value.map((each, index) => {
                  if (typeof each === 'object') {
                     Object.keys(each).map((key) => {
                        form.append(`${label}[${index}][${key}]`, each[key])
                        return true
                     })
                  } else {
                     form.append(`${label}[]`, each)
                  }
                  return true
               })
            } else {
               form.append(label, value)
            }

            return true
         })
         bodyConfig = { body: form }
      }
      const cleanConfig = { ...mergeConfig, ...bodyConfig }
      const url = `${BASE_URL}/${uri}`
      return fetch(url, cleanConfig)
         .then((res) => {
            if (res.status !== 200) {
               if (this.component) {
                  let { errorAPI } = this.component.state
                  if (!errorAPI) {
                     errorAPI = new Map()
                  }
                  errorAPI.set(uri, res.statusText)
                  this.component.setState({ errorAPI: errorAPI })
               }
            }
            return res.json()
         })
         .catch((err) => {
            console.log('error', err)
         })
   }

   /**
    * Just to clean payload
    * @param {*} payload
    */
   static cleanPayload(payload) {
      Object.keys(payload).forEach((key) => payload[key] == null && delete payload[key])
      return payload
   }
}
