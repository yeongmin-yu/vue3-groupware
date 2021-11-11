import axios, { AxiosResponse } from 'axios';

export default {
    methods: {
        async $api(url:any, method:any) : Promise<any>{

            return (await axios({
                method: method,
                url
            }).catch((e) => {
                console.log(e);
            }));
        }
    }
}
