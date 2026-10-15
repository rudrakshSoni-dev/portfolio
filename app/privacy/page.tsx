import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — job-leads",
  description: "Privacy policy for job-leads, a personal job-search automation.",
};

const LAST_UPDATED = "October 15, 2026";
const CONTACT_EMAIL = "mrrssoni12@gmail.com";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 pt-16 pb-32">
      <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>

      <section className="mt-10 space-y-4 leading-7">
        <p>
          job-leads is a personal automation built and used only by Rudraksh Soni (&ldquo;the
          owner&rdquo;). It is not a public service, and no one other than the owner can sign in
          to or use it.
        </p>

        <h2 className="pt-4 text-xl font-semibold">What the app accesses</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Gmail:</strong> read-only access to job-alert emails in the owner&rsquo;s own
            mailbox, filtered by a single label, to extract job listings.
          </li>
          <li>
            <strong>Google Sheets and Drive:</strong> read and write access to one spreadsheet
            owned by the owner, used to store job listings and application status.
          </li>
        </ul>

        <h2 className="pt-4 text-xl font-semibold">How data is used</h2>
        <p>
          Data is used only to find, rank and track job opportunities for the owner. Job
          descriptions may be sent to the Google Gemini API to score how well each role fits the
          owner&rsquo;s resume. No email content beyond job-alert messages is processed.
        </p>

        <h2 className="pt-4 text-xl font-semibold">What the app does not do</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>It does not collect data from anyone other than the owner.</li>
          <li>It does not sell, rent or share data with third parties.</li>
          <li>It does not use data for advertising.</li>
          <li>It does not send emails on the owner&rsquo;s behalf.</li>
        </ul>

        <h2 className="pt-4 text-xl font-semibold">Storage and retention</h2>
        <p>
          The app runs on the owner&rsquo;s own computer. Extracted job listings are stored in the
          owner&rsquo;s Google Sheet and kept until the owner deletes them. Access can be revoked
          at any time from the owner&rsquo;s Google Account permissions page.
        </p>

        <h2 className="pt-4 text-xl font-semibold">Google API Services</h2>
        <p>
          The app&rsquo;s use and transfer of information received from Google APIs adheres to the{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            className="underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements.
        </p>

        <h2 className="pt-4 text-xl font-semibold">Contact</h2>
        <p>
          Questions about this policy:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4">
            {CONTACT_EMAIL}
          </a>
        </p>
      </section>
    </main>
  );
}
