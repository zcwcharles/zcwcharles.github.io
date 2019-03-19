<style lang="scss">
.anime-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.block {
  width: 2rem;
  height: 2rem;
  background: black;
  position: absolute;
}
</style>

<script lang="tsx">
import { VNode, CreateElement } from 'vue';
import { Component, Vue, Prop } from 'vue-property-decorator';
const anime = require('animejs/lib/anime.js');

interface Coordinate {
  x: number;
  y: number;
}

@Component
export default class Background extends Vue {
  coordinates: Coordinate[] = [];

  created() {
    setInterval(() => {
      if (this.coordinates.length !== 0) {
        this.coordinates.splice(0);
      }
    }, 600);
  }

  render(h: CreateElement): VNode {
    const contNode: VNode[] = [];
    for (const el of this.coordinates) {
      contNode.push(this.getBlock(h, el.x, el.y));
    }
    return (
      <div
        class='anime-container'
        on-mousemove={(event: MouseEvent) => {
          this.onMouseMove(event);
        }}>
        {contNode}
      </div>
    ) as VNode;
  }

  updated() {
    this.setAnime();
  }

  getBlock(h: CreateElement, x: number, y: number): VNode {
    const computedStyle = {
      left: `${x}px`,
      top: `${y}px`,
    };
    return (<div class='block' style={computedStyle}></div>) as VNode;
  }

  onMouseMove(event: MouseEvent) {
    this.coordinates.push({
      x: event.clientX,
      y: event.clientY,
    });
  }

  private setAnime() {
    anime({
      targets: '.block',
      scale: [
        {value: .1, easing: 'easeOutSine', duration: 500},
      ],
    });
  }
}
</script>