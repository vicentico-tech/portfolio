"use client";

import dynamic from "next/dynamic";

const DigitalTwin = dynamic(
  () => import("@/components/DigitalTwin").then((m) => m.DigitalTwin),
  { ssr: false }
);

export function DigitalTwinLoader() {
  return <DigitalTwin />;
}
