<script lang="ts">
    import { Popover } from "$lib";
    import X from '~icons/lucide/x';
    import SlidersHorizontal from "~icons/lucide/sliders-horizontal";


</script>

<Popover.Root>
    <Popover.Trigger>
      <button
        class="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-vermilion-950 bg-white shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black cursor-default outline-none"
        aria-label="Update dimensions"
      >
        <SlidersHorizontal/>
      </button>
    </Popover.Trigger>
    <Popover.Portal>
        
      <Popover.Content
        class="rounded p-5 w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
        sideOffset={5}
      >
        <div class="flex flex-col gap-2.5">
          <p class="text-gray-900 text-[15px] leading-[19px] font-medium mb-2.5">Dimensions</p>
          <fieldset class="flex gap-5 items-center">
            <label class="text-[13px] text-vermilion-800 w-[75px]" for="width">
              Width
            </label>
            <input
              class="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-vermilion-800 shadow-[0_0_0_1px] shadow-violet7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
              id="width"
              placeholder="100%"
            />
          </fieldset>
          <fieldset class="flex gap-5 items-center">
            <label class="text-[13px] text-vermilion-800 w-[75px]" for="maxWidth">
              Max. width
            </label>
            <input
              class="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-vermilion-800 shadow-[0_0_0_1px] shadow-violet7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
              id="maxWidth"
              placeholder="300px"
            />
          </fieldset>
          <fieldset class="flex gap-5 items-center">
            <label class="text-[13px] text-vermilion-800 w-[75px]" for="height">
              Height
            </label>
            <input
              class="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-vermilion-800 shadow-[0_0_0_1px] shadow-violet7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
              id="height"
              placeholder="25px"
            />
          </fieldset>
          <fieldset class="flex gap-5 items-center">
            <label class="text-[13px] text-vermilion-800 w-[75px]" for="maxHeight">
              Max. height
            </label>
            <input
              class="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-vermilion-800 shadow-[0_0_0_1px] shadow-violet7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
              id="maxHeight"
              placeholder="none"
            />
          </fieldset>
        </div>
        <!--
        <Popover.Close
          class="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-vermilion-800 absolute top-[5px] right-[5px] hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 outline-none cursor-default"
          aria-label="Close"
        >
          <X />
        </Popover.Close>
        <Popover.Arrow class="fill-white" />
        -->
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>