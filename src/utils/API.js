//import the axios module
import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=200&nat=us";

// Export an object with a "search" method that searches the user API for the passed query
export default {
    //function call search on the object
  search: function(query) {
      //use axios with the get method
    return axios.get(BASEURL + query);
  }
};