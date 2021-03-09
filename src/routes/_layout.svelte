<script lang="ts">
  import Nav from '../components/Nav.svelte';

  export let segment: string;
</script>

<Nav {segment} />

<main>
  <slot />
</main>

<style>
  :global(:root) {
    --color-one: #02121a;
    --color-two: #2b394e;
    --color-three: #a9def9;
    --color-four: #616ff9;
    --color-five: #f2edc5;
    --color-wash-light: #efefef;
    --color-wash-regular: #6d6d6d;
    --color-wash-heavy: #454545;
    --color-background: #fff;
    --font-family-primary: 'Nunito', sans-serif;
    --font-family-secondary: 'Lato', sans-serif;
    --font-size-xxxs: 1.2rem;
    --font-size-xxs: 1.4rem;
    --font-size-xs: 1.6rem;
    --font-size-s: 1.8rem;
    --font-size-r: 2rem;
    --font-size-m: 2.4rem;
    --font-size-l: 2.8rem;
    --font-size-xl: 4.5rem;
    --font-size-xxl: 5.8rem;
    --font-size-logo: 3.4rem;
  }

  main {
    position: relative;
    max-width: 1400px;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
