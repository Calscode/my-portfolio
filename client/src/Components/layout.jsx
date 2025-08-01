export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      {children}
    </div>
  );
}