
const RotationEncryptor = {
    message: "",
    rotation: 0,
  
    encrypt: function () {
      // this.message의 각 문자 character code에 rotation 값을 더해 새로운 문자열을 만들어 반환합니다.
      // ex) message - "abcde", rotation - 1 => "bcdef"
      let codes = [];
      for (let i=0;i<(this.message.length);i++){
          codes.push(String.fromCharCode(this.message.charCodeAt(i)+this.rotation))
      }
      return codes.join("")
    },
  
    setMessage: function (message) {
      // this.message를 세팅합니다.
      this.message = message;
    },
  
    setRotation: function (rotation) {
      // this.rotation을 세팅합니다.
      this.rotation = rotation;
    },
  };
  
  
  export default RotationEncryptor;
  