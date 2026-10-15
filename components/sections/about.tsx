import { Briefcase, GitPullRequest, GraduationCap } from "lucide-react";
import { Section } from "@/components/section";
import { sectionCommands } from "@/lib/data/terminal";
import { profile, type Credential } from "@/lib/data/profile";

const credentialIcons: Record<Credential["icon"], typeof Briefcase> = {
  briefcase: Briefcase,
  "git-pull-request": GitPullRequest,
  "graduation-cap": GraduationCap,
};

export function About() {
  const { intro, credentials, blog } = profile.about;

  return (
    <Section
      id="about"
      label="about"
      command={sectionCommands.about}
      title="About"
    >
      <div className="flex flex-col gap-4 text-base leading-7 text-muted-foreground md:text-[17px]">
        <p>
          {intro.map((part) =>
            part.bold ? (
              <span key={part.text} className="font-semibold text-foreground">
                {part.text}
              </span>
            ) : (
              part.text
            ),
          )}
        </p>
        <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-x-3 lg:text-[15px]">
          {credentials.map((credential, index) => {
            const Icon = credentialIcons[credential.icon];
            return (
              <li key={credential.org} className="flex items-center gap-2">
                {index > 0 && (
                  <span aria-hidden="true" className="mr-1 hidden lg:inline">
                    ·
                  </span>
                )}
                <Icon aria-hidden="true" className="size-4 text-foreground" />
                <span>
                  <span className="font-semibold text-foreground">
                    {credential.title}
                  </span>{" "}
                  at {credential.org}
                </span>
              </li>
            );
          })}
        </ul>
        {blog && (
          <p>
            I write about what I build on{" "}
            <a
              href={blog.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 transition-colors duration-150 hover:decoration-accent"
            >
              {blog.label}
            </a>
            .
          </p>
        )}
      </div>
    </Section>
  );
}
