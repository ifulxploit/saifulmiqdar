"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="items-center justify-center text-center">
      <h2 className="font-heading">Agak laen memang kutengok!</h2>
      <button onClick={() => reset()}>Cobalagi</button>
    </div>
  );
}
