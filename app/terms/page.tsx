import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — job-leads",
  description: "Terms of service for job-leads, a personal job-search automation.",
};

const LAST_UPDATED = "October 15, 2026";
const CONTACT_EMAIL = "mrrssoni12@gmail.com";

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 pt-16 pb-32">
      <h1 className="text-3xl font-semibold tracking-tight">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>

      <section className="mt-10 space-y-4 leading-7">
        <h2 className="pt-4 text-xl font-semibold">1. About the app</h2>
        <p>
          job-leads is a personal automation built by Rudraksh Soni (&ldquo;the owner&rdquo;) to
          collect, rank and track job listings for the owner&rsquo;s own job search. It is not
          offered as a product or service to the public.
        </p>

        <h2 className="pt-4 text-xl font-semibold">2. Who may use it</h2>
        <p>
          Only the owner may sign in to or use the app. Any other access is not authorized.
        </p>

        <h2 className="pt-4 text-xl font-semibold">3. Third-party services</h2>
        <p>
          The app uses Google services (Gmail, Google Sheets, Google Drive and the Gemini API) and
          public job-board data. Use of those services is also governed by their own terms. Job
          listings belong to the companies and sites that publish them.
        </p>

        <h2 className="pt-4 text-xl font-semibold">4. No warranty</h2>
        <p>
          The app is provided &ldquo;as is&rdquo;, without warranties of any kind. Job data and
          AI-generated scores may be incomplete, outdated or wrong.
        </p>

        <h2 className="pt-4 text-xl font-semibold">5. Limitation of liability</h2>
        <p>
          To the extent permitted by law, the owner is not liable for any loss or damage arising
          from use of the app or reliance on its output.
        </p>

        <h2 className="pt-4 text-xl font-semibold">6. Privacy</h2>
        <p>
          How data is handled is described in the{" "}
          <a href="/privacy" className="underline underline-offset-4">
            Privacy Policy
          </a>
          .
        </p>

        <h2 className="pt-4 text-xl font-semibold">7. Changes</h2>
        <p>
          These terms may be updated at any time. The date at the top shows the latest version.
        </p>

        <h2 className="pt-4 text-xl font-semibold">8. Contact</h2>
        <p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4">
            {CONTACT_EMAIL}
          </a>
        </p>
      </section>
    </main>
  );
}
