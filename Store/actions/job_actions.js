import axios from "axios";
import { FETCH_JOBS } from "./types";
import reverseGeocode from "latlng-to-zip";
import qs from "qs";

const ROOT_JOB_URL = `http://api.indeed.com/ads/apisearch?`;

const JOB_QUERY_PARAMS = {
  publisherId: "4201738803816157",
  form: "json",
  v: "2",
  latlong: 1,
  radius: 20,
  q: "javascript"
};

// Takes the zip code and make a query string with all the object parameters
const buildJobsUrl = zip => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
  return `${ROOT_JOB_URL}${query}`;
};

export const fetchJobs = region => async dispatch => {
  try {


    // Getting the zip code from latlng
    let zip = await reverseGeocode(region);

    // Passing the zip to get a query string for jobs search api
    const url = buildJobsUrl(zip);

    // Desctructring the data object from axios
    let {data} = await axios.get(url);

    dispatch({type: FETCH_JOBS, data})
    console.log(data)


  } catch (e) {

console.log(e)  
}
};
