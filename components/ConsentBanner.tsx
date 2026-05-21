"use client";

import { useEffect, useState } from "react";
import GoogleAnalyticsClient from "./GoogleAnalyticsClient";

const CONSENT_STORAGE_KEY = "b2bseokit_cookie_consent";

type ConsentChoice = "accepted" | "rejected" | null;

export default function ConsentBanner() {
  const [consent, setConsent] = useState<ConsentChoice>(null);
  const [hasLoadedChoice, setHasLoadedChoice] = useState(false);

  useEffect(() => {
    try {
      const storedConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY);
      if (storedConsent === "accepted" || storedConsent === "rejected") {
        setConsent(storedConsent);
      }
    } finally {
      setHasLoadedChoice(true);
    }
  }, []);

  function saveConsent(choice: Exclude<ConsentChoice, null>) {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    } finally {
      setConsent(choice);
    }
  }

  return (
    <>
      {consent === "accepted" ? <GoogleAnalyticsClient /> : null}

      {hasLoadedChoice && consent === null ? (
        <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6">
          <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/70 sm:p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm leading-relaxed text-slate-700">
                  We use analytics cookies to understand how B2B SEO Kit is used and improve the
                  product. You can accept or reject analytics cookies.
                </p>
                <a
                  href="/privacy"
                  className="mt-2 inline-block text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
                >
                  Privacy Policy
                </a>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row md:flex-shrink-0">
                <button
                  type="button"
                  onClick={() => saveConsent("accepted")}
                  className="rounded-2xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  Accept analytics
                </button>
                <button
                  type="button"
                  onClick={() => saveConsent("rejected")}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
