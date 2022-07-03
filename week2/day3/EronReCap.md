More CSS
    다양한 선택자 종류
        /* 그룹 선택자 */
        #internet, #browser {}
        /* 특성 선택자 */
        input[type="button"] {}
        /* 자식 선택자 */
        div>p {}
        /* 가상 선택자 */
        div>p:hover { background-color: blueviolet;}
    CSS 적용 우선순위
        1) 나중 선언될수록
        2) 인라인>내부>외부
        3) 자세할수록(ID>class>tag)
    margin merge
        더 넓은 마진이 좁은 거 잡아먹어
        자식 마진이 부모 마진 영향 줘

Layout Basics
    display:
        - inline
        - block
        - none
        - inline-block
        - flex
        - grid
    float:
        left or right
        부모 영향 밖으로 갈 수도
        clear: both 하면 해제됨
    flex-direction:
        row
        column
        row-reverse
        column-reverse
        ^justify-content: 주축 방향 아이템 정렬
        ^align-items: 수직축 방향 아이템 정렬
    grid-template-columns: 1fr 1fr

