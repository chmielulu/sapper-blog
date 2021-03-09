<script lang="ts">
  import Author from '../atoms/Author.svelte';
  import Divider from '../atoms/Divider.svelte';
  import { countWords } from '../../utils/countWords';
  import FastAverageColor from 'fast-average-color';
  import { onMount } from 'svelte';
  import cssVars from 'svelte-css-vars';

  export let big: boolean;
  export let secondary: boolean;
  export let tertiary: boolean;
  export let featuredImg: string;
  export let title: string;
  export let tag: string;
  export let text: string;
  export let author: string;
  export let authorImg: string;
  export let date: number;

  let smallerText: string;
  smallerText = text.substr(0, 156);

  const regex = new RegExp(/[^a-zA-Z0-9]/);

  if (regex.test(smallerText.charAt(smallerText.length - 1))) {
    smallerText = smallerText.substr(0, smallerText.length - 1);
  }

  smallerText += '...';

  let img;
  let color;

  $: styleVars = {
    color: color,
  };

  onMount(() => {
    if (!tertiary) {
      const fac = new FastAverageColor();
      color = fac
        .getColor(img)
        .rgba.replace(
          /rgba?(\(([\d\s]+,?){3})(,[\d\s.]+)?(?=\))/,
          'rgba$1,0.4'
        );
    }
  });
</script>

<article
  class="article"
  class:tertiary
  class:secondary
  class:big
  use:cssVars={styleVars}>
  <img
    src={featuredImg}
    alt={title}
    class="article-featured-photo"
    class:tertiary
    bind:this={img} />
  <div class="article-info-wrapper">
    <header class="article-header">
      {#if !secondary}
        <a href={tag.toLocaleLowerCase()} class="article-tag">{tag}</a>
      {/if}
      <h2 class="article-title">{title}</h2>
    </header>

    {#if tertiary}
      <Divider class="article-divider" />
      <p class="article-text">{smallerText}</p>
    {/if}

    <footer class="article-author">
      <Author
        name={author}
        profileImg={authorImg}
        {date}
        secondary={tertiary}
        tertiary={secondary}
        articleWordCount={countWords(text)} />
    </footer>
  </div>
</article>

<style lang="scss">
  .article {
    display: flex;
    flex-direction: column;
    background: var(--color);
    width: 340px;
    overflow: hidden;
    border-radius: 35px;
    position: relative;

    &.big {
      width: 530px;
    }

    &.secondary {
      width: 390px;
      padding: 15px;
      border-radius: 25px;
      flex-direction: row;
    }

    &.tertiary {
      width: unset;
      max-width: 1110px;
      flex-direction: row;
      border-radius: 0;
      background: transparent;
    }

    &.secondary &-featured-photo {
      width: 115px;
      height: 115px;
      border-radius: 15px;
      margin-right: 20px;
    }

    &.tertiary &-featured-photo {
      width: 550px;
      height: 550px;
      border-radius: 40px;
      margin-right: 50px;
    }

    &-featured-photo {
      object-fit: cover;
      width: 100%;
      height: 340px;
    }

    &.secondary &-info-wrapper {
      height: 115px;
      padding: 4px 0 0;
    }

    &.tertiary &-info-wrapper {
      height: unset;
      padding: 0 0 20px 0;
      justify-content: flex-end;
    }

    &-info-wrapper {
      display: flex;
      flex-direction: column;
      height: 240px;
      padding: 30px 25px 25px;
    }

    &.tertiary &-tag {
      background: var(--color-wash-light);
      position: static;
    }

    &-tag {
      position: absolute;
      height: 30px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-family-secondary);
      font-size: var(--font-size-xxxs);
      color: var(--color-two);
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(4px);
      text-decoration: none;
      border-radius: 15px;
      padding: 0 20px;
      letter-spacing: 0.13em;
      text-transform: uppercase;
      left: 25px;
      top: 25px;
    }

    &.secondary &-title {
      font-size: var(--font-size-m);
      margin: 0;
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 2;
      max-width: 90%;
      -webkit-box-orient: vertical;
    }

    &.tertiary &-title {
      font-size: var(--font-size-xxl);
      margin: 30px 0;
    }

    &-title {
      font-size: var(--font-size-l);
      font-weight: 900;
      line-height: 1.15;
      color: var(--color-two);
      margin: 0;
      cursor: pointer;
    }

    &-text {
      font-size: var(--font-size-r);
      font-weight: 600;
      line-height: 1.4;
      margin-top: 15px;
      margin-bottom: 0;
    }

    &.tertiary &-author {
      margin-top: 35px;
    }

    &-author {
      margin-top: auto;
    }
  }
</style>
