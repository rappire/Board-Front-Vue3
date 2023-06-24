import api from "@/store/apiUtil";

const articleAPI = {
  /*
   * get : context 주소로, payload를 put 해서 보내는 함수
   */
  async get(context) {
    let returnObj;
    /* RestApi 호출 */
    await api
      .get(`${api.config.baseUrl}${context}`)
      .then((response) => {
        returnObj = response.data;
        console.log(`GET ${context} : ${response.data}`);
      })
      .catch((error) => {
        console.log(`GET ${context} : ${error}`);
        throw error;
      });
    console.log(returnObj);
    return returnObj;
  },
  /*
   * post : context 주소로, payload를 put 해서 보내는 함수
   */
  async post(context, payload, headers) {
    let returnObj;

    /* RestApi 호출 */
    await api
      .post(`${api.config.baseUrl}${context}`, payload, headers)
      .then((response) => {
        returnObj = response.data;
        console.log(`POST ${context} : ${response.data}`);
      })
      .catch((error) => {
        console.log(`POST ${context} : ${error}`);
        throw error;
      });
    return returnObj;
  },
  /*
   * put : context 주소로, payload를 put 해서 보내는 함수
   */
  async put(context, payload) {
    let returnObj;
    /* RestApi 호출 */
    await api
      .put(`${api.config.baseUrl}${context}`, payload)
      .then((response) => {
        returnObj = response.data;
        console.log(`PUT ${context} : ${response.data}`);
      })
      .catch((error) => {
        console.log(`PUT ${context} : ${error}`);
        throw error;
      });
    return returnObj;
  },
  /*
   * delete : context 주소로, payload를 put 해서 보내는 함수
   */
  async delete(context, payload) {
    let returnObj;
    /* RestApi 호출 */
    await api
      .delete(`${api.config.baseUrl}${context}`, payload)
      .then((response) => {
        returnObj = response.data;
        console.log(`DEL ${context} : ${response.data}`);
      })
      .catch((error) => {
        console.log(`DEL ${context} : ${error}`);
        throw error;
      });
    return returnObj;
  },
};

export default articleAPI;
