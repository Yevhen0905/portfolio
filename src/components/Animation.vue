<template>
  <div class="animation">
    <css-doodle class="animation_dnk">
      :doodle { @grid: 45x1 / 40vmin; position: relative; z-index: 1; }
      :container { transform: translate(50%, 33vmin) } :after, :before {
      content: ''; @place-cell: center; @size: 100%; background:
      radial-gradient( @p(#FFFDE1, #FB3569) @r(70%), transparent 0 ) @pn(30%
      50%, 70% 50%, 50% 60%) / @r(.1vmin, 5vmin) @lr() no-repeat; } @place-cell:
      centerr; @size: 100%; will-change: transform; animation: r 4s linear
      infinite; animation-delay: calc(-4s / @size() * @i()); --translate:
      translateY(calc(-66vmin / @size() * @i())); @keyframes r { from {
      transform: var(--translate) rotate(0) } to { transform: var(--translate)
      rotateZ(-1turn) } }
    </css-doodle>

    <css-doodle>
      :doodle { @grid: 1x3 / 100vmax; position: absolute; top: 0; left: 0;
      z-index: 0; } @size: 100% 150%; position: absolute; background: @m(100, (
      linear-gradient(transparent, @p( #FFFDE1@repeat(2, @p([0-9a-f])),
      #FB3569@repeat(2, @p([0-9a-f])) )) @r(0%, 100%) @r(0%, 100%) / @r(1px)
      @r(23vmin) no-repeat )); will-change: transform; animation: f 20s linear
      calc(-20s / @size() * @i()) infinite; @keyframes f { from { transform:
      translateY(-100%) } to { transform: translateY(100%) } }
    </css-doodle>
  </div>
</template>

<script setup>
  import 'css-doodle';
</script>

<style lang="scss">
  .animation {
    position: absolute;
    top: 50%;
    left: 2%;
    transform: translateY(-50%);
    z-index: 0;
  }

  css-doodle {
    contain: style;
  }

  .animation_dnk {
    @media only screen and (max-width: 600px) {
      transform: scale(1.2);
    }

    @media only screen and (max-width: 550px) {
      transform: scale(1.4);
    }

    @media only screen and (max-width: 450px) {
      transform: scale(1.6);
    }
  }
</style>
