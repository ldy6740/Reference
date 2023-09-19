const jsonString = `
    {
        "name": "lim dong young",
        "age": 30,
        "bloodType": "AB"
    }
`;


try {
    const myJson = JSON.parse(jsonString);
    console.log(myJson);
} catch(e) {
    console.log('다시한번 시도해주세요');
}

