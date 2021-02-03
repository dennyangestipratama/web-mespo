import axios from 'axios'
import { UUID, BASE_URL } from '@Services'

const GetEnvironmentController = async () => {
   const config = {
      headers: {
         'Content-Type': 'application/json',
         'Correlation-ID': UUID(),
      },
   }
   const result = await axios
      .get(`${BASE_URL}/configurations/environments`, config)
      .then(({ data }) => {
         return data.data
      })
      .catch((err) => err)
   return result
}

export default GetEnvironmentController