<script lang="ts">
  import Article from '../components/molecules/Article.svelte';
  import testImg from '../assets/images/successkid.jpg';
  import profilePhoto from '../assets/images/jakubchmielewski.png';
  import { dummyArticleText } from '../utils/dummyArticleText';

  let selected = 'secondary';
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<label>
  <input type="radio" name="type" value="primary" bind:group={selected} />
  Primary
</label>

<label>
  <input type="radio" name="type" value="primary (big)" bind:group={selected} />
  Primary (big)
</label>

<label>
  <input type="radio" name="type" value="secondary" bind:group={selected} />
  Secondary
</label>

<label>
  <input type="radio" name="type" value="tertiary" bind:group={selected} />
  Tertiary
</label>

<Article
  featuredImg={testImg}
  title="I work best when my space is filled with inspiration"
  author="Jakub Chmielewski"
  authorImg={profilePhoto}
  date={Date.now()}
  tag="Diary"
  text={dummyArticleText}
  secondary={selected === 'secondary'}
  tertiary={selected === 'tertiary'}
  big={selected === 'primary (big)'} />

<style lang="scss">
  label {
    display: block;

    &:last-of-type {
      margin-bottom: 30px;
    }
  }
</style>
