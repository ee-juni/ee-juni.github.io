// 배달 음식 앱 사용자

let user={
    name: '주니',
    age: 24,
    email: "juni@juni.jun",
    address: '서울시 청와대',
    food: ['부찌','하와이안피자','숯불닭갈비'],
    payment: function(){
        console.log('결제가 완료 되었습니다.')
    },
    deliveryStart: function(){
        console.log('배달이 시작되었습니다.')
    },

}

user.payment()

