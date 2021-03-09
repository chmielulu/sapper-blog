<script lang="ts">
  import { formatDate } from '../../utils/formatDate';

  export let secondary;
  export let tertiary;
  export let profileImg: string;
  export let name: string;
  export let date: number;
  export let articleWordCount: number;

  const transformedDate = new Intl.DateTimeFormat('en-GB').format(date);
  const formattedDate = formatDate(date);
  const readTime = Math.round(articleWordCount / 200) || 1;
</script>

<div class="author">
  {#if !tertiary}
    <img src={profileImg} alt={name} class="author-img" class:big={secondary} />
  {/if}
  <div
    class="author-information-wrapper"
    class:big={secondary}
    class:no-margin={tertiary}>
    <span class="author-name">{name}</span>
    <div class="author-another-information">
      <time datetime={transformedDate}>{formattedDate}</time>
      {#if secondary}
        <span class="divider" />
        <span class="read-time">{readTime} minutes read</span>
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  .author {
    display: flex;
    align-items: center;

    &-img {
      width: 36px;
      height: 36px;
      object-fit: cover;
      border-radius: 50%;

      &.big {
        width: 45px;
        height: 45px;
      }
    }

    &-information-wrapper {
      margin-left: 15px;

      &.big {
        font-size: var(--font-size-s);
      }

      &.no-margin {
        margin-left: 0;
      }
    }

    &-name {
      display: block;
      font-weight: 700;
      color: var(--color-primary);
      line-height: 1.4;
    }

    &-another-information {
      display: flex;
      align-items: center;
      font-family: var(--font-family-secondary);
      color: var(--color-wash-regular);
    }
  }

  .divider {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #a9a9a9;
    margin: 0 8px;
    display: block;
  }
</style>
