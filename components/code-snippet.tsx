"use client";

import React, { useState, useEffect } from 'react';

type CodeSnippetProps = {
  code: string;
}

type Highlight = {
  word: string;
  className: string;
}

const staticActivitiesCodeSnippet: string = `const activities = {
  A: 'drinking coffee',
  B: 'walking my dog',
  C: 'playing video games',
  D: 'scuba diving'
};`;

const HighlightedCode = ({ code }: CodeSnippetProps) => {
  const highlights: Highlight[] = [
    { word: 'activities', className: 'text-rose-600 dark:text-pink-400' },
    { word: "'drinking coffee'", className: 'text-amber-500 dark:text-yellow-200' },
    { word: "'walking my dog'", className: 'text-amber-500 dark:text-yellow-200' },
    { word: "'playing video games'", className: 'text-amber-500 dark:text-yellow-200' },
    { word: "'scuba diving'", className: 'text-amber-500 dark:text-yellow-200' },
  ];

  // Replace each word with a span tag containing the specified class
  // To do: remove index
  let highlightedCode: (string | JSX.Element)[] = [code];

  highlights.forEach(({ word, className }) => {
    const regex = new RegExp(word, 'g');

    highlightedCode = highlightedCode.flatMap(part => {
      if (typeof part === 'string') {
        return part
          .split(regex)
          .flatMap((subPart, index, array) => {
            if (index < array.length - 1) {
              return [
                subPart,
                <React.Fragment key={JSON.stringify(array)}>
                  <span className={className}>{word}</span>
                </React.Fragment>
              ];
            }
            return subPart;
          });
      }
      return part;
    });
  });

  // Render each element of highlightedCode, otherwise it will print [object Object]
  // To do: replace index
  return (
    <pre>
      {highlightedCode.map((part, index) =>
        typeof part === 'string' ? (
          part
        ) : (
          <React.Fragment key={index}>{part}</React.Fragment>
        )
      )}
    </pre>
  );
};

const CodeSnippet= () => {
  const [copied, setCopied] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const copyCodeToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(staticActivitiesCodeSnippet);
      setCopied(true);
    } catch (error) {
      console.error('Failed to copy code to clipboard:', error);
    } finally {
      const id = setTimeout(() => setCopied(false), 1000);
      setTimeoutId(id);
    }
  };

  useEffect(() => {
    return () => { if (timeoutId) clearTimeout(timeoutId) };
  }, [timeoutId]);

  return (
    <div className="bg-gray-200 p-4 rounded-md relative mt-5 mr-10 ml-10 dark:bg-gray-800 ">
      <pre className="text-indigo-400 whitespace-pre-wrap text-left text-sm dark:text-teal-300">
        <HighlightedCode code={staticActivitiesCodeSnippet} />
      </pre>
      <button
        className="absolute top-2 right-2 px-3 py-1 text-sm bg-purple-400 text-gray-300 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700  dark:bg-emerald-200/80 dark:text-gray-600 dark:hover:bg-emerald-200 dark:focus:bg-emerald-200 hidden sm:inline-block"
        onClick={copyCodeToClipboard}
      >
        {copied ? 'Copied!' : 'Copy code'}
      </button>
    </div>
  );
};

export default CodeSnippet;
