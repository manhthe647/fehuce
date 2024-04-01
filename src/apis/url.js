export const _url = {
    server: "http://znamz981-001-site1.anytempurl.com/",
    apiUserExams: "UserExams/",
    apiUserPractice: "UserPractice/",
    apiUsers: "Users/"
};


//set timeout
const timeOutNumber =40;
export const timeout = (promise) => {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        reject(new Error("timeout"))
      }, timeOutNumber * 1000)
      promise.then(resolve, reject)
    })
  }