import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-9xl font-bold text-emerald-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Page introuvable</h2>
        
        <p className="text-gray-600 mb-8">
          Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        
        <div className="flex justify-center">
          <Link 
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-medium transition-colors hover:from-green-700 hover:to-emerald-700"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}