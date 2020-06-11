import axios from 'axios';


const KEY = 'AIzaSyAjgAB7uewafsmRFjw95hPsuIG-Isbgbu4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet', 
    type: 'video',
    maxResults: 5,
    key: KEY
}
})

 


