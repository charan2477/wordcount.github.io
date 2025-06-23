let textAreaEle=document.getElementById('text-content');
let wordcountEle=document.getElementById('word-count');
let charCountEle=document.getElementById('char-count');
let content=''

textAreaEle.addEventListener(
    'input',()=>{
        content=textAreaEle.value;
        charCountEle.innerHTML=content.length;
        let text=content.trim()
        let words=text.split(/\s/)
        wordcountEle.innerHTML=words.length;

    }
)
