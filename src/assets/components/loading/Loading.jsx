import React from "react";

/**
 * Loading placeholder: one hairline bar, no spinner, no colour, no copy —
 * so it needs no translation key and cannot flash a raw key at the user.
 * Kept exported even though the redesign renders pages directly.
 */
export const Loading = () => (
  <div
    className="flex min-h-screen items-center justify-center bg-paper px-6"
    role="status"
  >
    <div className="h-px w-full max-w-xs bg-bone" aria-hidden="true" />
  </div>
);
