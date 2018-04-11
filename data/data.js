/**数据分离 */
var jobList = [{
  title: "1",
  price: "100",
  addr: "101路",
  time: "星期一",
  jobId: 1
}, {
  title: "2",
  price: "200",
  addr: "102路",
  time: "星期二",
  jobId: 2
}, {
  title: "3",
  price: "300",
  addr: "103路",
  time: "星期三",
  jobId: 3
}, {
  title: "4",
  price: "300",
  addr: "103路",
  time: "星期四",
  jobId: 4
}, {
  title: "5",
  price: "300",
  addr: "103路",
  time: "星期二",
  jobId: 5
}, {
  title: "6",
  price: "300",
  addr: "103路",
  time: "星期六",
  jobId: 6
}, {
  title: "7",
  price: "390",
  addr: "193路",
  time: "星期六",
  jobId: 7
}]
/**向外暴露模块接口 */
module.exports = {
  jobList: jobList
}