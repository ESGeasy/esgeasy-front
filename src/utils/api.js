import axios from "axios";

const { REACT_APP_API_URL } = process.env;
const apiClient = axios.create(
  {
    baseURL: REACT_APP_API_URL || "http://localhost:5000",
    responseType: 'json'
  }
)

const getCurrentRanking = (sector, rankType) => {
    return apiClient.get(`/ranking/${sector}/${rankType}`);
}

const getFutureRanking = (sector, rankType) => {
    return apiClient.get(`/futureRanking/${sector}/${rankType}`);
}

const getCompany = (id) => {
    return apiClient.get(`/companies/${id}`);
}

export { getCurrentRanking, getFutureRanking, getCompany };
