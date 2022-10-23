const quotes = [
    {
        quote: '삶이 있는 한 희망은 있다',
        author: '키케로',
    },
    {
        quote: '진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해',
        author: '찰리 채플린',
    },
    {
        quote: '직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다',
        author: '엘버트 허버드',
    },
    {
        quote: '행복의 문이 하나 닫히면 다른 문이 열린다 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다',
        author: '헬렌켈러',
    },
    {
        quote: '단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?',
        author: '이드리스 샤흐',
    },
    {
        quote: '절대 어제를 후회하지 마라. 인생은 오늘의 내 안에 있고 내일은 스스로 만드는것이다.',
        author: 'L론허바드',
    },
    {
        quote: '성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.',
        author: '톰 모나건',
    },
    {
        quote: '행복한 삶을 살기위해 필요한 것은 거의 없다.',
        author: '마르쿠스 아우렐리우스 안토니우스',
    },
    {
        quote: '평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라.',
        author: '제임스 딘',
    },
    {
        quote: '고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.',
        author: '괴테',
    },
];

const quoteText = document.querySelector('.quotes_text');
const quoteAuthor = document.querySelector('.quotes_author');
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];


quoteText.innerText = todayQuote.quote;
quoteAuthor.innerText = todayQuote.author;