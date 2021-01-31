import axios from 'axios'
const EnvironmentController = async () => {
   const config = {
      headers: {
         'Content-Type': 'multipart/form-data',
         'Correlation-ID': guid(),
      },
   }
   const result = await axios
      .get(`http://ec2-3-19-209-157.us-east-2.compute.amazonaws.com:8080/configurations/environments`, config)
      .then(({ data }) => {
         return data.data
      })
      .catch((err) => err)
   return result
}
const guid = () => {
   function _p8(s) {
      var p = (Math.random().toString(16) + '000000000').substr(2, 8)
      return s ? '-' + p.substr(0, 4) + '-' + p.substr(4, 4) : p
   }
   return _p8() + _p8(true) + _p8(true) + _p8()
}
export default EnvironmentController