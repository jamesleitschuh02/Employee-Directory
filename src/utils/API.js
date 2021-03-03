/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
    employeeSearch: function(query) {
        return axios.get(
            "https://randomuser.me/api/?results=" + query
        );
    }
};