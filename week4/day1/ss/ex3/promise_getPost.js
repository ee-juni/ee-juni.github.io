//posts 변수를 수정하지 마세요.
const posts = [
    { title: "Post 1", body: "첫번째 게시글입니다." },
    { title: "Post 2", body: "두번째 게시글입니다." },
    { title: "Post 3", body: "세번째 게시글입니다." },
    { title: "Post 4", body: "네번째 게시글입니다." },
    { title: "Post 5", body: "다섯번째 게시글입니다." },
  ];
  
  //getPosts() 함수를 작성하세요.
  //setTimeout()를 사용해서 1초 후에 posts element를 rendering 합니다.
  //위에 정의된 posts 내의 게시글 제목과 내용을 forEach()을 사용해서 rendering 합니다.
  //rendering 된 게시글을 document.body.innerHTML을 사용해서 html에 띄어줍니다.
  const getPosts = ()=>{setTimeout(()=>{
      // posts element rendering
          posts.forEach(post =>{
              document.body.innerHTML += `<li>${post.title}<br> 내용: ${post.body} </li>`
          })
  },1000)}
  
  //createPost() 함수를 작성하세요.
  //Promise를 생성해서 resolve와 reject를 인자로 받습니다.
  //Promise 내에 setTimeout으로 비동기 처리하는데, createPost()함수에 인자로 받아온 post를 push할 때 에러없이 성공적으로 호출되면(if(!error)) `resolve`를 실행하고, 그렇지 않으면 에러를 받아들이는 `reject`를 2초 후에 실행합니다.
  
  
  
  const createPost = (post) => new Promise((resolve,reject)=>{
      // setTimeout으로 비동기 처리하는데, createPost()함수에 인자로 받아온 post를 push할 때 에러없이 성공적으로 호출되면(if(!error)) `resolve`를 실행하고, 그렇지 않으면 에러를 받아들이는 `reject`를 2초 후에 실행합니다.
      posts.push(post);
      const error = false;
      if(!error)return resolve();
      setTimeout(reject, 2000);
  })
  
  //createPost()를 이용해 데이터를 추가해보세요.
  //title은 "Post N", body는 "N번째 게시글입니다."로 설정하세요.
  
  createPost({
      title: 'Post N',
      body: 'n번째 게시물입니다'
  }).then(getPosts)
  