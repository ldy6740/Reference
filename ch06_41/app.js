// for 를 이용한 문자 변환 형식

function convertCamelName(name) {
  let camelName = '';

  for(let i=0, nameSpace = false; i < name.length; i++) {
    if(name[i] === ' ') {
      nameSpace = true;
      continue;
    }

    if(nameSpace) {
      camelName = camelName + name[i].toUpperCase();
      nameSpace = false;
    } else {
      camelName = camelName + name[i].toLowerCase();
    }

  }
  return camelName;
}

console.log(convertCamelName("lim dong young"));


// 배열 연산을 통한 방식

const simpleCamel = (text, splitter = ' ') => text.split(splitter)
                      .map((word, wi) => word.spit('') // [LIM, DONG, YOUNG] 하나씩 word에 넣어준다.
                        .map((c, ci) => wi > 0 && ci === 0 ? c.toUpperCase() : c.toLowerCase()) //[L, I, M] word 에 구분값없이 split 을 하면 한자씩 c에 들어간다.
                        .join(''))
                      .join('');


console.log(simpleCamel("LIM DONG YOUNG"));