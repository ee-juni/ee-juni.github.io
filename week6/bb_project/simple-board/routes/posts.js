const { Router } = require("express")
const { Post } = require("../models")
const router = Router()

router.get('/', async (req,res,next)=>{
    // Post 생성 요청
    if (req.query.write){
        // posts/edit view로 연결
        res.render('post/edit')
        return
    }
    // Post list view
    const posts = await Post.find({})
    // posts 인자 전달
    res.render('post/list', { posts })
})

// Post model 안에 새로운 data creation
router.post('/', async (req, res, next)=>{
    const { title, content } = req.body
    try {
        if (!title || !content){
            throw new Error("제목과 내용을 입력해 주세요")
        }
        const post = await Post.create({
            title, content
        })
        res.redirect(`/posts/${post.shortId}`)
    } catch(err){
        next(err)
    }
})

router.get('/:shortId', async (req,res,next)=>{
    const { shortId } = req.params
    const post = await Post.findOne({shortId})
    // NotFound error 처리
    if (!post){
        next(new Error("Post NotFound"))
        return
    }
    // 수정 모드 ㄱㄱ
    if (req.query.edit){
        res.render('post/edit', { post })
        return
    }
    // 상세 보기
    res.render('post/view',{post})
})

// 수정 요청 처리
router.post('/:shortId', async (req, res, next)=>{
    const { shortId } = req.params
    const { title, content } = req.body
    try{
        if (!title || !content){
            throw new Error("제목과 내용을 입력해 주세요")
        }
        const post = await Post.findOneAndUpdate({shortId},{title, content})
        if(!post){
            next(new Error("Post NotFound"))
            return
        }
        res.redirect(`/posts/${shortId}`)
    }catch(err){
        next(err)
    }
})

//삭제 요청 처리
router.delete('/:shortId', async (req,res,next)=>{
    const { shortId } = req.params
    try {
        await Post.deleteOne({shortId})
        res.send('OK')
    } catch(err){
        next(err)
    }
})

module.exports = router