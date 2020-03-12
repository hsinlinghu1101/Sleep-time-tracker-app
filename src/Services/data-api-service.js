import TokenService from './token-service'
import config from '../config'

const DataAPiService={
    getData(userId){
        return fetch(`${config.API_ENDPOINT}/data/${userId}`, {
            headers:{
                'authorization': `baerer ${TokenService.getAuthToken}`
            }
        })
        .then(res =>
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
    postData( data_created, bed_time, wakeup_time){
       // console.log(`bearer ${TokenService.getAuthToken()}`)
      
        return fetch(`${config.API_ENDPOINT}/data`, {
            method: 'POST',
            headers:{
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(
                data_created,
                bed_time,
                wakeup_time
            ),
        })
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()           
            )
           
            
    }
}

export default DataAPiService;