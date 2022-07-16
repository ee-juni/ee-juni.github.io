const AlphabetCounter = {
    sentence: "",
    alphabetMap: {},
  
    setSentence: function (sentence) {
      this.sentence = sentence;
      return this;
    },
  
    buildAlphabetMap: function () {
      // this.sentence 로부터 알파벳 맵을 만들어
      // this.alphabetMap에 저장하세요.
      this.alphabetMap = this.sentence.trim().toLowerCase().split("")
                  .filter(c => c.match(/[a-z]/i))
                  .reduce((pv,cv)=>{ 
                      if (!pv[cv]) {pv[cv]=1}
                      else {pv[cv]+=1} return pv},{});
      
      return this;
    },
  
    buildResult: function () {
      // Object.entries()를 활용하여 [a: 1] [b: 2] 형태의 문자열을 만들어보세요.
      var resultString = [];
      for (const [key, value] of Object.entries(this.alphabetMap)){
          resultString.push(`[${key}: ${value}]`)
      }
      resultString = resultString.join(" ")
      return `결과는 : ${resultString} 입니다.`;
    },
  };
  
  export default AlphabetCounter;
  