import ClientPhase10Page from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Sprunki Phase 10',
  description:
    'Experience Sprunki Phase 10, a horror-themed fan-made Incredibox mod featuring unique soundscapes and redesigned characters.',
};

export default function Page() {
  return <ClientPhase10Page />;
}