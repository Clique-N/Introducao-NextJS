# Introducao-NextJS
Projeto do curso NextJS da EBAC

- Para utilizar só abrir o terminal e digitar:
  cd totravel
  npm run dev

- É recomendado utilizar Edge ou Chrome para que todos os recursos do CSS Module seja utilizado como os:

    .carousel::-webkit-scrollbar {
      display: none;
  }
  .carousel::scroll-button(right), .carousel::scroll-button(left)  {
      content: '>';
      border: none;
      background-color: #6b8f25;
      font-size: 2rem;
      color: white;
      height: 60px;
      width: 60px;
      border-radius: 30%;
      padding: 0;
      cursor: pointer;
      position: fixed;
      position-anchor: --carousel;
      position-area: right center;
      translate: -50%;
      z-index: 10;
      transition: transform 0.3s ease;
  }
  .carousel::scroll-button(left) {
      content: '<';
      position-area: left center;
      translate: 50%;
  }
  .carousel::scroll-button(right):disabled, .carousel::scroll-button(left):disabled  {
      opacity: 0.5;
      cursor: auto;
  } 
  .carousel::scroll-button(right):hover, .carousel::scroll-button(left):hover  {
      background-color: #9bcc38;
      transform: translatey(-2px);
  } 
