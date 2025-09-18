import { useState, useCallback, useEffect, useRef } from 'react';
import './pass.css';
function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(6);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) {
      str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (includeNumbers) {
      str += '0123456789';
    }
    if (includeSymbols) {
      str += '!@#$%^&*()_+[]{}|;:,.<>?';
    }
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str[randomIndex];
    }
    setPassword(pass);
  }, [length, includeUppercase, includeNumbers, includeSymbols]);

  const copypassword = useCallback(() => {
    window.navigator.clipboard.writeText(password)
  }, [password]);
  useEffect(() => {
    generatePassword();
  }, [length, includeUppercase, includeNumbers, includeSymbols])
    ;
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center bg-gray-900 p-4 rounded w-full mb-6 wave-gradient-glow">
          {"Password Generator".split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </h1>
        <div className="input-wrapper flex items-center mb-6 w-full">
          <input
            className="input flex-1 p-2 border rounded-l-lg focus:outline-none"
            name="text"
            placeholder=""
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
          />

        </div>
        <button
          onClick={copypassword}
          className="z-40 ml-2 bg-blue-500 text-white p-4 rounded-2xl hover:bg-blue-600">
          Copy
        </button>
        <div className="mb-4 w-full flex flex-col items-center">
          <input
            type="range"
            min={6}
            max={16}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full"
          />
          <label className="mt-2">Length: {length}</label>
        </div>
        <div className="flex flex-col items-start w-full space-y-2 mb-4 ">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              className="mr-2"
            />
            Include Uppercase
          </label>
          <label className="flex items-center ">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers((prev) => !prev)}
              className="mr-2"
            />
            Include Numbers
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols((prev) => !prev)}
              className="mr-2"
            />
            Include Symbols
          </label>
        </div>
      </div>
    </div>
  )
}

export default PasswordGenerator
