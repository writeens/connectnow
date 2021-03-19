/* eslint-disable camelcase */
import axios from 'axios';

export type FetchDataResponse = {
    first_release_date:number;
    id:number;
    name:string,
    rating:number,
    summary:string
}

/// FETCH DATA FROM BACKEND API
const fetchData = async ()
:Promise<{status:string, message:string, data?:FetchDataResponse[]}> => {
  try {
    const response = await axios.get(' https://public.connectnow.org.uk/applicant-test/');

    return { status: 'OK', message: 'success', data: response.data };
  } catch (e) {
    console.log(e);
    if (e.response) {
      return { status: 'ERROR', message: e.response.data.message };
    }
    return { status: 'ERROR', message: 'an_error_occured' };
  }
};

export default fetchData;
