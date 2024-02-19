import './src/js/mobile-menu';
import axios from 'axios';


const listOfResourses = document.querySelector(".resourses-list");



function createArticleHTML(data) {
    const articleElement = document.createElement('li');
    articleElement.id = data.id;
    articleElement.className = data.class;

    const titleElement = document.createElement('h3');
    titleElement.className = data.content[0].class; 
    titleElement.textContent = data.title;

    articleElement.appendChild(titleElement);


    for (let i = 1; i < data.content.length; i++) {
      const contentItem = data.content[i];
      const contentElement = document.createElement('p');
      contentElement.className = contentItem.class;
      contentElement.textContent = contentItem.text;

      articleElement.appendChild(contentElement);
    }


    const linkElement = document.createElement('a');
    linkElement.href = "https://argo-advisory.com/insihts-and-resourses.html"; 
    const imgElement = document.createElement('img');
    imgElement.className = 'service-arrow resourses-service-arrow back-btn';
    imgElement.alt = 'arrow';
    const cloudinaryImageUrl ="https://res.cloudinary.com/drkjdderc/image/upload/v1708352619/back-arrow_t18pdn.png"
    imgElement.src = cloudinaryImageUrl;

    linkElement.appendChild(imgElement);

    articleElement.appendChild(linkElement);

    return articleElement;
  }

  
  fetchArticles();

  fetchData();

async function fetchData() {
    try {
      const response = await axios.get('/articles.json');
      let articles = response.data;
      processArticles(articles);
    } catch (error) {
      console.error('Error fetching data:', error);
    }};



    async function fetchArticles() {
      try {
        const response = await axios.get('/articlesHead.json');
        let dataHead = response.data;
        processArticlesData(dataHead);
      } catch (error) {
        console.error('Error fetching data:', error);
      }};



function processArticles(data) {

  const readMoreBoxes = document.querySelectorAll('.resourses-readMore-box');

  readMoreBoxes.forEach(box => {
    box.addEventListener('click', function () {
      const articleId = this.closest('.resoursed-card').dataset.articleId;
      console.log(articleId);

      const article = data.articles.find(article => article.id === `article-${articleId}`);

      if (article) {
        document.querySelector('.resourses-list').classList.add('visually-hidden');
        document.querySelector('.resourses-list-head').classList.add('visually-hidden');
      
        const articlesList = document.querySelector('.articles-list');
        const newArticle = createArticleHTML(article);
        articlesList.appendChild(newArticle);
      
        newArticle.classList.add('animate__animated', 'animate__fadeIn', 'animate__medium');
        newArticle.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get('article');
  const article = data.articles.find(article => article.id === `article-${articleId}`);

  if (article) {
    document.querySelector('.resourses-list').classList.add('visually-hidden');
    document.querySelector('.resourses-list-head').classList.add('visually-hidden');
    const articlesList = document.querySelector('.articles-list');
    const newArticle = createArticleHTML(article);
    articlesList.appendChild(newArticle);
    newArticle.classList.add('animate__animated', 'animate__fadeIn', 'animate__medium');
    newArticle.scrollIntoView({ behavior: 'smooth' });
  }
};


function processArticlesData(data) {
  data.forEach((resource) => {
  listOfResourses.insertAdjacentHTML('beforeend', `
    <li class="resoursed-card insihts-and-resourses-card" data-article-id="${resource['articleId']}">
      <div class="resourses-img-block"></div>
      <div class="resourses-txt-block">
        <h3 class="resourses-txt-block-head">${resource['resourses-head']}</h3>
        <p class="resourses-txt-block-txt">${resource['resourses-txt']}</p>
        <div class="readMore-box resourses-readMore-box">
          <div class="readMore resourses-readMore">Read more</div>
          <svg class="resourses-service-arrow service-arrow" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
  <use href="#icon-arrow-right"></use>
  <symbol id="icon-arrow-right" viewBox="0 0 28 32">
    <path d="M24.401 17.015l-7.826 8.609c-0.245 0.27-0.577 0.421-0.924 0.421s-0.679-0.151-0.924-0.421c-0.245-0.27-0.383-0.635-0.383-1.016s0.138-0.747 0.383-1.016l5.599-6.156h-15.978c-0.346 0-0.678-0.151-0.922-0.42s-0.382-0.634-0.382-1.015c0-0.381 0.137-0.745 0.382-1.015s0.576-0.42 0.922-0.42h15.978l-5.597-6.16c-0.245-0.27-0.383-0.635-0.383-1.016s0.138-0.747 0.383-1.016c0.245-0.27 0.577-0.421 0.924-0.421s0.679 0.151 0.924 0.421l7.826 8.609c0.122 0.133 0.218 0.292 0.284 0.467s0.099 0.362 0.099 0.551c-0 0.189-0.034 0.376-0.1 0.551s-0.163 0.333-0.285 0.466z"></path>
  </symbol>
</svg>
        </div>
      </div>
    </li>`);

  const imgBlock = listOfResourses.lastElementChild.querySelector(".resourses-img-block");
  imgBlock.style.backgroundImage = `linear-gradient(254deg, rgba(232, 197, 164, 0.40) 7.31%, rgba(14, 119, 128, 0.40) 88.36%), url(${resource['image']})`;
});
};
