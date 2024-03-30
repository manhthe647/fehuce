export const _url = {
    server: "https://localhost:7051/",
    apiExams: "Exams/",
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