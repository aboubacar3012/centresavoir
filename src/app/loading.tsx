export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-950 z-50">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-green-500 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 rounded-full border-t-8 border-b-8 border-emerald-300 animate-spin animation-delay-150"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 rounded-full border-t-4 border-b-4 border-green-600 animate-spin animation-delay-300"></div>
        </div>
      </div>
    </div>
  );
}