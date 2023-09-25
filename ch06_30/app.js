let myname = 'kim';

function foo() {
  let x = 10;

  bar(); //호출 가능(호이스팅에 의해 함수 호출 가능)
  // zoo(); // 호출 불가능 (호이스팅은 함수문은 가능, 함수 식에서는 불가능)


  function bar() { // 함수 문
    let y = 10;

    console.log("function bar에서 x를 호출하면" +  x);
    console.log("function bar에서 myname 호출하면" + myname);
  }

  const zoo = function() { // 함수 식
    let e = 10000;
    console.log(e);
  }

  // console.log("function foo 안에서 y를 호출하면 " + y);

  if(x === 10) {
    let x = 100;

    console.log("if 속 x는 " + x);
  }
}

foo();