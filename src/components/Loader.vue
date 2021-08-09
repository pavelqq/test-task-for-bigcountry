<template>
  <div class="lds-dual-ring"></div>
</template>

<style>
  .lds-dual-ring {
    display: inline-block;
    width: 128px;
    height: 128px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 92px;
    height: 92px;
    margin: 50% auto;
    border-radius: 50%;
    border: 5px solid #cef;
    border-color: #e7e7e7 transparent #e7e7e7 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

</style>