import { CalendarClock } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { sectionCommands } from "@/lib/data/terminal";
import { profile } from "@/lib/data/profile";
import { bookingLink, linkedinLink } from "@/lib/data/links";

export function Contact() {
  return (
    <Section
      id="contact"
      label="contact"
      command={sectionCommands.contact}
      className="text-center"
    >
      <h2 id="contact-heading" className="sr-only">
        Contact
      </h2>
      <p className="text-base text-muted-foreground">{profile.contactLine}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Button asChild className="h-10 rounded-md px-4 text-sm">
          <a href={bookingLink.href} target="_blank" rel="noopener noreferrer">
            <CalendarClock aria-hidden="true" />
            {bookingLink.label}
          </a>
        </Button>
        <Button
          asChild
          variant="secondary"
          className="h-10 rounded-md border-border px-4 text-sm"
        >
          <a href={linkedinLink.href} target="_blank" rel="noopener noreferrer">
            <FaLinkedin aria-hidden="true" />
            {linkedinLink.label}
          </a>
        </Button>
      </div>
    </Section>
  );
}
