const Clock = {
    getCurrentTime: function (date) {
      // 현재 시간 문자열을 만들어 리턴하세요.
      // date가 Date 객체의 인스턴스가 아니라면 에러 메시지를 리턴하세요.
      if(date instanceof Date){
          let y = date.getFullYear();
          let m = date.getMonth() + 1;
          let d = date.getDate();
          let h = date.getHours();
          let mn = date.getMinutes();
          let s = date.getSeconds();
          return String(`현재 시간은 ${y}년 ${m}월 ${d}일 ${h}시 ${mn}분 ${s}초 입니다.`)
      }
      else{
          return "현재 시간을 구할 수 없습니다."
      }
    },
  };
  
  export default Clock;
  