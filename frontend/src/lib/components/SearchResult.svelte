<script lang="ts">
  import type { SearchWithSeed } from '../skill_tree';
  import { skillTree, translateStat, openTradeOne } from '../skill_tree';

  export let highlight: (newSeed: number, passives: number[]) => void;
  export let set: SearchWithSeed;
  export let jewel: number;
  export let conqueror: string;
</script>

<div
  class="my-2 border-white/50 border p-2 flex flex-col cursor-pointer"
  on:click={() =>
    highlight(
      set.seed,
      set.skills.map((s) => s.passive)
    )}>
  <div class="flex flex-row justify-between">
    <!-- Padding -->
    <div class="font-bold text-orange-500 text-center">
      Seed {set.seed} (weight {set.weight})
    </div>
    <div>
        <button class="px-3 bg-blue-500/40 rounded mr-2" on:click={() => openTradeOne(jewel, conqueror, [set],)}>Trade</button>
        <button class="px-3 bg-blue-500/40 rounded mr-2" on:click={() => openTradeOne(jewel, conqueror, [set], "cn")}>Trade-CN</button>
    </div>

  </div>
  {#each set.skills as skill}
    <div class="mt-2">
      <span>
        {skillTree.nodes[skill.passive].name} ({skill.passive})
      </span>
      <ul class="list-disc pl-6 font-bold">
        {#each Object.keys(skill.stats) as stat}
          <li>{translateStat(stat, skill.stats[stat])}</li>
        {/each}
      </ul>
    </div>
  {/each}
</div>
