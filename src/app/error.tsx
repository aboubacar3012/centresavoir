"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Vous pourriez envoyer l'erreur à un service d'analyse ou de journalisation
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-3">Un problème est survenu</h1>
        <p className="text-gray-600 mb-6">
          Nous sommes désolés, mais il semble qu'une erreur se soit produite. Notre équipe a été informée de ce problème.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors"
          >
            Réessayer
          </button>
          
          <Link href="/" className="px-6 py-3 border border-gray-300 hover:bg-gray-100 text-gray-700 rounded-lg font-medium transition-colors">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}