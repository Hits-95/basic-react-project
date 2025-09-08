import { useCallback, useEffect, useState } from "react";

export default function PasswordGenerator() {
  // ------------------ State Management ------------------

  // Password length (default = 17)
  const [length, setLength] = useState(17);

  // Toggle: include numbers in password
  const [includeNumbers, setIncludeNumbers] = useState(false);

  // Toggle: include alphabetic characters
  const [includeChars, setIncludeChars] = useState(true);

  // Toggle: include special characters (!@#$%^...)
  const [includeSpecialChar, setIncludeSpecialChar] = useState(false);

  // The generated password string
  const [password, setPassword] = useState("");


  // ------------------ Password Generation ------------------
  /**
   * Generates a random password based on:
   * - selected length
   * - whether numbers, characters, and/or special chars are included
   *
   * useCallback ensures this function is memoized and
   * only recreated when dependencies change (optimization).
   */
  const generatePassword = useCallback(() => {
    let chars = "";

    if (includeNumbers) chars += "0123456789";
    if (includeChars) chars += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeSpecialChar) chars += "!@#$%^&*()";

    // Fallback in case no option is selected
    if (chars === "") chars = "abcdefghijklmnopqrstuvwxyz";

    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(pass);
  }, [length, includeChars, includeNumbers, includeSpecialChar]);


  // ------------------ Auto-generate on state change ------------------
  /**
   * useEffect runs `generatePassword()` whenever
   * length, includeNumbers, includeChars, or includeSpecialChar changes.
   * This ensures password updates automatically without pressing a button.
   */
  useEffect(() => {
    generatePassword();
  }, [length, includeChars, includeNumbers, includeSpecialChar, generatePassword]);


  // ------------------ Clipboard Copy ------------------
  /**
   * Copies current password to clipboard.
   * Uses browser Clipboard API.
   */
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied!");
  };


  // ------------------ JSX (UI Rendering) ------------------
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-[400px] text-center">
        {/* Title */}
        <h1 className="text-white text-xl font-semibold mb-4">
          Password generator
        </h1>

        {/* Password Input + Copy Button */}
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Password"
            value={password}
            readOnly
            className="flex-1 px-3 py-2 rounded-l-lg outline-none bg-white text-gray-800"
          />
          <button
            onClick={copyToClipboard}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg"
          >
            copy
          </button>
        </div>

        {/* Length Slider */}
        <div className="flex items-center gap-2 mb-4">
          <input
            type="range"
            min="6"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
          <span className="text-orange-500 font-semibold">
            Length: {length}
          </span>
        </div>

        {/* Options Checkboxes */}
        <div className="flex justify-center gap-6">
          <label className="flex items-center gap-1 text-orange-500 font-medium">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              className="w-4 h-4"
            />
            Numbers
          </label>
          <label className="flex items-center gap-1 text-orange-500 font-medium">
            <input
              type="checkbox"
              checked={includeChars}
              onChange={() => setIncludeChars(!includeChars)}
              className="w-4 h-4"
            />
            Characters
          </label>
          <label className="flex items-center gap-1 text-orange-500 font-medium">
            <input
              type="checkbox"
              checked={includeSpecialChar}
              onChange={() => setIncludeSpecialChar(!includeSpecialChar)}
              className="w-4 h-4"
            />
            Special
          </label>
        </div>
      </div>
    </div>
  );
}
    