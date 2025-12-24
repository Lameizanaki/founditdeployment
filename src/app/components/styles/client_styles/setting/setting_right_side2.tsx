import * as React from "react";

/* ================= TYPES ================= */

type ToggleVariant = "boxed" | "plain";

type ToggleProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  variant?: ToggleVariant;
};

type PreferenceCardProps = {
  title: string;
  description: string;
  enabled: boolean;
  onToggle: (checked: boolean) => void;
};

type HiringPrefsState = {
  hourlyContracts: boolean;
  fixedPriceContracts: boolean;
  ndaRequired: boolean;
  ipTransfer: boolean;
  screeningQuestions: string;
  countryTimezone: "" | "same-country" | "same-timezone";
};

/* ================= MAIN ================= */

export default function HiringPreferences(): React.ReactElement {
  const [prefs, setPrefs] = React.useState<HiringPrefsState>({
    hourlyContracts: false,
    fixedPriceContracts: false,
    ndaRequired: false,
    ipTransfer: false,
    screeningQuestions: "",
    countryTimezone: "",
  });

  return (
    <div className="flex-1 w-full h-screen overflow-y-auto ml-3 mr-3 pr-6 pl-6 rounded-xl border border-gray-200 bg-white p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-x-3">
          <svg
            className="h-8 w-8 -mt-1"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 21V7C8 6.07003 8 5.60504 8.10222 5.22354C8.37962 4.18827 9.18827 3.37962 10.2235 3.10222C10.605 3 11.07 3 12 3C12.93 3 13.395 3 13.7765 3.10222C14.8117 3.37962 15.6204 4.18827 15.8978 5.22354C16 5.60504 16 6.07003 16 7V21M5.2 21H18.8C19.9201 21 20.4802 21 20.908 20.782C21.2843 20.5903 21.5903 20.2843 21.782 19.908C22 19.4802 22 18.9201 22 17.8V10.2C22 9.07989 22 8.51984 21.782 8.09202C21.5903 7.71569 21.2843 7.40973 20.908 7.21799C20.4802 7 19.9201 7 18.8 7H5.2C4.07989 7 3.51984 7 3.09202 7.21799C2.71569 7.40973 2.40973 7.71569 2.21799 8.09202C2 8.51984 2 9.07989 2 10.2V17.8C2 18.9201 2 19.4802 2.21799 19.908C2.40973 20.2843 2.71569 20.5903 3.09202 20.782C3.51984 21 4.0799 21 5.2 21Z"
              stroke="#009966"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="mt-3 text-xl text-gray-900">Hiring Preferences</p>
        </div>

        <p className="-mt-2 text-lg text-gray-500">
          Set defaults for job postings and contracts
        </p>
      </div>

      {/* Allowed Contract Types (boxed toggles) */}
      <div className="mb-4 mt-8">
        <p className="text-lg text-gray-900">Allowed Contract Types</p>

        <div className="flex gap-x-3">
          <Toggle
            variant="boxed"
            label="Hourly Contracts"
            checked={prefs.hourlyContracts}
            onChange={(v) => setPrefs((p) => ({ ...p, hourlyContracts: v }))}
          />

          <Toggle
            variant="boxed"
            label="Fixed-Price Contracts"
            checked={prefs.fixedPriceContracts}
            onChange={(v) =>
              setPrefs((p) => ({ ...p, fixedPriceContracts: v }))
            }
          />
        </div>
      </div>

      {/* NDA Card (plain toggle) */}
      <PreferenceCard
        title="NDA Required by Default"
        description="Automatically require NDAs for new contracts"
        enabled={prefs.ndaRequired}
        onToggle={(v) => setPrefs((p) => ({ ...p, ndaRequired: v }))}
      />

      {/* IP Card (plain toggle) */}
      <PreferenceCard
        title="IP Rights Transfer by Default"
        description="Transfer intellectual property rights to client"
        enabled={prefs.ipTransfer}
        onToggle={(v) => setPrefs((p) => ({ ...p, ipTransfer: v }))}
      />

      {/* Screening Questions */}
      <div className="mb-4">
        <p className="text-lg text-gray-900">
          Screening Question Templates
        </p>

        <textarea
          value={prefs.screeningQuestions}
          onChange={(e) =>
            setPrefs((p) => ({ ...p, screeningQuestions: e.target.value }))
          }
          placeholder="Enter default questions for proposals..."
          className="h-24 w-full resize-none rounded-lg border border-gray-200 p-3 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
        />
      </div>

      {/* Country / Timezone */}
      <div className="mb-4">
        <p className="text-lg text-gray-900">Country/Timezone Preferences</p>

        <div className="relative">
          <select
            value={prefs.countryTimezone}
            onChange={(e) =>
              setPrefs((p) => ({
                ...p,
                countryTimezone:
                  e.target.value as HiringPrefsState["countryTimezone"],
              }))
            }
            className="peer w-full appearance-none rounded-lg border border-gray-200 bg-[#F3F3F5] p-3 pr-10 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          >
            <option value="">No preference</option>
            <option value="same-country">Same country</option>
            <option value="same-timezone">Same timezone</option>
          </select>

          {/* Chevron (rotates only while focused, returns after selection) */}
          <svg
            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600 transition-transform peer-focus:rotate-180"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div className="bg-gray-200 h-0.5 w-full mt-4 mb-4"/>

      {/* Save Button */}
      <div className="flex justify-start">
        <p
          className="rounded-xl bg-[#10B981] px-5 py-2.5 text-lg font-medium text-white hover:bg-green-700"
          onClick={() => console.log("Saved preferences:", prefs)}
        >
          Save Preferences
        </p>
      </div>
    </div>
  );
}

/* ================= TOGGLE (2 variants) ================= */

function Toggle({
  checked,
  onChange,
  label,
  variant = "plain",
}: ToggleProps): React.ReactElement {
  const switchEl = (
    <p
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`
        relative inline-flex h-5 w-9 items-center rounded-full border-1 transition-colors
        ${checked ? "bg-[#10B981] border-[#10B981]" : "bg-[#F3F3F5] border-gray-300"}
      `}
    >
      <span
        className={`
          inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform
          ${checked ? "translate-x-4" : "translate-x-0"}
        `}
      />
    </p>
  );

  // With border wrapper
  if (variant === "boxed") {
    return (
      <div className="flex items-center pr-3 pl-3 pt-[14px] gap-x-3 rounded-2xl border border-gray-300">
        {switchEl}
        {label ? <p className="text-lg text-gray-700">{label}</p> : null}
      </div>
    );
  }

  // Without border wrapper
  return (
    <div className="flex items-center gap-3">
      {switchEl}
      {label ? <span className="text-sm text-gray-700">{label}</span> : null}
    </div>
  );
}

/* ================= CARD ================= */

function PreferenceCard({
  title,
  description,
  enabled,
  onToggle,
}: PreferenceCardProps): React.ReactElement {
  return (
    <div
      className={`
        mb-4 rounded-2xl border pt-2 transition-colors
        ${enabled ? "bg-green-50 border-gray-200" : "bg-white border-gray-200"}
      `}
    >
      <div className="flex items-center justify-between px-4">
        <div>
          <div className="mt-2">
            <p className="text-lg text-gray-900">{title}</p>
          </div>
          <div className="-mt-3">
            <p className="text-lg text-gray-500">{description}</p>
          </div>
        </div>
        <div className="mt-2">
          <Toggle variant="plain" checked={enabled} onChange={onToggle}/>
        </div>
      </div>
    </div>
  );
}
