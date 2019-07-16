// const ipc_share = require('electron').remote.getGlobal('sharedObject');

// const total_number = ipc_share.total_number;

const total_number = 12;

const gods = ['预言家','女巫','猎人','守卫'];

const devil = ['恶魔'];

let good_guys=4+Math.ceil((total_number-5)/2);

let bad_guys=1+parseInt((total_number-5)/2);

console.log(good_guys);
console.log(bad_guys);


for (let i=3; i<good_guys; i++){
    gods.unshift('村民');
}


for (let i=0; i<bad_guys; i++){
    devil.unshift('狼人');
}

console.log(gods);
console.log(devil);

let num_list=[];

for (let i=1; i<total_number+1; i++){
    num_list.push(i);
}

console.log(num_list);
console.log(num_list.sort(function() { return Math.random() - 0.5 }));

