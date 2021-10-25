<template>
  <div class="github-api">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z"
        />
      </svg>
      <a
        class="link-api"
        href="https://github.com/ratacheski/desafio-zitrus-api"
        target="_blank"
        >Código Api</a
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.github-api {
  display: flex;
  justify-content: center;
  width: 50%;
  float: left;

  div {
    display: flex;
    flex-direction: column;
    text-align: center;

    svg {
      width: 300px;
      height: 300px;
    }

    .link-api {
      font: 500 20px/32px Roboto, 'Helvetica Neue', sans-serif;
      letter-spacing: normal;
      margin-top: 10px;
      font-size: 2rem;
      text-decoration: none;
    }

    .link-api {
      color: #97D700;
    }
  }
}

.github-api {
  fill: #97D700;
}

@media (max-width: 900px) {
  .github-api {
    margin-top: 30px;
    width: 100%;
    float: left;

    div {
      svg {
        width: 200px;
        height: 200px;
      }
    }
  }
}
</style>
