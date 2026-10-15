import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { GithubActivity } from "@/components/sections/github-activity";
import { Hero } from "@/components/sections/hero";
import { StackSection } from "@/components/sections/stack";
import { Terminal } from "@/components/terminal";
import { buildTerminalData } from "@/lib/terminal/data";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[760px] px-6 pt-24 pb-40 lg:px-0">
      <main id="main">
        <Hero />
        <About />
        <GithubActivity />
        <ExperienceSection />
        <StackSection />
        <Contact />
      </main>
      <footer
        aria-label="Interactive terminal"
        className="mt-12 border-t border-border pt-8"
      >
        <Terminal data={buildTerminalData()} />
      </footer>
    </div>
  );
}
