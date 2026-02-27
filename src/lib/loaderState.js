// This variable lives at the module level — it persists across
// client-side navigations but resets on full page refresh.
export let hasLoadedOnce = false;

export function markAsLoaded() {
  hasLoadedOnce = true;
}