import { Heading } from '@/components';
import { ProjectCard } from '@/components/ProjectCard';

export function AboutMeTemplate() {
  return (
    <main className="w-full">
      <Heading title="Welcome" subtitle="27 june 2020" />
      <br />
      <Heading title="Callstack no Javascript" />

      <ProjectCard />
    </main>
  );
}
