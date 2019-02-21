//-------------------------------------------------------------
//事件就是需要 eventEmitter.on 去绑定一个事件 通过 eventEmitter.emit 去触发这个事件其次说的是 事件的 接收 和 发生 是分开的 就像 一个外卖店你可以不停的接受很多订单, 接受以后开始告诉厨师去做外卖, 做好的外卖对应的外送给每个用户，如果单线程的话那只能是接收一个订单, 做好以后在接收下一个外卖订单，明显效率非常低。事件可以不停的接受不停的发生也是为了提高效率。
//-------------------------------------------------------------
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function connected() {
   console.log('连接成功。');
  
   // 触发 data_received 事件 
   eventEmitter.emit('data_received');
}

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);
 
// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
   console.log('数据接收成功。');
});

// 触发 connection 事件 
eventEmitter.emit('connection');

console.log("程序执行完毕。");

//-------------------------------------------------------------
//例子 2 先输出，例子 1 后输出，可以验证是异步的，因为例子 1 需要进行 IO 耗时较长，但是例子 2 是直接输出信息，耗时较短，在两者几乎同时执行的情况下，例子 2 优先执行完
//-------------------------------------------------------------

var fs = require("fs");
fs.readFile('input.txt',
function(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
    console.log("end");
    console.log("***********************");
});
//例子2
//var events = require("events");
var eventEmitter = new events.EventEmitter();
var connectHandler = function connected() {
    console.log("connnect successfully !");
    eventEmitter.emit("after_connect");
}
eventEmitter.on("connected", connectHandler);
eventEmitter.on('after_connect',
function() {
    console.log("after connect");
});
eventEmitter.emit("connected");
console.log("event emitter end");


//-------------------------------------------------------------
//以下实例通过 connection（连接）事件演示了 EventEmitter 类的应用
//-------------------------------------------------------------


var eventEmitter = new events.EventEmitter();

// 监听器 #1
var listener1 = function listener1() {
   console.log('监听器 listener1 执行。');
}

// 监听器 #2
var listener2 = function listener2() {
  console.log('监听器 listener2 执行。');
}

// 绑定 connection 事件，处理函数为 listener1 
eventEmitter.addListener('connection', listener1);

// 绑定 connection 事件，处理函数为 listener2
eventEmitter.on('connection', listener2);

var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " 个监听器监听连接事件。");

// 处理 connection 事件 
eventEmitter.emit('connection');

// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受监听。");

// 触发连接事件
eventEmitter.emit('connection');

eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " 个监听器监听连接事件。");

console.log("程序执行完毕。");